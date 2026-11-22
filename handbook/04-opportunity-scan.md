# Opportunity scan

From 2–3 niches, or one idea, to a short list of evidence-backed candidates. You promote 1–3 to [idea research](05-idea-research.md). The scan is breadth; it never says GO or NO-GO. Every candidate ends as **promote**, **park** or **drop** with a reason.

Rule of the whole scan: **money first.** A market counts only if a product in the same store already earns. SaaS prices and prices in other stores never count.

## Step 1 — Intake

Write down before you search:

- **Mode.** Scan niches, or check one idea (→ step 1b).
- **Niches.** 2–3 at most; breadth dies beyond that. A niche needs no platform; step 2 finds its stores.
- **Unfair advantages.** Your products and their real numbers (installs, conversion), your audiences, domain knowledge, reusable code. Feeds the advantage score.
- **Breadth budget.** Quick ≈ top 8 listings per niche, one demand pass. Deep ≈ 20+ listings plus review mining on the strongest cluster. Note the budget; do not silently exceed or undercut it.
- **Graveyard.** Check it now.
- **Constraints.** Effort ceiling (weekend only, or medium and big too)? Risk tolerance (scrapers on hostile sites)? Pricing ambition? Effort is a score, not a filter, unless you set a ceiling.

### 1b. Idea mode

You have one idea: what it does and for whom. Answer three questions in order. Do not invent alternative ideas.

1. **Job and customer.** Write one job sentence ("When … I want … so I can …") and the customer groups who have that job (roles, situations).
2. **Where they shop.** Run step 2 on the job sentence across all groups — at most 6 stores in total. Note the communities and search phrasing they use.
3. **Do they pay there.** Run step 3 per store for the job and its substitutes. What the same customers pay for in *other* jobs there is context only; it does not pass the gate.
4. Each store that passes is one candidate (same idea, different store). No store passes → write "no store with paid proof for this job" and stop.

## Step 2 — Store discovery

Per niche, find the stores where its job is sold — at most 6. Search the job phrasing with `app`, `plugin`, `integration`, `extension`, `add-on`, `marketplace`. Check the stores whose names appear. Search TrustMRR for the job; a store with verified revenue for the job ranks first.

Any marketplace counts: Chrome Web Store, Firefox, Edge, Apify, Atlassian, WordPress.org, Shopify, WooCommerce, Slack, Notion, Figma, Miro, Canva, ChatGPT Apps, Zapier, HubSpot, monday.com, Raycast, VS Code, JetBrains.

**Two tracks, never mixed:**

- **Measured** — the store publishes user counts (CWS, Firefox, Apify, Atlassian, WordPress.org). These get sized and ranked in money.
- **Unmeasured** — no public user counts (Shopify, Slack, Notion, …). Same evidence and score, but no € figure and a separate table.

**Access check.** Before reading a store's pages, read its `robots.txt` and Terms for a ban on automated access (Shopify's Terms §9 has one). A ban means: work from search snippets, forums and review aggregators only, and note `access: second-hand`. This is about tooling; by hand you may still read pages as a normal visitor. It never drops a candidate.

## Step 3 — Paid-proof sweep (the gate)

Per niche × store: search the job, take the top listings by users (your budget), group them into **job clusters** (listings that do the same core job). Note price and users for each.

Collect:

