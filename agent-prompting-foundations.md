# Agent Prompting Foundations

> A cited brief for the workshop. Why briefing a coding agent is different from asking a chatbot, what the six-part prompt is for, which "prompt engineering" habits carry over and which do not, and what the evidence actually says.

Background reading for the workshop; use [README.md](README.md) for the current phase sequence. Source citations appear below. Local research-output files are not distributed with the public repository.

---

## 1. Chat prompt vs. agent brief

A chatbot answers and waits. An agent "can read your files, run commands, make changes, and autonomously work through problems while you watch, redirect, or step away entirely" [1]. That changes what the prompt has to do.

Three things follow from the loop:

- **Errors compound.** Reliability for long-running agents comes down to containing "the potential for compounding errors"; each action carries implicit decisions, and conflicting decisions produce bad results [2]. A vague first sentence is not a bad answer you can re-ask; it is a wrong assumption the agent then builds on.
- **The agent stops when it *looks* done.** "Claude stops when the work looks done. Without a check it can run, 'looks done' is the only signal available, and you become the verification loop" [1]. OpenAI's own SWE-bench prompt calls insufficient testing "the NUMBER ONE failure mode on these types of tasks" [3].
- **Context is finite and degrades.** Performance drops as the window fills [1]; recall accuracy falls as token count rises ("context rot") [4]; models use information at the start and end of a long context better than the middle [5]. So what you put in the prompt, and what you leave in repo files, matters.

Devin's docs make the same point in one line: "be as specific as possible. Just as you would provide a detailed spec when asking a coworker to code something, you should do the same with Devin" [6]. The failure mode is not that the agent is dumb; it is that "even the smartest human won't be able to do their job effectively without the context of what they're being asked to do" [2].

---

## 2. The six-part brief and where it comes from

The workshop teaches one structure: **Context · Task · References · Constraints · Verification · Deliverable.** It is a compression of Devin's official guidance, which names four properties of a good prompt: helpful context, step-by-step instructions, clear success criteria, and references to existing patterns and code [6]. Anthropic's Claude Code guide gives the same shape as before/after tables: scope the task, provide verification criteria, point to example patterns, address root causes [1].

| Part | Devin docs [6][7] | Claude Code [1] | Why agents need it |
|---|---|---|---|
| Context | "Provides helpful context: specifies the repo and the broader purpose" | "Provide specific context in your prompts" | Anchors the domain before the first tool call [2] |
| Task | "Be opinionated and specific... make important decisions and judgment calls for Devin" | "Scope the task. Specify which file, what scenario" | Underspecified tasks are the single largest reason real GitHub issues were unsolvable (below, §4) |
| References | "Use authTemplate.rs as a reference"; link docs; Figma via MCP | "point to example patterns" | Agents pattern-complete; examples are "pictures worth a thousand words" [4] |
| Constraints | "Define clear scope, boundaries" | "mention constraints" | Actions carry implicit decisions; unconstrained actions diverge [2] |
| Verification | "Run npm test after each iteration"; "Don't: Make sure it works" | "Give Claude a way to verify its work" | Closes the loop so the agent, not you, catches mistakes [1][3] |
| Deliverable | "Open a PR"; screenshots in description | "commit with a descriptive message and open a PR" | Defines the stopping condition [1] |

**How it compares to chat-era frameworks.** CO-STAR (GovTech Singapore) is Context, Objective, Style, Tone, Audience, Response [8][9]. It is a good structure for *writing*: four of its six parts are about voice and audience. It has no slot for references to existing code, no constraints, and no verification. That is the gap between prompting a writer and briefing an engineer. Keep Context and Objective; replace Style/Tone/Audience with References/Constraints; add Verification.

---

## 3. What helps agents, what is folklore

