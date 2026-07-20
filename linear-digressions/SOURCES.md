# Linear Digressions — where to check for new episodes

**Use the real podcast feed:**

```
https://feeds.feedburner.com/linear-digressions?format=xml
```

**Do NOT use** `https://lineardigressions.com/?format=rss` or the website front page.

Verified 2026-07-20: the Squarespace site feed still showed *Interviewing the Linear
Digressions Agents* (28.06.) as newest, while the real feed already carried the
20.07. episode (published 01:14 UTC) — and the site feed had silently skipped the two
"Summer break" placeholder episodes (06.07., 13.07.) entirely. Reporting "no new
episode" off the site feed was wrong.

Generic recipe for any podcast (one call, authoritative):

```bash
curl -s "https://itunes.apple.com/search?term=<podcast+name>&entity=podcast&limit=5" \
  | python3 -c "import json,sys; [print(r['collectionName'],'|',r.get('feedUrl'),'|',r.get('releaseDate')) for r in json.load(sys.stdin)['results']]"
```

`feedUrl` is the feed listener apps consume; `releaseDate` is the latest episode.

## Episode numbering

The "Agents Season" ran 1–11 without a gap (the website once labelled two episodes
as 11, which caused a phantom "missing episode 10" report in June 2026). Files
`01-…` to `11-…` follow the feed's numbering. Episodes outside a numbered season are
filed by publication date, e.g. `2026-07-20-….md`.
