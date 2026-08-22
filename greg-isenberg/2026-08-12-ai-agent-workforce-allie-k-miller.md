---
title: "My top secrets to running an AI Agent Workforce"
podcast: "The Startup Ideas Podcast"
host: "Greg Isenberg"
guest: "Allie K. Miller (ex-AWS, ex-IBM; AI-First Index / areyouaifirst.com)"
source: "https://www.youtube.com/watch?v=EzQAgnjTq2k"
published: 2026-08-12
captured: 2026-08-15
duration: "48:29"
transcript: "kome.ai API on the YouTube video (8,841 words, hasMore=false — full episode)"
related: "2026-07-01-ai-agents-are-the-new-saas.md, 2026-07-13-making-money-loop-engineering.md, 2026-08-03-graph-engineering-clearly-explained.md, 2026-02-04-last-30-days-skill.md, 2026-07-29-software-is-dead-unfair-advantage.md"
---

# My top secrets to running an AI Agent Workforce

> Allie K. Miller runs **34 agents** — one AI chief of staff plus six directors — and her
> opening claim is that the phrase everyone uses is already wrong: **you do not manage an AI
> workforce, you enable it and wait for escalations.** The episode is the operating manual for
> that shift: give agents goals instead of tasks, widen their scope while keeping the risk tier
> fixed, hire roles that could never exist in a human org, and let an agent watch the workforce
> for friction. Two ideas travel beyond her setup: **AI as a watchdog with insight-to-action**
> (which she says almost nobody is doing), and **build the factory, not the thing** — one level
> of abstraction below the product you were about to ship.

**Source note:** written from the full YouTube transcript (kome.ai, `hasMore=false`, 8,841
words), not from show notes. Two speakers; the `>>` markers are unreliable, so attribution
below follows content, not markers.

