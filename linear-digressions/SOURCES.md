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

Generic recipe for **finding** a podcast's feed (one call):

```bash
curl -s "https://itunes.apple.com/search?term=<podcast+name>&entity=podcast&limit=5" \
  | python3 -c "import json,sys; [print(r['collectionName'],'|',r.get('feedUrl'),'|',r.get('releaseDate')) for r in json.load(sys.stdin)['results']]"
```

`feedUrl` is the feed listener apps consume — **use that part**.

**Do NOT trust `releaseDate` for "is there a new episode".** Measured twice on
2026-08-03 (04:33 and 04:37 UTC): the iTunes search index still reported
`2026-07-27T01:24:00Z` as the latest release while the feed already carried
*Reasoning Models: When LLMs Went Beyond Fancy Autocomplete*, published
**2026-08-03 01:52 UTC** — i.e. the index was ≥2h45 behind. Answering off
`releaseDate` would have produced "no new episode, the newest is the 27.07 one you
already have" — the exact failure this file exists to prevent, one layer up.

**Rule: iTunes to find the feed, the feed itself to date the newest episode.** Read
the first `<item>`'s `<pubDate>` and say which URL you checked.

```bash
curl -s "https://feeds.feedburner.com/linear-digressions?format=xml" \
  | grep -oP '(?<=<pubDate>)[^<]+' | sed -n 2p     # line 1 is the channel, line 2 the newest item
```

## Transcribing an episode

Since 2026-08-03 the audio is transcribed locally instead of summarising from show
notes — `~/repos/assistant/tools/podcast-transcribe.py` (faster-whisper, CPU, no GPU
needed; ~11 min for a 25-min episode). Grab the newest enclosure straight from the feed:

```bash
tools/podcast-transcribe.py "$(curl -s 'https://feeds.feedburner.com/linear-digressions?format=xml' \
  | grep -oP '(?<=<enclosure url=")[^"]+' | head -1)" -o /tmp/ld.txt
```

## Episode numbering

The "Agents Season" ran 1–11 without a gap (the website once labelled two episodes
as 11, which caused a phantom "missing episode 10" report in June 2026). Files
`01-…` to `11-…` follow the feed's numbering. Episodes outside a numbered season are
filed by publication date, e.g. `2026-07-20-….md`.
