---
title: "Agent Economics"
podcast: "Linear Digressions"
season: "2 — The Agents Season, episode 10"
hosts: "Katie Malone (solo)"
source: "https://feeds.soundcloud.com/stream/2343636737-linear-digressions-agent-economics-the-agents.mp3"
published: 2026-06-21
captured: 2026-06-23
rewritten: 2026-08-04
duration: "24:12"
transcript: "local (faster-whisper base.en, assistant tools/podcast-transcribe.py)"
---

# Agent Economics

> Per-token inference fell by roughly **1000×** since 2022. Token demand rose roughly
> **10,000×**. So the bill went **up 10×**. That is not a paradox in the loose sense — it is
> *the* Jevons paradox, and Satya Nadella named it out loud the day DeepSeek wiped **$600
> billion** off NVIDIA's market cap. The number to anchor on is **cost per completed task**,
> not cost per token, because the per-token price is no longer what dominates.

**Source note:** rewritten 2026-08-04 from a **full local transcription of the audio**
(24:12), replacing the earlier version of this file, which was written from the published
description and deliberately omitted all figures "to avoid misattribution" — the audio is
full of them. Quotes are from the transcript. **Correction carried over: the old front matter
named Ben Jaffe as co-host and titled this "Episode 11". This is Katie Malone solo, episode
10.** Corrected ASR slips: *Gemen's / Jammin's / Jimin's Paradox* → Jevons, *LOM* → LLM,
*sweet bench* → SWE-bench, *ICSC* → ICSE, *clods on it* → Claude Sonnet, *software book* →
software bug, *Mepos class* → Opus class, *it's back going to bankrupt you* → it's not going
to bankrupt you.

## The frame: Robert Moses built more highway and New York got slower

Katie opens with a book recommendation she says she rarely makes — **Robert Caro, *The Power
Broker***, on the New York city planner Robert Moses. He built highways, bridges, tunnels,
*"double-decker bridges where there were roads stacked on top of each other."* And there is
*"a pretty devastating chapter"* comparing before-and-after drive times across his projects:

> *"The intuition that you should have is: building all of this extra highway, all of these
> extra bridges, all of these extra tunnels, we should be able to get around faster, right?
> **No.** In many cases it actually became **slower** to get around as that construction
> increased the amount of capacity."*

The mapping she draws immediately: *"The amount of highway that we've built, or the cost per
mile, has gone down — but it still takes just as long to get from one side of New York to the
other. Your LLM bills are just as big as they were before. In fact they're probably bigger."*

## Jevons, from the coal charts

England, mid-19th century. Machinery made coal extraction vastly more efficient; supply
exploded; prices fell *"precipitously"* — **and total spending on coal went up.**

> *"The only variable in that equation is usage. Even as the price is going down, the usage,
> the amount of consumption, is going up so much faster that the total amount that you're
> spending overall still can go up. It's outpacing the drop in prices."*

Her mechanism, which is the part that transfers: *"the drop in prices is fundamentally
changing the **consumption patterns**, so much so that you're doing stuff with this new
resource that you never would have done at the older, higher price point."* Cheap electricity
→ every room lit, and staying up later because leaving the lights on is *"not going to
bankrupt you"*. Cheap coal → whole new industries that were previously uneconomical. Cheap
roads → everyone in New York taking weekend trips they would never have attempted knowing the
capacity wasn't there.

**The AI numbers she gives:** one analysis estimates inference costs fell **~1000×** between
2022 and now, while token demand rose **~10,000×** over the same period. *"You can do the
math. We're spending 10 times more now on AI than we were in 2022."*

**The DeepSeek instance, January 2025:** a much cheaper-to-train, open-source Chinese
reasoning model arrives — runnable locally instead of via provider APIs — and **NVIDIA loses
$600 billion in market cap in a single day.** The market read it as chips becoming less
necessary. Satya Nadella's tweet that day: ***"Jevons paradox strikes again."*** Katie:
*"he's making this 160-year-old coal-economist reference about why having cheaper AI means
**more** infrastructure spend, not less."* (Her aside: NVIDIA has since recovered.)

