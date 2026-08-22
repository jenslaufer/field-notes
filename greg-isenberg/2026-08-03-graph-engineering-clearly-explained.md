---
title: "Graph Engineering Clearly Explained"
podcast: "The Startup Ideas Podcast"
host: "Greg Isenberg (solo)"
source: "https://episode.flightcast.com/01KZ49YPG8H70NMAFDDCMTTXB4.mp3 (publisher feed rss2.flightcast.com/ordbkg8yojpehffas7vr7qpc.xml)"
published: 2026-08-03
captured: 2026-08-04
duration: "26:28"
transcript: "local (faster-whisper base.en, assistant tools/podcast-transcribe.py) — 237 segments"
related: "2026-07-13-making-money-loop-engineering.md (loops), 2026-07-01-ai-agents-are-the-new-saas.md (product is the job), marketing-agent-build-prompt.md"
---

# Graph Engineering Clearly Explained

> **Prompt engineering is how you ask AI a better question. Context engineering is how
> you give AI better information. Graph engineering is how you design the work *around*
> the AI** — so the whole thing stops living inside one giant chat. A graph is jobs
> connected by arrows, with shared state moving between them. The point is not to build
> the biggest graph; it is to build **the smallest graph that raises quality**.

**Source note:** written from a **full local transcription of the audio** (26:28,
faster-whisper `base.en`, ~2.5 min CPU on the mini-PC), not from the published show
notes. Solo episode — one speaker, so attribution is unambiguous here. Quotes are from
the transcript. ASR mangles product names; corrected silently where certain (`Prop
engineering` → prompt engineering, `land graph`/`Langraph` → LangGraph, `N-A-N` → n8n,
`cloud code` → Claude Code, `autogen graph flow` → AutoGen GraphFlow, `teal draw` →
tldraw, `graph rag` → Microsoft GraphRAG).

## The frame

Greg opens sceptically about his own topic: *"is this a real thing or did we just invent
another phrase to make everyone feel behind?"* — listing prompt engineering, context
engineering, agent engineering, vibe coding, loop engineering as the same viral-term
treadmill. His verdict: this one is useful, because it changes how you think about
getting work done rather than how you talk to a model.

The worked contrast he uses throughout: **"should I build this idea?"**

- **Chat version.** One model, one pass, decides what mattered, researched the market,
  interpreted the evidence, wrote the recommendation *and graded its own confidence*.
  *"That's a lot of trust to put into one blob of text. In some cases you might spend
  years of your life based on this one question."*
- **Graph version.** A planner splits the question into angles → researchers work
  customer / competitors / distribution / pricing / risk **in parallel** → a **skeptic**
  tries to kill the weak findings → a **merger** turns surviving evidence into a
  one-pager → **you approve** before acting.

## Vocabulary (the whole of it)

- **Graph** = jobs connected by arrows.
- **Job** = one step in the workflow. **Arrow** = what happens next.
- **State** = the shared notes moving through — *"what does the system know so far?"*

## Knowledge graph vs agent graph — where the confusion comes from

| | Purpose | Example |
|---|---|---|
| **Knowledge graph** | how *information* connects | this customer works at this company · this company uses this product · this issue relates to this feature · this feature is owned by this team |
| **Agent graph** | how *work* moves | planner → parallel researchers → skeptic → synthesizer → human |

Knowledge graphs matter because plain RAG *"retrieves chunks of text that look similar to
the question, but struggles when the answer requires connecting different people across
companies and topics and claims and events"* (he name-checks Microsoft GraphRAG). **This
episode is about agent graphs** — the version a founder/creator/operator can start using
today. Best systems eventually use both.

## When to use one

Use a graph when the work has **multiple steps**, **some steps can happen at the same
time**, and **the final output needs checking before it matters**.

- **Don't**: brainstorm 10 names, summarise a short email.
- **Do**: deep research, go-to-market plan, support triage, code review, sales-call prep,
  customer-feedback synthesis, recurring content production.

## The diamond, worked: "should I launch AI bookkeeping for Shopify merchants?"

1. **Planner** — names what must be understood: customer pain, competitive landscape,
   GTM wedge, pricing pressure, risk.
