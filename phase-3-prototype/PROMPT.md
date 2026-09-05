# Phase 3: Design-system foundations and prototype prompts

Use an approved specification, not the teaching example unless you have explicitly adopted it. Replace all bracketed inputs. Choose one artifact path: HTML or Figma. The sequence is inspect → approve inventory → create foundations and specimen → review → prototype → refine → approve.

The project-local `design-system-foundations` skill packages the foundations method. Invoke `/design-system-foundations` with your inputs in Devin. If it is not discovered, reopen the project session or use prompt 2 below. The skill's presence does not mean a design system has been created. Copy buttons do not execute a skill or connect to Figma.

## 1. Figma connection check — read-only

Skip this check for HTML. Use the official setup guide for your supported client and authenticate yourself; never paste credentials into a prompt.

```text
We are preparing a Figma design-system and prototype exercise. Inspect the available Figma MCP connection and list the relevant tools before calling them.

Target: [paste the intended Figma file URL and a reference frame URL containing its node ID].

Do not create or modify anything. Do not search unrelated files. If the connection is absent, authentication is required, or the target is missing, stop and tell me what I need to provide.

Read the supplied reference frame using the available read tools and any required Figma skill guidance. Summarize its layout, typography, colors, and reusable components. Report which tools you actually used and whether reading succeeded. Distinguish available write tools from confirmed permission to edit the target; a tool listing alone does not prove access.

Explain whether this connection can read designs, create editable components and frames, or both. If writes are unavailable, offer HTML or a manual Figma workflow. Do not silently substitute a different tool or target. Stop for my choice and authorization before any write.
```

## 2. Foundations method — skill-equivalent prompt

This is the portable version of the skill's method. It creates the foundation assets after approval, not the full application or the landing page.

```text
Help me establish the smallest reusable design foundation for this project, not an organization-wide component library.

Inputs:
Approved specification: [path or supplied text].
Existing brand, tokens, components, and visual reference: [paths or authorized Figma references; state if none exist].
Chosen path: [HTML or Figma].
Proposed output location: [separate project folder or Figma file and new page name].
Initial application slice: landing page, desktop and mobile.

Inspect before creating. Ask one focused question at a time when the specification, visual direction, assets, or target is missing. Identify existing tokens and components. For Figma, discover tools, load the required guidance, search the available design system, and inspect its libraries within the authorized scope. Report inaccessible sources rather than treating them as absent.

Propose a small inventory with: pattern, source, reuse/adapt/create decision, reason tied to the slice, relevant variants and states, and a usage rule. Include foundations for typography, semantic color roles, spacing, borders, and layout. Do not add components or states only to fill a catalog. Do not change product requirements.

Stop for explicit approval of the inventory, visual direction, and exact write location before editing anything. Approval of a reference or a read does not authorize writes.

After approval, create only the agreed foundation assets and a specimen page displaying them together. In HTML, use shared CSS tokens and reusable class patterns with semantic markup; no React, dependencies, or deployment. In Figma, reuse appropriate library components or create local native components/variants and variables; show instances on an editable specimen frame. Do not detach suitable instances or publish shared-library changes. Preserve existing work; ask before overwriting or expanding scope.

Show relevant states and explain when to use each pattern. Check contrast, legibility, consistent tokens, and resizing. Test actual keyboard/focus behavior in HTML; distinguish Figma annotations from browser accessibility evidence. Report checks as performed, failed, or not run.

Return the actual asset and specimen references, the inventory, usage guidance, verification evidence, and a short DESIGN.md draft pointing to the source of truth. Do not claim matching names automatically synchronize Figma and code. Stop for designer review of the specimen. Do not build the landing page or other product routes yet; we will apply these foundations in the next step.
```

## 3. HTML prototype — use the reviewed foundations

