---
title: "AI Agents are the new SaaS"
podcast: "The Startup Ideas Podcast"
host: "Greg Isenberg"
guest: null
source: "https://www.youtube.com/@GregIsenberg (ep. 348, 2026-07-01) — audio: flightcast ep_348"
published: 2026-07-01
captured: 2026-07-02
---

# AI Agents are the new SaaS

> Solo episode. Greg's thesis: software is moving from **"help me do the work"**
> to **"do the work *with* me,"** and that shift is a wave the size of the SaaS
> boom — bigger, because the addressable market isn't software budgets, it's
> **labor** (a multi-trillion-dollar market, i.e. human capital). The whole
> episode is one clear playbook: **find the job → sell the job.** The product is
> not a tool a team *could* use; it's a **job the team no longer has to do by
> hand**, priced like labor. He walks the full path — niche, workflow-with-a-
> paycheck, shadow the human, minimum useful agent, the SaaS wrapper, sell the
> pilot like labor, productize, distribute — and closes with a day-by-day
> 30-day zero-to-100 plan.

## The core reframe (the mental model)

- **SaaS sells software. Agent-SaaS sells work.** Old pitch: "here is a tool your
  team could use." New pitch: "here is a job your team no longer has to do by
  hand" — then you sell that *outcome* as a service.
- Why bigger than SaaS: TAM shifts from software seats to **labor**. You're not
  competing with tools, you're competing with a junior employee / an agency /
  new headcount.
- The founder's idea filter, in one sentence: **"I handle this one annoying job
  better than a junior employee, faster than an agency, and cheaper than adding
  headcount."**
- Live market examples (not affiliates, just legible): **Slang AI** = AI "super
  host" for restaurants (answers inbound calls, handles guest questions, manages
  reservations, routes VIPs, alerts staff, integrates OpenTable/Yelp). **Same
  Day** = AI dispatchers/receptionists for home services (answer calls, respond
  to texts, book/reschedule jobs). In both, *the product is the job.*

## The playbook — 7 exact steps

### 1. The product is the job
Pick a *job*, not a feature. Frame everything as "this task disappears," priced
against what the human/agency/headcount currently costs.

### 2. Pick a workflow with a paycheck attached
**Start with the paycheck**: if someone already pays an employee/agency/
receptionist/coordinator/dispatcher to do it, you can sell that work cheaper and
unload it. A good agent workflow has **five traits**:
1. **It happens all the time** — daily is good, hourly is better (every inbound
   lead, call, ticket, quote, appointment, order, maintenance request).
2. **It has a clear finish line** — job booked, ticket categorized, refund
   approved, vendor scheduled, useful answer given.
3. **It touches existing software** — Gmail, Slack, Shopify, HubSpot, Zendesk,
   Stripe. Agents need tools to act *and* context to read.
4. **The edge cases are annoying but learnable** — too basic → a Zap does it;
   pure human judgment → v1 breaks. Sweet spot: **repetitive work with just
   enough judgment** that AI helps.
5. **The buyer can feel the loss** — missed calls, slow replies, dropped leads,
   empty calendar slots, expensive humans doing low-value coordination.

**First rep:** pick one niche, write down **20 jobs people complain about**
(roofers → missed calls, financing questions, insurance paperwork, appointment
reminders; med spas → lead qualification, no-show recovery, membership upsells;
Shopify → returns, exchanges, wholesale follow-ups). **Score each job on five
things:** how often it happens · how expensive the pain is · how easy it is to
know the job is done · what tools it needs access to · **who already owns the
budget.** Start with the job that has a paycheck attached.

### 3. Shadow the human *before* you build
Before any prompt or code, **watch a person do the job across 10–20 real cases.**
Have them screen-record and narrate. Ask: what makes a case *easy*? what makes it
*weird*? what did you check before deciding? where do mistakes happen? You're
reverse-engineering the *real* workflow. Example: a host answering "what time are
you open?" is really tracking when the kitchen closes, which tables fit strollers,
patio hours, VIP handling, when to route a private-dining inquiry. **The detail
is the product.** (Most founders skip this — it's the unfair advantage.)

### 4. Build the Minimum Useful Agent (MUA)
Don't build the autonomous employee (that's the Twitter demo that dies in prod).
Start with the **smallest useful version**, and climb a ladder of autonomy:
1. **Draft-and-approve** — reads context, drafts the reply/quote/summary/next
   step; a human approves. Best when there's risk/creativity/approvals.
2. **Triage** — classifies inbound work and routes it (maintenance vs billing vs
   refund).
3. **Coordinator** — moves between systems and people: checks availability, sends
   reminders, asks for missing info, keeps work moving.
4. **Bounded action** — does one thing under clear rules (book appointment, send
   follow-up, refund under $50). (E.g. Uber Eats auto-refunding a missing item.)