2. **Three researchers in parallel** (they don't depend on each other):
   - *Customer* — QuickBooks or spreadsheets? hiring bookkeepers? annoyed at tax time?
     or do they just want the mess cleaned up once a month?
   - *Competitors* — existing Shopify bookkeeping tools? accounting firms doing it
     manually? App Store products? freelancers on Upwork/Fiverr doing work software
     could partly replace?
   - *Distribution* — where do Shopify merchants hang out, what newsletters, which
     agencies already have trust, which app categories do they search, **what search
     terms reveal buying intent**?
3. **Skeptic** — which claims are actually supported? which evidence is stale? which
   competitors are being ignored? **where are we confusing pain with willingness to
   pay?** where did the AI sound confident without proving anything?
4. **Merge** — pursue / pause / kill, the wedge, the first customer, what to test this
   week, **and what evidence would change our mind**.
5. **Human gate** — record a landing-page teardown, interview 10 Shopify agency owners,
   build a tiny cleanup-cost calculator, or decide it's too crowded and move on.

> *"Graph engineering does not magically make the decision for you. It gives you a better
> way to produce the evidence you use to make the decision."*

**The line the show notes reduce to a bullet:** a lot of AI research fails because the
same model that writes the answer also grades it — *"like asking someone to write their
own performance review and then being shocked when they describe themselves as a
visionary."* In a good graph, **checking is its own job**.

## Three levels of implementation

**Level 1 — run it manually.** *"I don't know why more people don't do this."* Give each
job its own lane; you are the router. Draw it on a blank Excalidraw/tldraw board: final
outcome at the top, then the jobs (planner, customer researcher, competitor researcher,
distribution researcher, skeptic, merge, human approval), then the arrows.

> *"If the manual version doesn't produce way better work, automating it will just
> produce mediocre work way faster."*

**Level 2 — a repo where each step writes files.** Claude Code, Codex, or plain files:
planner writes `plan.md`, researchers write `customer.md`, `competitors.md`,
`distribution.md`, skeptic writes `review.md`, merge writes `recommendation.md`. The
payoff is a **paper trail** — you can see what happened, compare versions, and reuse the
structure next week.

**Level 3 — orchestration.** LangGraph when you want *state checkpoints, persistence,
human-in-the-loop approvals, reliable control*. AutoGen GraphFlow for *sequential +
parallel steps, conditional branches, loops*. n8n / Make.com when the graph touches
everyday systems — Slack, email, Airtable, CRM.

> *"The tool is not the point. If you automate a workflow you do not understand, you get
> a mess. If you understand the workflow first, automation becomes super obvious."*

He offers an advanced LangGraph/Claude Code tutorial "if people are interested" — i.e. it
does not exist yet.

## Three ready-made graphs

- **Support** — classify the issue (billing / confusion / bug / cancellation risk) →
  check account context (new? high value? written before? frustrated?) → search docs and
  internal policy → draft reply → checker reviews accuracy, tone, risk → **human approves
  anything touching refunds, account changes, angry customers, legal risk, or promises
  the company would regret.** *"The support ticket is not the real workflow."*
- **Content** — research → thesis → examples → hook → script → checker (are the examples
  specific? does the pacing work? does the hook earn attention? **does it sound like a
  person?**) → branch into titles, thumbnails, captions, B-roll.
- **Coding** — plan → one agent edits → another reviews the diff → another runs tests →
  another checks the UI in a browser → another hunts edge cases → **human approves the
  PR.** *"That's basically where all these AI coding tools are going."*

## The trap: bigger is not better

> *"More agents don't automatically mean better output. Sometimes more agents mean more
> noise. Sometimes it means five AI workers confidently repeating the same wrong idea.
> Sometimes the system spends more time coordinating than thinking."*

He explicitly calls out the viral giant graphs on X as the wrong target. A good graph:
removes **fake waiting** (steps queued in sequence that don't depend on each other),
separates workers from checkers, puts the human gate where mistakes are expensive, **stops
when the answer is good enough**, and leaves behind useful state.

## The part that is nowhere in the show notes: graphs produce memory

> *"The real compounding value of graph engineering isn't just that one task gets better.
> It's that your work starts producing memory. Every research graph creates better
> customer notes. Every content graph creates better examples and audience insights. Every
> support graph creates better product feedback. **That's where the context becomes the
> moat** — the graph produces the work, but it also produces the memory that makes the
> next graph smarter."*

## The starting rep (his literal instruction)

1. Pick **one** workflow you already run weekly with AI.
2. Write the final output in one sentence — *"I want a one-page recommendation on whether
   this startup idea is worth testing."*
3. List the jobs a great human would do.
4. Draw arrows only where work **actually** depends on a previous step.
5. Add **one** human gate before the expensive decision (light for a private memo; strict
   for a customer email, public post, code deploy, refund, or anything touching
   production data).
6. Run it manually once. *"You don't have to create this giant automation project."*
7. Delete the fake waiting, run the independent jobs in parallel, add a skeptic, merge the
   survivors, approve the final step yourself.

## Relevance for Jens

**Honest genre first: this is a concept card, not an action list.** No tool to buy, no
channel, no money thread of its own. Most of it describes an architecture already running
here — which makes the useful reading *"where does my setup violate his rules"*, not
*"what do I build next"*.

- **Already at level 2, by accident.** `agent-tasks/*.yaml` → PR, `state/drafts/*.md`,
  `field-notes/`, `state/memory/` — the markdown paper trail he prescribes as the
  intermediate level is the assistant's normal operating mode. His level 3 is also
  present: `parallel()` / `pipeline()` in the Workflow harness are literally "arrows and
  fake waiting", and the actor/critic skill pairs (`copywriting-actor` +
  `copywriting-critic`, `research-actor` + `research-critic`, …) are his
  "separate the writer from the checker".
- **The human gate is already where he says to put it** — never merge, never push to main,
  never spend money. That rule was written for a different reason and lands on the same
  spot.
- **The one rule this setup does break: "the smallest graph that raises quality."** The
  July retro measured 72 merged non-Dependabot PRs against two money-near events that
  needed almost no code. That is his *"more time coordinating than thinking"* failure mode
  in the real numbers, not as a metaphor.
- **The strongest claim to actually test: the skeptic as its own job.** It is used here for
  code (quality-gate) but not for *judgement* — no session runs a step whose only task is
  to kill its own findings before they reach Jens. The nearest cheap rep: the standing
  research/idea questions (partner channel, ANÜ decision, distribution) get a dedicated
  refutation pass before the recommendation, not after.
- **"Where are we confusing pain with willingness to pay?"** is the sharpest single
  sentence for the current pipeline — it is the exact question that FK/HC (4 clicks in 28
  days) and the paid FinGrab channel (no verdict reachable) failed, and the one the
  E-Rechnung partner channel has not been asked yet.
- **"Context becomes the moat"** is the strategic payload and it is *not* in the show
  notes at all: it is the argument for `state/memory/` + `field-notes/` being an asset
  rather than housekeeping. Worth keeping in mind the next time a session is tempted to
  compact them for a byte target.

**What is genuinely new here vs. what is validation:** new = the memory/moat argument, the
"delete fake waiting" move, and the anti-pattern warning. Validation = everything else.
Nothing in this episode justifies building anything.
