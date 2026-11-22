# How to use this handbook {.unnumbered}

This handbook holds the methods and findings that live in Jens' AI skills and marketing notes, written so a human can run them with a browser, a spreadsheet and a notebook. No agent, no script.

Sources: the `opportunity-forge` plugin (niche sweep, opportunity scan, idea research, market model, channel eval), the `marketing` repo (channel library, playbooks, learnings, research), and the toolkit skills `bet-rules` and `channel-fit`. `SOURCES.md` maps each chapter to its sources.

## The pipeline on one page

```
 no idea yet                    an idea
     │                             │
 [3] Niche sweep  ──picks 2–3──►  [4] Opportunity scan  ◄── idea mode
     4–50 niches                   paid-proof gate first
     pain · payer · reach          weakness · demand · terms · size
                                   │ promote 1–3
                                   ▼
                              [5] Idea research
                                   teardown · 1★ reviews · rubric
                                   │ GO / CONDITIONAL
                                   ▼
                              [6] Market sizing   (inside 4 and 5)
                                   │
                                   ▼
                              [7] Channel evaluation
                                   funnel math · 19 channels · test plan
                                   │ realistic
                                   ▼
                              [1] Run the bet
                                   2 weeks · €200–300 · €1,000 real revenue
```

Each step ends with a decision you write down. Each step can stop the idea. A stop early is cheap; a stop after building is not.

## Time budget

| Step | Time by hand |
|---|---|
| Niche sweep | 15–20 min per niche |
| Opportunity scan | 2–4 h for 2–3 niches (quick), a day (deep) |
| Idea research | 3–4 h |
| Market sizing | 30–60 min per market, with the spreadsheet template |
| Channel evaluation | 1–2 h |
| **All analysis before building** | **at most half a day per idea** (bet rule) |

The scan and the sweep are breadth; spend at most the budgets above. Idea research and channel evaluation are depth for one idea.

## Tools that replace the agents

| Agent step | By hand |
|---|---|
| Autocomplete probe | Type the term into Google and note the suggestions. Or open `https://suggestqueries.google.com/complete/search?client=firefox&q=<term>` |
| Pain mining | Google `site:reddit.com "<job>" (annoying OR "is there a way" OR "is there an extension")`; Hacker News search at `hn.algolia.com` |
| Store fetch | Open the store search and listing pages in a browser; copy users, rating, rating count, last-updated, price into the scan sheet |
| Review mining | Open the listing's review tab; sort by newest and by lowest; copy quotes with date |
| Search demand | Google Ads Keyword Planner (free with an ads account): volume, competition, CPC |
| Revenue proof | TrustMRR, Acquire.com, Flippa, Empire Flippers, IndieHackers, Starter Story |
| Market model script | The spreadsheet in [Market sizing](06-market-sizing.md) |
| Answer-engine probe | Ask any assistant the buyer's question in a fresh session, or ask 5 people how they would search |
| Own data | Google Search Console (sum by `page`), store dashboard, payment provider |

## Notebook conventions

- Every number: `value (source, date)`, plus status `verified`, `unverified` or `suspicious` ([Evidence](02-evidence.md)).
- One folder per idea: scan sheet, idea file, channel plan, raw screenshots.
- One graveyard file for all dead ideas, with the reason and date.

## Keeping it current

The handbook grows with the sources. `node --test handbook/tests/` fails when a new learning is not cited, or a source changed since the last sync. `handbook/CLAUDE.md` has the procedure. `node handbook/build-pdf.mjs` prints the book to `handbook/_book/handbook.pdf`.
