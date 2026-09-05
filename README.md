# Design to Ship — Build with AI workshop

A beginner-friendly workshop about building with an AI coding agent: define the product, agree the specification and design, plan small tasks, implement and review, then prepare a release.

The human decides what to build; the agent executes within scope, verifies, and reports.

Source repository: [Jorybraun/design-to-ship-workshop](https://github.com/Jorybraun/design-to-ship-workshop). A public workshop deployment has not been created.

## Start here

Open [Phase 1](phase-1-idea/index.html) in a browser after cloning or downloading the repository. Keep the folder structure intact: lesson pages share CSS and assets from `website/`. No build or dependency installation is needed for the lessons. Google Fonts requires a network connection; system fonts are the fallback.

| Phase | Lesson | Supporting materials |
| --- | --- | --- |
| 1 | [Idea](phase-1-idea/index.html) | Guided brief discovery |
| 2 | [Specification](phase-2-spec/index.html) | Draft, challenge, revise, approve |
| 3 | [Design foundations](phase-3-prototype/index.html) | Inspect assets, create a specimen, review a prototype |
| 4 | [Planning + Linear](phase-4-plan/index.html) | Architecture, tickets, MCP and the [Devin feature map](phase-4-plan/index.html#features) |
| 5 | [Context, handoff + build](phase-5-build/index.html) | Context/document drift, cloud handoff, one-ticket review, optional stacked PRs |
| 6 | [Ship + handoff](phase-6-ship/index.html) | Repository publication, release package, deployment approval, smoke tests and maintenance |

Each phase includes `LESSON.md` for the facilitator and `PROMPT.md` for copyable instructions. Example specifications, plans, handoffs and release records are **illustrative, not approved application artifacts or evidence of completed work**.

The [skills companion](skills/index.html) explains reusable methods and links to Matt Pocock's sources at a pinned revision. The project-local [design-system-foundations skill](.devin/skills/design-system-foundations/SKILL.md) is workshop-authored. Inspect it before invocation; downloading this repository is not permission to run its write steps or install external skills.

## Reference website and earlier drafts

`website/` is the original Vite/React teaching reference, not the fictional DesignCraft application. Its older examples and [WORKSHOP.md](WORKSHOP.md) predate the phase lessons. Use Phases 1–6 as the current teaching sequence; earlier examples are not implementation instructions or approval.

[Agent Prompting Foundations](agent-prompting-foundations.md) provides background reading and source citations.

Known reference-site limitation: its older navigation and prompt-tab layout overflow at 375px. The standalone lesson pages have their own responsive checks. Resolve the reference layout and unified site packaging before treating the whole workshop as deployment-ready.

To run the separate React reference website, from `website/`:

```sh
npm ci
npm run dev
```

To check that reference project, run `npm run lint` and `npm run build` from the same directory. Its build does **not** bundle the standalone lesson folders. Publishing the entire workshop requires a separately reviewed static package; do not upload the repository root or assume `website/dist/` includes the lessons.

## Maintainer verification

From the repository root:

```sh
python3 phase-2-spec/test_materials.py
```

This Python-standard-library maintenance suite checks mirrored lesson content and links. It is not a participant activity and does not test a built conference application. Browser checks at 1440px and 375px are also required; see [AGENTS.md](AGENTS.md).

## Publication and access boundaries

- No conference application, active registration service, public workshop deployment, or completed cloud session is claimed by these materials.
- Local browser previews are not public hosted deployments.
- Repository publication, cloud launch, deployment, tracker updates and merges are separate approvals. Do not execute example prompts without supplying and approving their actual targets.
- Dependencies, build output, caches, local research output, environment files and local agent configuration are excluded from this repository. Never commit credentials.
- The public repository does not by itself grant a license to reuse all materials. No new license has been selected for workshop-authored material. Linked third-party sources and included third-party assets retain their respective rights; brand marks are not licensed by this README.
