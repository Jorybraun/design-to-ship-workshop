import { useState } from 'react'

type PartId = 'context' | 'task' | 'references' | 'constraints' | 'verification' | 'deliverable'

const PARTS: { id: PartId; num: string; title: string; summary: string; why: string; fix: string }[] = [
  {
    id: 'context',
    num: '01',
    title: 'Context',
    summary: 'Which repo, what the product is, who it is for.',
    why: 'Without it Devin guesses the domain and optimises for the wrong user.',
    fix: 'One or two sentences. Name the repo and the audience.',
  },
  {
    id: 'task',
    num: '02',
    title: 'Task',
    summary: 'Specific and opinionated. You make the decisions, not the agent.',
    why: '"Add a schedule page" leaves layout, data shape and interaction open. Devin will pick something, and it will not be what you meant.',
    fix: 'Name the route, the data, the interaction. If you have not decided, decide before you prompt.',
  },
  {
    id: 'references',
    num: '03',
    title: 'References',
    summary: 'Files to copy patterns from, Figma frames, reference sites, docs.',
    why: 'Agents are pattern-completers. No reference means invented patterns and invented aesthetics.',
    fix: 'Point at an existing component, a Figma node, a URL. The Figma MCP lets Devin read the frame directly.',
  },
  {
    id: 'constraints',
    num: '04',
    title: 'Constraints',
    summary: 'What not to touch. What not to add.',
    why: 'Left alone, an agent will refactor neighbours, add dependencies and "improve" things you did not ask about.',
    fix: 'Two or three negative rules. "Do not modify X. No new dependencies."',
  },
  {
    id: 'verification',
    num: '05',
    title: 'Verification',
    summary: 'How Devin proves it works before you look.',
    why: '"Make sure it works" is not checkable. Devin will stop when the code compiles, not when the page is right.',
    fix: 'Exact commands and exact viewports. Screenshots at 1440px and 375px. Lint and tests.',
  },
  {
    id: 'deliverable',
    num: '06',
    title: 'Deliverable',
    summary: 'PR, deployed URL, screenshots in the description.',
    why: 'Otherwise Devin decides when it is done and how to hand it over.',
    fix: 'Say "open a PR with screenshots" or "give me the public URL".',
  },
]

type PromptLine = { part: PartId; text: string }
type PromptTemplate = { id: string; label: string; lines: PromptLine[] }

const PROMPTS: PromptTemplate[] = [
  {
    id: 'scaffold',
    label: 'Scaffold + design system',
    lines: [
      { part: 'context', text: 'We are building the website for DesignCraft, a one-day conference for product designers.' },
      { part: 'task', text: 'Create a GitHub repo designcraft-site. Scaffold Vite + React + TypeScript + Tailwind + React Router. Configure tailwind.config.ts with the tokens in DESIGN.md and build Nav, Footer, Button, Card, Badge and SectionHeader in src/components/ui. Add a /styleguide route rendering every token and component.' },
      { part: 'references', text: 'Commit the attached SPEC.md and DESIGN.md. Match the Button and Card variants in the Figma frame "Components" at <figma url>.' },
      { part: 'constraints', text: 'No pages other than /styleguide yet. No dependencies beyond router and tailwind.' },
      { part: 'verification', text: 'Run the dev server, screenshot /styleguide at 1440px and 375px, confirm zero console errors, run lint.' },
      { part: 'deliverable', text: 'Open a PR with the screenshots in the description.' },
    ],
  },
  {
    id: 'figma',
    label: 'Figma frame to page',
    lines: [
      { part: 'context', text: 'In designcraft-site, we need the landing page attendees see first.' },
      { part: 'task', text: 'Build / with: hero (event name, date, city, CTA to /rsvp), three highlight cards, sponsor logo strip. Placeholder logos are six grey boxes.' },
      { part: 'references', text: 'Use the Figma MCP to read the frame "Landing / Desktop" and "Landing / Mobile" at <figma url>. Reuse components from src/components/ui. Copy is in SPEC.md.' },
      { part: 'constraints', text: 'Do not change any component in src/components/ui. Do not touch other routes.' },
      { part: 'verification', text: 'Screenshot / at 1440px and 375px and compare against the Figma frames. Fix spacing that differs by more than 4px. Confirm no console errors.' },
      { part: 'deliverable', text: 'Open a PR with before/after screenshots side by side with the Figma export.' },
    ],
  },
  {
    id: 'ticket',
    label: 'Linear ticket',
    lines: [
      { part: 'context', text: 'DES-102 · designcraft-site. Attendees browse talks before deciding to RSVP.' },
      { part: 'task', text: 'Add /schedule. Load data/schedule.json (8 talks: time, title, speaker, track, room). Group by time slot. Add a track filter using Badge as toggle buttons, default "All".' },
      { part: 'references', text: 'Layout per Figma frame "Schedule / Desktop". Card and Badge from src/components/ui. Empty state copy: "No talks in this track yet."' },
      { part: 'constraints', text: 'Do not modify the landing page. No new dependencies. Keep filter state in the URL query string.' },
      { part: 'verification', text: 'Vitest for the grouping and filter functions. Screenshot /schedule at 1440px and 375px with a filter active. Lint and tests pass.' },
      { part: 'deliverable', text: 'Open a PR and link it on this ticket.' },
    ],
  },
  {
    id: 'review',
    label: 'Visual QA comment',
    lines: [
      { part: 'context', text: 'Review on PR #4 (/schedule). Comparing against Figma frame "Schedule / Desktop".' },
      { part: 'task', text: 'Card radius should be 4px not full. Track badges need the filled variant when active. Gap between time groups is 48px in Figma, currently 24px.' },
      { part: 'references', text: 'Badge filled variant already exists in src/components/ui/Badge.tsx. Spacing tokens are in tailwind.config.ts.' },
      { part: 'constraints', text: 'Do not change the data layer or the filter logic.' },
      { part: 'verification', text: 'Re-screenshot at 1440px and 375px after the change.' },
      { part: 'deliverable', text: 'Push to this branch and reply with the new screenshots.' },
    ],
  },
]