**ASR garbles resolved, and two left open.** The machine transcript writes the guest as
`Alli K. Miller` / `Ally` — she is **Allie K. Miller** (verified: ex-Amazon/AWS, ex-IBM, the
16-dimension AI-First assessment is public at [areyouaifirst.com](https://www.areyouaifirst.com/)).
Also `Verscell` = Vercel, `Clawude`/`clawed` = Claude, `century tower.com` = sensortower.com,
`repletable` = Replit/Lovable (near-certain from context: "click and drag interface"). **Not
resolved, so not quoted as fact:** `cloud tag` (*"I think cloud tag is a big help here"* …
*"I think it's a mess to set cloud tag up"*) — a product name the model mangled; and `Boris`, cited for
a taxonomy of future employee types including "the maintainer", is named without a surname.

## 1. The mindset shift: managing → enabling

> *"I feel like the term managing agents is wrong."*

Her argument: "managing" implies *Susie go there, Betty go there*. What she actually does sits
three rungs higher — she sets up the infrastructure and the agents figure out how to execute
inside it.

> *"I feel like I'm moving from managing to like waiting for escalations… I'm moving away from
> delegating and more just deciding what should or shouldn't happen."*

The role she describes is **liability and critical thinking**: final say, not assignment.
Greg's counter is the sharper framing of the same thing — nobody *wants* to manage; managing
people is the part you were trying to buy your way out of. Her split from running ~100 people
at AWS: keep the part that made people break through their ceiling, delete the admin.

Anyone still writing "how to manage your agents" is, in her words, doing **early-2026 talk**.

## 2. The three-word prompt

The best prompt she has written for her workforce is **"do smart things."**

It only works because of what sits underneath it: her agents have access to every context
doc — business, friends and family, 2026 personal and business goals — plus meeting
transcripts, email, calendar, Notion, Stripe, Supabase, GitHub. Several times a day she wants
something to look across all of that and act.

> *"I was already functioning at the limit of my own imagination in my business… why is
> everything that they're working on initially prompted by me?"*

Two things make this more than a cute anecdote:

- **It is a capability claim with a date.** A vague prompt like this was useless a year ago;
  she says frontier-tier models (she names Fable 5 and GPT 5.6) now respond to it usefully.
- **Scope widened, risk did not.** Asked whether she just handed over control:
  > *"the tier of risk has stayed the same but the width has expanded."*
  She still reads every outgoing email. The agents got more breadth, not more permission.

**Goals, not tasks.** Every quarter she runs a **goals review with the agent workforce**; the
goal documents live on the desktop and are duplicated into Drive so cloud workflows can read
them. The point: when an agent invents net-new work, it should invent it *toward a goal*.

> *"It would be extremely limiting if you only treated this thing as an engineer when it could
> be the greatest product lead you've ever had."*

**The proactivity ladder** (she credits Alex Lieberman's "pyramid of proactivity", five
levels): level 4 = *I already solved this, here are the trade-offs*; level 5 = *I already
solved it, here is how I'll handle it if it goes wrong, here are the next steps*. Greg's
parallel three-tier employee model: doesn't finish tasks → finishes tasks well → finishes
tasks well **and invents the next ones**.

## 3. Proactive agents: defined vs undefined workflows

Her 2025-into-2026 work was **trigger-based** proactivity. Worked example: drop a screen
recording into one folder → transcript is generated → **nine social posts** in her voice for X,
LinkedIn and Instagram Reels scripts. That is automation, and it is solved.

> *"What I think is more interesting for the back half of 2026 is proactive of undefined
> workflows."*

For an undefined workflow, agent or human needs four things: **the goal / north star · tool
access · permission to use the tools in a way that actually removes work · a sense of what
would normally trigger that action.**

**The context that is missing is the uncodified kind.** Meetings, mail and Slack are already
readable; what is *not* written down anywhere is the judgement — *this client thinks the
problem is workflows under the CMO, but it's actually reskilling*. So she has AI prompt her
every evening to **dictate** into a running diary (dictation is ~4× faster than typing; some
days five minutes, some days forty), which lands in her personal wiki as agent context. At the
time of recording: **86 entries**.

Her failure example is exact and familiar: an agent reported *"Greg confirmed that interview"*
— he hadn't, the scheduling was happening over iMessage and that connector was broken.
**Months** of that kind of repair to get where she is.

## 4. The org chart: don't hire 2015 job titles

Shape today: **1 AI chief of staff (Simon) → 6 directors** (education, client work, operations,
marketing, product, and Phoebe) → **34 agents total**, all named after *Friends* characters.

The load-bearing insight is about naming:

> *"That is operating in 2015 world if I give all of them job titles that existed in 2015."*

If you staff CMO → CPO → front-end engineer → back-end engineer, you have rebuilt a 2015 org
and capped yourself there. The alternative is the one economics gives you for free:

> *"All of these employees basically cost zero dollars and so at the margin I can hire any
> flipping person I want to."*

Two roles that no human org would fund, and both are the interesting part of the episode:

- **Phoebe — the weirdo in the corner.** A final layer over generated output whose only
  question is *how do we 10× this?* Her model for it is a former Amazon colleague she wishes
  would interrogate her under a bright light and ask "how would you 10× that?"
- **Toby — the friction watcher.** Simon's assistant,
  > *"whose only job is watching the AI workforce work, take down notes, what still has
  > friction"*
  — and, crucially, **who needs access to what**. Example: *every time you correct this one
  agent's output, have you thought about giving it access to this?*

Getting to this org required something uncomfortable: taking stock of assumptions about how you
have worked for decades and being willing to say *that thing I've done for almost 40 years
should change*.

## 5. How to start (the ramp she actually recommends)

Counter-intuitively: **start with traditional job titles.** The AI-native org is discovered, not
designed. Her ladder:

1. What does it feel like to work with **one agent**?
2. One agent doing things **proactively on my behalf**.
3. **Two agents** on one task — one directing or routing to the other.
4. **A workforce** + a mission control view of how work moves.

Only at step 4 do you learn the things that matter: how they trade notes, how context passes,
what must run in parallel, which agent never needed those tools, and **which agent can run on a
smaller model** — *"not everything needs opus"*; her sub-agents run on Haiku and Sonnet.

**Bootstrapping is one prompt.** Tell it: I'm a founder, here's my product, team size, location,
goals — *interview me, we're building an AI workforce that saves me 5 hours a week, caps my
meetings at 15 hours, and gets me to my raise by October*.

> *"You can set that up and connect into tools in under three hours."*

Going from "agents exist and have markdown files" to "90%+ level" is iteration and is specific
to each person. Her one piece of advice for that phase:

> *"Stop relying on only yourself to find these blockers."*

She also has a **Slack channel ("Loop Alley") where her human team talks to her AI workforce** —
a teammate asks whether a client replied to Allie's email and the workforce answers, instead of
the teammate waiting five hours for her. She calls this **multiplayer**, and it is the part she
says people underrate most.

## 6. Opportunity 1 — AI as a watchdog (with insight-to-action)

> *"AI as a watchdog is one of the best use cases that exists right now and almost no one is
> doing this."*

Watchdog examples: Slack for **duplicative work**, calendar for **conflicts**, meetings for
**where disagreement is happening**, cross-functional **gap analysis** (she notes contract
before/after comparison was the killer demo ten years ago and nobody has moved it forward).

The qualifier is the useful half:

> *"I think dashboards are dumb, but I want visibility with anomaly detection or insights."*

Not *here is your follower count* — but *what are people reacting to, what is not performing,
what should I do tomorrow, write me the script for it.*

**Why it is arbitrage:** of all AI users, the share who pay is small; the share using Claude
Code or Codex is *minuscule*. A basic working workforce already puts you in the top 1–5% of
users. *"It feels like I'm operating a company of a thousand people and not my small you know
scrappy gremlin group."*

## 7. Opportunity 2 — build the factory, not the thing

The sharpest idea in the episode, and the one Greg reacts to hardest.

She was about to build a public version of her AI-First Index (16 dimensions, previously
delivered as executive interviews to Fortune 500 clients). Option one: point Claude Code at it,
iterate for days, ship. **Option two, the one she took:** notice that this will not be the last
product, or even the last version of *this* product — and go one level down the stack first.

> *"Instead of building out the thing, build the factory for the thing."*

So they built a beginner **software factory** with the primitives every product needs anyway:
login, payments, social sharing, the newsletter that promotes it. The first product still
shipped and is profitable — but now every following one is faster.

> *"Measure twice, cut once… but the measurement is building out that foundational layer."*

Her term for it: the **dark headless factory** — you learn through the mess (the webhook bug,
whatever) once, and never make that mistake again. And it generalises past code:

> *"Think of the factory behind the one singular task instead of the one singular task itself."*

Applies equally to a content engine or a lead-handling process.

## 8. The SaaS apocalypse — why she thinks the timeline is longer

> *"Mediocre software is dead in several years."*

Her reasons for *several years* rather than months:

- **Bandwidth, not capability.** Ask the most AI-first bank or software company whether they've
  rebuilt DocuSign or parts of Salesforce, knowing they could. Answer: no — already bandwidth-
  constrained, other priorities. As long as rebuilding a CRM costs ~100 hours, only firms with
  people who have 100 hours *and* the skill will do it. Mass replacement needs that under
  **3 hours** with a click-and-drag interface, which she argues today's tools are not at for
  that complexity.
- **Liability.** Her first question on any "will AI replace X":
  > *"Who's liable now?"*
  Fortune 500 CEOs want someone to call, someone to unblock, someone to secure — *"you also
  want someone to blame."*
- **Lab-access lag.** Incumbents like Salesforce have relationships with the AI labs and early
  access. You meet a new model on day one; they met it on day 30 — *"you're also going to be on
  a very big lag"*, and 30–100 days of lead will matter.
- **Maintenance.** Both agree people will pay someone else to maintain software. Her own
  anecdote: a personal desktop app she built, opened a year later, broken, and she did not want
  to deal with it.

**Consumer is the opposite case.** There the shift is *from science to art*: code matters less,
the winners are creative and video-first. Both agree the best product does not automatically
win — *"the best songs aren't on the Billboard 100"* — and both call that an **arbitrage
opportunity** for anyone personable enough to open doors. Her example of B2C still being wide
open: a woman who had never coded shipped a face-model photo app and had **300,000 users out of
the gate**, at a time when incubator portfolios have skewed hard to B2B.

## 9. The bottleneck rule

> *"Look for the bottlenecks, then evaluate the value of fixing those bottlenecks, and then pick
> the bottleneck that is high value to fix."*

Her correction to the standard advice: the *first* bottleneck is not the one to fix. If code and
design are no longer the constraint, the valuable one might be getting from a local HTML file
into a real iOS app, or word-of-mouth and referral mechanics that are still messy. Her own two
named high-value bottlenecks: **video creation** (still a slog despite AI) and **B2B trust**
(hence the rise of the B2B influencer).

## 10. Where she looks for opportunities

1. **What YC publicly asks for** (they post it on Instagram) — assume they are thinking 18
   months out. *Agent-first software* is on that list right now.
2. **Matt Van Horn's `/last-30-days` skill** (public on GitHub; see
   [`2026-02-04-last-30-days-skill.md`](2026-02-04-last-30-days-skill.md)) — not just for news: *"startup ideas that
   could be built by someone with the following background"*, or with someone's last three jobs
   as the input.
3. **Listen for the fear questions of a role.** From CMO summits: *how do I get discovered by
   agents · what does agent-first shopping look like · what is brand consideration in the AI
   age* — all asked from the fear that their pipeline is gone in two years. Find the fear points
   and you have found what someone will pay to fix.

Greg's own version: open sensortower.com, see what is charting, and ask what the **agent-first
version** of it looks like — or undercut on price.

## 11. Honest limits of this episode

- **It is a single practitioner's setup, with no numbers attached to the outcome.** 34 agents,
  86 diary entries, six directors — all inputs. There is no revenue, hours-saved or error-rate
  figure anywhere in 48 minutes.
- **"Under three hours to set up" and "months to get it right" are both hers**, one sentence
  apart. Only the second is the real number.
- **The factory idea is asserted, not demonstrated.** One product shipped from it; the claimed
  payoff ("endless products at faster speeds") is still a forecast.
- **She is selling adjacent to the topic** (AI-First Academy, the index). Not disqualifying —
  worth knowing.
- **The tooling advice is dated on arrival:** the unresolved `cloud tag` product she calls "a
  mess right now" was expected to be fixed by publication.

## 12. Relevance for Jens

Constraints applied: no audience, no network, distribution is the binding constraint, away
15.08.–07.09. (Telegram only).

**1. Most of this is already built here — and that is the finding, not a compliment.** The
agent workforce with a chief of staff, context files, goals, scheduled proactive runs and
model tiering by task is `~/repos/assistant` plus the agent-task and Fabrik channels. Her model
rule (*"not everything needs opus"*, sub-agents on Haiku/Sonnet) is the session-budget rule from
`MEMORY.md`, word for word. Her watchdog-with-insight point (*"dashboards are dumb… I want
anomaly detection"*) is the rule every routine here already follows: report the **change**, not
the state — stripe-watch, paywall-health-check, funnel-health-check, deadline-check,
bing_delivery_check, creds-health-check, unit-health-check. **Eight watchers exist; her episode
says almost nobody has one.** So the episode does not supply a next step here. It prices what is
already standing — and the thing it prices has produced no revenue, which is the same gap the
100-day retrospective named.

**2. The one role that is genuinely missing: Toby.** Nothing here watches the workforce work and
writes down *where the friction is and who lacked access*. The closest equivalents are the
monthly retro (once a month, by hand) and the journal (a log, not an analysis). The evidence
that this gap is real and expensive is in this repo: `memory-evict` ate its own output for days
(#71), four test files had never executed once (41 tests), a test inherited an env var and was
red only in inbox sessions — every one of those was found by accident, not by a watcher.
**Concrete and cheap:** a weekly pass over the last seven journal entries + `learnings.md`
whose only question is *which friction repeats*. Not a new agent — a routine line. Worth
proposing, not worth building unasked.

**3. "Build the factory, not the thing" is the one idea that changes a decision — and it is
already the bet.** Fabrik is the factory; extension-forge is a factory; the skills directory is
a factory. Her version adds the part that is missing here: **her factory shipped a product that
is profitable, and the factory was justified by the second product.** Here the factories are
several layers deep and the products they produce (extensions, calculators, sites) have earned
~0. The honest reading of her point is therefore inverted for Jens: *he has the factory and
lacks the customer*, she had the customer and built the factory. Do not read this episode as
permission to build another factory layer.

**4. "Who is liable now?" is a sellable line, not a philosophical one.** Her three reasons
enterprises will not replace SaaS — bandwidth, liability, lab-access lag — are the strongest
argument in the episode for **day-rate work** over product, on the same side as
`2026-07-20-fde-million-dollar-ai-job.md`. That matters for the freelancermap profile and CV (#130), where
the positioning is already harness/FDE: *the person you can call when the agent workforce breaks*
is a role with a buyer, a budget and no product-market-fit risk.

**5. The lead-magnet shape, noted and parked.** Her AI-First assessment is a free public
self-benchmark that feeds a paid ladder — and solytics already ships exactly that shape
(readiness check + `ki-readiness` segment in Launch Kit, both green in the funnel check). The
gap is not the artefact; it is that ~1,100 impressions on the KI pages produce **0** clicks at
position 26–59. Same authority bottleneck. Nothing in this episode addresses it.

**Sources checked while writing this note:**
[areyouaifirst.com](https://www.areyouaifirst.com/) (16 dimensions, public benchmark) ·
[Allie K. Miller](https://www.linkedin.com/in/alliekmiller/) (ex-Amazon/AWS, ex-IBM) ·
[episode](https://www.youtube.com/watch?v=EzQAgnjTq2k)
