# Idea research

One idea in depth: demand, competitor teardown, 1★ review mining, a scored GO / CONDITIONAL / NO-GO. 3–4 hours. Start from a scan candidate's seed, or from a niche, an annoying workflow or a target site.

Write the result into one idea file per project (template at the end).

## Rules

- Every claim: source URL and date. Quotes verbatim. Numbers fetched or `unavailable`.
- No verdict without an attempted teardown including review mining.
- The verdict comes from the scored rubric, not from prose.
- Competitors exist and **all are free**, with no in-store paid substitute → **NO-GO**. SaaS or other-store prices are no proof of willingness to pay.
- Dead demand or a hostile platform → say so and stop early. Do not research on politely.

## Step 1 — Intake

Write: seed scope, target-user hypothesis, revenue target and pricing instinct (optional), project folder. From a scan seed, confirm instead of re-asking.

## Step 2 — Demand scan

- **Autocomplete.** Type the head term and variants; suffixes show phrasing and adjacent jobs.
- **Result shape** of the head query: tools ranking = demand; how-to threads with no tool = gap; nothing = no demand.
- **Pain mining.** `site:reddit.com "<workflow>" (annoying OR "is there a way" OR "is there an extension")`, and HN search. Verbatim quotes, URL, date.
- **Keyword Planner**: volume, competition, CPC for the buyer phrasing. CPC measures buying power.
- **Native-feature check.** Has the platform shipped or announced this in the last six months? Changelog, blog, X account, app release notes. A yes kills a wrapper product.
- The strongest free demand proxy is the user count of incumbents (next step).

## Step 3 — Store teardown

First size the market ([Market sizing](06-market-sizing.md)): queries from the demand scan, every listing coded core / adjacent / out, target rank, base revenue.

Then the top 3–5 competitors, **7 data points each**:

