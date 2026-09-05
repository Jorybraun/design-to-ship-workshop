# Phase 2: Idea brief → specification

## Learning objective

Turn the purpose and boundaries from Phase 1 into observable requirements. The output is a reviewed specification, not application code and not a visual design.

By the end, participants should be able to describe each route, the information it needs, what users can do, relevant states, and how a reviewer will check the result.

## Materials and entry gate

- Your reviewed Phase 1 idea brief, including unresolved questions
- `PROMPT.md`: the specification interview prompt
- `SPEC.md`: an illustrative expected output, not an approved project spec
- `index.html`: the visual lesson, prompt, example output, and checklist

Do not start from the Phase 1 example as though its decisions are yours. Either bring your own approved brief or explicitly choose the fictional DesignCraft exercise.

## What changes from Phase 1?

Phase 1: “Visitors browse the schedule and RSVP; no payments or accounts.”

Phase 2: “The schedule defaults to All tracks. Choosing Product shows only Product talks in time order. If none match, show ‘No talks in this track yet.’”

The second statement describes behavior someone can check. It does not choose colors, a framework, or a component implementation.

## Walkthrough

### 1. Bring the reviewed brief

Paste it into the reference slot in the prompt. Context should travel into the new session rather than depend on the agent remembering a prior conversation.

### 2. Resolve scope-changing questions first

In the example, “RSVP submission” is ambiguous. Real registrations require a delivery destination and failure behavior. A demo does not.

Example interview, not actual user approval:

- Agent: “Should RSVP collect real registrations, or only demonstrate the interaction?”
- Participant: “Demo only. Label it clearly. Do not send or store personal information.”
- Agent: “May we use fictional event details, sample talks, and speaker initials?”
- Participant: “Yes, label the whole event fictional. No stock photography is needed.”

The demo choice narrows Phase 1's RSVP capability. Record the scope change and get explicit approval before using it in a real specification.

### 3. Define routes and content

For the fictional example, choose landing, schedule, speakers, and RSVP routes. Specify essential content and relationships: talks reference speakers; a track filter has named options; the landing CTA has an exact destination.

Do not introduce ticket tiers, sponsors, speaker-detail pages, or search just because another event site has them.

### 4. Define behavior and states

Replace adjectives with observations. “A useful filter” becomes a rule for default state, selected track, result order, and no matches. “An RSVP form that works” becomes field rules, invalid submission behavior, demo success wording, and a privacy boundary.

Do not add a loading spinner or simulated network failure to a synchronous local demo. Record why those states are not applicable. If real submission is selected instead, specify pending, failure, retry, and success behavior before building.

### 5. Make acceptance criteria observable

Example:

> Given an empty name or an invalid email, when the visitor submits the form, show the corresponding inline error, retain the entries, focus the first invalid field, and do not show success.

These are future checks. They are not test results. Exact tool commands are chosen after inspecting the implementation environment, not invented in a product spec.

### 6. Review, approve, then save

Use the checklist below and the review follow-up in `PROMPT.md`. Correct contradictions and scope expansion. Explicitly approve the draft, then save it as `SPEC.md` in the agreed example application directory. The supplied teaching example stays separate from your approved project artifact.

## Example decisions behind the expected output

The accompanying `SPEC.md` assumes a fictional participant confirmed all of these:

- A demo RSVP with name and email only; no sending, storage, or ticket issuance
- Fictional event details: DesignCraft 2026, Vancouver, 14 November 2026
- Four routes; no extra feature pages
- Eight sample talks, six fictional speakers, Product and Engineering tracks
- Fixed sample content and initials instead of photographs
- A single track filter defaulting to All; filter selection resets on reload

Those are teaching choices, not facts about an actual conference or decisions approved by this workshop's user. Different participant answers should produce a different specification.

## Facilitator explanation

> A brief tells us why we are building. A specification tells us what must happen. We are not asking the agent for a longer document: we are removing decisions it would otherwise have to guess. The useful test is whether two people can independently check the same requirement and agree on the result.

Explain the six-part prompt:

- Context: we are in specification, not implementation.
- Task: clarify decisions before drafting.
- References: the reviewed brief and confirmed answers.
- Constraints: no scope expansion, invented facts, code, or visual design.
- Verification: requirements are traceable, consistent, and observable.
- Deliverable: a Markdown draft with an explicit approval status.

## Completion checklist

- [ ] The specification uses the reviewed Phase 1 brief.
- [ ] Scope changes and sample-content choices are explicitly confirmed.
- [ ] Every route has a purpose and required content.
- [ ] Information fields and cross-references are clear.
- [ ] Interactions and relevant states are specified.
- [ ] Each feature has observable acceptance criteria.
- [ ] Exclusions remain intact and no blocking questions are hidden.
- [ ] The human has explicitly approved the final draft.

## Transition to Phase 3

Carry the approved specification into Design. There we choose visual references, tokens, component patterns, and responsive presentation. Do not start application implementation just because a specification exists.
