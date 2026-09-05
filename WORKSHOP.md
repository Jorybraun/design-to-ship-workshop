# Build with AI: Live Project with Devin

> Earlier workshop draft. The current teaching sequence is linked from [README.md](README.md) and lives in the six phase folders. The technology, registration and deployment examples below predate those lessons; do not treat them as current requirements or execution approval.

> 2-3 hours. Non-dev / beginner friendly. We build one real website live, from idea to deployed URL, and introduce each core concept (spec writing, prompt anatomy, design first, MCP tools, Linear tickets, reviewing code, and persistent knowledge) at the moment the project needs it.
>
> Dedicated Prompting Guide: See [Agent Prompting Foundations](agent-prompting-foundations.md) for the complete theoretical and empirical breakdown.

References: https://uae-workshops.vercel.app, https://github.com/Jorybraun/agentic-engineering-book, https://docs.devin.ai

---

## The project

**"Meetup" — a site for a local community event.** Landing page, schedule, speakers, RSVP form. Small enough to finish, rich enough to need data, UI, a form, and a design.

Swap in anything with the same shape (landing + list page + form): a bakery, a portfolio, a product launch, a club.

Stack: Vite + React + TypeScript + Tailwind (Devin's default scaffold). Hosted on `devinapps.com`.

**Format options**
- **Watch-along:** facilitator builds, attendees observe and ask. Lowest setup risk.
- **Follow-along:** attendees build the same project in their own repo, one step behind. Needs Devin + GitHub accounts set up before the session.
- **Hybrid (recommended):** facilitator builds through Step 3, then attendees fork off and build their own slices in Step 5.

---

## Prep

- Devin account with GitHub connected; Linear connected (https://app.devin.ai/settings/connections/linear)
- Empty GitHub repo `meetup-site` created (or let Devin create it)
- Linear team "Meetup" created, empty
- Optional: Figma MCP enabled, a simple Figma frame for the hero
- A finished version deployed so you can show the end state in the first minute
- Prompts below pasted into a scratch doc
- Backup: if live Devin is slow, have a pre-recorded session or a finished repo to fall back to

---

## Step 0: Show the finished thing, then the mental model

Open the deployed reference site. "In ~2 hours we're going to build this, and I'm not going to write code."

Say once, then refer back all session:
- **Agent** = model + machine + loop. Devin has a shell, IDE, browser; it plans, writes, tests, opens PRs.
- **Four pillars**: prompt (what you ask), model, context (what it knows), tools (what it can touch). Every problem today is one of these.
- You are PM + reviewer. Devin is the engineer. You decide; it executes.

---

## Step 1: Idea -> Spec (concept: specs are the source code now)

Write `SPEC.md` live with the room, half a page:

```
# Meetup site

Pages: / (landing), /schedule, /speakers, /rsvp
Landing: hero (name, date, city, CTA -> /rsvp), 3 highlights, sponsor logos
Schedule: list of talks from data/schedule.json (time, title, speaker, room), filter by track
Speakers: grid from data/speakers.json (name, title, photo, bio)
RSVP: name, email, ticket type (free/pro); client validation; submit to Formspree; inline success
Done when: every route renders, mobile + desktop screenshots, no console errors, lint + tests pass
```

Point: a vague idea becomes a checkable list. Devin references this file in every prompt.

---

## Step 2: Design first (concept: agents execute, they don't invent taste)

Write `DESIGN.md` live:

```
References: https://linear.app (spacing, restraint), https://vercel.com/events (event layout)
Palette: bg #0B0B0F, surface #15151C, text #F5F5F7, accent #7C5CFF
Fonts: Inter (body), Space Grotesk (headings)
Tone: confident, minimal, lots of whitespace
Components: Button, Card, Badge, SectionHeader, Nav, Footer
```

Talk while writing: "make it look nice" fails because the agent has no target. References + tokens + component list is the minimum.

If you have Figma: show the hero frame now, mention Devin can read it via the Figma MCP. Set up the MCP callout for Step 4.

---

## Step 3: Scaffold and deploy (concept: prompt anatomy)

Before pasting the prompt, show the anatomy on a slide: **context, task, references, constraints, verification, deliverable.** Then paste:

```
Create a GitHub repo meetup-site. Scaffold Vite + React + TypeScript + Tailwind + React Router.
Commit the attached SPEC.md and DESIGN.md.
Configure tailwind.config.ts with the palette and fonts from DESIGN.md.
Build Nav, Footer, Button, Card, Badge, SectionHeader in src/components/ui.
Add a /styleguide route that renders all tokens and components.
Constraints: no other pages yet, no extra dependencies beyond router + tailwind.
Run the dev server, screenshot /styleguide at 1440px and 375px, confirm no console errors.
Open a PR with screenshots in the description.
```

While Devin works (~10 min), narrate the session UI: plan/todo list, shell, IDE, browser tab. Show Side Chat. Point out it's testing its own work.

Merge the PR, then:

```
Deploy main as a static site and give me the public URL.
```

Approve the deploy prompt. Everyone can now open the URL. First win.

Docs: https://docs.devin.ai/essential-guidelines/instructing-devin-effectively

---

## Step 4: First feature with an MCP (concept: what an MCP is)

Explain in 2 minutes: **Model Context Protocol** = a standard plug so tools (Figma, Linear, Postgres, Sentry, your API) can expose functions the agent calls. USB-C for agents. Settings > Connections > MCP servers. Native integrations (GitHub, Linear, Slack) need no extra MCP.

Then use one:

```
Build the landing page (/) per SPEC.md.
Use the Figma MCP to read the "Hero" frame in <figma url> for layout and copy.
Use the components in src/components/ui. Use placeholder sponsor logos (6 grey boxes).
Screenshot at 1440px and 375px. Open a PR. Don't touch other routes.
```

No Figma? Replace the MCP line with "Layout like the hero on https://vercel.com/events" and demo the Linear MCP in Step 5 instead.

Show the MCP tool calls in the session timeline. Security aside: org-shared connections use a service account; databases get read-only creds.

Docs: https://docs.devin.ai/work-with-devin/mcp

---

## Step 5: Break the rest into tickets (concept: Linear, tickets are prompts, parallelism)

Open Linear. Create three tickets live using this template:

```
Title: <verb + object>
Context: meetup-site repo, see SPEC.md and DESIGN.md
Task: <specific, decided>
References: <files / URLs>
Constraints: <don't touch X>
Done when: <exact checks>
```

- **Schedule page**: data/schedule.json with 8 talks, /schedule list grouped by time, track filter via Badge. Done when: filter works, screenshots, tests for the grouping function.
- **Speakers page**: data/speakers.json with 6 speakers, /speakers grid of Cards with placeholder avatars. Done when: renders, screenshots.
- **RSVP form**: /rsvp with name, email, ticket type; client validation; POST to Formspree URL in `FORMSPREE_URL` secret; inline success. Done when: validation tested with Vitest, screenshots of empty / error / success.

Show the three triggers: **assign to Devin**, **`!implement` label**, **@mention in a comment**. Use a different one on each ticket.

Three sessions now run **in parallel**. Say the line: "this is the whole point of agents. You're not blocked on one keyboard."

Show Devin reporting back inside Linear: activity feed, synced plan, PR link.

**Hybrid mode:** attendees now create their own tickets for their own project and assign them to Devin.

Docs: https://docs.devin.ai/integrations/linear

---

## Step 6: Review and merge (concept: reviewing agent code, Devin Review)

As PRs land, open them in Devin Review (`app.devin.ai/review`, or swap `github.com` -> `devinreview.com` in the URL).

Walk one PR properly:
1. Read the description first; it's written for you.
2. Does it do what "Done when" says, and nothing more?
3. Look at the screenshots / recording before the diff.
4. Read every "severe" bug-catcher flag.
5. Ask the chat something: "What happens if schedule.json is empty?"
6. Leave a real review comment ("show 'No talks yet' for an empty list"). Watch Devin's **auto-fix** pick it up and push.

Merge all three. Redeploy. Reload the URL: the site is real.

Docs: https://docs.devin.ai/work-with-devin/devin-review

---

## Step 7: One bigger change as a stack (concept: stacked PRs)

Now a change that touches data + logic + UI:

```
Add a "favourites" feature: users can star talks on /schedule and see them on a /my-schedule page.
Persist in localStorage. Deliver as a stack of 3 PRs: storage hook -> star toggle on schedule -> /my-schedule page.
Each PR must pass CI on its own. Screenshots on each.
```

While it builds, explain: a **stack** is one piece of work as an ordered series of PRs, each diffed against the one below, merged bottom-up atomically. Reviewers read three small diffs instead of one big one. Devin keeps every layer green (conflicts, CI) and retargets as layers merge. GitHub.com only.

Show the stack in the session and on GitHub. Open the top PR in Devin Review, note per-layer readiness. Merge the stack.

Docs: https://docs.devin.ai/work-with-devin/stacked-prs

---

## Step 8: Make the next session better (concept: teaching Devin)

Point out: Devin has probably already suggested Knowledge or a Skill in the session timeline ("Create PR" button). Accept one live.

Then:

```
Write an AGENTS.md for this repo: how to install, run, test, lint; folder layout; the design rules from DESIGN.md.
Create .agents/skills/test-before-pr/SKILL.md that starts the dev server, screenshots every changed route at 1440px and 375px, and runs lint + tests.
Open a PR.
```

Two-minute map of the four mechanisms:

| Mechanism | Where | Use for |
|-----------|-------|---------|
| AGENTS.md | repo root | commands, layout, rules for every session |
| Skills (`SKILL.md`) | `.agents/skills/` in repo | reusable step-by-step procedures |
| Knowledge | Devin org settings | org-wide conventions |
| Playbooks (`!macro`) | Devin org, sync to Linear labels | reusable prompts per task type |

If a session went badly today, use it: "Analyze session <link>. Where did it waste time? Rewrite my prompt." Real post-mortem beats a slide.

Docs: https://docs.devin.ai/onboard-devin/agents-md, https://docs.devin.ai/product-guides/skills

---

## Step 9: Wrap

Reload the live site one last time. Recap on the project:

1. Spec + design first (Steps 1-2): you decide, Devin executes.
2. Prompt anatomy (Step 3): context, task, references, constraints, verification, deliverable.
3. MCP (Step 4): more hands for the agent.
4. Tickets are prompts, run them in parallel (Step 5).
5. Review like it matters; let auto-fix close the loop (Step 6).
6. Big change = stack (Step 7).
7. Teach it so tomorrow is cheaper (Step 8).

Ask each person: one task you'll hand to Devin this week.

Leave-behinds: this file, the repo, https://docs.devin.ai, https://devin.ai/agents101.

---

## If time is short

Protect Steps 1-6 (spec, design, scaffold, deploy, one feature, tickets, review). Drop Step 7 (stack) first, then Step 8 (teaching) to a two-minute mention.

## If time is long / Q&A pointers

- Ask Devin / DeepWiki: index a repo, get docs and diagrams, ask questions. https://docs.devin.ai/work-with-devin/ask-devin
- Managed Devins: "split into packages and run a session for each." https://docs.devin.ai/work-with-devin/advanced-capabilities
- Devin CLI + `/handoff` to cloud. https://docs.devin.ai/cli
- Slack triage, automations, scheduled sessions. https://docs.devin.ai/product-guides/automations
- Environment blueprints, Secrets, browser auth. https://docs.devin.ai/onboard-devin/environment
- Security Swarm, Data Analyst agent. https://docs.devin.ai/work-with-devin/security-swarm

## Live-demo troubleshooting

| Symptom | Pillar | Fix on stage |
|---------|--------|--------------|
| Builds the wrong thing | Prompt | Show the missing decision / reference, re-prompt |
| Can't run the app | Context | Have Devin add commands to AGENTS.md |
| MCP call fails | Tools | Check connection / auth in Settings; fall back to reference URL |
| Ugly output | Context | Point at DESIGN.md, add a reference screenshot |
| Loops, burns ACUs | Prompt | Kill it, run the post-mortem prompt, restart tighter |
| Two sessions conflict | Process | Slice by route/component; use a stack for dependent work |
| Devin is slow / down | — | Switch to the finished repo and walk the PR history |
