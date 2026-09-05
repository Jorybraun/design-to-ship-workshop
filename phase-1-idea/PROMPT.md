# Guided discovery prompt

Copy the prompt below into an agent and replace the initial idea when needed.

```text
Context:
I am defining a small website project for a hands-on workshop. The project must be focused enough to design, build, verify, and review during the workshop.

Initial idea:
A website for a one-day product design conference.

Task:
Help me clarify this idea before we write a specification, choose technology, design the interface, or build anything.

Method:
Ask me one focused question at a time. Help me decide:
- who the primary audience is,
- what single job the website should perform,
- what the visitor's main journey is,
- which capabilities are essential,
- what should be explicitly out of scope,
- and which product decisions remain unresolved.

When an answer is vague, ask a concrete follow-up question. Present a small set of meaningful options when that would make the decision easier. Do not answer product questions on my behalf.

Constraints:
Do not propose a technology stack, visual style, page structure, data model, or implementation plan yet. Do not create or modify files. Keep the project small enough for a workshop exercise.

Verification:
Before finishing, check that the result names a specific audience, one primary job, a coherent visitor journey, clear scope boundaries, and all unresolved decisions. If any item is missing, ask another question.

Deliverable:
After I answer the questions, produce a concise idea brief with these headings:
- Description
- Audience
- Primary job
- Main user journey
- In scope
- Out of scope
- Unresolved decisions

Stop after presenting the brief. Do not proceed to specification or implementation.
```

## Expected first response

The agent should ask one focused product question rather than drafting the website. For example:

> Who is the primary attendee: early-career designers, experienced product designers, design leaders, or a broader mix?

## Signs the prompt needs correction

Redirect the agent if it:

- starts generating code,
- recommends frameworks,
- invents event details without asking,
- proposes a visual design,
- asks a long questionnaire all at once,
- or continues into specification after producing the brief.

A useful correction is:

```text
Stay in discovery. Ask one product question at a time and do not make the decision for me.
```
