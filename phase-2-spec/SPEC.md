# DesignCraft 2026 — Example Specification

Status: illustrative expected output, not an approved project specification.
All event details, speakers, and talks below are fictional workshop fixtures.

## 1. Purpose and scope

Audience: product designers, design engineers, and design leaders.
Primary job: help visitors understand the event and decide whether to RSVP.
Journey: event information → schedule → speakers → demo RSVP.
Deliver a responsive conference-site prototype, not a registration service.

## 2. Example decision log

These decisions represent fictional participant answers, not actual user approval.

- D1 — Phase 1 reference: event information, schedule, speakers, and RSVP; no payments, accounts, CMS, admin dashboard, personalized schedules, live updates, or native app.
- D2 — Example scope clarification: RSVP is a labeled demo with name and email only. Send and persist nothing. No ticket tiers or confirmation emails.
- D3 — Example content approval: fictional DesignCraft 2026, Vancouver, 14 November 2026; exact venue not announced. Use speaker initials, not photos.
- D4 — Example structure approval: four routes, eight talks, six speakers, Product and Engineering tracks, fixed sample content with no remote content service.
- D5 — Example interaction approval: a single track filter defaults to All and resets on reload; keep talks ordered by start time.

## 3. Routes and content

- R1 / — Event name, date, city, visible fictional-event notice, short purpose statement, and “Try the demo RSVP” linking to /rsvp. Include links to schedule and speakers.
- R2 /schedule — Show time, title, speaker name, track, and room for each talk. Group by start time. Include All, Product, and Engineering filters.
- R3 /speakers — Show all six speakers with name, role, initials, and a short bio. No separate speaker-detail route.
- R4 /rsvp — Name and email fields, demo disclosure, submit control labeled “Try demo RSVP”, and inline validation/success feedback.
- R5 Shared navigation — Links to the four routes on every page. Direct navigation and reload must work on each route. Unknown paths show “Page not found” with a link home.

## 4. Required information and sample content

Event: name, display date, city, description, fictional-event notice.
Description: “A one-day gathering for people who design and build digital products.”
Notice: “Fictional workshop event. No real registrations.”
All talk times are local Vancouver time on the event date.

Speaker fields: unique id, name, role, initials, bio. Fixtures:

- S1: Alex Chen | Product designer | AC | Designs collaborative product experiences.
- S2: Morgan Lee | Design engineer | ML | Builds accessible interface prototypes.
- S3: Sam Rivera | Design leader | SR | Helps teams connect design and delivery.
- S4: Priya Shah | UX researcher | PS | Studies how people make product decisions.
- S5: Jordan Park | Frontend engineer | JP | Turns interface patterns into reusable systems.
- S6: Taylor Brooks | Content designer | TB | Makes complex product journeys understandable.

Talk fields: unique id, 24-hour start time, title, speaker id, track, room. Fixtures:

- T1 | 09:00 | Designing together | S1 | Product | A
- T2 | 09:00 | From frame to interface | S2 | Engineering | B
- T3 | 10:00 | Better product decisions | S3 | Product | A
- T4 | 10:00 | Accessible by default | S5 | Engineering | B
- T5 | 11:00 | Research that changes direction | S4 | Product | A
- T6 | 11:00 | Prototypes with purpose | S2 | Engineering | B
- T7 | 13:00 | Words that guide | S6 | Product | A
- T8 | 13:00 | Shared interface patterns | S5 | Engineering | B

Every talk's speaker id must resolve to a listed speaker. Within a time group, sort by room. Sample content is fixed; no editing interface or live data feed.

## 5. Interactions and relevant states

- I1 Schedule (D5): All shows eight talks in four time groups. Selecting Product or Engineering shows that track only. Hide empty time groups; mark the active filter programmatically. Changing filters requires no reload; reloading resets to All.
- I2 Empty content (D4): a track with no matches shows “No talks in this track yet.” An empty schedule shows “Schedule coming soon.” Empty speaker data shows “Speakers coming soon.” Use temporary empty fixtures to verify these cases, not a new production filter option.
- I3 RSVP input (D2): initial fields are empty. Trim outer whitespace before validating. Name must not be empty; email must not be empty and must pass the browser's email-format validity rules. No network-based address verification.
- I4 Invalid RSVP (D2): on submit, show “Enter your name.” and/or “Enter a valid email address.” beside the corresponding field, associate errors with inputs, retain entries, focus the first invalid field, and do not show success. Revalidate on the next submit.
- I5 Valid demo (D2): display “Demo complete. No registration was sent or saved.” as an accessible status and clear the fields and errors. Keep the form available for another demonstration. Remove stale success feedback when the visitor starts typing again.
- I6 Privacy boundary (D2): show “Demo only. Use fictional details. Nothing is sent or saved.” above the form. No form requests, browser persistence, analytics events containing entries, or console logging of entries. Input exists only in page memory until cleared or the page reloads.
- I7 Non-applicable states (D2, D4): content and validation are local and synchronous. No network loading, submission retry, or service-error simulation. Real submission would require a newly approved destination and pending/error/retry requirements.

## 6. Acceptance criteria

These are checks to run after implementation, not evidence of completed testing.

- AC1 (R1, R5): open each route directly and reload it; the intended content remains available. Navigation reaches all four routes. An unknown path shows the stated fallback and working home link.
- AC2 (R1, D3): landing content matches the fictional event details and notice; its main CTA opens /rsvp.
- AC3 (R2, I1): All shows eight talks; Product and Engineering each show four. Groups are ordered 09:00, 10:00, 11:00, 13:00, and talks within groups are ordered by room. Switching filters updates the visible and accessible selected state; reload restores All.
- AC4 (I2): with temporary no-match and empty-data fixtures, the stated messages appear without empty time-group headings. Restore the normal fixtures afterward.
- AC5 (R3, D4): six speaker entries show matching names, roles, initials, and bios. Every schedule speaker reference resolves.
- AC6 (I3, I4): blank or whitespace-only name and blank or malformed email block success. Inline errors identify the fields, entries remain, and focus moves to the first invalid field. Valid fictional entries succeed on resubmission.
- AC7 (I5, I6): valid demo submission shows the exact demo message and clears inputs/errors. Typing again clears the stale message. Inspect network, console, and browser storage to confirm the form sends and persists no entries.
- AC8 (all routes): at 1440px and 375px widths, no horizontal page overflow occurs; content and controls remain usable. Capture both widths, plus relevant filter and form states.
- AC9 (R5, I1, I4, I5): navigation, filters, and form controls work by keyboard with visible focus. Fields have labels; errors and success are programmatically associated or announced. No new browser console errors occur during these flows.
- AC10 (verification handoff): once implementation tooling exists, identify its actual build, lint, and test commands. Verify the relevant checks and report results; do not invent commands or mark them passed in this specification.

## 7. Exclusions

No payments, accounts, ticket types, confirmation emails, real registration, CMS, admin dashboard, personalized schedules, live updates, native app, sponsor management, search, or speaker-detail pages. No technology or visual-design decisions are made by this document. The /styleguide is a later design exercise, not an extra attendee feature required here.

## 8. Remaining questions and approval

Within this fictional demo, no product-behavior blockers remain after D1–D5.
Visual direction belongs to Phase 3; implementation tooling and hosting are decided before building and deploying.
For an actual project, confirm or replace D2–D5 with the participant's answers. Do not use demo-only criteria for a real registration service.
Approval: awaiting explicit human review. Save an approved project copy separately; preserve this file as the workshop example.
