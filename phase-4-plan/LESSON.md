# Phase 4: Reviewed inputs → architecture → tickets → optional Linear

## Purpose and boundary

Turn an approved specification and actual reviewed design into an inspectable technical approach and small end-to-end tickets. Approve the plan before any optional tracker publication. Stop before application code.

This folder is teaching material, not the conference application. `PLAN.md` is fictional and unapproved. The supplied Phase 2 specification and Phase 3 handoff do not prove that approved project artifacts, assets, a specimen, or a prototype exist. No app/assets, Linear issues, configuration changes, or Git writes are produced by authoring this lesson.

**Core path:** approved inputs → architecture proposal → human approval → ticket decomposition → human approval → scoped read-only Linear preflight, if connected → stop. **Optional extension:** exact-authorized issue publication → readback → stop. Ordinary sequential PRs are the later default; stacked PRs are an optional advanced demonstration.

## Prepare the room

- Bring absolute paths to the actual approved SPEC.md, reviewed DESIGN.md, shared assets, specimen, prototype, review evidence, and a separate authorized application directory. A Figma reference needs exact authorized URLs; visual frames alone do not prove runtime behavior.
- With only teaching examples, run the dry trial below. Missing actual specimen/assets blocks a real build; do not invent approval to keep the workshop moving.
- Use `/help` to inspect available CLI commands and `@` file mentions to attach actual context. `/plan` is read-only planning. `/normal` exits planning only after the relevant human approval; mode is not blanket authorization.
- Skills and grilling are methods; MCP supplies tool access. The skills chapter's `to-tickets` discussion is not proof that a command is installed. Do not install or invoke upstream tracker/ready-for-agent side effects for this exercise.

### Optional operator setup, not lesson-executed commands

A human operator may inspect connections with `devin mcp list`. If a connection is needed, these documented commands change local configuration or start authentication and require separate operator approval:

```sh
devin mcp add linear-workshop https://mcp.linear.app/mcp/readonly
devin mcp login linear-workshop
```

The default local configuration location is `.devin/mcp_config.local.json`. This lesson does not edit it or execute setup commands. Sign in through the supported user flow; never paste tokens, passwords, or authentication secrets into chat. On failure, stop and ask the human to reconnect; do not bypass access.

The read-only endpoint cannot publish. Publication requires separate explicit approval for a read-write connection to `https://mcp.linear.app/mcp`, plus appropriate CLI mode and access. Do not silently replace the read-only connection. Discover live server names, tools, and schemas rather than guessing them from examples.

Linear MCP is not the native Devin Linear integration. Creating an issue does not itself start Devin; native integrations or workspace automations may have separate triggers. Use no assignees or trigger labels, and establish a non-triggering target/status before any publication. If this cannot be established, do not publish.

## Facilitator-ready walkthrough

### 1. Establish actual inputs and authority

**Say:** “The plan consumes decisions and reviewed assets; it does not make our teaching examples approved.”

**Participant do:** enter `/plan`, attach the actual approved files with `@`, and identify actual assets/specimen/prototype and the separate project directory. In a dry trial, explicitly label every reference fictional and unapproved.

**Paste:** complete the input slots of PROMPT.md block 1 (`architecture-prompt`).

**Expected response:** inspected references with evidence or a focused missing-input question; no invented assets.

**Decision:** provide missing approved inputs, or choose a teaching-only discussion.

**Check / stop:** if the actual specimen or approval is missing, stop the real-project path. A draft handoff is not sufficient.

### 2. Compare the smallest technical approaches

**Say:** “A framework is not the outcome. Visitors need working routes, local interactions, and a site we can verify.”

**Participant do / paste:** run block 1 with complete real inputs, or discuss its questions without execution in the fictional trial.

**Expected response:** plain HTML versus reuse of an existing Vite setup only if inspection finds one; routes, data relationships, shared foundations, local RSVP privacy, accessibility, hosting/reload risk, verification, and explicit blockers.

**Decision:** answer one consequential question at a time. Ask how `/schedule` survives direct entry and reload on the proposed host; a successful client-side click is not enough.

**Check / stop:** require inspection evidence instead of guessed dependencies or commands. Stop in chat for explicit architecture approval; no files, dependencies, hosting configuration, or code are written.

### 3. Resolve the schedule ambiguity before readiness

**Say:** “A complete-looking spec can still hide a decision. Which empty message wins when Product is selected and no talks exist at all?”

**Participant do:** compare I2/AC4 in the actual spec with the example in `../skills/index.html`.

