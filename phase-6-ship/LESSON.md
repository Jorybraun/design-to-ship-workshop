# Phase 6 — Ship the reviewed build. Leave a reliable handoff.

## Outcome and entry gate

Leave with an evidence-backed release and a maintainable handoff, or an honest blocked report. Source publication and deployment are different actions: a repository shares reviewed source; a host serves a specific artifact. Public repository visibility is not deployment and does not automatically grant an open-source license.

Bring the actual approved product scope, Phase 5 review, current repository state, proposed source allowlist and exact deployable package. The workshop teaching website and the DesignCraft conference application are not the same product. `website/` is workshop reference material, not proof that the conference app exists. The [Phase 2 specification](../phase-2-spec/SPEC.md) and [Phase 4 plan](../phase-4-plan/PLAN.md) are fictional, unapproved examples. Candidate T1 has unfinished destination shells; it is not the full conference release.

Open `index.html` directly with the workspace layout intact. No React setup, dependency install or development server is required for the lesson. The checklist records reversible, session-only human review, not permission. Lesson authoring does not authorize repository publication, deployment, cloud sessions, Git operations or tracker writes. Choose chat-only rehearsal when real inputs or approvals are missing. [RELEASE.md](RELEASE.md) is a fictional template, not evidence of actions taken.

Workshop source repository: [Jorybraun/design-to-ship-workshop](https://github.com/Jorybraun/design-to-ship-workshop), created under separate publication approval. This is the teaching-source repository, not a participant's conference repository or hosted URL.
Deployed public URL: **Not published by this lesson**.
Replace these statuses only with real outputs from separately authorized actions; never guess a URL.

## 1. Confirm the release, then inspect readiness

- **Say:** “Name exactly what we are shipping, and who owns the decision.”
- **Do:** choose the workshop teaching website or the separately reviewed conference app. Identify the human release owner, approved scope and source of truth, current commit/branch and dirty tracked/untracked state. Do not turn an illustrative spec or a passing local preview into release approval.
- **Paste:** Prompt 1 from [PROMPT.md](PROMPT.md), with the exact authorized read scope and review references.
- **Expect:** a read-only report with source allowlist, separate artifact manifest, discovered build/update commands or no-build rationale, proposed outputs, revision-bound evidence, exclusions, known gaps, target and rollback readiness.
- **Check:** what actually passed, at which revision, environment and timestamp? A dirty tree must be reconciled to artifact identity, not silently called the commit. Missing build, test or browser evidence stays NOT RUN.
- **Decide:** ready for the next preview, or blocked pending named human decisions? A read-only inspection does not authorize running a build that writes generated outputs.
- **Stop:** ambiguous product, missing actual assets, unreviewed changes, unknown owner or false approval claims.

## 2. Preview a public source repository

- **Say:** “Publish an intentional source package, not the contents of a laptop.”
- **Do:** have the human choose exact owner/account, repository name, visibility and default branch. Preview a file-by-file allowlist and exclusions. Review code, teaching Markdown, assets, fonts, logos, attribution and any existing history for public disclosure and redistribution rights. Never clone private material into a public repository wholesale; an ignore file does not erase tracked files or old secrets.
- **Paste:** Prompt 2. It starts with a preview, not repository creation.
- **Expect:** exact operations, manifest, README setup/update instructions, ownership and license decision for approval. Public is not synonymous with open source: do not add a license automatically. Resolve whether publication is permitted even if no open-source license is selected.
- **Check:** source ignores should cover dependencies such as `node_modules/`, `dist/`, caches, environment files, secrets, local `.devin` configuration and `outputs/`. Inspect contents, not just ignore rules. Reviewed reusable skill source may be intentionally included: existing lessons link a project-local skill, so approve that individual source file rather than exposing the whole `.devin` directory. Never use broad `git add .`.
- **Decide:** explicitly approve or deny the exact owner/name/visibility, included files and scoped stage/commit/create/push batch. Without approval, finish with the preview. A GitHub CLI or other supported repository tool is only a means of executing that separately approved batch, not permission itself.
- **Check after approved execution:** verify actual remote identity, visibility, default branch and commit; record the real source URL from returned output separately from a deployed URL.
- **Stop:** missing access or rights, secrets, ambiguous remote errors or partially completed operations. Ask the operator about authentication without revealing credentials; reconcile remote state before any retry. No deployment follows automatically.

## 3. Inspect the exact build artifact

- **Say:** “The host receives this manifest, not everything in the repository.”
- **Do:** distinguish reusable source from the static release artifact. Identify the entry `index.html`, all intended lesson routes, CSS/logo, navigation destinations, intended downloadable Markdown and reviewed skill downloads. Internal maintenance tests can belong in reviewed source but not the public deployment package. Exclude local configuration, secrets, dependencies, caches and outputs unless a particular generated artifact is explicitly approved for deployment.
- **Check — workshop packaging catch:** lessons reference `../website/src/index.css` and `../website/public/cognition-mark.svg`. Preserve the approved relative layout in the static package or separately authorize and verify a path rewrite. Deploying only `website/dist` loses the lessons; deploying the whole workshop root may expose private or internal files. A root entry page and every linked public dependency must be in the reviewed package. Do not create packaging code merely to complete this exercise.
- **Expect:** an explicit artifact identity tied to reviewed source, and a manifest that survives direct nested navigation and reload under the selected host. Building the React reference site is not proof that the teaching website package is complete.
- **Decide:** authorize any necessary build/package command separately, including working directory and generated-output boundaries, then inspect its actual artifact and refresh evidence. Otherwise record the blocker.
- **Stop:** missing entry page, broken asset/download paths, unknown generated contents or a source/artifact mismatch.

## 4. Prepare recovery, then approve one deployment

- **Say:** “Choose the target and a recovery plan before publishing.”
- **Do:** name hosting account, exact public target, operator, data exposure and supported method. Retain the approved artifact and manifest. Identify the prior known-good version and host-supported rollback procedure. For a first deployment there may be no previous version: agree on supported unpublish/disable or reviewed fix-forward, owner and trigger. Preparing a plan does not authorize executing recovery.
- **Paste:** Prompt 3 for a preview. Have the operator inspect the actual session tools and account settings; do not assume this CLI can deploy.
- **Expect:** a supported route or a blocked report. The [official deployment capabilities guide](https://docs.devin.ai/product-guides/deployment-capabilities) says native deployments are intended for small standalone apps Devin creates. A static directory must contain `index.html`; it can come from any framework or plain HTML. Successful native deployment returns a unique public `devinapps.com` URL that remains available after the session ends. That is not a service-level or maintenance guarantee.
- **Check availability:** native deployment is available for non-enterprise organizations with secure mode OFF. Enterprise deployments are disabled; secure mode blocks deployment. Never disable security or change organizational policy to proceed. Existing applications generally use their own CI/CD, credentials and pipeline. An existing static app may work natively, but compatibility is not guaranteed.
- **Decide:** if supported and permitted, explicitly approve or deny this session's exact public target/account, artifact, commit/dirty-state evidence and manifest, including the relevant native deployment approval. Only after confirmation deploy that exact package through available supported tools. No guessed deployment commands, automatic installs, configuration changes or extra services.
- **Stop/fallback:** no native deployment tool was discovered in this local lesson-authoring CLI session. This lesson cannot promise account eligibility or tooling. Ask the operator about access/authentication without exposing secrets; use separately approved own hosting or leave a manual prepared release for its owner. Do not fabricate a URL. Localhost and browser preview URLs are not public hosted deployments.
- **Check after approved execution:** capture actual returned URL, deployment ID if available, artifact/target evidence and timestamp. On partial errors, stop before retrying and reconcile remote state.

An optional cloud `/handoff` is not a deployment command. It launches work with transfer and cost implications; review tracked/untracked transfer scope and obtain separate launch approval as taught in [Phase 5 cloud handoff](../phase-5-build/index.html#cloud). Do not launch cloud work merely to make the deployment option appear available.

## 5. Smoke test the actual returned public URL

- **Say:** “A successful upload is not a verified release.”
- **Do:** approve the exact hosted URL and non-mutating browser interactions. Use fictional data only. Do not repeat actual registrations, emails, purchases or other live actions; uncertain side effects block submission.
- **Paste:** Prompt 4 with the real returned URL, product identity and approved interaction list.
- **Expect:** PASS / FAIL / NOT RUN by check, with revision, artifact, environment, timestamp and evidence. Compare source-to-artifact-to-host identity using available capabilities; say when the host cannot prove it rather than claiming a match.
- **Check:** entry page, every intended nested path by direct URL and reload, navigation, unknown-path behavior, missing assets and intended Markdown/skill downloads. At 1440px and 375px check expanded disclosures, overflow, mobile usability, keyboard reachability, visible focus and new console errors. A local preview does not validate hosted route rules.
- **Check privacy:** the workshop needs no backend. If the selected conference demo actually includes RSVP, confirm its visible demo-only disclosure and inspect approved network/storage/console behavior: no form requests, persistence, entry logs or analytics payloads. A success message is not evidence of registration. The example [SPEC.md D2/I6](../phase-2-spec/SPEC.md) forbids sending or saving; no real RSVP backend is implied.
- **Decide:** accept observed results or propose a bounded correction/recovery request for separate approval. Local test success cannot replace hosted smoke evidence.
- **Stop:** harmful side effects, public leakage, failed critical routes or unexplained artifact mismatch. Report urgency and owner; do not silently redeploy or rollback.

## 6. Leave a reliable release and maintenance handoff

- **Say:** “Someone else must be able to update and recover this without our chat.”
- **Do:** review the chat handoff against [RELEASE.md](RELEASE.md). Separate actual source URL from hosted URL. Include approved scope, commit and dirty state, exact artifact manifest, target/deployment identity, permission references, PASS/FAIL/NOT RUN evidence, known limitations and owners. Keep UNKNOWN where facts are absent.
- **Expect:** source code plus release evidence, verified update/build/check commands with working directory and allowed outputs, access-management owner and approved method without credentials, maintenance cadence, issue intake and next bounded action. Record recovery trigger, operator, prior good artifact or first-release strategy, exact target and required approval.
- **Check:** can the next maintainer reproduce the artifact and find decisions, evidence and recovery procedure? Do not dump secrets, private transcripts or machine-specific paths into a public handoff. Human-approved source publication, hosted release and open-source licensing remain separate decisions.
- **Decide:** separately authorize saving or sharing the reviewed handoff to its exact destination and audience. A template does not establish approval or a real URL. No automatic Git or tracker update.
- **Stop:** unknown ownership, undocumented update path or unsupported recovery claims. Leave a named next action instead of “done”.

## Review checkpoint

Review product and approval; public source scope and rights; exact artifact and paths; target/tool availability and explicit deployment gate; recovery preparation; hosted smoke evidence; maintenance ownership and next action. The seven HTML checkboxes reset on reload and can be reversed. Completion means review recorded, not deployment authorized. Continue with [Phase 5](../phase-5-build/index.html) if the build evidence is incomplete or [Phase 4](../phase-4-plan/index.html) if product/hosting decisions remain unresolved.
