# Phase 5 — Build + review prompts

Replace every placeholder with reviewed, accessible references. These prompts do not grant themselves permission. Use the teaching examples only for an explicitly fictional, chat-only rehearsal. Review handoff contents before sharing; approve execution separately from intake. No cloud, tracker, or Git action occurs by reading or copying this page.

## 1. Prepare a handoff in the current session

```text
Prepare a fresh-session handoff in chat only for [exact ticket] in [authorized project directory]. Inspect only [authorized inputs and repository]. Reference [authoritative spec, design, assets, plan and ticket versions] rather than duplicating their full contents. Identify their actual approval statuses and supporting references; distinguish inspected facts, proposals, and explicit human approvals. A summary is not approval.

Record the repository, current branch and commit, tracked modifications and untracked work, without exposing secrets or changing Git state. Identify other people's work to preserve. State the candidate scope, exclusions, acceptance criteria references, blockers, and permission ledger. For each check, give the actual result, command, revision, environment and evidence timestamp; use NOT RUN or unknown where appropriate. Do not invent passing tests, assets, issue IDs, or a clean tree.

Name the next permitted action as read-only intake and its stop condition. Flag stale or conflicting claims for human review. Do not edit files, mutate Git, launch cloud work, or update a tracker. Stop for review of the handoff contents.
```

## 2. Fresh-session read-only intake

```text
Perform read-only intake for [exact ticket] using [reviewed handoff reference] in [local session or already-authorized cloud session]. Inspect only [authorized repository/directory and source references]. Verify the actual repository, branch, current commit, tracked changes and untracked work against the handoff; report absent or additional work. Reopen the authoritative spec, design, assets, plan and ticket at [approved versions], checking actual statuses and approval evidence rather than trusting the summary.

Recite the goal, acceptance criteria, exclusions, dependencies, blockers and permission ledger. Identify contradictions, stale claims, inaccessible artifacts, and any missing assets. Inspect documented setup and verification commands without executing them. For cloud intake, confirm the intended organization/account, repository access, received changes, and required integrations without exposing secrets; do not assume local environment or MCP connections transferred.

Report what is known, unknown, and required before a build. Do not edit files, run tests or setup, install anything, change configuration, mutate Git, call tracker writes, or launch another session. Stop and ask for explicit one-ticket execution authorization.
```

## 3. Explicitly authorized one-ticket build

```text
I authorize implementation of [exact ticket] only in [directory], using [approved version of spec, design, assets, plan and ticket]. The permitted setup commands are [permitted setup commands, or none]; the approved verification commands are [exact commands and allowed generated outputs]. Confirm these boundaries against the reviewed intake before editing. Stop if required inputs or approvals are missing.

Reuse the actual approved assets and existing project patterns. Discover real commands from the project, not guessed scripts. Where test infrastructure exists, add or adjust a relevant test and demonstrate its expected failure before implementation; otherwise report the gap without installing a framework. Implement only this ticket's acceptance criteria, preserving unrelated tracked and untracked work. Use fictional data only; no personal data or RSVP network requests or persistence.

Run authorized checks, inspect relevant states at 1440px and 375px, keyboard behavior and console errors, then review the diff. Report evidence, revision and environment, including failures and NOT RUN checks. Stop before scope additions, unapproved setup/configuration/install, commits, branches, pushes, PRs, cloud launches, tracker writes or deployment.
```

## 4. Review the slice without editing

```text
Review [exact ticket] read-only in [authorized directory] against [approved acceptance criteria, spec and design versions]. Inspect [base revision] to [current revision plus identified working-tree changes], preserving other work. Compare the actual diff with the approved scope and exclusions. Review [test output and browser evidence references] for the same revision and environment; distinguish observations from unverified claims.

Use only [explicitly agreed non-mutating check commands, or none]. Do not rerun tests that create files, caches or snapshots under this permission. If more execution or evidence is needed, propose it and stop for separate authorization. Inspect [approved browser target] only within its agreed local, fictional-data interactions; do not assume a remote preview matches this revision.

Give prioritized, actionable feedback: criterion, file or state, actual versus expected behavior, reproduction steps, and supporting evidence. Include responsive, keyboard, privacy and console findings where relevant. Mark gaps NOT VERIFIED, never fabricate a pass or merge approval. Do not edit files, fix findings, mutate Git, publish review comments, or update tickets. Stop with recommendations for a separately authorized correction.
```

## 5. Reconcile document drift by proposal

```text
Compare [authoritative decision/spec references and approved versions] with [design/assets references], [plan and exact ticket], and [implementation revision plus identified working-tree changes]. Use only [authorized read-only sources and evidence]. Propose document reconciliation in chat only; do not apply changes. Distinguish stale visitor or teaching content from disagreement between specification, design, tickets and implementation.

For each discrepancy, state the source requirement, actual implementation or claim, evidence, and affected source and derivative documents or ticket fields. Identify whether the implementation needs correction, an already-approved decision needs propagation, or a new product decision is required. Never silently rewrite the specification to fit the code or treat a summary as approval. If authoritative sources conflict, ask the human which decision governs.

Propose exact replacement wording with status, evidence timestamp, revision and environment where relevant. Preserve unknown, failed and NOT RUN statuses honestly. List downstream references to recheck and any remaining blockers. Request approval for the exact updates and targets before applying anything. No file, tracker, Git, configuration or cloud changes. Stop with the reconciliation proposal.
```

## 6. Optional stacked-PR proposal

```text
Prepare a read-only proposal for [one approved schedule ticket] in [authorized repository] using [approved plan, design, acceptance criteria and current revision]. Default to one ordinary PR; explain whether two dependent review layers would genuinely help. Do not implement anything or create branches or PRs.

If useful, propose main -> PR A: render schedule -> PR B: filter and empty states. This is one ticket split across two PRs, not independent features. Map acceptance criteria, scope and tests to each layer; keep shared fixtures owned once. Explain how changes to the lower layer require rechecking the upper layer and how reviewers verify the final combined behavior. Identify unresolved empty-state precedence as a blocker if not approved.

Verify the proposed tooling: native Devin stacks are GitHub.com-only, not every CLI or repository, and not an ordinary dependent branch chain. Native merging includes the selected layer and all open layers below atomically, then retargets remaining layers; regular merge is different. Report access/support gaps, suggest a sequential fallback, and stop for human review. No Git mutations, remote actions, merges or tracker changes.
```
