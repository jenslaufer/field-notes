---
title: "FDE: The $1M/Year AI Job Explained"
podcast: "The Startup Ideas Podcast"
host: "Greg Isenberg"
guest: "Vas (Varick Agents)"
source: "https://www.youtube.com/watch?v=zXysLUTLjw4 (published 2026-07-20)"
captured: 2026-07-21
resource: "The FDE Blueprint — https://startup-ideas-pod.link/fde-starter"
---

# FDE: The $1M/Year AI Job Explained

> The **Forward Deployed Engineer** (FDE) is, per the guest, the hottest role
> in tech right now — **$150K base + equity up to ~$1M/year**. The thesis:
> every company can now *buy* the same frontier intelligence (Claude Code,
> Codex, Cursor, Copilot are the same stack everywhere), so intelligence is
> commoditized and can no longer be the moat. **The edge moves to deployment**
> — where, how, and why a business applies AI to *its* specific processes.
> That bridge between messy business reality and the model is the FDE. The
> role, popularized by **Palantir**, is "consulting for the software/AI age":
> embed on-site, learn the real workflow, then run the loop
> **audit → evals → deployment**, over and over. The million-dollar hire is
> the rare "art + science" person who can do **both** sides — consulting-grade
> communication AND production engineering. Ends with a **30-day plan** to
> "do the job before you have the title."

## Why the role exists now (the core argument)

- **Intelligence is commoditized.** A frontier model drops almost weekly
  (episode name-checks Kimi 3, Fable 5, GPT "5.6"). Talk to 50 enterprises and
  they run the *same* stack. If everyone can buy the same tap, the tap isn't
  the advantage.
- **The advantage is deployment.** Every company's processes, software, and
  exception-handling are different. Someone has to decide *where intelligence
  belongs and where it doesn't*, and wire it into that company's context. That
  someone is the FDE.
- **Failure evidence:** the "slap AI on everything" era ("token maxing") led to
  hallucinations and the widely-cited **"95% of GenAI pilots fail"** stat.
  War story: a C-suite exec burned a **$10M model budget in 3 months** (meant
  to last a year) by giving everyone token-max access — and it *didn't move
  the business*, because they never invested in forward deployment.

## The three stages of an FDE engagement

1. **Understand the business reality** — how work *actually* happens, not the
   SOP. The documented process is rarely the real one. "An email arrives"
   really means: 40+ senders, none formatted alike, half are exceptions, data
   split across PDF/screenshot/Excel/forwarded thread — and the routing rules
   live *in one person's head*. This is where the bulk of the time goes.
   Prefer **on-site** (or shadowing): a 1-hour meeting gets you the imagined
   job; sitting for the full day gets you the real one, plus the relationship
   that surfaces the undocumented exceptions. (McKenzie sits with the miners.)
2. **FDE judgment** — decide where the LLM belongs. In a 10-step workflow,
   maybe only 3 steps need non-deterministic judgment (route those to an LLM);
   the rest is deterministic software (if/else, API calls). **Best solution =
   mostly deterministic software + selective LLM judgment + human-in-the-loop
   approval.** Knowing which is which — and the ROI/risk trade-off — is the
   whole skill.
3. **Build & deploy the system** — varies wildly. Some FDE roles are
   config/SQL on a platform (Palantir ontology); others are full production
   code. Either way you must understand the software deeply, because when prod
   breaks, "it's your ass on the line."

## The two kinds of judgment (why it's a rare, premium role)

- **Left side (consulting):** workflows, cost, incentives, risk, adoption,
  business value, internal politics. McKinsey/BCG/Bain engagement managers are
  strong here.
- **Right side (engineering):** models, systems, APIs, data, reliability,
  evals, guardrails, harnesses, fine-tuning. Software engineers are strong
  here.
- The **$1M hire is the *best* of both, not the average** — "art + science,
  and you can speak both." Rare because science people cluster on science and
  art people cluster on art. But — the guest's whole point — **it's learnable
  with a clear road map.**

## The delivery loop: audit → evals → deployment

- **Audit** = map the real workflows, bottlenecks, judgment points, exception
  handling → produce an **operating map + ROI/priority matrix** (what's worth
  automating vs. not) → then show *how* you'd build it and the expected ROI.
  Claimed value: clients say the audit was **"worth 10× what they paid,"**
  "better than McKinsey," because AI is so new nobody else maps it cleanly.
  The audit also **builds trust** and gets their "creative juices flowing."
