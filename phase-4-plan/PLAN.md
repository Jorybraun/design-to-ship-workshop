# DesignCraft — Illustrative implementation plan

Status: fictional, unapproved teaching output. No architecture has been approved; no application, assets, issues, or verification results are claimed here. T1–T5 below are local teaching ticket IDs, not Linear IDs or the specification's talk IDs.

## Entry blockers and candidate architecture

- Real planning requires the participant's approved SPEC.md, actual reviewed DESIGN.md, shared assets, specimen, landing prototype, and review evidence. The Phase 3 example explicitly says these artifacts were not generated. Missing actual specimen/assets blocks a real build; this document cannot clear that gate.
- Inspect the separately authorized conference project directory, not `website/` or lesson folders. No application directory or stack has been selected here.
- Candidate A: plain HTML, shared CSS foundations, and minimal local JavaScript. Four clean routes `/`, `/schedule`, `/speakers`, `/rsvp`; native links; host-compatible page routing and unknown-path handling. Low infrastructure, but shared markup and clean-URL serving need deliberate handling.
- Candidate B: reuse an existing Vite setup only if inspection finds one and it is justified. Shared templates/components may help; a client router needs host fallback rules and explicit unknown-path rendering. Do not introduce Vite/React just because the workshop reference site uses React.
- All technology remains proposed. Human architecture approval must select the smallest viable option after inspection and resolve the hosting approach. Opening lesson HTML directly is not proof that conference clean URLs work.
- Proposed data: fixed event values, six speakers keyed by ID, eight talks referencing speakers; start-time then room ordering. Local filter state resets on reload. RSVP entries live only in page memory, with no transmission, persistence, analytics payloads, or console logging.
- Reuse actual reviewed tokens/patterns; propose missing form/filter patterns for design review rather than silently inventing an expanded library. Keyboard/focus, labels/status feedback, contrast, and 1440px/375px layout checks belong to every slice.
- **Schedule readiness blocker:** `../skills/index.html` demonstrates the unresolved I2 precedence question: when Product is selected and the whole dataset is empty, which message wins? “Schedule coming soon” taking precedence is an example recommendation, not approval. Ask the human, record the decision and aligned AC4 wording in the actual approved spec before T2 is ready. The example SPEC.md's “no blockers” claim does not resolve this ambiguity.

## Dependency graph and PR policy

Behavior DAG: T1 → T2, T3, T4; T2 + T3 + T4 → T5. T2 also depends on the human precedence decision. All tickets depend on entry artifacts and architecture approval; none is currently implementation-ready.

Default review/merge order: T1 → T2 → T3 → T4 → T5, ordinary sequential PRs against main after each predecessor merges. This is a review order, not invented data dependencies. Optional stacked-PR demonstration requires separate approval and supported tooling; no branches or PRs are created in this phase.

## T1 — Understand the event and enter the site

- Goal / requirements: R1, R5, D3; AC2 plus initial AC1, AC8, AC9, AC10 groundwork.
- Acceptance: runnable landing with approved fictional event details and notice; CTA targets `/rsvp`; shared navigation identifies all four destinations. Temporary destination shells explicitly identify unfinished pages, without claiming their behaviors work. Unknown paths show “Page not found” and a working home link.
- Shared-data ownership: T1 establishes one canonical local fixture source for event values, six speakers, and eight talks with valid speaker references; T2 and T3 consume it rather than copying data. Include fixture integrity checks in T1; feature empty-state tests use temporary inputs without changing the canonical source.
- Check plan: verify landing copy/CTA, keyboard navigation/focus, both widths, clean-URL direct entry/reload and unknown path on the proposed serving arrangement. Inspect actual tooling and document available checks or gaps; no commands are presumed to exist.
- Dependencies: entry gate and approved route/hosting approach. PR slice: one runnable landing plus shared shell and routing foundation.
- Exclusions: no completed schedule, speaker listing, RSVP, deployment, or claims that all-route AC1 passes. Any starter setup must be specifically authorized in Phase 5.

## T2 — Browse and filter the schedule

- Goal / requirements: R2, I1–I2, D4–D5; AC3, schedule portion of AC4, schedule references in AC5, AC8–AC9.
- Acceptance: eight talks, four per track, ordered 09:00/10:00/11:00/13:00 then room; time/title/speaker/track/room shown. All/Product/Engineering update without reload, expose selected state, reset to All on reload, and hide empty groups. Exact empty messages follow the human-approved precedence decision.
- Check plan: count/order all filters, resolve every speaker ID, use temporary no-match and wholly empty fixtures including Product selected, then restore normal fixtures. Keyboard/selected-state checks, both widths, direct entry/reload, console inspection, relevant available automated checks.
- Dependencies: T1 and unresolved precedence decision; blocked until both satisfied. PR slice: complete schedule visitor flow including fixtures, state, rendering, and checks.
- Exclusions: no new production filter, live feed, search, editing, personalized schedule, or silent adoption of the teaching answer.

