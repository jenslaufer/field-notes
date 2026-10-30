---
title: "Stop building AI wrappers. Start building agent harnesses."
podcast: "The Startup Ideas Podcast"
host: "Greg Isenberg"
guest: "Jon Noronha (VTT spells \"John Narona\"), co-founder and CPO of Gamma; earlier at Optimizely"
feed: "https://rss2.flightcast.com/ordbkg8yojpehffas7vr7qpc.xml"
transcript_url: "https://rss.flightcast.com/transcripts/01M61MK2ZDT7TV0CK7ZNF1HGT9.vtt"
published: 2026-10-28
captured: 2026-10-30
duration: "49:21"
transcript: "publisher VTT (flightcast), ~10,900 words — full episode"
sponsor: "Anthropic"
related: "2026-08-31-marketing-engineer-growth-repo-six-systems.md, 2026-10-21-war-on-agents-nine-stages.md"
---

# The harness is the product: tools, context, QA and taste around off-the-shelf models

> An agent harness is the set of tools an agent uses to do a job, check its own work and ask the
> user what they want. Gamma rebuilt itself as one this year. The wrapper is most of the work,
> the models are interchangeable, and in subjective domains the edge is taste plus A/B tests on
> real users, not evals.

**Source note:** written from the publisher's VTT. The guest's company numbers are his own or
Greg's and unverified (Greg: Gamma *"hit 100 million ARR"*). Anthropic sponsored the episode.

## Insights

1. **Definition.** *"the harness is all the tools that agent uses to execute things in its
   environment, inspect its own work, and deliver something finished to the user, including
   soliciting from the user what their actual preferences are."* Claude Code is the harness for
   programming; Gamma is a creative one.
2. **"Wrapper" was the wrong insult.** *"actually the wrapping is most of the work"* — the
   models are similar in core capability, the product is what you build around them.
3. **One prompt, ~200 calls, ~20 models.** Messy notes → 20-slide deck: a cloud sandbox,
   a form with clarifying questions (who is it for?), connectors (Notion, Slack, Linear),
   outline, template choice via vision models and embeddings, parallel text/image/diagram
   generation, then **visual QA**: a vision model checks every slide for misaligned text,
   cut-off heads, contrast and padding, and the system fixes it in several rounds before the
   user sees anything.
4. **When a vertical harness is worth building:** the work is **subjective** (two people
   disagree on what good looks like, so the human stays in the loop) and the user **cares
   about the specifics** of the output. The design question: *"what are the unique tools that
   either I already have or I can build that are not already out there?"*
5. **Three kinds of edge:** a distinct vision you move toward faster than others; proprietary
   data; something beyond software (hardware, physical services). Noronha sees many harnesses
   in legal tech; Greg would not start one there (*"it feels so crowded"*) and likes boring niches (HVAC).
6. **AI smell.** Once everyone used Gamma, everything looked like Gamma and users did not want
   to be recognized as AI users. Fix: *"there can be a thousand AI smells instead of one
   monolithic one"* — an automated system that keeps cycling creative looks, like fashion.
7. **Evals only for the objective part.** Evals test things like whether the agent asks a clarifying
   question on an ambiguous prompt (tigers: for kids or adults?) or sticks to the brand guideline. Taste is measured with A/B tests on
   real users. North star: **upgrade to paid** — *"Generally, people only pay if they're really
   seeing value out of a tool"* — plus editing time, sharing/exporting, retention.
8. **Good friction.** A fast mode that skipped the outline review and the up-front questions
   lost: the slower path had *"much higher satisfaction ratings"* and users *"converted to
   paying at a higher rate"*. They shipped fast mode only for new mobile users.
9. **98 % prompts, fine-tuning later.** Prompts are easy and portable, and Claude writes them.
   Fine-tuning comes once there is real usage, to cut cost or for tasks the big models do
   badly (slide QA). New models get tested on live users within the hour; this morning he
   started eight tests of a new small model to see which tasks it can take over at half the
   cost.
10. **Subscriptions are a work thing.** On the chart that only ~2 % of people pay for AI tools:
    consumers dislike subscriptions; professionals and B2B pay, and that is where Gamma aims.
11. **Experiments are a numbers game.** *"so much of it just comes to like how many at bats you
    have"* — 10–20 tests running at once, many shorter than a day, and a *"trough of sorrow"*
    before anything works. Experiment can also mean just a landing page.
12. **Personalization at scale mostly did not happen** (Optimizely's old vision), outside feeds
    like TikTok. People dislike personalized pricing; brand investment is what works.
13. **Ideas named:**
    - **Slack/email harness that learns your voice by observing** your sent messages and drafts
      the first reply — the one he would build.
    - **Furniture/interior harness:** image models show the couch in your room but not its true
      size. Harness = render, then plain code measures the pixels and re-prompts until the size
      is right, plus recommendations (affiliate, e.g. 5 % commission). Tiers: consumer → part-time
      interior designer (pays a subscription) → staff at big retailers (most durable).
    - Personal video games for non-coders; vertical products on image models (diagrams,
      textures, icons, home decor), which he calls underhyped.
    - Turning what the top 1–2 % of companies wire up with n8n/Zapier (e.g. a pitch deck per
      new Salesforce deal) into something everyone can use.
14. **Closing rule:** only start what you would use yourself every day; Greg: *"marry the niche,
    date the product"*.

## What it means for Jens

- **Interior harness ≈ a tool he already has.** The `immo-entwurf` skill makes image-to-image
  renovation and staging drafts from property photos. The gap Noronha names — true dimensions,
  checked by plain code after the render — is exactly the harness part, and the paying tier he
  names is the prosumer (stager, agent), not the home buyer. Unvalidated; demand untested.
- **Good friction vs. FinGrab:** the paid signal Noronha trusts is the upgrade. FinGrab's
  checkout count is the same signal and stands at single digits per month; with ~500 users,
  Jens cannot run Gamma's day-long A/B tests — only changes with large effects show up.
- **Visual QA loop = the review gate he already runs on code.** Jens' agents get tests and a
  quality gate; his generated images, slides and PDFs get none. A vision-model check before
  delivery is a cheap addition wherever he ships visuals (store screenshots, immo drafts).
- **The voice-learning drafter** is what his own assistant does for Telegram/Gmail drafts. As a
  product, it collides with his rule that mail goes out only when he presses send — which is
  also what most buyers would want.