const FLOW = [
  {
    num: '01',
    title: 'Idea',
    tagline: 'One paragraph. Who, what, and what is out of scope.',
    you: 'Write the brief: audience, the one job the site does, and what you are explicitly not building.',
    devin: 'Nothing yet. This step is for you.',
    tips: ['Write what is out of scope. It is the cheapest guardrail you have.', 'Resist opening any tool until the paragraph exists.'],
    artifact: `DesignCraft 2026 is a one-day conference for product designers.
The site lets people see the schedule and speakers, then RSVP.
Out of scope: payments, accounts, a CMS.`,
  },
  {
    num: '02',
    title: 'Spec',
    tagline: 'SPEC.md. Routes, data, states, done-when.',
    you: 'Turn the idea into a checkable list. Every route, every piece of data, and every state a designer already thinks about: empty, loading, error.',
    devin: 'Reads SPEC.md in every session. It is the contract.',
    tips: ['If an edge case is not in the spec, Devin invents one.', '"Done when" must be checkable by a machine or a screenshot.'],
    artifact: `# SPEC.md
Routes: /, /schedule, /speakers, /rsvp
Schedule: data/schedule.json, grouped by time, filter by track
  Empty state: "No talks in this track yet."
RSVP: name, email, ticket type. Client validation. Inline success.
Done when: every route renders, screenshots at 1440/375, no console errors, lint + tests pass`,
  },
  {
    num: '03',
    title: 'Design',
    tagline: 'Figma frames, tokens, component names. DESIGN.md.',
    you: 'Auto-layout frames, colour variables, a named component set. Then DESIGN.md with the same tokens in text.',
    devin: 'Reads frames through the Figma MCP. Auto-layout becomes flex/grid, variables become Tailwind tokens, component names become React components.',
    tips: ['Name things in Figma the way you want them named in code: Button/Primary, Card/Speaker.', 'A /styleguide page is the first thing to build. It becomes the reference for every later prompt.'],
    artifact: `# DESIGN.md
References: linear.app (restraint), vercel.com/events (layout)
Palette: ground #F4F0E8, ink #1A1A1A, accent #003399, mist #8B8499
Fonts: IBM Plex Sans (body), IBM Plex Mono (meta)
Radius: 0. Buttons square.
Components: Nav, Footer, Button, Card, Badge, SectionHeader
Figma: <url> · frames "Components", "Landing / Desktop", "Landing / Mobile"`,
  },
  {
    num: '04',
    title: 'Plan',
    tagline: 'Slice into Linear tickets. One section per ticket.',
    you: 'Break the prototype into independent slices. One ticket per route or component, each pointing at its own Figma frame.',
    devin: 'Assign a ticket and a session starts. Three tickets means three sessions running at once. Progress and PR links post back to the ticket.',
    tips: ['Never hand over the whole Figma file. One frame per ticket.', 'Slice by file so parallel sessions do not collide.'],
    artifact: `DES-101  Landing page          Figma: Landing / Desktop
DES-102  Schedule + filter      Figma: Schedule / Desktop
DES-103  Speakers grid          Figma: Speakers / Desktop
DES-104  RSVP form              Figma: RSVP / Desktop

Each ticket: context · task · references · constraints · done when`,
  },
  {
    num: '05',
    title: 'Build + review',
    tagline: 'Devin builds. You do visual QA in Devin Review.',
    you: 'Open each PR in Devin Review. Look at the screenshots before the diff. Leave comments in plain language.',
    devin: 'Runs the app, screenshots at both widths, opens the PR. Reads your review comment and pushes the fix.',
    tips: ['Swap github.com for devinreview.com on any PR URL.', 'A review comment is a prompt. Same six parts, shorter.'],
    artifact: `Review checklist
1. Read the PR description first
2. Screenshots match the Figma frame?
3. Does exactly what the ticket said, nothing more?
4. Any "severe" flags from the bug catcher?
5. New dependencies? Ask why.`,
  },
]

