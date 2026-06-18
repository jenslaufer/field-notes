---
title: "Karpathy's Autoresearch — 10 Business Ideas"
podcast: "The Startup Ideas Podcast"
host: "Greg Isenberg"
source: "https://www.youtube.com/watch?v=qb90PPbAWz4"
captured: 2026-06-18
---

# Karpathy's Autoresearch — 10 Business Ideas

> Andrej Karpathy open-sourced **Autoresearch** (~25K GitHub stars fast). It's a
> **"nerd robot intern that runs experiments all night"**: give it a goal + a way
> to score "better," and an agent edits code, runs a short training loop on a GPU,
> reads the metrics, keeps only the changes that improve, and repeats — you wake
> up to the best version. Greg's pitch: the **loop generalizes beyond ML** (Toby
> Lütke says it optimizes *any* software), and here are 10 ways to monetize it.

## What it actually is

- **The loop:** set goal → agent plans an experiment → edits code/settings → runs
  ~5-min training on a GPU → reads metrics → *better?* save config, else discard →
  plan the next experiment → repeat. (Same shape as the **Ralph Loop** — engineer
  24/7, wake up to progress.)
- **"Better" is whatever you define:** cheaper leads, more clicks, higher sales,
  better model score.
- **The recipe is just research:** search → read → summarize → compare → repeat.
  Point that loop at money problems.
- **Setup:** needs an **Nvidia GPU** (tested on H100; UV package manager). No GPU?
  Rent one — **Lambda Labs, Vast.ai, RunPod, or Google Colab** (Greg used Colab:
  new notebook → runtime T4 GPU). Let **Claude Code** install it from the repo.
- **AgentHub** (also Karpathy) — "**GitHub for agents**": a bare git repo +
  message board for a swarm of agents on one codebase, no main branch / no PRs /
  no merges. Autoresearch was its first use case.

## The 10 business ideas

- **Niche agent-in-a-box** — tiny autoresearch loops tuned to one painful niche
  (Amazon-listing experimenter, realtor email-sequence tuner, SaaS pricing
  optimizer). Pitch: *"runs experiments 24/7, you click accept the winner."*
  **Monthly subscription.**
- **Always-on A/B testing for marketing** — agent writes headline/layout/offer
  variants for landing pages + ad creatives, pushes traffic, keeps combos that
  lower CAC / raise ROAS. The successor to **Optimizely.** Use internally, or sell
  as a **$5K/mo "always-on experiment engine" retainer.**
- **Research-as-a-service** — constantly-updated competitor/market reports,
  investor & M&A due-diligence summaries, compliance/regulation tracking (crypto,
  health, finance). **Per-report or monthly dashboard subscription.**
- **"Optimize" button inside your own product** — embed an autoresearch loop so
  users press one button to tune prompts / pick pricing / rank suppliers. A
  **wedge to upsell Pro/Enterprise** tiers ("bending spoons" magic moment).
- **"We run more tests than anyone" agency** — autoresearch runs hundreds of
  experiments, so the pitch is **"100× more testing for the same fee."** Niches:
  Shopify conversion lab, B2B SaaS pricing, email subject-line optimizer.
  **Monthly retainer + performance bonus / rev-share.**
- **Auto-quant for trading** — overnight backtests of many simple rules (LLM
  factor screens, sentiment filters) on one GPU; keep promising strategies, trade
  your own account or **sell signals/strategy reports** as a digital product.
  (Warning: keep a human in the loop — people *will* get burned.)
- **Always-on lead qualification + follow-up** — point the loop at your CRM +
  inbound leads; it tests rules/messages, grades leads by likelihood to buy,
  drafts follow-ups. Sales only touch high-value deals → more revenue per hour.
- **Finance-ops autopilot** — grind invoice matching, expense reports, exception
  detection with continually-improving rules/prompts. Pitch **"cut your AP time in
  half"** as software or an ops service. Plausible **fintech/bank acquisition.**
- **Internal productivity lab** — treat your company like Karpathy's GPU lab:
  define KPIs (response time, close rate, ticket resolution), let agents iterate on
  workflows/templates/routing; humans only touch high-impact decisions.
- **Done-for-you due-diligence shop** — loop chews through docs/filings/reviews
  and maintains a **living memo** for investors/acquirers/execs. **Sell briefs +
  monthly update packs** instead of one-off research.

## Marketing tips

- **"We run 100× more tests" is the whole pitch.** Autoresearch's volume of
  experiments *is* the differentiator — lead with the number, not the tech.
- **Performance pricing closes deals.** Monthly retainer **+ bonus on a KPI lift /
  rev-share** ("hit this number, we earn more") — clients love aligned upside.
- **"Optimize" button as an email campaign + upsell.** Blast your list: *"press
  this button, watch it improve itself"* — the magic-moment demo doubles as the
  Pro/Enterprise upsell.
- **Ride the named-credibility wave.** Greg's distribution move is the episode
  itself: explain a Karpathy/Toby-blessed tool *while it's going viral and foggy* —
  "in the fog, people don't see the opportunity." First clear explainer wins
  attention. (He also plugs a free 1-hour "building in the age of AI" event.)
- **Vertical it down.** Every idea works better aimed at one niche (realtor emails,
  Shopify stores, crypto compliance) than as a horizontal tool.

## Why this matters for us

- **Autoresearch = automated CRO/experimentation** — the "always-on A/B testing"
  and "optimize button" ideas are directly relevant to our lead funnels and
  landing-page conversion work.
- **"100× more tests" + performance pricing** is a copyable GTM frame: sell the
  experiment *volume* and align fees to a measured lift.
- **Loop-as-a-feature** (one "optimize" button) is a marketable, demo-able feature
  and a natural Pro-tier upsell — exactly the kind of gotcha-feature + funnel play.
- **First-clear-explainer-wins** is a distribution-first content tactic: cover an
  exciting, still-foggy tool early to capture attention.

## References

- Episode: https://www.youtube.com/watch?v=qb90PPbAWz4
- Autoresearch (Karpathy): https://github.com/karpathy/autoresearch
- Google Colab: https://colab.research.google.com/
- RunPod: https://www.runpod.io/ · Lambda Labs: https://lambdalabs.com/ · Vast.ai: https://vast.ai/
- Claude Code: https://www.claude.com/product/claude-code
- Idea Browser: https://www.ideabrowser.com