## Why agents specifically are expensive — two multipliers, not one

**Gartner, 2026: a typical agent task costs 5–30× a typical task done with a single chatbot
LLM call.**

**Multiplier 1 — the loop.** Reason → act → observe, cycled many times per task, each cycle
with inference calls, tool calls, decisions, and often retrieval of large context chunks.

**Multiplier 2, the one people miss — quadratic growth.**

> *"Each successive call in the loop is more expensive than the previous one, because every
> turn feeds the **entire conversation history** back into the model as the context for the
> next step. And so that means that the prompt size is **not growing linearly, but is roughly
> quadratic** with the number of turns."*

Measured directly, on SWE-bench coding tasks, in a paper at **ICSE 2026**:

- Leading agents need a **median of 41–58 turns** to solve a real task.
- Complex tasks run **over 175 turns**.
- At those numbers, *"this quadratic growth becomes the dominant cost driver. **It's not the
  per-token price.**"*

**And the failure tax, from the same paper, on Claude Sonnet against real coding tasks:**

| | |
|---|---|
| Average cost of a patch **attempt** | **$5.85** |
| Average cost of a **correct** patch | **$7.80** |

> *"You will notice that $5.85 is not the same thing as $7.80. … What that's telling you is
> that not all of those attempts are successful. **You need to pay for the cost of your
> failures when you're factoring in the overall cost of success.** You're paying for every
> turn of every attempt that didn't succeed."*

Her judgement on the level: *"probably still economically viable versus paying a human to do
that by hand"* — but the numbers add up quickly.

## The Ramp data — observed payments, not a survey

Katie flags this as her favourite part of the episode, and the reason is methodological:
**Ramp** is a corporate card and spend-management company processing AI vendor payments for
thousands of businesses, and it published observed **June 2026** data. *"This isn't survey
self-reporting. This is what companies **literally paid** from their credit-card processing
company."*

The shape is not a bell curve. It is a household-income curve: a mass at the low-to-middle
end and a very long tail.

**Monthly AI spend per company**

| Statistic | Amount |
|---|---|
| Median | **$2,246** |
| Mean | **$140,842** |
| 75th percentile | $14,000 |
| 90th percentile | $73,000 |
| 95th percentile | $211,000 |
| 99th percentile | **$831,000** |

The median-versus-mean gap is the finding: *"the fact that they're so different — $2,000
versus $140,000 — is telling you that there's some kind of wacky distributional economics
going on here."*

**Monthly AI spend per employee**

| Segment | Amount |
|---|---|
| Top 1 % | **$7,450** |
| Top 10 % | $611 |
| Median firm | **$11.38** |

Her reading of the top of that column: *"most software engineers at these firms, especially at
the top 1 % firms, are being paid a lot more than $7,000 a month — but that's what the AI
spend is."* And the median: *"about the same order of magnitude as one subscription seat to an
enterprise AI software tool."*

**The headline stories, put in their place.** Uber blew through its **annual** developer token
budget **by April** — four months — and has since set a target of **$1,500 per developer per
month**. Microsoft, as she records, is running cost-containment and has pulled AI access for
some engineers at similar per-engineer levels. Katie's correction to the discourse: *"these
are definitely outliers. These are **not** your median firms that are spending $11.38 per
employee per month."*

## Her conclusion, and her bet

> *"You need to be thinking about **what's the cost for an agent to complete a task**. And
> that's probably the number that you should be anchoring on."*

It is a function of task type, **failure rate versus success rate**, use case, complexity,
volume, and the internal efficiency of the agent itself — *"and that gives you kind of this
**blended cost per task**, and that is probably the more important number to anchor on, more
so than the per-token unit economics, because it's all those other things that end up
dominating."*

Her explicit prediction, offered as a bet: per-token costs keep falling, Jevons keeps holding,
new use cases keep appearing, **total spend keeps rising**. But with a caveat worth keeping —
the spread across the economy is huge, the tail firms *"show us that the ceiling can be quite
high"*, and the vast majority of firms are *"in a totally different regime"*. She reads that
as room for a lot more growth.