| Habit | Evidence | Verdict for coding agents |
|---|---|---|
| **"You are an expert senior engineer"** (persona) | Across 162 personas, 4 model families and 2,410 questions, "adding personas in system prompts does not improve model performance"; per-persona effects were "largely random" [10] | Skip it. Spend the words on context. |
| **"Think step by step"** (chain-of-thought) | Meta-analysis of 100+ papers: CoT "gives strong performance benefits primarily on tasks involving math or logic, with much smaller gains on other types of tasks" [11]. OpenAI found an explicit planning instruction raised SWE-bench Verified by ~4% for a non-reasoning model [3] | Marginal. Modern agent harnesses already plan. A *plan-first* prompt ("propose a plan, wait for approval") is the useful version [1]. |
| **Few-shot examples** | Still "strongly advise[d]"; but curate "diverse, canonical examples" rather than a laundry list of edge cases [4] | Yes, as **references**: "use X.tsx as the template" is few-shot for code. |
| **Long system prompts / rule lists** | "If your CLAUDE.md is too long, Claude ignores half of it because important rules get lost in the noise" [1]; aim for "the smallest possible set of high-signal tokens" [4] | Short AGENTS.md. Persistent rules in the repo, task specifics in the prompt. |
| **Negative constraints** ("do not touch X") | Anthropic: "mention constraints" [1]; Devin: "define clear scope, boundaries" [6]. GPT-4.1 "is trained to follow instructions more closely and more literally"; "a single sentence firmly and unequivocally clarifying your desired behavior is almost always sufficient" [3] | Yes. Two or three, stated plainly. |
| **Verification criteria** | Reflexion: test feedback lifts HumanEval pass@1 from 80% to 91% [12]. Self-Debugging: execution feedback improves accuracy "by up to 12%" and matches models generating 10x more candidates [13] | The highest-leverage sentence in the prompt. Give a check the agent can run. |
| **Huge single prompt for the whole feature** | Frontier models' 50%-success time horizon was ~50 minutes of human-expert work (early 2025) [14]; the best agent completed 30% of realistic workplace tasks, with "long-horizon tasks... still beyond the reach" [15]; Devin: "if a task would take you three hours or less, Devin can most likely do it. For longer tasks, break them into smaller sessions" [16] | Slice. One route or component per session. |
| **Arguing with a stuck session** | "If you've corrected Claude more than twice on the same issue in one session, the context is cluttered with failed approaches... A clean session with a better prompt almost always outperforms a long session with accumulated corrections" [1] | Kill it, rewrite, restart. |
| **Visual reference for UI work** | Design2Code: given screenshots, multimodal models "mostly lag in recalling visual elements... and generating correct layout designs" [17]; Devin: "Devin can build from these but won't invent aesthetics on its own" [6] | Give the frame (Figma MCP) and demand a screenshot comparison. Text alone will not get you the layout. |

---

## 4. Failure modes → fixes

| Symptom | Root cause | Evidence | Fix in the prompt |
|---|---|---|---|
| Builds the wrong thing | Underspecified task | Annotators flagged **38.3%** of real SWE-bench GitHub issues as underspecified; 68.3% were filtered for underspecification, unfair tests, or other issues [18] | Decide before you prompt. Name route, data, interaction. |
| Generic or ugly UI | No visual target | [6][17] | Figma frame via MCP, or reference URL + tokens. Screenshot-and-compare. |
| "Done" but broken | No check to run | [1][3][12][13] | Exact commands, exact viewports, screenshots in PR. |
| Refactors things you didn't ask about | Unconstrained actions | [2] | "Do not modify X. No new dependencies." |
| Loops, burns budget | Task too large or context polluted | [1][14][15] | Slice smaller. Fresh session with a better prompt. |
| Forgets rules mid-session | Rules buried in a long prompt | [1][4][5] | Move stable rules to AGENTS.md / SKILL.md; keep the prompt for the task. |
| Guesses instead of reading | Nothing told it to look | OpenAI's agent prompt: "If you are not sure about file content... use your tools to read files... do NOT guess" [3] | "Read X first." Or an investigate-only prompt before the build prompt. |

---

## 5. Where things live: prompt vs. repo vs. org

Context engineering is "the natural progression of prompt engineering": what matters is the whole set of tokens the agent sees, not just the message you typed [4]. For a human briefing Devin that means three layers:

- **Repo files (AGENTS.md, SKILL.md, SPEC.md, DESIGN.md):** stable rules and commands, read every session. Keep them short [1][4].
- **The prompt:** this task's six parts. References point into the repo files rather than restating them.
- **Org knowledge / playbooks:** conventions shared across repos [6].