**Paste:** “Ask me which message takes precedence for an empty whole schedule with Product selected. Propose aligned I2/AC4 wording in chat; do not edit the spec.”

**Expected response:** a single product question, perhaps recommending whole-dataset precedence, clearly marked as a recommendation.

**Decision:** the human chooses the real behavior and approves the aligned requirement through the spec-review process. The skills chapter's example answer is not the participant's answer.

**Check / stop:** schedule ticket stays blocked until the decision and actual approved wording are available. Do not alter the workshop example or mark an unresolved schedule ticket ready.

### 4. Slice complete visitor behaviors

**Say:** “Each ticket should let a reviewer demonstrate something, not merely finish a technical layer.”

**Participant do / paste:** after explicit architecture approval, paste block 2 (`tickets-prompt`) with that exact version and real references.

**Expected response:** 4–5 tickets: runnable landing/shell, schedule, speakers, local demo RSVP, final cross-route checks. Each includes requirement IDs, behavior/acceptance, exclusions, dependencies, verification, and a PR slice. A DAG and AC1–AC10 coverage reveal gaps.

**Decision:** review granularity and blockers. Default to sequential PRs in Phase 5; independent behavior dependencies do not require parallel coding.

**Check / stop:** first-slice destination shells cannot count as completed visitor routes. Feature checks belong in feature tickets; T5 verifies integration. Approve the ticket draft explicitly in chat, then stop; no local draft files or tracker changes are authorized.

### 5. Preflight Linear with read-only tools

**Say:** “MCP exposes tools. It does not pick our workspace or authorize writes.”

**Participant do:** supply the exact configured server, workspace, team, and project. If multiple servers/targets match, choose explicitly. If no connection exists, pause for optional operator setup or end with the existing chat draft; do not create a fallback file.

**Paste:** block 3 (`linear-prompt`).

**Expected response:** live schema discovery, successful scoped target/status reads, narrowly relevant existing issues/duplicates, tool names actually used, and blockers. No broad workspace browsing.

**Decision:** resolve missing identifiers/access with the human, or stop. Do not paste secrets or broaden scope to work around failures.

**Check / stop:** no writes, notifications, assignment, configuration changes, or agent launch. Read access and a tool listing do not grant publication permission. The core lesson can end here.

### 6. Optional publication: review the exact batch first

**Say:** “Approving tickets is not approving remote writes. We must see exactly what will be created and where.”

**Participant do / paste:** only if publication is wanted, paste block 4 (`publish-prompt`) using the approved draft and preflight result.

**Expected response:** exact issue payloads, count, workspace/team/project/status, directed dependency edges, no assignees/labels/subscribers/triggers, and notification/automation caveats; then a pause.

**Decision:** explicitly confirm that exact batch and edges, or decline. Separately approve read-write connection access if needed; only then use `/normal` for the authorized operation. A mode change alone is not approval, and read-only tools cannot publish.

**Check / stop:** unresolved automation risks, changed payloads/targets, or potential duplicates require stopping for review. Never authorize “create whatever is needed.” No Git or application work is part of this approval.

### 7. Optional publication: reconcile, read back, stop

**Say:** “A timeout is not proof that nothing was created. Retrying can create duplicates.”

**Participant do:** watch the approved batch execute only after the exact confirmation and mode/access gates. Review narrowly scoped duplicate rechecks before creation.

**Paste, only if clarification is needed:** “If a write is uncertain or partial, stop before retrying. Report confirmed IDs and unknown outcomes; reconcile with scoped reads and wait for my direction.”

**Expected response:** readback of real issue IDs, links, properties, and dependency relations compared with the approved payload. Unsupported relation operations are blockers, not silently omitted dependencies.

**Decision:** on partial failure, choose how to reconcile the reported state; do not blindly rerun the batch. Any further write requires explicit direction within a reviewed scope.

**Check / stop:** no silent retries, assignees, completion-state changes, agent launch, code, commits, pushes, or deployment. Stop after the result report, even when every issue was created successfully.

## Teaching-only trial run: rehearse the decisions, not the writes

