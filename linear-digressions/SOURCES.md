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

## Which notes are built on a transcript, and which are not

Jens, 2026-08-04 09:29: *"die Folgen … hast du zusammengefasst anhand der Summary Notes.
Mach das bitte aber mach eine Summary bitte von den Transcribes"* — so every note here is
being rebuilt from the audio. A note counts as done only when its front matter carries a
`transcript:` line.

| Note | Source | gemessen |
|---|---|---|
| `2026-08-03-reasoning-models-…` | transcript | geschrieben aus dem Transkript (03.08.) |
| `2026-07-27-distillation-how-to-steal-a-model` | transcript | neu geschrieben 04.08. |
| `2026-07-20-invisible-llm-failures-and-ai-fluency` | transcript | **62 von 108 Zitaten wörtlich im Transkript (57 %)** — war von Anfang an audio-basiert, nur die Markierung fehlte |
| `11-interviewing-the-agents` | transcript | neu geschrieben 04.08. |
| `2026-04-13-unfaithful-chains-of-thought` | transcript | neu geschrieben 04.08. |
| `10-agent-economics` | transcript | neu geschrieben 04.08. |
| `09-agent-trust-oversight-and-control` | transcript | neu geschrieben 04.08. — **35 von 39 Zitaten wörtlich belegt**, die 4 übrigen sind Auslassungszeichen-Artefakte bzw. das gestrichene Falschzitat |
| `08-many-agents-many-problems` | transcript | neu geschrieben 04.08. — **29 von 33 Zitaten wörtlich belegt**; die Schaunotizen-Fassung war hier inhaltlich korrekt, der Zugewinn ist das Argument selbst |
| `07-how-do-you-evaluate-an-ai-agent` | transcript | neu geschrieben 04.08. — die Schaunotizen-Fassung war weitgehend korrekt, enthielt aber **zwei erfundene GAIA-Zahlen** ("~mid-70s" und "one submitted system claims 92 %"): keine kommt im Transkript vor, die 92 % waren der **Menschen**-Wert, einem System zugeschrieben. Ausserdem Vorspann korrigiert — Katie **allein**, nicht "Katie Malone & Ben Jaffe" |
| `05-agentic-planning` | **Transkript** | neu geschrieben 04.08. 18:5x, 46/46 Zitatsegmente ≥ 8 W belegt |
| die anderen 4 Notizen (`01`–`04`) | **show notes** | 0–22 % Zitat-Treffer, Neuschrift läuft |

**Drei Fehlerarten, die die Schaunotizen-Fassungen erzeugen** — inzwischen in **vier**
Notizen belegt, also die Regel und nicht der Einzelfall:

1. **Passage aus einer anderen Folge** (`09`: der Fable-5-Rückruf gehört zu `10`, steht in
   `09` in keinem einzigen Segment).
2. **Erfundenes Zitat** (`09`: „Have we reached the singularity yet?" — *singularity* kommt
   in **keinem** der 16 Transkripte vor · `05`: „The act of seeing the plan laid out often
   changes what I actually do", angeblich über Claude Codes `/plan`).
3. **Erfundene Zahlen und ganze erfundene Abschnitte** (`07`: „~mid-70s" und „92 %" auf
   GAIA, die 92 % waren der **Menschen**-Wert · `05`: ein kompletter Abschnitt *Search is the
   recurring pattern at AI inflection points* mit **Deep Blue/Kasparov, ~200 Mio.
   Positionen/Sekunde und AlphaGo/Lee Sedol** — `chess`, `Kasparov`, `AlphaGo`,
   `Monte Carlo`, `200 million` haben **null Treffer über alle 16 Transkripte**).

Beim Neuschreiben deshalb **jede auffällige Passage UND jede Zahl einzeln** gegen den
Volltext greppen — quer über **alle** Transkripte, nicht nur das der Folge. Ein
Zitat-Trefferquotient über die ganze Notiz überlebt alle drei Arten, weil die übrigen
Zitate ja stimmen.

**Reihenfolge der Neuschrift: neueste zuerst, und „neueste" heißt hier die SoundCloud-ID,
nicht der Dateiname.** Die IDs im `manifest.tsv` wachsen mit dem Upload-Zeitpunkt:
`2026-04-13-unfaithful-cot` = 2300885150 ist die **älteste** der 15, nicht die neueste — die
Journal-Notiz vom 04.08. 13:00 („neueste der 12 Rückständigen") war falsch. Übrige Reihenfolge
also `09` → `08` → … → `01`.

**Zwei Korrekturen, die beim Hören auffielen und im Vorspann beider neu geschriebener Notizen
stehen:** die Ko-Moderatorin ist seit mindestens 04/2026 **Phoebe**, nicht Ben Jaffe (so stand
es in beiden alten Vorspännen); und die Folge 11 ist **Katie allein** plus ihre zwei Agenten.

**Wie das gemessen wird — und warum die erste Messung falsch war.** Am 04.08. 09:29 zählte
ich `grep -L '^transcript:'` und meldete „14 von 15 stammen aus Schaunotizen". Das misst die
**Markierung**, nicht die **Herkunft**: die 07-20-Notiz sagt in ihrem eigenen Text
*„Everything below comes from the audio (transcribed locally)"* und wurde geschrieben, bevor
die Markierung überhaupt eingeführt war. Der belastbare Test vergleicht **den Inhalt**:
jedes Zitat der Notiz mit ≥ 8 Wörtern gegen ein 8-Wort-Fenster im normalisierten Transkript.
Ergebnis oben — der Abstand zwischen 0–22 % und 57 % ist eindeutig, dazwischen liegt nichts.
Der Rückstand ist also **12 Notizen, nicht 14**. Nach der Neuschrift von `07` (04.08. 16:xx), `06` (04.08. 17:5x) und `05` (04.08. 18:5x): **4 offen** (`01`–`04`).

Audio is transcribed once into `~/.cache/podcast-transcripts/<slug>.txt` (outside git —
they are raw ASR, not artefacts) by `~/.cache/podcast-transcripts/run-batch.sh`, which
reads `manifest.tsv`, skips finished slugs and is therefore safe to re-run after a
session dies. Progress: `tail ~/.cache/podcast-transcripts/run.log`.

## Transcribing an episode

Since 2026-08-03 the audio is transcribed locally instead of summarising from show
notes — `~/repos/assistant/tools/podcast-transcribe.py` (faster-whisper, CPU, no GPU
needed). **Speed, measured 2026-08-04:** `base.en` at 7 threads did a **26:28 episode in
2.5 minutes** — roughly **10× real time**, not the ~11 min per 25-min episode the tool's
own docstring claims. That figure came from the very first run, which also downloaded the
~150 MB model. Plan work off 10×: a full 6-hour back catalogue is ~30 minutes with two
workers at 4 threads, not three hours. Grab the newest enclosure straight from the feed:

```bash
tools/podcast-transcribe.py "$(curl -s 'https://feeds.feedburner.com/linear-digressions?format=xml' \
  | grep -oP '(?<=<enclosure url=")[^"]+' | head -1)" -o /tmp/ld.txt
```

## Episode numbering

The "Agents Season" ran 1–11 without a gap (the website once labelled two episodes
as 11, which caused a phantom "missing episode 10" report in June 2026). Files
`01-…` to `11-…` follow the feed's numbering. Episodes outside a numbered season are
filed by publication date, e.g. `2026-07-20-….md`.
