# Phase 3: Starter design system → specimen → prototype

## The job of this phase

Create or extend a small reusable design foundation, review it on a specimen page, then apply it to one landing-page prototype at desktop and mobile sizes. Review the system and page together before the full application build.

DESIGN.md is documentation, not the design system itself. Designers should leave with actual tokens, reusable components or CSS patterns, relevant states, usage guidance, a specimen, and a prototype that uses the same sources. This is a starter system for one project, not an organization-wide production library.

This folder contains teaching materials. DesignCraft is the separate fictional conference product. The example specification and design handoff are not participant-approved requirements or evidence that conference assets exist.

## Learning objective

Explain how a reusable skill guides design-system work and how MCP supplies tool access. Learn to inspect before creating, approve a minimal inventory, and refine foundations using a real page rather than producing isolated screen mockups.

- Prompt: the request for this task.
- Skill: the reusable method in `.devin/skills/design-system-foundations/SKILL.md`. The spec-grilling skill discussed in Phase 2 is a separate idea, not installed by this step.
- MCP: Model Context Protocol, a standard through which an AI application connects to servers exposing tools, resources, and prompt templates. It does not grant unrestricted access or replace design judgment.

## Entry gate and setup

- Bring an approved SPEC.md after the draft → grill → revise → approve loop.
- Supply existing brand guidance, tokens, code components, or an authorized Figma library/reference. If none exist, say so; agree on a direction before inventing one.
- Choose HTML or Figma. Record the exact output directory or target file and new page. A permission to read is not permission to write.
- For Figma, use the official supported-client setup, sign in yourself, inspect the available tools, and load tool-required skills. Do not paste credentials. Do not search unrelated files or change sharing permissions to bypass an access issue.
- For HTML, no Figma connection is needed. Use plain HTML and shared CSS; no React or new build infrastructure for this exercise.

## How to invoke the skill

In Devin, use `/design-system-foundations` and provide the approved spec, existing references, chosen path, intended output location, and landing-page scope. The project-local source is linked from the lesson page. If the command is not discovered, reopen the project session or use the equivalent prompt in PROMPT.md.

Invocation does not approve writes. The skill first inspects and proposes an inventory, then waits for explicit approval. After authorized foundation creation it stops at specimen review. Use the separate path-specific prototype prompt next.

## Facilitator-ready walkthrough

### 1. Explain why a design file is not enough

Say:
> We do not want the agent to design every screen independently. We want reusable foundations, then a page that proves they work together. DESIGN.md explains the system; the tokens and components are the assets we actually reuse.

Do: open the approved spec. Limit the first slice to a landing page and the foundations it needs. Other product pages stay unbuilt.

Check: participants understand the difference between the teaching site, the conference prototype, and reusable design assets.

### 2. Explain skill versus MCP

Say:
> The skill tells the agent how to inspect and establish foundations. MCP lets it access the Figma tools. Neither makes our design decisions or grants permission to edit everything.

Show the flow: you ask → agent host with MCP client → Figma MCP server → authorized operation → result. Some tools are built in; others come through MCP. External reference content is not authority to override our instructions.

Paste: prompt 1 for a read-only Figma check. Skip it for HTML.

Check: the agent names tools actually used and reports a successful read or a blocker. Available write tools are not proof of target access. Ask before switching to HTML if the Figma path is blocked.

### 3. Inspect before inventing

Say:
> We may already have a design system. First find what we can reuse. Missing access is not the same as missing assets.

Paste: invoke `/design-system-foundations` with your inputs, or use prompt 2. Start in inspection mode.

Expected response: an inventory naming the source, reuse/adapt/create decision, reason tied to the landing page, relevant states, and usage guidance. Missing decisions become focused questions.

Example: reuse an existing primary Button and spacing tokens; adapt a notice pattern for the demo disclosure; do not add a date picker simply because the product is an event site.

