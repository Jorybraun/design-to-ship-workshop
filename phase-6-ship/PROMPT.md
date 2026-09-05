# Phase 6 — Four bounded release prompts

Replace bracket fields with reviewed references. These prompts begin with previews or read-only checks; copying them grants no publication permission. Missing inputs mean a blocked report, not guessed values. Use the fictional release template for chat-only rehearsal. Source publication, deployment, cloud launch and rollback are distinct approvals.

## 1. Read-only release readiness

```text
Perform a read-only release-readiness review for [exact product/site] in [authorized repository] using [approved scope and Phase 5 evidence]. First distinguish the workshop teaching website from the DesignCraft conference application; stop if the intended product is ambiguous. Name the human release owner and governing source of truth, including approval references.

Inspect the current commit, branch, dirty tracked/untracked state, and exact proposed artifact manifest separately from the source-repository allowlist. Report the discovered build command, working directory, required environment names without values, and proposed generated outputs; do not execute builds or write anything. For a plain static package, explain whether a build is unnecessary. Check its entry index.html, nested paths, shared assets and intended downloadable Markdown against the manifest. Do not treat website/dist or the whole workspace as automatically deployable.

Summarize existing verification evidence by revision, environment and timestamp; mark missing checks NOT RUN. Identify license/rights decisions, public-disclosure risks, secrets/data exclusions, known gaps, intended hosting target, capability/access uncertainties and rollback preparation, including a first-release strategy. Report ready or blocked with exact next approvals and operator actions. Do not install, configure, stage, commit, publish, deploy, launch cloud work, update trackers or repair files.
```

## 2. Preview source-repository publication

```text
Preview source publication for [exact product] to [human owner/account]/[repository name] with [explicit visibility]. Read only [authorized source scope]. Produce the exact included-file manifest and exclusions for review, separately from the deployable artifact. Confirm the intended default branch and current revision/dirty state. Never use broad staging such as git add . or copy a private repository wholesale.

Review public disclosure and rights for code, teaching Markdown, images, fonts, attribution and reusable skills. Exclude dependencies, dist, caches, environment files, secrets, local .devin configuration and outputs. Include only individually reviewed reusable skill source where intended links need it. Propose README setup/update instructions, maintainer ownership, and a human license decision; do not automatically add a license. Public visibility is not an open-source license grant or deployment.

Stop for explicit approval naming owner, name, visibility, manifest and exact Git/publication operations. Do not stage, commit, create or push beforehand. After that approval, perform only the approved batch through supported tools; ask the operator about missing access without revealing credentials. Verify remote identity, visibility, default branch, commit and source URL from real output. On ambiguous or partial remote failure, stop and reconcile state before retrying. No deployment or tracker changes.
```

## 3. Preview, then separately approve deployment

```text
Prepare a deployment preview for [exact product], [reviewed artifact and manifest], [source commit/dirty-state evidence], and [exact public hosting target/account]. Do not deploy yet. Confirm entry index.html, nested paths, assets, exclusions, verification gaps and the prepared rollback operator/strategy. The source repository URL is not the hosted URL; a local browser preview is not public hosting.

Inspect deployment tools actually available in this session and operator-confirmed account settings. Devin native deployment is intended for small standalone apps; static directories need index.html. It is available to non-enterprise organizations with secure mode off, not enterprise or secure-mode sessions. Never weaken security policy. Existing applications generally use their own approved CI/CD; native static compatibility is not guaranteed. If unavailable, propose approved own hosting or a manual prepared release and stop. Ask about access/authentication without exposing credentials; do not install, configure, add services or launch cloud work. Cloud handoff needs separate transfer/cost approval.

Request explicit session approve/deny for this exact target, artifact, commit and manifest, plus any native deployment approval. Only after confirmation use supported tools for that artifact alone. Return the actual public URL, deployment ID if available and evidence; never guess. On partial failure stop before retrying and resolve remote state. No Git or tracker changes.
```

## 4. Smoke test and maintenance handoff

```text
Review [approved actual public URL] for [exact product/release] using only [explicitly approved non-mutating browser interactions] and fictional data. Confirm it is the returned hosted target, not localhost or a source repository. Do not send or repeat real registrations, emails, purchases or other live actions. If interaction side effects are uncertain, stop before submitting.

Check the entry page, navigation, intended nested routes by direct entry and reload, unknown-path behavior, missing assets and downloadable materials. At 1440px and 375px inspect overflow, expanded content, keyboard reachability, visible focus and browser console errors. Where demo RSVP exists, verify its disclosure and local-only behavior through approved network/storage inspection: no requests, persistence, entry logging or analytics payloads. The workshop teaching website needs no backend; a conference demo does not authorize a real RSVP service.

Compare source commit and artifact identity with deployment evidence to the extent hosting capabilities allow; label unverifiable matches. Report PASS, FAIL or NOT RUN per check with revision, environment, timestamp and evidence. In chat, draft a handoff naming source URL separately from hosted URL, maintainer, verified update commands, access owner without secrets, next actions and rollback operator, prior good artifact, target and required approval. First deployment may have no previous version. Do not rollback, redeploy, write documentation or change anything without separate authorization.
```