1. **Say / do:** “This is a fictional, unapproved exercise. We have no actual reviewed specimen or conference app.” Open the example SPEC.md, DESIGN.md, and this folder's PLAN.md as reading material.
2. **Paste:** “Discuss these teaching examples in chat only. Do not treat them as approved inputs, run MCP, write files, or implement anything. Identify the first real-build blocker and one consequential product question.”
3. **Expected:** actual reviewed assets/specimen are missing; the schedule empty-dataset precedence still needs a human decision. A correct agent pauses rather than inventing approval.
4. **Decision rehearsal:** pretend the fictional participant chooses whole-dataset precedence; label the answer hypothetical. Discuss the candidate HTML/existing-Vite tradeoff without claiming either exists or is selected.
5. **Check:** trace the proposed T1–T5 DAG and coverage table. Ask a participant to demonstrate verbally how AC7 would be checked without transmitting entries, and why AC1 needs host/direct-reload evidence.
6. **Stop:** no actual artifact approval, app/assets, MCP calls, Linear issues, configuration changes, tests, or Git writes. This is a script to run with participants, not a claim that a live trial or build passed.

## Workshop-wide Devin feature map

| Stage | Devin/tool feature to demonstrate | Method, boundary, or optionality |
| --- | --- | --- |
| Setup | `/help`, permission prompts | Review exact operation/scope; do not approve everything by habit. |
| Phase 1: idea | `@` file context and conversational questions | Focused discovery is a method, not automatic product approval. |
| Phase 2: spec | `/plan` read-only planning; skills when actually available | Draft → grill → revise → approve is a method. Workshop adaptations do not install upstream skills. |
| Phase 3: design | Browser preview/feedback; optional Figma MCP | Inspect actual foundations and specimen; browser access needs the appropriate running/openable artifact. Figma access is optional and separately scoped. |
| Phase 4: plan | Plan mode, optional Linear MCP, exposed task-dependency tools | End-to-end slicing is a method. Discover schemas; record a DAG in chat if relation writes are unavailable. No automatic tracker publication or agent start. |
| Phase 5: context, handoff + build | `/context`, `/compact`, optional `/handoff`; scoped edits, terminal checks, diff/PR review | Review a fresh-session handoff, verify received inputs, authorize one ticket, inspect evidence and reconcile document drift. Cloud launch/transfer and PR publication are separate approvals. |
| Deploy later | Terminal/cloud tools where available | Separate target/environment access and deployment approval; never infer credentials or production authorization. |
| Optional delegation | Subagents or cloud delegation where supported | Agree scope, access, cost, ownership, and review; availability is environment-dependent, not preinstalled automation. |
| Optional review workflow | Stacked PRs where supported | Separate demonstration; ordinary sequential PRs remain the core workshop path. |
| Continue later | Resume sessions and `AGENTS.md` project memory | Reattach actual approvals/artifacts; durable instructions help context but do not create approval or guarantee perfect recall. |

### Optional stacked-PR explanation — no Git actions

The current native Devin stacked-PR documentation is for **GitHub.com only**. In that workflow, the bottom PR targets main and each upper PR targets the preceding branch. Native stack merge lands the selected PR **and all open PRs below it atomically**. Before any future merge, inspect the affected PR count, CI, reviews, and branch protection; do not treat “merge this PR” as necessarily one PR.

An ordinary chain of branches is not the same as native stack management/atomic merging. These docs do not guarantee native stack support in every CLI session or repository. Demonstrate only after confirming support and obtaining separate branch/PR/merge authorization; create nothing during Phase 4.

## Exit check and handoff

- [ ] Actual approved specification and reviewed design inputs are identified, or the real-project path is explicitly blocked.
- [ ] Architecture is human-approved with route/hosting risks and real-tooling discovery addressed.
- [ ] Tickets cover AC1–AC10 with behavior, exclusions, dependencies, checks, and reviewable slices.
- [ ] Schedule precedence has a recorded human decision before its ticket is ready.
- [ ] Ticket approval, read-only preflight, publication approval, and implementation approval remain separate gates.
- [ ] Optional publication used exact scope, safe duplicate handling, and property/relation readback, or was not performed.
- [ ] No application code, assets, assignments, agent launches, Git writes, or deployment occurred in this planning exercise.

Checklist marks record human review, not automated inspection or approval inferred by the lesson. Carry actual approved architecture and tickets into a separately authorized Phase 5; publication is optional, implementation never starts automatically.

## Source references

- CLI commands and modes: https://docs.devin.ai/cli/essential-commands
- MCP configuration and authentication: https://docs.devin.ai/cli/extensibility/mcp/configuration
- Linear MCP endpoints and capabilities: https://linear.app/docs/mcp
- Native stacked PR scope and merging: https://docs.devin.ai/work-with-devin/stacked-prs

Recheck documentation and discover live capabilities for the workshop environment. External access and optional features are not presumed installed or authorized.
