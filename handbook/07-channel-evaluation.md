# Channel evaluation

Two questions for one idea, **before** building:

1. Which channels fit this product?
2. Can it hit a target revenue with realistic effort and cost?

Distribution is half of whether an idea is viable. No fitting channel = a distribution-dead idea, however good the product.

## Step 1 — Pin down the inputs

Write all six. Unknown → find out; never guess silently.

- Offer and the core problem it solves
- Audience: B2C / B2B / both; broad or niche; where it gathers
- **Price and pricing model** (subscription vs. one-time — the math differs), free tier
- **Existing search demand?** (Keyword Planner, autocomplete)
- Sales motion: self-serve or sales-assisted
- **Target revenue and timeframe** (e.g. €1,000 in 2 weeks, €5k MRR in 12 months)

## Step 2 — Reverse the funnel

Work backwards from the target. Each row carries its rate and a source label: `own data` > `dated keyword check` > `community benchmark`. Never present a benchmark as a fact.

**Subscription:**

```
payers        = MRR target ÷ monthly price
installs      = payers ÷ free→paid rate       (+3–8 %/month churn replacement)
listing views = installs ÷ view→install rate
channel volume = listing views, split across chosen channels vs. their ceilings
```

**One-time:**

```
buyers per period   = revenue target per period ÷ price
installs per period = buyers ÷ free→paid rate
views per period    = installs ÷ view→install rate
```

One-time pricing needs **continuous** new installs; a durable channel matters more than a launch spike.

**Benchmarks** (replace with own data as soon as you have it):

| Rate | Range | Note |
|---|---|---|
| free → paid | 0.5–4 % | strong paywall moment → upper half. Own: FinGrab 1.13 %, one extension 1.9 % |
| store view → install | 15–35 % | targeted traffic; browse traffic lower |
| uninstall decay, month 1 | 20–40 % | drives subscription churn |
| listicle / community CTR → listing | 1–5 % | per placement |
| visit → paid (web) | 1–3 % | |

Examples:

- $500 MRR at $4/month → 125 payers → at 2 % = 6,250 installs → at 25 % = 25,000 listing views. Store search can carry maybe 5–15k views a year in a niche; the rest must come from communities, launches and creators.
- $500/month at $19 one-time → ~26 buyers/month → 1,300 installs/month → 5,200 views/month, every month.

## Step 3 — CAC versus LTV

A paid channel counts only when **CAC < net LTV**.

```
CAC     = cost per install ÷ free→paid rate
        = CPC ÷ (view→install × free→paid)
net LTV = net monthly price × expected paid months   (one-time: net price)
```

Rule of thumb: allowable CAC ≤ ⅓ of LTV.

- Measured (Microsoft Ads, FinGrab): €1.43 per install ÷ 1.9 % ≈ €75 per payer → 8+ months of a $9 plan before the ad pays back.
- $1 CPC at 25 % × 2 % → CAC $200 per payer: hopeless at $19.
- Paid search works only with cheap exact-match niches (< $0.30 CPC) or prices > $50.

| Price | LTV | Allowable CAC | Paid beyond search |
|---|---|---|---|
| $5/month, 8 months | ~$40 | ~$13 | no fit; needs CPC ≤ $0.13–0.40 |
| $20/month | $160–240 | $55–80 | Meta, Reddit, newsletters at CPC ≤ $1 and ≥ 2 % conversion |
| $50/month B2B | $600+ | ~$200 | Reddit, newsletters, Product Hunt, Meta; LinkedIn borderline (needs LTV > ~$1,000) |

Also compute **how long the test takes**: at the real daily run rate, how many days until the kill and the scale thresholds? Years → the test cannot conclude (FinGrab on Bing: €0.27/day; a €500 kill line would take ~5 years).

## Step 4 — Walk all 19 channels

For each channel ([cards](08-channel-cards.md)):

1. **Gate.** Does an owner constraint close it ([Bet rules](01-bet-rules.md))? Closed → name the constraint, drop it. Gates filter; they never just lower a score.
2. **Fit.** Judge the rest against the channel's fit signal: **Fit / Maybe / No-fit**, one line tied to this idea.

Cover all 19. No silent skipping. Add the store's own channels (store search, in-store placement, badges, partner directories).

**Distribution-dead check:** zero Fit channels after the gates (passive store browsing does not count) → say so plainly and stop. Options: pivot, lower the target, or proceed knowingly.

## Step 5 — Rank: the raster

Eight axes, 1–5. Cost and Effort: lower is better.

| Axis | Question |
|---|---|
| Immediacy | How fast does the running mechanism produce traffic? |
| Reach | How many customers are reachable? |
| Cost ↓ | Money spent |
| Effort ↓ | Working time spent |
| Feedback | How fast does the channel return a signal? |
| Scalability | Can it grow 10× if it works? |
| Targeting | Right people, or waste? |
| Durability | Does traffic persist after you stop paying or working? |

Convention: score the **running mechanism**, not the cold start. Email to an existing list = Immediacy 5; building the list first sits in Reach and Effort.

**Weights for fastest revenue from a new idea:**