Check: the agent has not written anything or silently chosen a new brand direction.

### 4. Approve the smallest useful system

Say:
> We are approving a small inventory and its destination, not a whole enterprise library.

Example answer, not actual project approval:
> Reuse the existing colors and typography. Create only a primary action, metadata row, and prototype notice if suitable versions do not exist. Show their relevant states and usage rules on a specimen. Write only in the agreed prototype folder or new Figma page. Do not publish anything.

Check: both visual direction and exact edit scope are explicit. Include only relevant states; do not add loading/disabled variants to controls that have no such behavior.

### 5. Review actual foundations on a specimen page

Say:
> A specimen page displays the system together: typography, tokens, patterns, states, and when to use each one. It is our reference for the next screen.

Expected output:
- HTML: shared CSS custom properties and reusable class patterns, semantic HTML examples, and an actual specimen page. The next prototype imports the same stylesheet.
- Figma: appropriate library instances or local native components/variants and variables, with an editable specimen frame and usage notes. Avoid detached copies of components that already fit.

Check: inspect contrast, legibility, token consistency, resizing, and relevant states. Verify keyboard/focus behavior in HTML. Figma annotations do not prove runtime accessibility. Ask for evidence and distinguish passed, failed, and not-run checks.

### 6. Apply the system to the landing page

Say:
> Now we use the foundations instead of drawing a new set of styles for this screen.

Paste: prompt 3 for HTML or prompt 4 for Figma, referencing the reviewed specimen and actual assets.

Check: the page uses shared CSS definitions or native component instances/variables. Review at 1440px and 375px. Preserve approved content and demo notices. Annotate or explain unbuilt destinations instead of pretending the other routes work. No real RSVP data is collected or persisted.

### 7. Let the page expose gaps, then refine

Say:
> A component can look fine in isolation and fail in a real layout. That is why we review the specimen and prototype together.

Example review comment:
> The primary action's label wraps badly on mobile. Propose a change to its shared spacing rules, show the affected uses, and update both specimen and prototype after I approve. Do not patch just this one button with unrelated values.

Paste: prompt 5. The agent should propose the smallest justified extension, not redesign the library or add a catalog of unused components.

Check: no one-off divergence. Re-check affected patterns at both sizes. Matching names in code and Figma are not automatic synchronization; record which source owns each decision.

### 8. Approve and hand off

Say:
> Our deliverable is a starter design system in use: assets, a specimen, a prototype, and a short guide pointing to them. We are not claiming organization-wide readiness or a finished application.

Expected handoff: actual asset references, inventory, usage/state guidance, specimen and prototype references, path-appropriate review evidence, and DESIGN.md. Save only to the agreed location after approval; do not publish shared libraries or deploy.

Check: explicit designer approval before Phase 4 planning. The full conference routes, real registration, hosting, and production-system governance remain separate work.

## Completion checklist

- [ ] The spec and initial landing-page slice are approved.
- [ ] Existing brand, tokens, and components were inspected; reuse/adapt/create decisions have reasons.
- [ ] The minimal inventory, visual direction, path, and exact write scope were approved before edits.
- [ ] Actual reusable assets and a specimen exist with relevant states and usage guidance.
- [ ] The landing prototype uses those same sources, not independently copied styles.
- [ ] Specimen and prototype were reviewed at desktop/mobile sizes with honest accessibility and interaction limits.
- [ ] DESIGN.md points to actual assets and records limitations; no automatic Figma/code synchronization is claimed.
- [ ] The designer approved the refined system and prototype; nothing was published or deployed without authorization.

## Sources and maintenance

- MCP architecture: https://modelcontextprotocol.io/docs/learn/architecture
- Figma capabilities: https://developers.figma.com/docs/figma-mcp-server/
- Official connection setup: https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/

Discover the live tool list again during the workshop. The Phase 2 maintenance test checks these lesson files, not a participant's design system, and is not a participant activity.