```text
Context:
We have an approved specification and reviewed starter design-system assets. Apply them to one disposable landing-page prototype, not the complete application.

References:
Approved specification: [path or supplied text].
Reviewed tokens, reusable CSS patterns, specimen page, and visual reference: [actual paths or supplied artifacts].
Authorized output folder: [separate prototype directory, not the lesson folders].

Task:
Read the references first. Ask about missing inputs or conflicting decisions. Create one responsive landing page using plain HTML, CSS, and only necessary JavaScript. Use the same shared token definitions and component classes as the specimen rather than copying independent values. If a real layout exposes a missing variant, explain the gap and ask before extending the foundations; update the specimen when that change is approved.

Constraints:
Do not use React, install dependencies, change the specification, edit the workshop site, or build other routes. Preserve approved copy and fictional/demo notices. Label the page as a prototype. Do not collect, send, or persist registration information. Unbuilt-route controls must explain their intended destination accessibly instead of navigating to a broken page. Ask before overwriting existing work. Do not deploy.

Verification:
Review specimen and prototype together at 1440px and 375px widths. Check content, hierarchy, shared token use, relevant states, contrast, overflow, keyboard focus, and every visible control. Capture evidence and report console errors. Do not claim unperformed checks passed.

Deliverable:
Provide actual specimen, shared-style, and prototype file paths; screenshots if captured; the limitations; and an updated DESIGN.md draft with sources, patterns, usage rules, responsive behavior, and review findings. Stop for approval. A working prototype is not a finished conference application.
```

## 4. Figma prototype — use the reviewed foundations

```text
Context:
We have an approved specification, reviewed starter design-system assets, and a checked Figma MCP connection. Apply those assets to an editable landing-page prototype only.

References:
Approved specification: [path or supplied text].
Reviewed foundation/specimen and visual-reference frames: [node-specific URLs].
Authorized target file and new prototype page: [file URL and unique page name].

Task:
Confirm inputs and exact write scope before editing. Discover tools, load required Figma skills, and inspect the referenced components, variables, and libraries. Create native landing frames at 1440px and 375px widths using instances and shared variables from the reviewed foundations, not detached duplicates or flattened screenshots. If a missing variant appears, propose the smallest extension and ask before changing the system or specimen.

Constraints:
Keep existing pages untouched unless a specific change is approved. Ask if the target page name already exists. Do not delete, change sharing, publish library changes, deploy, or build other routes. Preserve approved copy and demo notices. Annotate intended destinations and unbuilt behavior. Only claim click-through connections if the tools support them and you created and tested them. Stop on missing access or write capability; do not fabricate an artifact.

Verification:
Read back and render the specimen and both landing frames. Compare content, hierarchy, legibility, component instances, variables, states, and resizing with the approved references. Distinguish Figma visual inspection from browser accessibility and runtime tests. Matching names are not evidence of automatic design/code synchronization.

Deliverable:
Return actual foundation, specimen, and prototype links; screenshots if obtained; reused components; and an updated DESIGN.md draft in the conversation with usage rules, responsive behavior, limits, and performed checks. Stop for review. Do not claim the full application or functional RSVP exists.
```

## 5. Review and refine — specimen and prototype together

```text
Review this starter design system and its landing-page prototype against the approved specification and visual direction.

Foundations and specimen: [actual file paths or Figma URLs].
Prototype: [actual entry-file path or Figma frame URLs].
Specification and reference: [paths, URLs, or supplied artifacts].

Identify the most consequential inconsistency or missing pattern exposed by the prototype. Distinguish product requirements, visual preferences, and genuine reuse needs. Suggest a precise change to the shared source, identify affected usages, and ask for approval. Do not add a general-purpose component catalog or alter requirements to excuse a mismatch.

After approval, update only the authorized assets, specimen, and affected prototype usages. Re-check both sizes with path-appropriate tools. Record remaining limitations and checks not run. When I explicitly approve the direction, provide the final DESIGN.md content with links to actual reusable assets, specimen, prototype, and usage guidance. Ask before saving or overwriting. Do not publish a library, deploy, or start the full application.
```