| Axis | Weight | Why |
|---|:-:|---|
| Immediacy | 3 | No traffic, no revenue |
| Reach | 2 | Enough buyers must be reachable |
| Cost ↓ | 2 | Cash is the binding constraint; cap paid tests (~€200) |
| Effort ↓ | 2 | Solo: time is the bottleneck |
| Feedback | 2 | Kill losers early |
| Scalability | 1 | Matters once a channel works |
| Targeting | 2 | Buyers, not browsers |
| Durability | 1 | Matters later, in the owned channel |

Score = Σ weight × value; Cost and Effort enter as (6 − value). Max 75.

**Tiers:** A ≥ 50 · B ≥ 45 · C < 45. A few points apart means equal; choose within a tier by fit.

| Tier | Channel | Score | Gate (for Jens) |
|:-:|---|:-:|---|
| A | Email Marketing | 61 | closed until a list exists |
| A | Social & Display Ads | 57 | |
| A | Search Engine Marketing | 55 | Google closed for extensions |
| A | Existing Platforms | 52 | |
| A | Targeting Blogs | 50 | |
| B | Viral Marketing | 49 | |
| B | Engineering as Marketing | 48 | |
| B | Public Relations | 46 | |
| B | Sales | 46 | |
| B | Affiliate Programs | 45 | |
| B | Business Development | 45 | |
| C | SEO | 43 | closed as cash-flow channel on a young domain |
| C | Community Building | 43 | |
| C | Content Marketing | 42 | |
| C | Unconventional PR | 42 | |
| C | Speaking Engagements | 40 | |
| C | Offline Ads | 38 | |
| C | Trade Shows | 38 | |
| C | Offline Events | 34 | |

You may shift Reach or Targeting for this idea's audience — never for cold-start cost. If you do, recompute the score and tier and note it.

**Two blind spots the raster has, check by hand:**

- **Buyer intent.** Within a tier, prefer the channel closer to the purchase: SEM on a transactional keyword and store search beat social ads.
- **CAC vs. price** (step 3). Drop a channel whose CAC exceeds price/LTV.

## Step 6 — Feasibility under the target

Walk the ranked Fit channels in order:

- **Volume.** Can it deliver the traffic from step 2 (search volume cap, audience size, effort ceiling)?
- **Cost.** CAC × required customers = total spend. Does payback work?
- **Effort.** Realistic for one person?

Use ranges; label every assumption.

**Verdict:** *realistic / conditional / not realistic*. Name the binding constraint (gate, volume, CAC, effort). *Realistic* needs ≥ 1 open Fit channel in tier A or B that passes this step. Only tier-C channels fit → "marketable only slowly". That is a finding.

Name **the one assumption that moves the verdict most** (usually free → paid) and the cheapest way to test it first.

## Step 7 — Bullseye test plan

Pick 2–3 test channels (cheap, fast feedback). Keep at least 1 durable owned channel to pour the winner into (store search, SEO, email). Per test channel:

- **Test:** the cheap concrete action
- **Cap:** budget or hours
- **Success signal:** number by date
- **Kill criterion:** number by date

Double down on the one that works, then move it into the durable channel so traffic survives without budget.

**Billing model before platform** for paid tests:

1. Pay-per-sale where offered (eBay Basis, Etsy Offsite, affiliate commission) — no test budget needed.
2. Flat fees and fixed-price clicks (niche newsletter slot, Product Hunt, Apple Ads, Shopify App Store ads) — no algorithm has to learn.
3. Self-optimizing auctions (Meta, TikTok, PMax, Demand Gen) last, only once conversion volume exists. Below their learning budget, optimize a cheap stand-in event (signup, install) — you then learn click and signup cost, not CAC.

## Step 8 — Answer engines (optional)

Write 10 buyer questions the way a buyer asks an assistant ("is there a Chrome extension that …", "best way to … without …"). Never name your product or a competitor. Ask them in a fresh assistant session, or have someone else ask. Record per question: which products get named, which sources get cited.

- Sources cited for ≥ 2 questions are targets: a listicle to pitch, a directory to list in, a thread to answer.
- Does it name products of your kind? Does it answer with a built-in feature or a manual workaround instead?
- Background channel: re-check after 4–6 weeks. Success = named for ≥ 1 question.

## Step 9 — Store listing inputs

- Title: `Brand – <head buyer query>` (Chrome: ≤ 75 chars), plus a fallback title
- Keywords in demand order
- Category
- Summary (Chrome: ≤ 132 chars), opening with the literal buyer query
- Up to 5 screenshot angles, leading with the moment of value
- When to ask for a review (at the moment of success)

## Channel plan template

```
# Channel plan: <name>
Offer · price + model · target + timeframe · inputs, date

## Funnel math        stage | required | assumed rate | source
## Channel scores     all 19 + store channels: gate | fit | score | tier | reason
## Answer engines     question | named | sources
## Test plan          per channel: test | cap | success | kill
## Feasibility        verdict · binding constraint · assumption to test first
## Store listing      title (n/75) · fallback · keywords · category · summary (n/132) · screenshots · review ask
## Assumptions log    every non-own number: value, source label, date
```