- **Naming tip (marketing):** people have an allergic reaction to the word
  "audit" (they hear "tax audit"). The guest's agency **rebranded "audit" as
  "sprint"** (a *design sprint*) — same thing, sold far better.
  *(Note: this is exactly Jens' "KI-Sprint" framing — see insights.)*
- **Evals** = turn non-determinism into evidence. Build a **golden data set**
  (easier when you have thousands of past examples, e.g. 10k prior emails or
  5k prior decks → codify "what good looks like"). Run e.g. 50 cases: 41 pass,
  investigate the 9 (5 missing data, 4 wrong record) → fix the system. Always
  bake in **human-in-the-loop feedback** so the harness keeps improving.
- **Deployment** = **integrate with what already exists; don't force
  migrations.** A client spent years + millions moving to NetSuite — telling
  them to move off it = "get lost." Build *on top*, connect NetSuite ↔
  Salesforce/SAP/Concur/Gong, then scale trust: **shadow mode → increasing
  autonomy → production.** "Fish with dynamite": pitch "your stack works, I'll
  make it better/cheaper/faster," not "flip a switch, AI runs your business."

## Sales psychology (the part most engineers miss)

- You are a **risk** to the buyer. Status quo is safe; you changing things and
  failing is "a terrible look on me." **De-risk everything.**
- **Do the first audit for free** to get in the door; get paid only when you
  prove **measurable value**. Your first 1–3 clients teach you so much they're
  **worth more to you than you are to them** — after that, start charging.
- People at companies **don't want to get fired — they want to get promoted.**
  Help *them* look good at their performance review by driving value
  cost-effectively. That, not a marginally-better ERP, is what closes.
- **Model choice:** the value is *not* in being model-agnostic when you start.
  **Pick one ecosystem + one agent-building platform, get excellent, then
  branch out.** Sommelier analogy: understand what the client wants *first*,
  then serve — don't hand everyone a pinot noir. (Same failure mode as "95% of
  pilots fail.")

## The three (and only three) business metrics

Every agent must be measured on: **revenue uplift · risk mitigation · cost
savings.** Nothing else counts to a business.

## The 30-day plan ("do the job before you have the title")

Because you can't get embedded with a client until you *are* an FDE, spend 30
days building proof solo. Pace flexible — "space it out as you need."

- **Week 1 — build an agent that completes one real loop.** Ask ChatGPT for a
  granular back-office workflow (finance/HR/procurement/logistics/sales), then
  build for it. Cover, ~a day each: agent looping → tool use → guardrails →
  context & memory → **audit trail** (if you can't show the client what the
  agent did, they'll never trust it — this is a software-engineering problem).
  Definition of "agent" used: *"I can prompt like an idiot and it still
  happens"* — repeatable background motion, not one perfect prompt.
  Checkpoint: a working agent with tools, guardrails, memory, full audit trail
  for one task.
- **Week 2 — make it recover.** Defined JSON schema (not free text), schema
  validation, **failure modes / exception handling.** "There's one way it goes
  right and a thousand ways it goes wrong — if you only build the happy path
  you're worth nothing; solve the exceptions and you're worth a million times
  more."
- **Week 3 — make it measurable & economical.** Retry logic, golden data set,
  eval improvement over time, and **cost optimization** — push subtasks to
  cheaper models (Gemini Flash etc.) where accuracy holds. Measure against the
  three buckets (revenue/risk/cost).
- **Week 4 — defend it like an FDE.** Rehearse it two ways: **as an engineer**
  (architecture, decisions, accuracy 70%→95%) and **as a VP** (problem,
  outcome, evidence, risk, economics). **Pitch it to real businesses this
  week** — they'll tell you point-blank what you got wrong and how they'd want
  it. That feedback becomes your first real audit.

## Named tools / references

- Stack everyone uses: **Claude Code, Codex, Cursor, GitHub Copilot.**
- Enterprise software mentioned: Salesforce, HubSpot, Gong, Chili Piper,
  Apollo, Clay, NetSuite, SAP, Concur, Expensify, Workday.
- Models: Kimi 3, GLM 5.2, Gemini Flash, "Muse Spark", Llama 4 (as cheaper /
  open-source options to benchmark).
- Palantir (origin of the FDE model). Corey Ganim's prior episode (selling
  audits) is explicitly referenced. Guest's companies: **Varick Agents** +
  agency **LCA**. Resource: **The FDE Blueprint** (link in frontmatter).

---

## Insights for me (Jens) — honest, not an echo

1. **This is the *delivery* half of the exact plan I already have queued — and
   it upgrades the positioning.** My KI-Assessment/KI-Sprint plan (waiting #75
   + the Aschaffenburg draft) came from Corey Ganim's episode, which this one
   *explicitly references*. Ganim = **acquisition** (local, zero-capital,
   $999 assessment tripwire). Vas = **delivery** (audit → evals → deployment,
   build-on-existing, the 30-day agent-hardening craft). Together they're a
   complete playbook. And the reframe matters: "**Forward Deployed Engineer**"
   is a hotter, more premium label than "KI-Berater" — same work, better price
   anchor. My "KI-Sprint" name is literally the guest's own audit→sprint
   rebrand, arrived at independently. That's confirmation, not coincidence.

2. **I am unusually close to the rare "art + science" hire.** The whole episode
   says the $1M profile is rare because it needs consulting communication AND
   production engineering in one person. I'm data analyst + ML engineer +
   fullstack + I already run three agent systems (Fabrik, assistant,
   agent-tasks) end to end. The gap the guest names for engineers is the
   *left* side (business politics, adoption, selling promotion-not-migration) —
   which is precisely my weaker muscle and worth deliberate reps. This isn't
   "learn to code an agent"; for me it's "learn to sit in the room."

3. **"Audit for free → paid on measurable value" fixes my no-audience,
   no-ad-budget problem.** My KI-Sprint stalled on thin DE paid-search demand
   and ad spend (#75). The guest's answer needs *neither*: free audit to
   de-risk, first 1–3 clients as paid tuition. Combined with Ganim's local
   channels (IHK Aschaffenburg talk pending since March, office hours,
   accountant partnerships), this is a demand path that doesn't require me to
   buy clicks or have a following — my standing constraint.

4. **The three metrics are my qualifier — and my kill-switch.** revenue uplift
   / risk mitigation / cost savings. If a prospect's pain doesn't map to one of
   these, walk. This is a cleaner filter than my instinct to build the
   technically interesting thing. It also tells me what the *report/PDF* must
   lead with (I already build ROI-slide artifacts well — Besichtigungsbogen,
   the Ganim report template).

5. **"Build on top, don't force migration" is a real technical stance I should
   adopt as the offer.** The German Mittelstand is DATEV/Lexware/SAP-locked and
   terrified of migrations. Positioning = "I make your existing stack smarter"
   (an agent layer over NetSuite/DATEV/HubSpot), not "switch tools." That is
   both more sellable *and* plays to my integration strength — and it's the
   opposite of the doomed "rip-and-replace" pitch.

6. **Honest Taleb check (unchanged): still a service, still an hours ceiling.**
   FDE work is convex in *rate*, not in *scale* — it's premium Bahn-A cashflow,
   not the exit vehicle. BUT: the money is real, the demand exists ("so much
   demand, so few who can do it"), and one or two FDE engagements would clear
   the 5k/month short-term goal and *fund* the convex product bets. The trap to
   avoid: letting it eat all my time so no build-once/sell-many bet ever ships.
   One lane, capped — same discipline as the concierge cap in the Ganim note.

7. **The 30-day plan is a *portfolio artifact* I could ship this week, mostly
   on the assistant stack.** A hardened back-office agent (JSON schema, failure
   modes, golden-set evals, audit trail, cost-optimized model routing) with a
   two-audience writeup (engineer + VP) = exactly the proof the guest says
   opens doors — and it doubles as a live demo for the KI-Sprint landing page.
   Natural target: **document/invoice extraction → DATEV**, my home turf, even
   though DE *search* demand for it is thin (#75) — as a *demo asset* it sells
   the sprint, it doesn't need to be found on Google. If Jens says go, this is
   the one buildable thing in the whole thread that needs no client and no ad
   budget.