## T3 — Learn about the speakers

- Goal / requirements: R3, I2, D4; AC5, speaker portion of AC4, AC8–AC9.
- Acceptance: all six fictional speakers show matching name, role, initials, and bio; empty data shows “Speakers coming soon.” Schedule references resolve to the same speaker identities, without requiring detail routes.
- Check plan: compare fixtures to approved content, inspect reference integrity, temporarily empty/restore speaker data, keyboard navigation, both widths, direct entry/reload, console and relevant available automated checks.
- Dependencies: T1; integration with T2 is rechecked in T5. PR slice: complete speaker browsing and empty state.
- Exclusions: no photos, profiles/detail pages, speaker management, or remote data service.

## T4 — Try the local-only demo RSVP

- Goal / requirements: R4, I3–I7, D2; AC6–AC7, AC8–AC9.
- Acceptance: initially empty labeled name/email fields; disclosure “Demo only. Use fictional details. Nothing is sent or saved.” and “Try demo RSVP” control. Trim outer whitespace; require nonempty name and browser-valid email. Invalid submission retains entries, associates “Enter your name.” / “Enter a valid email address.” errors, focuses first invalid input, and blocks success; revalidate on next submit.
- Acceptance: valid fictional input announces “Demo complete. No registration was sent or saved.”, clears fields/errors, and leaves form reusable. Typing removes stale success. Entries never leave page memory: no form request, storage, entry logging, or analytics transmission.
- Check plan: blanks, whitespace, malformed email, correction/resubmission, success/repeat/typing/reset; inspect network, console, storage, labels, error associations, status announcement, focus, both widths, and direct entry/reload. Run relevant checks only once actual tooling is known.
- Dependencies: T1 and reviewed form patterns. PR slice: complete local demo interaction with privacy verification.
- Exclusions: no real registration, server, confirmation email, accounts, payment, persistence, network verification, loading, or service-error simulation.

## T5 — Complete and verify the cross-route journey

- Goal / requirements: R1–R5, I1–I7; final AC1–AC10 integration ownership.
- Acceptance: landing → schedule → speakers → demo RSVP works; no unfinished shells remain. All four native routes work by direct URL and reload under the selected host's actual or equivalent documented serving rules; unknown paths retain the required fallback. Deployment is not authorized by this verification requirement.
- Acceptance: consistent reviewed foundations, no horizontal overflow at 1440px/375px, keyboard-reachable controls and visible focus, associated errors/announced success, no new console errors. AC10 reports real discovered build/lint/test commands, results, and absent tooling honestly.
- Check plan: rerun each feature's checks and temporary fixtures, restoring normal data; capture both widths and relevant filter/form states. Verify hosting rewrites or directory routing rather than relying on client navigation alone. If target hosting is undecided or unavailable, mark route-host verification blocked, not passed. Review diff and report passed/failed/not-run with evidence.
- Dependencies: T2, T3, T4. PR slice: cross-route integration fixes and verification handoff, not a deferred dumping ground for all feature tests.
- Exclusions: no scope additions, production deployment, real personal data, fabricated command results, or automatic issue completion/agent launch.

## Coverage and approval

| Criterion | Slice owner | Final check |
| --- | --- | --- |
| AC1 routes/reload/fallback | T1 foundation; T2–T4 destinations | T5 selected-host route checks |
| AC2 landing | T1 | T5 copy and CTA |
| AC3 schedule | T2 | T5 counts/order/filter/reset |
| AC4 empty states | T2 schedule; T3 speakers | T5 approved precedence and restored fixtures |
| AC5 speakers/references | T3 listing; T2 references | T5 shared-data integrity |
| AC6 validation | T4 | T5 invalid → corrected submission |
| AC7 success/privacy | T4 | T5 network/console/storage and repeat flow |
| AC8 responsive | T1–T4 | T5 1440px/375px evidence |
| AC9 accessibility/console | T1–T4 | T5 full keyboard and feedback journey |
| AC10 actual checks | T1 discovery; each slice checks | T5 commands/results/gaps |

Human gates: approve actual artifacts → resolve blockers and approve architecture → approve ticket scope/DAG → optional scoped read-only Linear preflight → separate exact publication approval. Ticket approval is not code approval. Stop before code; no Linear or Git writes have occurred as part of this teaching plan.
