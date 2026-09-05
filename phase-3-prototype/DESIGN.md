# DesignCraft — Example Starter Design-System Handoff

Status: illustrative expected output, not an approved system or evidence of generated assets.
This example assumes the participant explicitly chose the workshop's visual style. Replace it when a different direction is approved.
DESIGN.md documents the system; the reusable assets, specimen, and prototype must actually exist separately. This is a project starter, not a production organization-wide library.

## 1. Scope and specification

Prototype: landing page only, reviewed at 1440px and 375px widths.
Product reference: the approved project SPEC.md; confirm its location before use.
Teaching reference: the fictional DesignCraft example in ../phase-2-spec/SPEC.md is not automatically approved.
Keep the approved event name, date, city, fictional-event notice, and CTA wording. Schedule, speakers, and RSVP are planned destinations, not implemented pages in this prototype.

## 2. Visual reference and tokens

Example reference: ../website/src/index.css, the workshop site's existing styles.
These values are an illustrative choice, not a required design for every participant.

- Background: #F4F0E8
- Secondary surface: #EBE6DC
- Raised surface: #FFFFFF
- Primary text: #1A1A1A
- Accent: #003399
- Supporting text: rgba(26, 26, 26, 0.72)
- Border: rgba(26, 26, 26, 0.22)
- Body font: IBM Plex Sans with a system sans-serif fallback
- Metadata font: IBM Plex Mono with a system monospace fallback
- Body size: 17px; line height: 1.55
- Headline: fluid between 40px and 66px; line height: 1.05
- Spacing: 8, 12, 16, 21, 32, 48, 64px
- Container maximum: 1280px
- Corner radius: 0

Check contrast on the actual foreground/background combinations. Example values alone are not an accessibility test. Confirm fonts are available in the chosen environment before creating text objects or relying on downloads.

## 3. Layout rules

- Desktop: two-column landing hero with event identity on the left and event details plus primary action on the right.
- Mobile: one reading column; event identity, details, notice, then primary action. Do not hide the notice to fit the viewport.
- Use 21px inner padding; preserve at least 10px outer gutters on narrow screens.
- Wrap navigation without horizontal page overflow. Keep controls keyboard reachable in an HTML implementation.
- The main CTA has the strongest action emphasis; supporting links remain secondary.

## 4. Minimal inventory and usage

Illustrative inventory after inspection; these are candidates, not assets already created:

| Pattern | Decision and source | Relevant states | Usage rule |
| --- | --- | --- | --- |
| PrimaryAction | Adapt existing .btn from ../website/src/index.css after approval | Default, hover, visible keyboard focus | Give the main landing action strongest emphasis; no loading state for this local navigation example. |
| EventMetadata | Adapt the existing hero-list label/value pattern | Long text and narrow layout | Present date and city consistently; values must wrap without clipping. |
| PrototypeNotice | Create only if no suitable notice is found in the authorized sources | Default, narrow layout | Keep the fictional/demo disclosure visible; do not hide it on mobile. |
| EventHeader and EventHero | Compose approved primitives and layout rules | Desktop and mobile arrangements | Do not automatically turn every one-off section into a generic component. |

A Card, Input, or Badge may be needed later, but is not mandatory for this first slice. Add it only when a reviewed requirement justifies it. Record actual library/component names and source links after inspection; no Figma assets are claimed here.

## 5. Reusable assets and specimen

HTML target: one shared stylesheet with semantic CSS custom properties and reusable component classes, a specimen HTML page, and a landing prototype importing that same stylesheet. Use semantic markup, not a separate set of copied inline styles per page.
Figma target: suitable library instances or local native components/variants, shared variables, and an editable specimen frame. The landing prototype uses instances/variables from those foundations rather than detached duplicates.

The specimen must display tokens, typography, approved patterns, relevant states, usage rules, and long-content/narrow-width cases. Show focus/hover behavior in HTML where applicable; label Figma representations as annotated states, not runtime tests.

Source of truth: identify the actual shared stylesheet or actual Figma component/variable set when created. Matching names across Figma and code do not synchronize them. A change requires an explicit mapping and review of affected usages; automatic sync is not part of this exercise.
Do not publish a shared library or alter unrelated brand assets as part of this handoff.

## 6. Interaction boundaries

HTML: activating a link to an unbuilt route shows an accessible prototype explanation and names the intended destination. Do not collect or persist registration data.
Figma: annotate intended destinations. Native frames and screenshots are visual artifacts, not proof of working navigation or form behavior. Only claim click-through connections that were created and tested.
These prototype limitations do not change the approved application's requirements.

## 7. Artifact and review record

Foundation assets: not created by this example document; replace with actual source references.
Specimen reference: not generated; replace with the actual specimen path or frame link.
Prototype reference: not generated; replace with the actual entry-file path or frame links.
Desktop/mobile evidence: not captured for a conference system or prototype in this lesson package.
Review record: list each check as passed, failed, or not run, with evidence. Review specimen and prototype together for source reuse, relevant states, contrast, legibility, resizing, and path-appropriate keyboard behavior. Figma visual checks cannot prove browser accessibility.
Refinement example: a long primary-action label exposes mobile spacing problems. Propose a shared-rule change, identify affected usages, obtain approval, and update specimen plus prototype together. Do not fix only one instance with an unrelated override.
Outstanding work: inspect sources, approve inventory and target, create assets and specimen, apply them in the prototype, verify, refine, and obtain designer approval.

## 8. Handoff

After approval, save the actual DESIGN.md next to the project's approved SPEC.md in the agreed location. Include asset, specimen, and prototype references plus usage and state guidance. Keep this teaching example unchanged.
Next: Phase 4 planning. Use the spec and reviewed starter system to scope implementation tickets. Full application routes, real registration, deployment, shared-library publishing, and production governance remain separate work.