function Icon({ d }: { d: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={d} />
    </svg>
  )
}
const ARROW = 'M5 12h14M13 6l6 6-6 6'

export default function App() {
  const [flow, setFlow] = useState(0)
  const [promptId, setPromptId] = useState(PROMPTS[0].id)
  const [active, setActive] = useState<PartId>('context')
  const [copied, setCopied] = useState<string | null>(null)

  const prompt = PROMPTS.find(p => p.id === promptId)!
  const promptText = prompt.lines.map(l => l.text).join('\n')

  const copy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 1600)
  }

  return (
    <>
      <header className="outer">
        <nav className="nav container">
          <a className="nav-brand" href="/"><img src="/cognition-mark.svg" alt="" />Design to Ship</a>
          <span className="nav-spacer" />
          <ul className="nav-links">
            <li><a href="#workflow">Workflow</a></li>
            <li><a href="#anatomy">Prompt anatomy</a></li>
            <li><a href="#compare">Good vs bad</a></li>
            <li><a href="#library">Library</a></li>
          </ul>
        </nav>
      </header>

      <main className="outer">
        <div className="container">
          <section className="hero">
            <div className="hero-grid">
              <div className="hero-left">
                <div className="eyebrow">Workshop · for designers · 2–3 hours</div>
                <h1>From Figma to a shipped site, without writing the code.</h1>
                <p className="lead">One live project. You bring the spec and the design; Devin builds, tests and opens the PRs. You review.</p>
              </div>
              <div className="hero-right">
                <div style={{ padding: 'var(--rhythm)' }}>
                  <ul className="hero-list">
                    <li><span>Project</span><span>DesignCraft conference site</span></li>
                    <li><span>Stack</span><span>Vite · React · Tailwind</span></li>
                    <li><span>Tools</span><span>Devin · Figma MCP · Linear · GitHub</span></li>
                    <li><span>Outcome</span><span>Live URL, four merged PRs</span></li>
                  </ul>
                </div>
                <p className="hero-statement">You are the <em>product manager and reviewer</em>. Devin is the engineer. You decide; it executes.</p>
                <div className="hero-links">
                  <a className="hero-link hero-link--primary" href="#anatomy">Learn the prompt <Icon d={ARROW} /></a>
                  <a className="hero-link" href="#workflow">See the workflow <Icon d={ARROW} /></a>
                </div>
              </div>
            </div>
          </section>

          {/* Workflow */}
          <section id="workflow" className="section">
            <div className="section-intro">
              <div>
                <div className="eyebrow">01 · The workflow</div>
                <h2>Idea → Spec → Design → Plan → Build</h2>
              </div>
              <p>The same lifecycle you already run as a designer. The only new part is what you hand to the agent at each step, and what it hands back.</p>
            </div>
            <div className="flow" role="tablist">
              {FLOW.map((f, i) => (
                <button key={f.num} className="flow-cell" role="tab" aria-pressed={i === flow} onClick={() => setFlow(i)}>
                  <span className="flow-num">{f.num}</span>
                  <h3>{f.title}</h3>
                  <p>{f.tagline}</p>
                </button>
              ))}
            </div>
            <div className="flow-detail">
              <div className="flow-detail-left">
                <div className="block"><h4>You deliver</h4><p>{FLOW[flow].you}</p></div>
                <div className="block"><h4>Devin does</h4><p>{FLOW[flow].devin}</p></div>
                <div className="block"><h4>Notes</h4><ul>{FLOW[flow].tips.map(t => <li key={t}>{t}</li>)}</ul></div>
              </div>
              <div className="flow-detail-right">
                <div className="eyebrow" style={{ marginBottom: 12 }}>Artifact</div>
                <pre>{FLOW[flow].artifact}</pre>
                <div style={{ marginTop: 20 }}>
                  <button className="btn btn--secondary btn--small" onClick={() => copy(FLOW[flow].artifact, `flow-${flow}`)}>
                    {copied === `flow-${flow}` ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Prompt anatomy */}
          <section id="anatomy" className="section">
            <div className="section-intro">
              <div>
                <div className="eyebrow">02 · Prompt anatomy</div>
                <h2>Six parts. Every time.</h2>
              </div>
              <p>Hover a line of the prompt to see which part it is and why it is there. Switch templates to see the same six parts in a scaffold, a Figma hand-off, a Linear ticket and a review comment.</p>
            </div>
            <div className="anatomy">
              <div className="anatomy-left">
                <div className="anatomy-tabs" role="tablist">
                  {PROMPTS.map(p => (
                    <button key={p.id} className="anatomy-tab" role="tab" aria-selected={p.id === promptId} onClick={() => setPromptId(p.id)}>{p.label}</button>
                  ))}
                </div>
                <div className="prompt-block">
                  <pre>
                    {prompt.lines.map(line => {
                      const part = PARTS.find(p => p.id === line.part)!
                      return (
                        <span key={line.part} className="prompt-part" data-active={active === line.part} onMouseEnter={() => setActive(line.part)} onClick={() => setActive(line.part)}>
                          <span className="prompt-part-label">{part.num} {part.title}</span>{line.text}
                        </span>
                      )
                    })}
                  </pre>
                </div>
                <div className="prompt-bar">
                  <span>{promptText.split(/\s+/).length} words · paste into Devin, Linear, or a PR comment</span>
                  <button className="btn btn--small" onClick={() => copy(promptText, prompt.id)}>{copied === prompt.id ? 'Copied' : 'Copy prompt'}</button>
                </div>
              </div>
              <div className="anatomy-right">
                <ul className="anatomy-parts">
                  {PARTS.map(p => (
                    <li key={p.id}>
                      <button className="anatomy-part" data-active={active === p.id} onMouseEnter={() => setActive(p.id)} onClick={() => setActive(p.id)}>
                        <span className="num">{p.num}</span>
                        <span>
                          <h4>{p.title}</h4>
                          <p>{p.summary}</p>
                          <div className="why">
                            <div><strong>Without it:</strong> {p.why}</div>
                            <div style={{ marginTop: 6 }}><b>Fix:</b> {p.fix}</div>
                          </div>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Good vs bad */}
          <section id="compare" className="section">
            <div className="section-intro">
              <div>
                <div className="eyebrow">03 · Good vs bad</div>
                <h2>Same request, two prompts.</h2>
              </div>
              <p>The left one is how most people talk to a chatbot. The right one is how you brief an engineer. Devin is the engineer.</p>
            </div>
            <div className="compare">
              <div className="compare-cell">
                <div className="eyebrow">Chatbot habit</div>
                <pre>Make the landing page look better and add a schedule.</pre>
                <ul>
                  <li>"Better" has no target</li>
                  <li>Two unrelated tasks in one session</li>
                  <li>No data shape, no layout, no reference</li>
                  <li>Nothing to check, so Devin stops when it compiles</li>
                </ul>
              </div>
              <div className="compare-cell">
                <div className="eyebrow">Brief for an engineer</div>
                <pre>{`In designcraft-site, rebuild the hero in src/components/Hero.tsx to match Figma frame "Landing / Desktop" via the Figma MCP. Headline "Design is the bottleneck." CTA "See the schedule" → /schedule. Reuse Button from src/components/ui. Do not touch other sections. Screenshot / at 1440px and 375px, confirm no console errors. Open a PR with the screenshots.`}</pre>
                <ul>
                  <li>One task, one file, one frame</li>
                  <li>Decisions made: copy, CTA, destination</li>
                  <li>Existing component named</li>
                  <li>Checkable before you ever open it</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Library */}
          <section id="library" className="section">
            <div className="section-intro">
              <div>
                <div className="eyebrow">04 · Library</div>
                <h2>Prompts for the rest of the session.</h2>
              </div>
              <p>Shorter templates that still follow the six parts. Copy and fill in the brackets.</p>
            </div>
            <div className="card-grid">
              {LIBRARY.map(item => (
                <div className="card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <button className="btn btn--secondary btn--small" onClick={() => copy(item.text, item.title)}>
                    {copied === item.title ? 'Copied' : 'Copy'} <Icon d={ARROW} />
                  </button>
                </div>
              ))}
            </div>
          </section>

          <footer>
            <div className="footer">
              <div>
                <img src="/cognition-mark.svg" alt="" width="26" height="26" style={{ display: 'block', marginBottom: 12 }} />
                <div style={{ fontWeight: 500 }}>Design to Ship</div>
                <div className="muted" style={{ fontSize: '0.85rem' }}>A Devin workshop for designers</div>
              </div>
              <div>
                <h4>Read</h4>
                <ul>
                  <li><a href="https://github.com/Jorybraun/design-to-ship-workshop" target="_blank" rel="noreferrer">Workshop source on GitHub</a></li>
                  <li><a href="https://docs.devin.ai/essential-guidelines/instructing-devin-effectively" target="_blank" rel="noreferrer">Instructing Devin effectively</a></li>
                  <li><a href="https://docs.devin.ai/essential-guidelines/good-vs-bad-instructions" target="_blank" rel="noreferrer">Good vs bad instructions</a></li>
                  <li><a href="https://devin.ai/agents101" target="_blank" rel="noreferrer">Coding Agents 101</a></li>
                </ul>
              </div>
              <div>
                <h4>Tools</h4>
                <ul>
                  <li><a href="https://app.devin.ai" target="_blank" rel="noreferrer">Devin</a></li>
                  <li><a href="https://docs.devin.ai/work-with-devin/mcp" target="_blank" rel="noreferrer">MCP marketplace (Figma)</a></li>
                  <li><a href="https://docs.devin.ai/integrations/linear" target="_blank" rel="noreferrer">Linear integration</a></li>
                  <li><a href="https://docs.devin.ai/work-with-devin/devin-review" target="_blank" rel="noreferrer">Devin Review</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom"><span>Cognition · Devin</span><span>Theme: VanSpace tokens</span></div>
          </footer>
        </div>
      </main>
    </>
  )
}

