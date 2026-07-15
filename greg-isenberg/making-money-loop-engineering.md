---
title: "Making $$$ with Loop Engineering"
podcast: "The Startup Ideas Podcast"
host: "Greg Isenberg"
guest: "Elie Steinbock (Inbox Zero — @elie2222)"
source: "https://www.youtube.com/watch?v=5p_BBdfvzgQ (published 2026-07-13)"
captured: 2026-07-15
---

# Making $$$ with Loop Engineering

> Elie Steinbock (Inbox Zero) takes the viral "loop engineering" idea out of
> coding and applies it to **running a business**: give an agent a task, an
> **objective metric**, and a **stop condition**, then let it iterate on a
> schedule — not for 30 minutes, but **once a month for years**. Flagship
> example: an SEO loop wired to Google Search Console that climbs rankings
> month over month for a few dollars per run. Same pattern for paid ads and —
> the "ultimate loop" — product feedback.

## The core concept

- **Loop = build → verify → learn, on a schedule.** Lean-startup
  build-measure-learn (itself from Toyota's lean manufacturing) mapped onto an
  AI agent. Origin of the buzz: Boris (Claude Code) and Peter Steinberger
  tweeting about it; Elie's friend Dimitro joking "in 2026 you don't prompt
  anymore — your software should achieve PMF on its own, your only job is to
  pay for tokens."
- **Three mandatory parts:** (1) a build/act step, (2) a **verify step against
  an objective metric** (Google rank, test pass rate, eval score, CPA,
  impressions), (3) a **stop condition** so it never loops blindly
  ("signup works in the browser", "evals ≥ 90%", "rank = page 1").
- **Long-period loops are the unlock.** Everyone runs 30-minute coding loops;
  the business version runs monthly and **remembers**: a markdown memory file
  logs what was tried, next run first checks *did the last experiment move the
  metric?* — exactly what an agency does, minus the retainer.
- **Everything is revertible.** Worst case a change drops you from rank 20 to
  30 → undo it. The loop is an experiment harness, not a commitment.

## Loop 1 — SEO (the flagship, runs in production)

- **Objective metric:** Google ranking / clicks from Search Console.
  Live demo on draftfantasy.com (12-year-old side project, 10M impressions /
  120k clicks in 3 months from World Cup traffic): agent reads GSC via API,
  finds terms ranked 4th that could be 1st, fixes low-hanging on-page issues
  (meta tags, JSON-LD, sitemap, link cannibalization), waits a month, measures.
- **Tools to connect:** **Google Search Console API** (your own rank data) +
  **DataForSEO** (competitor view — who ranks above you and why; the
  Ahrefs/SEMrush-style API). More real data in = better decisions.
- **Setup is trivial:** screenshot the loop diagram into Claude Code/Codex and
  say "build me an SEO loop, here's my GSC access, judge yourself on
  rankings." A full copy-ready prompt lives at **atomieve.dev** ("Atom Eve",
  built on Eve — a new Vercel agent project — with the Astro team's Flow
  framework; both optional, the prompt works standalone in Claude Code).
- **Scheduling layer:** Claude Code routines / Codex automations / Cursor
  automations — the loop must fire itself every few weeks and pick up where it
  left off.
- **Honest expectations:** Elie is seeing page 3 → page 2 movement after weeks,
  not overnight wins; SEO compounds over months. And it worked on a DR-63
  domain — a fresh domain behaves differently.

## Loop 2 — Paid ads

- Same pattern: agent generates ad variants (or just copy variants), watches
  spend/conversions, kills losers, doubles winners — what an ads agency bills
  for. Facebook ads = a volume game of hooks/angles; AI can test 1,000 angles.
- **Greg's hybrid rule: humans are the API layer for creative.** Fully
  AI-generated ads still lose to human ones; the winning setup is human
  records raw material ("yap for 30 seconds daily into a folder"), AI edits,
  publishes, and optimizes. Copy-only changes (Google/Bing text ads) are
  fully AI-safe.
- **Caveat from the episode:** each variant needs enough budget to reach a
  statistically meaningful verdict.

## Loop 3 — Product feedback (the "ultimate loop")

- Agent reads customer feedback + analytics (**PostHog**) + errors
  (**Sentry**), prioritizes pain points, prototypes fixes/features, measures
  against a KPI (retention, DAU/MAU, NPS — pick per feature, or let the agent
  propose and you approve).
- Greg's refinement: **split bug loop (metric: uptime) from feature loop
  (metric: retention/virality).**