1. users
2. rating
3. rating count
4. last updated
5. pricing model and price
6. permissions breadth (the listing's "site access")
7. title keywords

Heuristics:

- Last update > 12 months = abandoned → gap.
- Broad permissions = trust gap.
- Subscription pricing on a twice-a-year job = pricing gap.
- Zero reviews on an incumbent is evidence too: no traction.
- A competitor listing that 404s = takedown signal → Risks.
- Read rating together with rating count. Above ~5 % ratings per user = solicited.

## Step 4 — 1★ review mining

The 1★ reviews of the top competitors **are** the opportunity map. Read them sorted by newest and by lowest. Cluster:

- broken / abandoned
- missing feature
- pricing anger
- privacy fear
- UX friction

Per cluster write: theme → verbatim example → the exploit (what you do differently).

No reviews reachable? Google `"<competitor>" (broken OR "stopped working" OR scam OR refund) site:reddit.com`.

Review text beats star averages. It corrected the CommentGrab differentiator: the real complaint was a replies paywall, not the comment cap assumed.

## Step 5 — Early exit

Dead demand **and** no gap → write a NO-GO with the evidence. Stop.

## Step 6 — Synthesis

**Job to be done.** One sentence: "When [situation] I want to [motivation] so I can [outcome]." Plus what would make a user hire or fire the tool. The situation matters, not demographics.

**Differentiation — pick ONE angle:**

- on-page / one-click (vs. login or upload flows)
- no-credentials privacy
- maintained vs. abandoned
- narrower permissions (trust)
- simpler pricing (one-time vs. subscription)
- uncapped or cheaper free tier
- the adjacent job the reviews beg for

Write why the angle survives being copied.

**Pricing hypothesis.** Anchor to the competitors' active in-store prices and the platform's norms:

| Store | Norm | Store share |
|---|---|---|
| Chrome Web Store | own payment provider; monthly, yearly or one-time | 0 % |
| Firefox Add-ons | no store billing; own provider | 0 % |
| Apify | pay per event or result, or monthly rental | 20 % |
| Atlassian | per-user tiers, monthly or annual, billed by Atlassian | 0 % to $1M lifetime (Forge, from 2026-01-01), 16–17 % after |
| WordPress.org | free plugin, paid upgrade sold outside; yearly licences common | 0 % |

A SaaS price may anchor the story, never the revenue math. Revenue is always net of the store's share.

**Head queries.** Ranked buyer queries; they feed the store listing.

## Step 7 — Naming

4–6 candidates: brand first, descriptive keyword tail ("CommentHarvest – Export LinkedIn Comments to CSV"). Never lead with someone else's trademark. Chrome Web Store limits: title ≤ 75 chars, summary ≤ 132 (see [Playbooks](09-playbooks.md)). Collision check per name: `site:<store domain> "<name>"` plus a trademark search. Shortlist 3.

## Step 8 — Score

Six dimensions, 0–2 each, one evidence line per score.

| Dimension | 0 | 1 | 2 |
|---|---|---|---|
| Pain evidence | no quotes | some | ≥ 3 dated verbatim complaints |
| Demand proxies | no signal | one | autocomplete and installs both confirm |
| Competition gap | ≥ 2 fresh (≤ 12 months) ≥ 4.4★ same-feature listings in ranks 1–3 | one such listing | a weak incumbent in ranks 1–3 (abandoned, hated, absent) and no fresh ≥ 4.4★ same-feature listing there |
| Willingness to pay | no in-store competitor charges; SaaS-only = 0 | an in-store paid substitute | in-store competitors charge AND a buyer signal (users on a paid listing, a revenue figure, reviews mentioning payment) |
| Build feasibility | needs credentials or breaks Terms | — | backendless, narrow permissions |
| Reachability | no channel hypothesis | — | obvious search or community path |

**Verdict:** GO ≥ 9 · CONDITIONAL 6–8 · NO-GO ≤ 5. Any 0 caps at CONDITIONAL.

Override rules:

- **Money rule:** competitors exist, all free, no in-store paid substitute → NO-GO regardless of score.
- **No competitors at all** (new market) → at most CONDITIONAL, with "no payer yet" in Risks.
- **Terms rule:** read the target site's Terms first (as in the scan). An explicit ban on extensions or automated collection → Build feasibility 0 and NO-GO.
- Scraping behind login or handling credentials → write it in Risks regardless of score.

## Step 9 — Claim check and case against

List every number a score or the pricing rests on, with status ([Evidence](02-evidence.md)). A suspicious number never carries a 2; a 2 on an unverified number caps confidence at MEDIUM. Write "check before build".

Then the case against: the strongest reason to pass and the one finding that would flip it.

## Step 10 — Decide

Look at scorecard, risks, claim check, case against and the target rank together. Accept, adjust or kill. Pick the name, confirm the target rank (never rank 1). Then go to [Channel evaluation](07-channel-evaluation.md).

## Idea file template

```
# IDEA: <working name> — <one-line product>
Verdict: <GO|CONDITIONAL|NO-GO> · score <N>/12 · confidence <HIGH|MEDIUM|LOW> · <date>
Platform: <store> · metric <what users counts>

## Problem & evidence        2–4 sentences, 3–8 verbatim quotes with URL and date
## Target user & JTBD        job sentence, hire/fire criteria
## Demand signals            signal | value | source | date
## Competitors               name | users | rating (count) | last updated | pricing | link
## Market structure          band, β, leader, target rank + reason, base revenue with inputs
## Opportunity gaps          per 1★ cluster: theme → quote → exploit
## Differentiation angle     ONE angle + why it survives copying
## Pricing hypothesis        model, free-tier cap, paid price, anchored to competitors
## Rubric scorecard          6 rows with evidence
## Claim check               claim | value | status | source; check before build
## Case against              reason to pass; what would change the verdict
## Name                      chosen + collision check; rejected ones
## Head queries              ranked buyer queries
## Risks & open questions    Terms, blocked data
```

## Quick mode

"Quick verdict, no time" still gets the teardown attempt. Only a deliberate skip produces a verdict, marked `confidence: LOW, teardown skipped`.