const LIBRARY = [
  {
    title: 'Investigate only',
    desc: 'Read, do not write. Good before any change to code you did not build.',
    text: 'In [repo], explain how [area] works. Do not change anything. Cite file paths. Note anything that would make [planned change] harder.',
  },
  {
    title: 'Plan first',
    desc: 'Get a plan and a file list before a single edit.',
    text: 'In [repo], propose a plan for [feature]: files you would touch, in order, and any decisions I need to make. Do not implement. Wait for my approval.',
  },
  {
    title: 'Slice from Figma',
    desc: 'One frame, one route, one PR.',
    text: 'In [repo], build [route] to match Figma frame "[frame]" at [url] via the Figma MCP. Reuse src/components/ui. Do not touch other routes. Screenshot at 1440px and 375px, no console errors, lint passes. Open a PR with screenshots.',
  },
  {
    title: 'Stack it',
    desc: 'A change that spans data, logic and UI.',
    text: 'Deliver [feature] as a stack of 3 PRs: data → logic → UI. Each passes CI on its own. Screenshots on the UI layer.',
  },
  {
    title: 'Deploy',
    desc: 'First public URL, five minutes in.',
    text: 'Deploy main as a static site and give me the public URL.',
  },
  {
    title: 'Post-mortem',
    desc: 'When a session went sideways.',
    text: 'Analyze session [link]. Where did it waste time? Rewrite my original prompt so it would have gone straight to the goal.',
  },
  {
    title: 'Teach it',
    desc: 'Make the next session cheaper.',
    text: 'Write an AGENTS.md for this repo: install, run, test, lint, folder layout, and the design rules from DESIGN.md. Create .agents/skills/test-before-pr/SKILL.md that runs the dev server, screenshots changed routes at 1440px and 375px, and runs lint and tests. Open a PR.',
  },
  {
    title: 'Review comment',
    desc: 'Plain-language QA on a PR.',
    text: 'Compared to Figma frame "[frame]": [difference 1], [difference 2]. [Component] already has the variant needed. Do not change the logic. Re-screenshot at 1440px and 375px and reply here.',
  },
]