- **In-store paid listings**: a stated price or paid tier (on the listing, the vendor pricing page it links, or the store's billing), with user count. On Atlassian nearly every app is paid; there the proof is a paid app with installs in the job.
- **Public revenue signals** for the job on that platform: TrustMRR (verified from the payment provider), sold or for-sale products (Acquire, Flippa, Empire Flippers), founder posts (IndieHackers, Starter Story). Mark each `verified` or `self-reported`; verified wins.

**What counts:**

| Counts | Does not count |
|---|---|
| In-store listing with a paid tier or price, and a user count | SaaS outside the store, even for the same job |
| Vendor pricing page that the in-store listing links | A price on another platform |
| Atlassian paid app with installs | "Contact sales" with no public price |
| Public revenue figure for an in-store product of this job | A blog claim about another product's price without a second source |
| Apify actor with pay-per-event or rental price and 30-day users | Donation links, "buy me a coffee" |

**Payer size.** A paid listing passes on one of three paths:

- **Users** (store with counts): ranks **top 5 by users** in its job cluster.
- **Ratings** (store without counts): public price plus **≥ 25 ratings**.
- **Revenue** (any store): **≥ $500/month** for the store product itself. A vendor-wide figure counts only if the store product is the vendor's only product.

A tiny paid listing (rank 15, 40 users; $20 MRR) does not pass.

**Substitute.** A product a user of this job could buy instead (overlapping core feature) passes the gate but scores monetization 1, and its price is not your price.

**Decision.** A job cluster continues only with at least one passing payer for the job or a substitute **in the same store**. Otherwise park it: `park: no in-store paid proof` (with what you searched), or `park: no payer yet` when nobody in the store charges at all (new features, wave candidates — a watchlist).

Why: a 2026-11 scan promoted four candidates scoring 7–8/10; all died within a day. One had only SaaS payers; its revenue used a €49 SaaS price instead of a €9 extension price — 5× too high.

## Step 4 — Keyword expansion

Per niche and store, 3–5 seed queries in three shapes:

- `<niche> <platform item>` — "invoice chrome extension", "trello jira app"
- `<site/tool> <job verb>` — export, download, track, clean, organize
- your own phrasing

Run each through autocomplete. Suffixes show real phrasing, adjacent jobs and brand names worth tearing down.

## Step 5 — Store weakness sweep

Only on clusters that passed the gate. Per keyword, open the top listings. Four data points each: **users · rating (count) · last updated · pricing**. The full 7-point teardown belongs to idea research.

| Signal | Threshold | Reading |
|---|---|---|
| Abandoned | notable users AND last update > 12 months | demand proven, maintenance dead |
| Hated | notable users AND rating < 3.5 | demand proven, execution weak |
| Paid-proof | an entry in the paid-proof table | willingness to pay proven here |
| Underserved | demand signals AND every entrant tiny (≲ 500 users) | open — or demand softer than it looks |
| Crowded-free | several healthy, maintained free incumbents | usually drop: nothing to undercut |

"Notable" is relative: 500 users is notable for a pro tool, noise for a consumer tool. Note your calibration. A listing that vanished (404) is a takedown signal → Risks.

Shopify note: ratings there are inflated (median 4.7–5.0 in every niche). Use the share of 1★ reviews and how recent they are, not the average.

## Step 6 — Terms check

For every candidate whose job runs on a third-party site (an exporter, an overlay, anything reading a site the user is logged into): open that site's current Terms. Search for "browser extension", "scrap", "automated", "robot", "crawler". Note the effective date and the deciding clause verbatim.

- Explicit ban on extensions or automated collection → **drop**, with clause, URL and date. Being logged in does not save it if the clause says so.
- Read the usage rules too: rate caps, "systematic harvesting" bans, `robots.txt` on the data paths the product needs. A cap or block that leaves the job unbuildable → drop. A cap the product can live with → keep, note it under Risks.
- No Terms page reachable → note it under Risks; that alone never drops.
- Store-native jobs (a WordPress plugin with no target site) skip this.

Why: a 2026-11 scan promoted a fitness-site exporter whose Terms, effective six weeks earlier, banned "data-gathering tools … such as browser extensions … regardless of whether you are logged in". The idea died after a full research cycle. Another promoted a company-register tool whose site allowed 60 calls per hour and banned harvesting.

## Step 7 — Demand without supply

- Google `site:reddit.com "is there a chrome extension" <niche term>` and `"is there a way to" <job>`. Questions without a good answer = gap.
- HN search for the niche's tool vocabulary.
- How-to articles or videos ranking for a job query with no tool in the top results = demand nobody productized.

Verbatim quotes, URL, date.

## Step 8 — Wave check

Platform shifts open time-boxed gaps:

- Extensions killed by a platform change (e.g. Manifest V2 shutdown) and never rebuilt — stale incumbents with recent "stopped working" or "MV3" complaints.
- Site redesigns or API shutdowns that broke scrapers — fresh clusters of "stopped working" reviews.
- New platforms or features too young to have tools.

A wave candidate takes its demand score from its predecessor's user count.

## Step 9 — Size

For each measured candidate, run a light version of [Market sizing](06-market-sizing.md): first 10 results per query, reviews for the 3 largest listings only. Prices come only from the paid-proof table. Compare the base revenue at the target rank with the bar of the effort tier:

| Effort tier | Bar: net revenue per month at target rank |
|---|---|
| weekend | 150 |
| medium | 500 |
| big | 1,000 |

`× bar` = base revenue ÷ bar; ≥ 1 passes. No conversion rate or no paid plan → "unpriced", with what is missing.

## Step 10 — Score

Five dimensions, 0–2 each, one evidence line per score, each with its status. A suspicious number never carries a 2.

| Dimension | 0 | 1 | 2 |
|---|---|---|---|
| Demand evidence | none found | indirect: autocomplete, small incumbents | direct: large incumbent installs or repeated verbatim asks |
| Incumbent weakness (ranks 1–3, never rank 1 alone) | crowded-free / healthy | mixed | a weak incumbent in ranks 1–3 (abandoned, hated, absent) and no fresh (≤ 12 months) ≥ 4.4★ same-feature listing there |
| Monetization proof | no in-store payer; SaaS-only | in-store paid substitute | in-store paid product for this job, with users |
| Effort fit | under half the bar, or needs privileged data | 0.5–1× bar, or unpriced/unmeasured with a weak leader | at or over the bar |
| Advantage fit | cold start | adjacent | direct reuse of your code, audience or domain |

One fresh ≥ 4.4★ same-feature listing in ranks 1–3 caps weakness at 1; two cap it at 0. Why: an abandoned 2.3★ leader read as a gap while ranks 2–3 were fresh free tools at 4.8★ and 4.4★. An unmeasured candidate never scores effort 2.

## Step 11 — Decide

Drop, regardless of score:

- graveyard match (cite the invalidation);
- documented account bans or fingerprinting on the target site;
- a ban in the target site's Terms;
- crowded-free without a specific gap.

Monetization 0 → never promote; park it.

Everything else competes for promote. Order measured candidates by `× bar` (passing first, then those with a channel that brings traffic right away); unmeasured ones by score /10. Ties go to advantage fit. Write the case against for each candidate you want to promote. Then pick 1–3.

The scan score is triage, not a build verdict.

## Per candidate, write

- What / for whom (one sentence each)
- Platform, effort tier, fixed fees, immediate channel
- Evidence table: signal · value · status · source · date
- Gap and **one** angle
- Monetization instinct, anchored to in-store paid proof
- Advantage fit
- Risks, including the Terms result
- Case against
- Scorecard
- Seed for idea research: one-liner, platform, target user, known competitors, pricing instinct, access mode, job sentence

## Coverage note

Stores found and cut, keywords × listings read, budget kept or changed, fetched vs. unavailable, what you did not scan.

## Quick mode

"Just give me ideas" still needs at least one checked evidence point per candidate. Anything less is labelled `brainstorm only — no market evidence` and never promoted.