**Anthropic's guidance, quoted:** *many agent problems should start as
workflows.* A workflow follows a predictable path; an agent decides dynamically.
**Earn autonomy** — start with the predictable path, add judgment only where it
creates value. Ship **one workflow + one promise** ("we answer missed calls for
roofers and book qualified jobs"). One workflow that works is enough for day one —
customers are buying an agent *for the first time* and don't want all of it at
once (you're not Microsoft/Salesforce).

**Spec the agent in 7 parts:** (1) what wakes it up · (2) what context it needs ·
(3) what tools it can use · (4) what it's allowed to do itself · (5) where it
needs approval · (6) when it escalates to a human · (7) what success looks like.
Get these right and you don't ship "agent slop."

### 5. The wrapper is what makes it SaaS
The agent does the work; **the wrapper creates the trust** — and the wrapper *is*
the SaaS. Customers need a **control room**: logs, approvals, controls, handoff
rules, a way to **test the agent before it goes live**, and a way to see *why* the
agent did what it did. The agent lives in the phone system / inbox / Slack / CRM;
the dashboard can be simple, but the control room is non-negotiable. (Restaurant
agent → call summaries, reservation outcomes, human-handoff log. Property agent →
tickets created, vendor routes, tenant updates, owner approvals.)

**Evals = the gym.** Before promising autonomy, build a small test set: take **50
real examples** of the job, mark the right answers, run the agent against them
(did it classify right? ask for the missing info? use the right policy?). Every
time you change prompt/model/tools/workflow, it goes back through the gym.
**Evals double as a killer sales asset:** *"We tested this on 50 of your old
maintenance requests. It routed 42 correctly, flagged 6 for human review, made 2
mistakes — here are the 2 and here's the fix."* Transparency builds trust,
especially with owners of "boring" businesses.

### 6. Sell the pilot like labor, then productize
Fastest path: a **pilot where you manually do the work with AI**, then productize
the repeated parts. Start with **3 customers in ONE niche** (same workflow, same
pain) and **sell the outcome** ("we will answer and qualify your missed calls").
Charge a **setup fee + simple monthly fee**; add usage/outcome pricing later once
you understand the value. **Pricing examples:**
- $1,500 setup + $1,000/mo for one workflow
- $2,000 setup + $30 per qualified appointment (outcome-based)
- $3,000/mo up to 500 handled tickets

The exact price matters **less than the learning**: what does the customer value,
where does the agent break, what needs approval, **what would they miss if you
took it away?** Then build the product around the **repeated pattern** — if every
roofer needs the same emergency-call script / service-area check / financing
question / estimate follow-up, that's a product. **You earn the software by doing
the work first.** (Greg's bet: **outcome pricing is the future** of agent-first
software — but don't jump straight there; earn it with patience.)

### 7. Distribution — own one workflow, publicly
The tactic working in real time: **workflow teardowns.** Show the **old way** (a
call comes in, nobody answers, the customer calls the next company; or the CSR
asks five questions, checks the calendar and service area, books it, writes notes,
sends a reminder — and forgets the follow-up → the owner's heart breaks). Then
show the **agent way** (call comes in → agent answers → asks the right questions →
checks service area + urgency → books → updates CRM → sends confirmation → flags
edge cases for a human). **Sell painkillers, not vitamins** — make fun of the old
way, show the new way, and the owner *feels* the pain.

**Own one workflow so the internet associates you with it:** make the checklist,
the benchmark, the teardown; post ~50 examples of the one workflow. You have to
be in the content game (uncomfortable but that's where the opportunity is). Then:
**pick the winning formats and put paid ads behind them.** Focus on **one
platform** to start.

## The 30-day zero-to-100 plan (day-by-day)

**Week 1 — find + prove the workflow (manually):**
- **Day 1:** pick a niche where *missed work costs money* (home services,
  property management, insurance agencies).
- **Day 2:** interview 10 operators; have them screen-share the workflow; keep it
  as research and just watch (you can pay them).
- **Day 3:** pick one workflow with frequency, pain, software access, a clear
  success metric.
- **Day 4:** write the agent spec (trigger, context, tools, rules, handoffs,
  evals).
- **Day 5:** run it **manually with AI** (Claude/ChatGPT, copy-paste context,
  draft output, human approves) — test whether AI helps *before* you build.
- **Day 6:** build the smallest useful version (draft-and-approve or triage is
  usually enough).
- **Day 7:** create the eval set from 50 real examples.

**Week 2:** sell **two pilots** in the same niche.

**Week 3:** add the product wrapper (logs, approvals, settings, analytics,
handoffs) — use AI to build the software (Greg: Claude Design, and Fable to code
it up if live).

**Week 4:** publish workflow teardowns, turn the pilots into proof, double down on
the content strategy. **Build an audience the whole way through.** By end of week
4 you have formats that work and you know where to spend to acquire customers.
**Months 2–3:** learn LTV, find the channels that work, double down.

## Key takeaways (Greg's own compression)

- Agent-SaaS **sells work as a service; the product is the job**, priced like
  labor.
- Start with a workflow that **already carries a paycheck**: high frequency, clear
  finish line, existing software, learnable edge cases, felt pain.
- **Shadow a human across 10–20 real jobs** before writing a single prompt — the
  detail is the product.
- Ship the **minimum useful agent** (draft-and-approve / triage / coordinator /
  bounded action) and **earn autonomy** over time.
- The **wrapper** (logs, approvals, evals, analytics) creates trust and turns
  automation into real SaaS.
- Win distribution with **workflow teardowns**: old way vs agent way, sell the
  painkiller.
- The whole thing in one line: **find the smallest painful workflow that repeats
  all day in a niche you understand, and make it disappear.**
