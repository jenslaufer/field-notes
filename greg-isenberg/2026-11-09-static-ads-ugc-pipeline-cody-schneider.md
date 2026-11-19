---
title: "AI Agents are too good at marketing now"
podcast: "The Startup Ideas Podcast"
host: "Greg Isenberg"
guest: "Cody Schneider (Graft — transcript renders it \"graph.com\")"
feed: "https://rss2.flightcast.com/ordbkg8yojpehffas7vr7qpc.xml"
transcript_url: "https://rss.flightcast.com/transcripts/01M70MH40FGMYP7EW7V0JDB376.vtt"
published: 2026-11-09
captured: 2026-11-19
duration: "52:00"
transcript: "publisher VTT (flightcast), ~9,000 words — full episode"
related: "2026-03-02-145k-marketing-machine-claude-mcps.md, 2026-07-27-marketing-agents-too-good-cody-schneider.md, 2026-08-05-marketing-agents-masterclass-linkedin-outbound-cody-schneider.md, 2026-08-31-marketing-engineer-growth-repo-six-systems.md"
---

# Static ads and AI-avatar UGC from one slash command, at about $5 per video

> Cody recaps the agent environment (data, access, tools), then runs
> `/static-ads <url>` live on several brands and builds one AI-avatar UGC video end to end. The
> concrete value is the video pipeline: voice clone first, Seedance second, transcript check last.

**Source note:** Cody sells the tool he demos. Every live run goes through Graft's CLI and
skills; he plugs `graph.com/platform` and closes with *"We're raising our seed round for
grafts."* ClickHouse and the email-data tool are *"a great partner"* / *"an awesome partner
for us."* Greg says *"I'm not affiliated with Graft at all."* All costs, hit rates and ad
results are Cody's claims, unmeasured. No final ad is shown performing; nothing is uploaded live.

**New versus his earlier notes:** the warehouse and write-only API (07-27) are repeated. New:
the UGC fix for Seedance (07-27 named stitching as the unsolved part), per-video costs,
human creator networks via API, a quality gate loop, and the "swipe warehouse".

## 1. The environment (recap)

1. **Data.** Airbyte as pipeline, ClickHouse as warehouse. Agent reads only from the warehouse.
   Goal: trace an ad down to the payment processor and to customer lifetime value.
2. **Access.** Facebook Marketing API and Google Ads API for **writes only**: upload creative,
   turn ads off, move ads. *"Your GrokBot violated the terms of service on the API because it
   was sending thousands of requests per second."* Rule: *"you should assume your agents are
   like drunk patrons at a restaurant."*
3. **Tools.** Kie AI (heard "Kai AI", unified model API), fal (voice, transcription), OpenRouter
   for LLMs, an email/person data provider (Apollo or "Git leads").
4. Example of what the environment buys: a Google Ads agent asks an LLM whether each search
   term's intent fits the landing page, before money is spent. *"getting a human to audit
   5,000 search terms in 20 seconds is impossible."*

## 2. Static ads: `/static-ads <brand URL>`

Steps the skill runs (demoed on Idea Browser, LateCheckout, Aimé Leon Dore, Cursor, David,
Robinhood):

1. Extract the brand style guide from the website.
2. Pull the brand's Facebook Ads Library (Aimé Leon Dore: zero ads).
3. Research pain points and desired outcomes from Reddit and other social media.
4. Propose five static ad concepts as headlines. Idea Browser got e.g. *"stop guessing which
   idea to build"*, *"don't waste six months on a dud"*, *"1,948 ideas worth building."*
5. Generate the images ("make these"). Override the scraped style with a markdown file of
   fonts and colors.
6. Upload to a new ad set via the API.

Model: *"Chad GPT Image 2.5 is the best that we've seen."* ["Chad GPT" = ChatGPT, as transcribed.] Swap to Nano Banana by telling the agent.

## 3. AI-avatar UGC: `/ugc`

1. Write the script from the static concepts.
2. Voice: fal voice clone reads the script → MP3. Not Seedance audio.
3. Send MP3 + reference image + exact script to Seedance together. Reason: *"If I just send
   the script straight to Seed Dance, it's going to give me just like whatever it invents at
   that moment."*
4. Reference image = a real creator photo, remixed (background, age, ethnicity). Against the
   *"plasticky effect"*.
5. Render at 480p, upscale and add blur with FFmpeg. 1080p would cost *"I think it's like,
   you know, $14"*. Render takes *"about five minutes-ish"*.
6. Word-by-word transcription, matched against the script. A mispronounced word ("Calendla"
   for Calendly) gets located by timestamp and replaced.
7. Captions and motion graphics with Tesseract (Mirage). First pass was off: *"Didn't do this
   perfect on the first shot."* Fix: vision model checks frame by frame.

Cost (his claim): *"It says 475 was projected"*, so *"about $5"* per ad, maybe "about three"
with a new provider. 10 ads = $50, 100 = $500, versus *"$500 plus"* or $300 for a human
creator plus motion designer. *"95% is good out the other side"*; *"one out of 50"* Seedance
generations is garbled. He claims avatars sometimes beat humans on the same script.

## 4. Human creators through the same pipeline

- Tribe and SideShift: UGC creator networks with an API. The agent acts as creator manager,
  sends script plus prompt, pays per video (one client: *"like $40 a video"*, plus a spend bonus).
- Add the same motion-graphics step on top of the human video.

## 5. Quality gates

- Greg's idea: a creative-director agent scores the 480p draft like CodeRabbit reviews code;
  only show results at *"an eight on ten or a nine on ten."*
- Cody's regulated-market version (financial clients): a vision model checks each static
  against what may not be said or promised, sends it back, repeats. *"We typically get it in
  like two to three."*
- Design jobs, not employees: *"you don't need God in a box to run a Facebook ads account."*
  Ask *"what's the top 1% media buyer doing?"* and turn that into code.

## 6. Volume and learning

- Andromeda picks the audience; your job: *"All you have to do is give it creative velocity."*
- Clients move from 10 ads a month to 300, shipped in cohorts of 30.
- Example (his claim): an ad books two demos at about $50 against an average of 150, then
  Facebook stops spending on it.
- Store each Seedance prompt as a JSON blob and tie Facebook results to it.
- **Swipe warehouse:** *"swipe files made sense pre-AI. Now you need like thousands of swipe
  files."* Tools named: sublime.app, Cosmos. Greg adds: feed the creative director David
  Ogilvy's books and a hundred top ad-people podcasts from the last 24 months.

## What it means for Jens

- **One piece fits a bet that is running now.** The Bieterpost Google Ads test has run since
  16.11. Cody's search-term check — an LLM asks whether each search term's intent matches the
  landing page — is a cheap guard for exactly that spend. FinGrab's Bing leak was a match-type
  problem of the same kind. A check inside the existing paid-search routine, not a new build.
- **Writes through the API, reads from your own data** matches how the Ads skills already work.
  The "drunk patrons" rule is the reason to keep it: an agent that writes to an ad account
  needs a rate and budget limit set outside the agent.
- **The static-ad and UGC pipeline only pays once a bet runs on Meta with budget.** None does
  today (the Meta skill is read-only). If one does, the ~$5 per video is his figure; set a
  kill number before the first cohort of 30, not after.
