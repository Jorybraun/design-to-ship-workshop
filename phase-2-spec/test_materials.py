from html.parser import HTMLParser
from pathlib import Path
import re
import unittest
from urllib.parse import unquote, urlsplit


ROOT = Path(__file__).resolve().parent.parent


class LessonPage(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.path = path
        self.ids = []
        self.references = []
        self.controls = []
        self.pre = {}
        self.active_pre = None
        self.feed(path.read_text())

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if "id" in attrs:
            self.ids.append(attrs["id"])
        for key in ("href", "src"):
            if key in attrs:
                self.references.append(attrs[key])
        for key in ("data-copy", "aria-describedby", "aria-labelledby"):
            self.controls.extend(attrs.get(key, "").split())
        if tag == "pre":
            self.active_pre = attrs.get("id")
            if self.active_pre:
                self.pre[self.active_pre] = ""

    def handle_endtag(self, tag):
        if tag == "pre":
            self.active_pre = None

    def handle_data(self, data):
        if self.active_pre:
            self.pre[self.active_pre] += data


class LessonMaterialsTests(unittest.TestCase):
    def setUp(self):
        self.pages = [LessonPage(ROOT / phase / "index.html") for phase in (
            "phase-1-idea", "phase-2-spec", "phase-3-prototype", "skills", "phase-4-plan", "phase-5-build", "phase-6-ship"
        )]

    def test_prompts_match_markdown_sources(self):
        for page, pre_id in zip(self.pages, ("discovery-prompt", "spec-prompt")):
            source = (page.path.parent / "PROMPT.md").read_text()
            prompt = source.split("```text\n", 1)[1].split("```", 1)[0].strip()
            self.assertEqual(page.pre[pre_id].strip(), prompt)

    def test_expected_outputs_match_markdown_sources(self):
        phase1 = (ROOT / "phase-1-idea" / "LESSON.md").read_text()
        example = phase1.split("```markdown\n", 1)[1].split("```", 1)[0].strip()
        self.assertEqual(self.pages[0].pre["example-brief"].strip(), example)
        spec = (ROOT / "phase-2-spec" / "SPEC.md").read_text().strip()
        self.assertEqual(self.pages[1].pre["expected-spec"].strip(), spec)

    def test_local_links_assets_and_accessible_references(self):
        for page in self.pages:
            self.assertEqual(len(page.ids), len(set(page.ids)), "Duplicate IDs")
            for control in page.controls:
                self.assertIn(control, page.ids)
            for reference in page.references:
                url = urlsplit(reference)
                if url.scheme or url.netloc:
                    continue
                target = (page.path.parent / unquote(url.path)).resolve() if url.path else page.path
                self.assertTrue(target.is_file(), str(target))
                if url.fragment:
                    target_page = page if target == page.path else LessonPage(target)
                    self.assertIn(unquote(url.fragment), target_page.ids)
            html = page.path.read_text()
            self.assertIn('name="viewport"', html)
            self.assertNotIn('type="module"', html)
            self.assertNotIn('/src/main.tsx', html)

    def test_phase3_prompts_and_design_match_sources(self):
        page = self.pages[2]
        source = (page.path.parent / "PROMPT.md").read_text()
        prompts = re.findall(r"```text\n(.*?)\n```", source, re.DOTALL)
        ids = ("connection-prompt", "foundations-prompt", "html-prompt", "figma-prompt", "review-prompt")
        self.assertEqual(len(prompts), len(ids))
        for pre_id, prompt in zip(ids, prompts):
            self.assertEqual(page.pre[pre_id].strip(), prompt.strip())
        design = (page.path.parent / "DESIGN.md").read_text().strip()
        self.assertEqual(page.pre["expected-design"].strip(), design)
        self.assertIn("Model Context Protocol", page.path.read_text())
        self.assertIn("No Figma connection required", page.path.read_text())

    def test_skills_chapter_sources_and_adaptation(self):
        page = self.pages[3]
        prompt = page.pre["review-prompt"]
        self.assertIn("workshop adaptation", prompt)
        self.assertIn("Do not edit files, publish issues, or implement anything.", prompt)
        upstream = [url for url in page.references if url.startswith("https://github.com/mattpocock/skills/")]
        self.assertGreaterEqual(len(upstream), 8)
        for url in upstream:
            self.assertIn("/blob/3cca18b368ae95cdbdebbff572ccafa662551015/", url)
        for lesson in self.pages[:3]:
            self.assertIn("../skills/index.html", lesson.references)

    def test_phase4_planning_sources_and_boundaries(self):
        page = self.pages[4]
        source = (page.path.parent / "PROMPT.md").read_text()
        prompts = re.findall(r"```text\n(.*?)\n```", source, re.DOTALL)
        ids = ("architecture-prompt", "tickets-prompt", "linear-prompt", "publish-prompt")
        self.assertEqual(len(prompts), len(ids))
        for pre_id, prompt in zip(ids, prompts):
            self.assertEqual(page.pre[pre_id].strip(), prompt.strip())
        plan = (page.path.parent / "PLAN.md").read_text().strip()
        self.assertEqual(page.pre["expected-plan"].strip(), plan)
        for feature in ("features", "walkthrough", "linear", "stacked-prs", "checklist"):
            self.assertIn(feature, page.ids)
        html = page.path.read_text()
        for term in ("Model Context Protocol", "GitHub.com", "/plan", "No Linear connection required"):
            self.assertIn(term, html)
        for previous in (self.pages[2], self.pages[3]):
            self.assertIn("../phase-4-plan/index.html", previous.references)
        self.assertIn("https://linear.app/docs/mcp", page.references)
        self.assertIn("https://docs.devin.ai/work-with-devin/stacked-prs", page.references)
        self.assertEqual(set(re.findall(r"\bAC(?:10|[1-9])\b", plan)), {f"AC{i}" for i in range(1, 11)})

    def test_phase5_handoff_sources_and_lesson_contract(self):
        page = self.pages[5]
        source = (page.path.parent / "PROMPT.md").read_text()
        prompts = re.findall(r"```text\n(.*?)\n```", source, re.DOTALL)
        ids = ("handoff-prompt", "intake-prompt", "build-prompt", "review-prompt", "reconcile-prompt", "stack-prompt")
        self.assertEqual(len(prompts), len(ids))
        for pre_id, prompt in zip(ids, prompts):
            self.assertEqual(page.pre[pre_id].strip(), prompt.strip())
        handoff = (page.path.parent / "HANDOFF.md").read_text().strip()
        self.assertEqual(page.pre["expected-handoff"].strip(), handoff)
        for section in ("walkthrough", "context", "handoffs", "cloud", "document-rot", "stacked-prs", "prompts", "checklist"):
            self.assertIn(section, page.ids)
        html = page.path.read_text()
        for command in ("/context", "/compact", "/handoff"):
            self.assertIn(command, html)
        for topic in ("context rot", "content rot", "document rot", "uncommitted", "untracked", "GitHub.com"):
            self.assertIn(topic.lower(), html.lower())
        for url in ("https://docs.devin.ai/cli/reference/commands", "https://docs.devin.ai/cli/handoff", "https://docs.devin.ai/work-with-devin/stacked-prs"):
            self.assertIn(url, page.references)
        self.assertIn("../phase-4-plan/index.html", page.references)
        self.assertIn("../phase-5-build/index.html", self.pages[4].references)

    def test_phase6_release_sources_and_lesson_contract(self):
        page = self.pages[6]
        source = (page.path.parent / "PROMPT.md").read_text()
        prompts = re.findall(r"```text\n(.*?)\n```", source, re.DOTALL)
        ids = ("release-prompt", "repository-prompt", "deploy-prompt", "smoke-prompt")
        self.assertEqual(len(prompts), len(ids))
        for pre_id, prompt in zip(ids, prompts):
            self.assertEqual(page.pre[pre_id].strip(), prompt.strip())
        release = (page.path.parent / "RELEASE.md").read_text().strip()
        self.assertEqual(page.pre["expected-release"].strip(), release)
        for section in ("walkthrough", "repository", "package", "deployment", "smoke", "handoff", "prompts", "checklist"):
            self.assertIn(section, page.ids)
        self.assertIn("https://docs.devin.ai/product-guides/deployment-capabilities", page.references)
        self.assertIn("../phase-5-build/index.html", page.references)
        self.assertIn("../phase-6-ship/index.html", self.pages[5].references)
        for term in ("devinapps.com", "secure mode", "rollback"):
            self.assertIn(term, page.path.read_text().lower())

    def test_public_repository_links_and_readme(self):
        url = "https://github.com/Jorybraun/design-to-ship-workshop"
        for page in self.pages:
            self.assertIn(url, page.references)
        readme = (ROOT / "README.md").read_text()
        self.assertIn(url, readme)
        for reference in re.findall(r"\]\(([^)]+)\)", readme):
            target = urlsplit(reference)
            if target.scheme or target.netloc:
                continue
            path = ROOT / unquote(target.path)
            self.assertTrue(path.is_file(), str(path))
            if target.fragment:
                self.assertIn(target.fragment, LessonPage(path).ids)

    def test_example_fixtures_are_consistent(self):
        spec = (ROOT / "phase-2-spec" / "SPEC.md").read_text()
        speakers = set(re.findall(r"^- (S\d+):", spec, re.MULTILINE))
        talks = re.findall(r"^- (T\d+) \| (\d\d:\d\d) \| ([^|]+) \| (S\d+) \| (Product|Engineering) \| ([AB])$", spec, re.MULTILINE)
        self.assertEqual(len(speakers), 6)
        self.assertEqual(len(talks), 8)
        self.assertEqual(len({talk[0] for talk in talks}), 8)
        self.assertTrue(all(talk[3] in speakers for talk in talks))
        self.assertEqual(sorted({talk[1] for talk in talks}), ["09:00", "10:00", "11:00", "13:00"])
        for track in ("Product", "Engineering"):
            self.assertEqual(sum(talk[4] == track for talk in talks), 4)


if __name__ == "__main__":
    unittest.main()