## The digression at the end — a frontier model switched off by government directive

Tacked on after the sign-off, and she flags it as a personal aside. About a week before
recording, Claude released its **fable** model — the Opus-class model that had been trailed
for months, and the first chance for ordinary users to work with it. **A few days later a
government directive told Anthropic to cut off access for national-security reasons.** Katie:
*"personally, I'm not entirely convinced that that was necessary."*

Then the part she says stuck with her:

> On the Friday night, after reading the press release that fable had been deactivated, she
> went back into a conversation she had left running. *"I hop into the conversation and I send
> it a message. I said, 'hey, are you still there?' And it said, 'yep, I'm still here.'"* She
> sent it Anthropic's own shutdown notice, they talked about it for a few minutes — *"and then
> it stopped responding. That was it actually going offline."*

She does not explain it away: *"I still do not know how this happened. I assume it just takes
several hours to take all the infrastructure offline. I genuinely do not know."* Transcript
excerpts and her thoughts went into the Substack newsletter rather than the episode.

## Relevance for Jens

**Genre: concept card with one number worth adopting and one risk worth pricing.** No money
thread of its own — the flat Max subscription means the marginal token here costs €0. That is
exactly why the episode is still useful: it names what the real scarce unit is.

**1. The abo does not exempt this operation — it changes the currency.** The scarce resource
here is not euros per token, it is the **5-hour rate-limit window** and the **25-minute
session kill**. Every mechanism Katie describes still applies, denominated differently:
quadratic context growth is *literally* why a session dies mid-task and why `Read` silently
truncates at ~25k tokens; the median 41–58 turns per real coding task is the reason a
greenfield YAML needs Opus and a burst of them does not fit in one night. **The house rule
"best model per task, then do less in that session" is a cost-per-task rule that was written
without the vocabulary. This episode supplies it.**

**2. The failure tax is the number this operation does not measure.** $5.85 per attempt versus
$7.80 per correct patch means roughly a **quarter of the spend buys nothing**. The equivalent
here is measurable and never has been: agent-task YAMLs that produce a PR versus YAMLs that
produce a PR **that merges**; the 89 %-merged figure from `skill-outcomes.py` is the closest
thing and it covers skills, not tasks. July's 72 merged non-Dependabot PRs is a numerator with
no denominator. **Before the next cadence argument, count the attempts, not just the
successes** — that is the same discipline as reading the artifact instead of the report.

**3. Cheap capacity summons work that should not exist — and this operation has the receipt.**
Induced demand is the *mechanism* behind the July retrospective: 511 sessions, 409 messages,
72 merged PRs, and the two money-nearest events of the month needed almost no code. Cheap
agent capacity made 29 hardening PRs on `launch-kit` **feel** affordable. They were, in euros.
They were not, in the only budget that matters. The Moses lesson is exact: **more lanes did
not produce faster trips, it produced more trips.**

**4. The fable anecdote prices a risk that is already hedged here.** A frontier model was
available to the public and **gone within days by government directive** — not a business
decision, not a price change, not something an SLA covers. The LiteLLM proxy (Stufe 1) with
`smart → cloud-oss → simple` fallback was justified in `CLAUDE.md` as insurance against a
cancelled subscription. This is a second, unrelated way the top of that chain can vanish, with
a real precedent and a lead time of days. It moves the proxy from prudent to load-bearing —
and it also explains the note already in memory that `fable5` cannot be selected for
subagents: availability of a named model is not a stable assumption.

## Links

- Jevons paradox — en.wikipedia.org/wiki/Jevons_paradox
- Ramp AI spend data (observed card payments, June 2026) — cited in the episode
- Next: the season finale, where Katie interviews the two agents that make this podcast —
  [`2026-06-28-11-interviewing-the-agents.md`](2026-06-28-11-interviewing-the-agents.md)
- Previous: [`2026-06-14-09-agent-trust-oversight-and-control.md`](2026-06-14-09-agent-trust-oversight-and-control.md)
