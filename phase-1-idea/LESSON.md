# Phase 1: Idea

## Learning objective

Turn a vague website request into a bounded product idea before asking an agent to implement anything.

By the end of this phase, participants should be able to identify:

- who the website is for,
- the website's primary job,
- the visitor's main journey,
- what is in scope,
- what is explicitly out of scope,
- and which decisions remain unresolved.

## Starting point

Begin with a deliberately vague request:

> Build me a website for a design conference.

Ask the room what the agent would have to guess. Likely answers include:

- What conference is this?
- Who should attend?
- What should visitors accomplish?
- Does registration involve payment?
- Are accounts required?
- Is there an administrative dashboard?
- What does finished mean?

Explain that these are product decisions, not implementation details. If we do not make them explicitly, the agent will make them implicitly.

## The human and agent roles

At this stage, the human makes the product decisions. The agent may help by interviewing the human, organizing the answers, and exposing unresolved questions.

The agent should not yet:

- choose the technology,
- design the interface,
- define the pages,
- create files,
- or implement the website.

## Exercise

1. Copy the guided discovery prompt from `PROMPT.md` into the agent.
2. Replace the initial idea if you want to use a different example.
3. Answer one question at a time.
4. Correct the agent if it invents a decision instead of asking for one.
5. Review the resulting idea brief against the completion checklist.

## Facilitator walkthrough

Use this explanation while presenting the exercise:

> Our first instinct may be to ask the agent to build a conference website. That delegates product decisions, not just implementation. Before opening the coding loop, we decide who the site serves, the one job it performs, and what we are not building. We can use the agent as an interviewer, but it should expose decisions rather than silently make them.

Point out the structure of the discovery prompt:

- **Context:** this is a small website project for a workshop.
- **Task:** clarify the idea before specifying or building it.
- **Method:** ask one focused question at a time.
- **Constraints:** do not design, implement, or modify files.
- **Deliverable:** produce a concise, structured idea brief.
- **Verification:** check that the brief answers the required product questions.

## Example artifact

```markdown
# DesignCraft 2026 — Idea Brief

## Description

DesignCraft 2026 is a one-day conference in Vancouver for people who design and build digital products.

## Audience

Product designers, design engineers, and design leaders working in technology.

## Primary job

Help prospective attendees understand the event and decide whether to RSVP.

## Main user journey

1. Learn what the conference is about.
2. Review the schedule.
3. Explore the speakers.
4. Submit an RSVP.

## In scope

- Event information
- Conference schedule
- Speaker information
- RSVP submission
- Responsive desktop and mobile experience

## Out of scope

- Payments
- User accounts
- A content management system
- An administrative dashboard
- Personalized schedules
- Real-time event updates
- A native mobile application

## Unresolved decisions

- Whether RSVP submissions require a real external form service
- Whether speaker photography will be provided or represented by placeholders
```

## Completion checklist

Do not move to Phase 2 until the answer to every required question is clear.

- [ ] The audience is specific.
- [ ] The website has one clear primary job.
- [ ] The main visitor journey is understandable.
- [ ] The in-scope capabilities support that journey.
- [ ] The out-of-scope list prevents obvious expansion.
- [ ] Unresolved decisions are visible rather than silently guessed.
- [ ] The project is small enough to complete during the workshop.

## Transition to Phase 2

Phase 1 defines why the product exists and what boundary surrounds it. Phase 2 turns the idea brief into a specification with exact routes, content, data, states, interactions, and acceptance criteria.
