---
title: "You are using Claude Fable 5 wrong"
podcast: "The Startup Ideas Podcast"
host: "Greg Isenberg"
source: "https://youtu.be/vjdHAWvVCP4"
published: 2026-06-11
captured: 2026-06-13
---

# You are using Claude Fable 5 wrong

> Greg argues 99% of people use the most powerful model wrong — they chase
> benchmarks instead of concrete use cases. The leverage: feed it the right
> inputs/strategy and let it work autonomously for hours.
> The prompt patterns below are model-independent and work just as well with Opus 4.8.

## Core message

The edge isn't the model — it's pointing it at real problems with the right
inputs. Stop asking about benchmarks; start running tactical workflows.

## Three fundamental mistakes

1. **Weak inputs → bad writing.** Fable can write well *if* you supply origin
   story, offer, ICP, frameworks, and tone as a "content brain" (e.g. Obsidian).
2. **Always on "high".** "Low effort is the alpha." Use low for routine tasks —
   Fable low can beat Opus high. Orchestrate effort/model with **factory.ai /
   Droid** (which model at which effort).
3. **One-prompting** instead of iterating — produces pretty but low-PMF output.

## The highest-leverage prompt patterns

### 1. Copy / landing-page tournament
> Write my landing page 8 different ways. Different hook, different structure each
> time. Then create 5 judges: a skeptical CFO, a distracted founder scrolling at
> midnight, a competitor, my ideal customer, and a conversion copywriter. Have
> every judge score every version and explain the scores. Kill the losers, merge
> what worked into a final version, and show me the scoreboard so I can see why it won.

### 2. Interview before the build
> Build this rough idea. Don't build anything yet. Interview me like Mark
> Zuckerberg / Sam Altman / Brian Chesky, experts at building companies that get
> PMF. One question at a time, 15 questions max, hunting for the thing I haven't
> thought about. Push back when my answers are vague. After the interview, write
> the full spec and list three ways this fails, then build the V1.

Pushes back on vague answers; outputs spec + architecture + pricing + V1 scope.

### 3. "Hire it to kill your company" (red-team yourself)
> Here's my P&L, my pricing page, my churn data, my last 50 support tickets. You
> are a well-funded founder who hates me. Spend the day building the company that
> kills mine. Real plan, positioning, pricing, first 10 customers you'd steal, and
> the exact email you'd send each one. Then rank every attack by how much of it you
> can do yourself with no employees. Don't be polite.

### 4. Decision-pattern analysis (use the 1M-token context)
> [Give 2 years of notes / decision docs / postmortems / emails.] Map every
> meaningful decision: what I chose, what I believed at the time, what actually
> happened. Find my patterns. Where am I systematically too early, too late, too
> optimistic? What do I always say right before a bad call? Write me the one-page
> operating manual for working with me that a COO would secretly keep.

### 5. "What's missing?" (not "what's wrong")
> Here's my analytics, my content calendar, and my offer. Don't tell me what's
> wrong with what exists. Spend your time on what's absent. What is every
> successful company in my space doing that appears nowhere in my business? What
> customer am I not even trying to reach? What revenue line should exist and
> doesn't? Rank by money left on the table.

### 6. Negotiation sparring
> I'm negotiating a deal with this counterparty. Here's what I know about them and
> what I want. Become them — their incentives, their alternatives, their pressure.
> We negotiate in rounds. You respond the way they actually would, including going
> quiet or getting aggressive. After each round, break character and tell me what I
> just gave away for free. Don't let me win because I'm the user.

### 7. 80-page second opinion on contracts (reads tables/footnotes/charts)
> Here's the full contract, every exhibit included. Read all of it, especially the
> tables and schedules. Three lists: what costs me money that isn't obvious; what
> I'd rather get in 18 months; and what's missing that should be here to protect
> me. Then tell me the three changes you'd request and exactly how to phrase the
> ask. Flag anything where I should pay a real lawyer to look.

### 8. "Make it its own tools" (the meta one)
> Look back at everything I've asked you to do this month. Find the requests that
> repeat. Build yourself tools and reusable instructions for each one so next time
> it's one sentence instead of ten. Then tell me, based on what I keep asking, what
> should I be delegating to you that I'm still doing by hand.

## Startup ideas only possible now

- **Synthetic focus-group firm.** Judge 50 ad variants overnight with personas
  built from a brand's real customer reviews. ~$3,000/launch, ~$100 in tokens.
  Works because sub-agents hold distinct, arguing personas instead of a model
  agreeing with itself.
- **Custom software in 48 hours** (e.g. 48hoursoftware.com). Med-spas, contractors,
  clinics pay $5,000 instead of $80,000. The interview prompt *is* the sales call —
  the spec writes itself during the Zoom; Fable builds it after.
- **Contract refund firm.** Cross-reference hundreds of vendor contracts against
  invoices (auto-renewals, unused seats, 8%/year price escalators). Performance-
  based: take 25% of the savings found.

## Bonus mechanics worth stealing

- **Video editing via agent:** transcribe takes (11 Labs / Whisper), sub-agents
  pick best takes, emit a JSON edit, FFmpeg executes, then iterate on color grade —
  orchestrated with a workflow until the final video is done.
- **Content engine:** wire inputs (origin story, ICP, frameworks, pillars, funnel,
  tone) into a content brain, then run a weekly loop: scan niches → find topics →
  3 hypotheses → produce assets.
- **Buy & refactor SaaS:** mine support tickets and churn data on big datasets;
  refactor acquired code with the model to flip or run for cash flow.
