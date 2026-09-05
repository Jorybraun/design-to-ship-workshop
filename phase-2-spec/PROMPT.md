# Phase 2: Specification prompt

Copy the fenced prompt into your agent. Replace the bracketed reference with your reviewed Phase 1 brief. The DesignCraft example in `SPEC.md` is an illustration, not an approved requirement or a target to copy blindly.

```text
Context:
We are defining a small website for a hands-on workshop. Phase 1 established the audience, primary job, visitor journey, and scope boundaries. We are now specifying behavior, not building the application.

Task:
Help me turn the reviewed idea brief into a checkable specification. First identify unresolved product decisions. Ask one focused question at a time, starting with any ambiguity that changes the scope. Offer options where useful, but do not decide for me.

References:
Use the idea brief below as the source of truth. If it is missing or contains placeholder instructions rather than a brief, ask me to provide it before proceeding. Use my subsequent answers as a decision log; flag any answer that changes the Phase 1 scope and ask me to approve that change.

Reviewed Phase 1 brief:
[Paste your reviewed idea brief here, including its unresolved decisions.]

Constraints:
Keep the same audience, primary job, and exclusions. Do not add features, choose a framework, prescribe visual styles, create application code, or modify files. Do not invent real event facts, endpoints, or test commands. Ask before using fictional sample content. If a behavior is simulated, explicitly label it as a demo and specify what is not sent or stored.

Verification:
For each feature, connect it to the brief or a decision I have confirmed. Define observable acceptance criteria covering the normal path and relevant empty, validation, error, and success states. Mark non-applicable states with a reason rather than adding unnecessary functionality. Review routes, content, interactions, and exclusions for contradictions. Do not claim the app has passed tests; it has not been built yet.

Deliverable:
Once blocking decisions are resolved, present a Markdown draft suitable for SPEC.md with:
1. Purpose and scope
2. Confirmed decisions and their source
3. Routes and content
4. Required information and approved sample content
5. Interactions and relevant states
6. Acceptance criteria with requirement IDs
7. Exclusions
8. Remaining questions and approval status

If I cannot resolve a blocker, label the draft blocked and explain what is needed. Stop after presenting the draft for my review. Do not treat silence as approval, save files, or proceed to design or implementation.
```

## Expected first response

If the DesignCraft brief still leaves RSVP submission open, an appropriate first question is:

> Should RSVP collect real registrations, or be an explicitly labeled demo that sends and stores nothing?

If the reference is missing, the first response should ask for the Phase 1 brief instead.

## Review follow-up

```text
Review this specification against our idea brief and confirmed decisions.
Find scope expansion, contradictions, invented facts, and acceptance criteria that cannot be observed. For each issue, cite the requirement ID and suggest a correction. Ask me before changing any product decision. Do not implement anything.
```

## Saving the approved artifact

Only after reviewing and approving the draft, give a separate instruction:

```text
I approve the specification above. Save that approved text as SPEC.md in the example application directory we agreed on. If that directory has not been agreed on, ask me where to save it. Do not overwrite an existing specification without asking. Do not create application code or proceed to design yet.
```
