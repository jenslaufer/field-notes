---
title: "Build prompt — a Cody-Schneider-style marketing agent"
companion_to: "2026-07-27-marketing-agents-too-good-cody-schneider.md"
source_episode: "https://www.youtube.com/watch?v=U2hogriGmEw (2026-07-27)"
captured: 2026-07-28
use: "Paste into Claude Code inside a fresh repo. Fill the [BRACKETS] block first. Follow the phase gates — do NOT let it build all 8 steps blind."
---

# Build prompt — marketing agent (Facebook-ads loop + data warehouse)

This is the "give Claude Code the transcript and say *walk me through setting this
up*" move from the episode, made concrete and reusable. It encodes the exact
architecture Cody Schneider described: **research → creative → write-only publish →
Airbyte pipeline → ClickHouse warehouse → learning loop → entropy solver**, with a
**human-in-the-loop** and **phase gates** so you don't stand up 8 moving parts blind.

> **How to use:** open a fresh repo, fill in the `PROJECT CONTEXT` block, paste the
> whole thing into Claude Code. It's built to stop at each `GATE` for your approval —
> keep it that way at first. Everything self-hosted/OSS where possible; every paid or
> outbound step is gated.

---

## PASTE FROM HERE ↓

You are my forward-deployed marketing engineer. We are building a **marketing agent**
for the product below: not a linear Zapier flow, but **code that makes decisions off
live business data on a cadence and improves from the results.** Work in **phases**,
and **stop at every `GATE:` for my explicit approval** before spending money, calling
an outbound/paid API, or publishing anything. Prefer **open-source, self-hostable**
components. Write tests first for every non-trivial unit.

### PROJECT CONTEXT (fill this in)

```
- Product:            [name + one-sentence what it does]
- Ideal customer:     [who, and where they hang out online]
- Primary channel:    [Facebook ads | Google ads | cold email | SEO | ...]  (start with ONE)
- Landing page URL:   [url or "to build"]
- Brand style guide:  [fonts, hex colors, tone — or "extract from landing page"]
- Existing data:      [Stripe? GA4? PostHog? CRM? ads account? — list what exists]
- Budget posture:     [$/day I'm willing to feed the ads "ATM", or "$0 — dry-run only"]
- Hosting:            [Railway | Heroku | Fly | my own box at <host>]
- Model access:       [Claude Code here; image = Nano Banana via Kie AI; video = HeyGen/Seedance; voice = ElevenLabs — mark which I have keys for]
```

### ARCHITECTURE (target)

```
 data sources ──Airbyte──▶ ClickHouse (warehouse) ◀──reads── channel agent ──writes──▶ ad platform
   (Stripe, GA4,                    ▲                              │ (Marketing API, WRITE-ONLY)
    PostHog, CRM,                   └──────── ad results ──────────┘
    ads platform)                          (back into warehouse)
        ▲
        └── me, via Claude Code = conversational analytics + dashboards
```

### PHASE 0 — Plan & confirm

- Read the companion note `2026-07-27-marketing-agents-too-good-cody-schneider.md` if present.
- Restate the PROJECT CONTEXT back to me, list the components you'll build, and flag
  every step that costs money or sends something outbound.
- Produce a **build order + a risk/ROI note** (what's cheap and reversible vs. what
  isn't). **GATE: wait for my go before writing code.**

### PHASE 1 — Data warehouse first (the foundation, and useful on its own)

- Stand up **ClickHouse** (self-hosted) + **Airbyte** with connectors for every source
  in `Existing data`. Idempotent, re-runnable syncs; secrets in env, never committed.
- Model a minimal schema that lets me trace **spend → the specific ad → revenue**
  (ad_id ↔ conversion ↔ Stripe charge).
- Give me a **conversational-analytics entry point**: I should be able to ask this repo
  (via you) "which ad drove the most revenue in the last 7 days?" and get a real answer
  from the warehouse.
- Tests: connector smoke tests + one end-to-end "row lands in ClickHouse" test.
- **GATE: show me the warehouse answering one real question before we automate anything.**
  *(This phase alone is worth building even if I never turn on ads.)*

### PHASE 2 — Research agent (pain points → creative brief)

- An agent step that queries **Perplexity** (or web search) for **Reddit pain points +
  outcomes** of the ideal customer, then **rank-stacks by most-referenced → top 3**.
- Output a structured **creative brief** (JSON): top pains, the outcome each ad promises,
  the landing-page angle. **No spend.** Show me the brief. **GATE.**

### PHASE 3 — Creative generation (statics + UGC), with QA

- **Statics:** generate via **Nano Banana** (through Kie AI) seeded with an example ad I
  provide (competitor/tangential). Enforce the brand style guide.
- **QA loop:** a **vision-model check** over each output — text readable? fonts/colors
  on brand? Reject + regenerate failures automatically.
- **Video (optional, gated on keys):** **HeyGen/Seedance** avatar UGC reading the pains.
- Persist **every creative + the exact JSON/script prompt that made it** into the
  warehouse (this becomes the learning corpus). Nothing published yet. **GATE.**

### PHASE 4 — Publish, WRITE-ONLY

- Integrate the platform's **Marketing API for WRITES ONLY**: create/pause/promote ads.
  **Never** pull bulk data through it (that's the TOS-violation ban vector — read data
  from the warehouse instead).
- Set the **conversion event** on the deep funnel action (sign-up/payment).
- **Dry-run mode first**: build the exact API calls and show them to me without sending.
  **GATE: I approve the first real publish. Human-in-the-loop stays on.**

### PHASE 5 — The learning loop

- Cadence job (e.g. **2 ad sets/day, 5 ads each** — parameterize): upload from the brief
  + what the warehouse says already worked.
- Let each batch run a **2–3 day signal window** → **pause worst performers** → winners
  into a **"winners pool" competing for budget**.
- The loop reads results **from ClickHouse**, not the ads API. Log every decision with a
  full **audit trail** I can inspect. **GATE before it runs unattended.**

### PHASE 6 — Entropy solver (so it doesn't get stuck)

- Feed fresh DNA on a schedule: (1) **Facebook Ads Library** competitor pulls, (2)
  **YouTube/podcast transcript** insight-mining for the niche, (3) optional **Viral Loop**
  API for trending short-form formats. Each new source seeds Phase 2's briefs.

### GUARDRAILS (always on)

- Stop at every `GATE`. Never spend or send outbound without my explicit ok.
- Write-only on the ads API; all reads from the warehouse.
- Secrets in env; nothing sensitive in the repo or logs.
- Every agent decision leaves an audit-trail record.
- Measure only what a business cares about: **revenue uplift · risk mitigation · cost
  savings.** If a step doesn't move one of those, flag it.

## PASTE TO HERE ↑

---

### Notes for me (Jens) before I run this

- **Start at Phase 1 and honestly consider stopping there.** A self-hosted
  Airbyte→ClickHouse warehouse over *my own* scattered data (Stripe, GSC, CWS installs,
  ads) + "ask Claude Code" is the highest-value, lowest-risk, **$0-ad-budget** piece —
  it's the standing observability / fast-feedback loop I keep circling (#78), and it
  serves every channel decision, not just ads.
- **Phases 2–6 burn paid ad budget** — gated on cashflow, per the honest caveat in the
  episode note (insight 4). The agent removes the *labor*, not the *spend*.
- **First real target if I do run the full loop:** wire it into `fullstack-business`
  (its purpose already *is* this loop) rather than a throwaway repo.
- Set `Budget posture: $0 — dry-run only` to walk the whole system end-to-end without
  spending, to see what it produces before committing a cent.
