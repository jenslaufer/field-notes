# Sources

Which source feeds which chapter, and the commit the handbook was last synced to. `tests/sync.test.mjs` reads both tables.

## Source paths

Repos live in `~/repos/` (override with `REPOS_DIR`). "Synced" is the source repo's commit the chapters reflect.

| Repo | Path | Synced | Chapters |
|---|---|---|---|
| jens-toolkit | skills/bet-rules | 4f20891 | 01 |
| jens-toolkit | skills/channel-fit | 4f20891 | 07 |
| marketing | README.md | f4c21d4 | 01 |
| marketing | channels | f4c21d4 | 07, 08 |
| marketing | playbooks | f4c21d4 | 09 |
| marketing | learnings | f4c21d4 | 10 |
| marketing | research | f4c21d4 | 11 |
| opportunity-forge | skills/niche-sweep | 5a4bb01 | 03 |
| opportunity-forge | agents/niche-checker.md | 5a4bb01 | 03 |
| opportunity-forge | skills/opportunity-scan | 5a4bb01 | 04 |
| opportunity-forge | skills/idea-research | 5a4bb01 | 02, 05 |
| opportunity-forge | skills/market-model/SKILL.md | 5a4bb01 | 06 |
| opportunity-forge | skills/market-model/references | 5a4bb01 | 06 |
| opportunity-forge | skills/channel-eval | 5a4bb01 | 07, 09 |
| opportunity-forge | agents/answer-probe.md | 5a4bb01 | 07 |

Left out on purpose: `opportunity-forge/skills/build` (Chrome extension tech stack), `skills/market-model/scripts` (the computation is in chapter 06 as spreadsheet formulas), `docs/` (design specs and plans).

## Learnings

Every file in `marketing/learnings/` maps to one L-number in `10-learnings.md`.

| L | File |
|---|---|
| L-01 | 2026-05-21-verify-platforms-before-recommending.md |
| L-02 | 2026-06-27-seo-young-domain-brings-no-traffic.md |
| L-03 | 2026-06-28-google-ads-blocks-chrome-extensions.md |
| L-04 | 2026-06-29-paid-search-leak-fix-match-type.md |
| L-05 | 2026-07-14-native-feature-kills-a-wrapper.md |
| L-06 | 2026-07-16-no-network-channels-must-create-reach.md |
| L-07 | 2026-07-20-bing-too-small-to-decide.md |
| L-08 | 2026-07-20-cws-rank-follows-listing-name.md |
| L-09 | 2026-07-25-cws-needs-a-real-privacy-policy-page.md |
| L-10 | 2026-07-30-competitor-reviews-are-the-cheapest-evidence.md |
| L-11 | 2026-07-31-extension-must-open-something-on-install.md |
| L-12 | 2026-08-03-intact-funnel-zero-output.md |
| L-13 | 2026-08-03-outbound-channel-has-two-surfaces.md |
| L-14 | 2026-08-03-reddit-only-disclosed-answers.md |
| L-15 | 2026-08-04-funnel-needs-a-notified-human.md |
| L-16 | 2026-08-05-two-sided-model-supply-side-blocks.md |
| L-17 | 2026-08-05-verify-existing-channels-before-paying.md |
| L-18 | 2026-08-06-link-preview-is-part-of-the-channel.md |
| L-19 | 2026-08-08-catalog-number-needs-its-distribution.md |
| L-20 | 2026-08-10-market-entry-brand-vs-category.md |
| L-21 | 2026-08-14-store-shelf-has-a-revenue-ceiling.md |
| L-22 | 2026-08-21-cws-listing-copy-is-not-the-gap.md |
| L-23 | 2026-08-21-domain-clicks-come-on-the-name.md |
| L-24 | 2026-09-03-cws-publishing-cap-is-per-publisher.md |
| L-25 | 2026-09-12-freemium-bottleneck-was-conversion.md |