Devin's docs also recommend closing the loop from the other side: enable Devin Review with Auto-Fix so review comments and CI failures feed back to the agent without you in the middle [6][16].

---

## 6. One-slide summary

1. An agent loops; a chatbot answers. Errors compound, so the first sentence matters most [2].
2. Six parts, every time: Context, Task, References, Constraints, Verification, Deliverable [1][6].
3. Verification is the sentence that lets you walk away [1][12][13].
4. Drop personas and "think step by step"; add references and constraints [10][11].
5. Slice to under ~3 hours of human work per session [14][16].
6. Give visual targets for visual work; screenshots to compare against [6][17].
7. Stable rules in the repo, task in the prompt, and keep both short [1][4][5].

---

## Sources

1. Anthropic, "Best practices for Claude Code." https://www.anthropic.com/engineering/claude-code-best-practices
2. Walden Yan (Cognition), "Don't Build Multi-Agents," 12 Jun 2025. https://cognition.ai/blog/dont-build-multi-agents
3. OpenAI, "GPT-4.1 Prompting Guide" (Agentic Workflows; SWE-bench Verified sample prompt). https://cookbook.openai.com/examples/gpt4-1_prompting_guide
4. Anthropic, "Effective context engineering for AI agents," 29 Sep 2025. https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
5. Liu et al., "Lost in the Middle: How Language Models Use Long Contexts," TACL 2023. https://arxiv.org/abs/2307.03172
6. Cognition, "Instructing Devin Effectively." https://docs.devin.ai/essential-guidelines/instructing-devin-effectively
7. Cognition, "Good vs. Bad Instructions." https://docs.devin.ai/essential-guidelines/good-vs-bad-instructions
8. Sheila Teo, "How I Won Singapore's GPT-4 Prompt Engineering Competition," Towards Data Science. https://towardsdatascience.com/how-i-won-singapores-gpt-4-prompt-engineering-competition-34c195a93d41/
9. GovTech Singapore, "Mastering the art of prompt engineering with Empower." https://www.tech.gov.sg/technews/mastering-the-art-of-prompt-engineering-with-empower/
10. Zheng et al., "When 'A Helpful Assistant' Is Not Really Helpful: Personas in System Prompts Do Not Improve Performances of Large Language Models," Findings of EMNLP 2024. https://arxiv.org/abs/2311.10054
11. Sprague et al., "To CoT or not to CoT? Chain-of-thought helps mainly on math and symbolic reasoning," ICLR 2025. https://arxiv.org/abs/2409.12183
12. Shinn et al., "Reflexion: Language Agents with Verbal Reinforcement Learning," 2023. https://arxiv.org/abs/2303.11366
13. Chen et al., "Teaching Large Language Models to Self-Debug," 2023. https://arxiv.org/abs/2304.05128
14. Kwa et al. (METR), "Measuring AI Ability to Complete Long Software Tasks," NeurIPS 2025. https://arxiv.org/abs/2503.14499
15. Xu et al., "TheAgentCompany: Benchmarking LLM Agents on Consequential Real World Tasks," 2024. https://arxiv.org/abs/2412.14161
16. Cognition, "When to Use Devin." https://docs.devin.ai/essential-guidelines/when-to-use-devin
17. Si et al., "Design2Code: Benchmarking Multimodal Code Generation for Automated Front-End Engineering," NAACL 2025. https://arxiv.org/abs/2403.03163
18. OpenAI, "Introducing SWE-bench Verified," 13 Aug 2024. https://openai.com/index/introducing-swe-bench-verified/

## Open questions / limits

- Effect sizes in [12][13] are on function-level benchmarks (HumanEval, MBPP), not repo-scale agent tasks; the direction is well supported, the magnitude for Devin-style work is not measured here.
- [10] and [11] evaluate chat/QA settings, not agents. The verdicts in §3 are inferences from that evidence plus vendor guidance [1][3][4], not direct agent experiments.
- No verified primary source was found for CRISPE, RICE, or RTF as named frameworks, so they are not cited. CO-STAR stands in for the chat-era pattern.
- The 38.3% figure [18] is about GitHub issues written by humans for humans, used as a proxy for "prompts in the wild."