- Elie: running a whole business this way is risky today, but "AI that builds
  itself against user feedback" is where this goes; early experiments exist.
- Elie's own eval loop at Inbox Zero: agent tunes prompt/model until email
  categorization evals pass 90% — the product-quality version of the same
  pattern.

## Cost & token economics

- A monthly SEO-loop run costs **~$5 in tokens** — vs. an agency retainer.
  "Loops running for months" ≠ "burning tokens continuously"; each run is
  shallow, the *calendar* is what's long.
- On a **Max plan ($100–200/mo)** you're sitting on effectively thousands of
  dollars of token budget — loops like this are free at the margin. On a $20
  plan, route loops through cheap OSS models (**GLM 5.2** mentioned).
- Answer to the "token providers get rich" skepticism (Ross Mike episode):
  true for infinite coding loops, irrelevant for monthly business loops — and
  add **money-based stop conditions** ("a click is worth 3 cents to me, a
  customer $100 — stop if exceeded").
- **Human-in-the-loop layer:** have the agent ping you (Slack) after every
  run for a quick approve/reject — you review a monthly diff, not the work.

## Minimal Viable Loop (MVL)

- Don't start with "get me 100k followers." Start with a loop whose metric is
  **10 likes** or average views per post per week. The metric must be small,
  honest, and moveable — then compound. (Greg's coinage: the MVL.)
- Any recurring to-do you already have ("check Facebook ads every 3 days") is
  a loop you're running manually — that's the migration list.

## Products recommended (the shopping list)

| Product | Role in the loop |
|---|---|
| Claude Code / Codex | the loop runner (Claude Code `/goal` = build+verify) |
| Claude routines / Codex & Cursor automations | the scheduler that re-fires the loop |
| Google Search Console API | objective metric for SEO (own data) |
| DataForSEO | competitor rankings (Ahrefs/SEMrush-style API) |
| atomieve.dev ("Atom Eve") | copy-ready SEO-improver prompt/template |
| Eve (Vercel) / Flow (Astro) | optional agent frameworks behind Atom Eve |
| PostHog + Sentry | inputs for the product-feedback loop |
| GLM 5.2 (OSS) | cheap model for loops on tight budgets |
| Slack ping per run | human approval layer |

## Insights for me (Jens) — honest, not an echo

1. **You already run this — the episode is validation, not news.** Harry (the
   assistant) *is* a loop harness: scheduled sessions, `routines.md` = the
   "automations" layer, journal + memory = the markdown memory file the
   episode calls essential, Telegram = the Slack ping. Your 4 GSC-based
   solytics SEO-YAMLs (07-14) were literally one iteration of the episode's
   SEO loop, hand-fired. The delta is only: **make it recurring with a
   measure-first step.**
2. **The SEO loop is adoptable — but only on solytics.** The loop iterates
   on-page factors against rank/CTR; it cannot fix domain authority. FK/HC
   (0–2 clicks/28d, authority bottleneck) would burn tokens in a loop forever
   — Elie says himself DR 63 ≠ fresh domain. solytics ranks (pos 7–10, CTR
   lever) → the already-scheduled 08-04 CTR-payoff recheck is exactly the
   loop's "verify last run" step. If 08-04 shows lift: formalize as a monthly
   routine (GSC pull → one snippet/on-page experiment → measure next month).
3. **DataForSEO is the one genuinely missing tool.** All our SEO decisions use
   GSC only (own data); we have no "who ranks above us and why" view.
   Pay-as-you-go API, no subscription — worth a cost check before the next
   solytics SEO round (no spend without your Go).
4. **The ads loop confirms the fingrab Tuesday routine design** — objective
   metric (€/install-intent, paid sale), kill threshold (500 €), one lever per
   week, human approves. The episode's variant-budget caveat is why full
   automation adds little at ~€14/week spend: too small for statistical
   verdicts. Keep it manual-weekly.
5. **Product-feedback loop = commentgrab's post-launch play.** Once live with
   users: reviews + usage → prioritized fixes on a loop, bug loop split from
   feature loop. Parked until there are users.
6. **The MVL frame names something you learned the hard way:** Bahn B measures
   "posts shipped" not revenue, fingrab measures install-intent before sales —
   both are minimal viable loops. Where a loop keeps failing to move its
   metric (FK/HC calculators), the answer was never a better loop — it was
   killing the loop. Stop conditions apply to strategies, not just agents.
