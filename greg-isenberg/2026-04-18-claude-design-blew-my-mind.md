---
title: "Claude Design Blew My Mind"
podcast: "The Startup Ideas Podcast"
host: "Greg Isenberg"
guest: null
source: "https://www.youtube.com/watch?v=vyLaimDeK_g"
published: 2026-04-18
captured: 2026-06-20
---

# Claude Design Blew My Mind

> Unscripted live stream: Greg takes a single mobile-app idea from Idea Browser
> all the way through **Claude Design** (Anthropic's design tool, research
> preview at `claude.ai/design`) — wireframes → 3 directions → hi-fi mockups →
> a VC pitch deck → a 30-sec video ad — in under an hour, no edits, errors and
> all. His verdict: **best-in-class for wireframes and decks, mediocre for
> video.** His own scorecard from the companion tweet: Wireframing 9/10, Mobile
> app design 8.5/10, Deck research & design 8.7/10, Video 4.5/10.

## The workflow that worked

1. **Grab an idea** from Idea Browser, filtered to "mobile app" → *engaging
   brain-exercise app for seniors* ("Senior Brains").
2. **Wireframe first, never one-shot.** Screenshot the idea into Claude Design,
   ask for a clean low-fi wireframe. Saves tokens *and* forces you to decide
   features and constraints before you spend on polish.
3. **Answer the questionnaire** (the killer feature — see below). It produces
   **3 distinct directions (A/B/C)** like an agency would, each with a name and
   a story.
4. **Pick one, go hi-fi** with a creative-director prompt that hands it
   reference apps to beat.
5. **Annotate the build directly** — pencil/napkin-sketch tool (top-right after
   a build) or type a note anywhere to request edits in place.
6. **Spin off a deck** in a separate project from the same idea.

## Erkenntnisse (key insights)

- **The questionnaire is the standout.** Before designing, Claude Design
  interrogates you like a product manager — primary device, tone, which screens,
  how many directions, accessibility baseline, who the secondary user is
  (it surfaced "senior-first, but family caregiver visible" unprompted). Greg:
  *"I'm blown away by how good these questions are."* The real value isn't the
  output — it's that **answering forces you to clarify what you're actually
  building.** Letting the tool make all the judgments is how you end up with
  projects you never finish.
- **Lo-fi or hi-fi, never mid-fi.** *"You can't be half pregnant."* Start lowest
  fidelity to explore, then jump straight to hi-fi.
- **It feels like an agency.** Three directions with named concepts + narratives
  is exactly the A/B/C deliverable a high-end studio gives you — at ~zero cost
  before tokens.
- **The deck is the surprise winner.** Idea Browser → Claude Design → deck was
  *"probably the best deck I have ever seen created by any LLM, period."* From a
  one-line prompt it produced: speaker notes/full script, a real problem framing
  (toys vs. 6-month memory-clinic wait), **actual research** (3 landmark
  cognitive-training trials cited), and **GTM math** (blended CAC $62, year-1 LTV
  $228, payback 3.3 months, LTV:CAC 3.7) plus the "adult child is the buyer, mom
  is the user" insight.
- **One task at a time.** Running two prompts in parallel freezes it. There's no
  obvious stop button. Focus on a single job, be patient.
- **It's a research preview — it breaks.** Errors mid-build, auto-retries, the
  occasional "absolutely cooked" stall. *"It's going to break sometimes and you
  just got to keep going."* The whole point of doing it live was to show the
  failures the tutorials edit out.
- **Context loss between folders is the real UX miss.** Leaving a project and
  coming back loses the questionnaire/state — *"doesn't feel like a seamless
  experience."*
- **Token burn is heavy.** Even on a Claude Max plan people report running dry in
  ~2 hours with no way to top up. Best audience line: *"It's genius, but imagine
  the most beautiful house in the world — you can live in it for one day."*
  Judge it by value returned, not token cost (he rated the session's output
  "thousands of dollars").
- **Video is the weak link (5/10).** Output is a cute character-driven slice-of-
  life, fine as a social post, not a TV-grade commercial. *"It's cool but it
  doesn't slap."* For hyperrealistic ads, audience pointed to **ever-since.ai**
  (Veo-class) running the same prompt instead.
- **Watch its copy instinct.** Unprompted, it labeled a share button *"Share this
  win on Facebook"* instead of "Share on Facebook" — the win framing converts
  materially better.

## Prompts (verbatim from the stream)

- **Wireframe:** *"Hey, this is an app idea I think is good. I'm inspired by
  gamified apps like Duolingo and the Brain Rot app, which has a mascot and feels
  fun to use. Can you make a wireframe that is clear, clean based on this idea?"*
- **Hi-fi (creative-director framing):** *"Now I want you to do a hi-fi version of
  this. You need to be a creative director here. I want you to research the Brain
  Rot app and apps like it, and Duolingo and apps like it, and make something
  familiar but fresh — something that the CPO of Brain Rot or Duolingo would be
  like, 'This is amazing.'"* → giving an LLM concrete references to beat is his
  go-to quality lever.
- **VC deck:** *"I want you to make a VC-style deck that'll allow me to raise $2
  million from Sequoia Capital."* (Then a short follow-up questionnaire: stage,
  team, aesthetic = "Sequoia style, warm and human," tone = "consumer feel with
  credibility.")
- **In-canvas edit (drawn annotation):** *"Make a button somewhere in the bottom,
  or wherever conversion would be highest, that says share to Facebook."*
- **Video:** *"I want you to create a 30-second ad for my new app Senior Brains.
  You can find the screenshots in the project called Senior Brains. I want the
  creative direction to be cute, funny, warm, and interesting to watch. Your
  target is 35 to 45 year olds — basically the children of the buyer."*
- **Video iteration:** *"Can you make this feel more like a real commercial,
  something I'd watch on TV?"* (Lesson: he under-specified "cinematic" in the
  first prompt and paid for it.)
- **When stuck:** just ask the tool — *"I can't find the questionnaire, where is
  it?"* / *"Show it to me vertically."* When in doubt, ask Design what to do.

## Ideas

- **Senior Brains** — adaptive brain-training app for seniors. Greg's read:
  underserved audience, demographic tailwind (58M Americans 65+), *adult child
  buys / parent uses*, gift-the-app Meta ad angle, distribute on Facebook + IG
  Reels where seniors actually are; plausibly a $5–15M ARR business. He
  explicitly invited viewers to steal it.
- **Underserved-audience thesis:** everyone builds for Gen Z / millennials;
  older adults are wide open.

## Why this matters for us

- **Idea → deck pipeline.** The Idea Browser → Claude Design deck flow is a fast
  path to a credible pitch with real GTM math baked in — directly useful for the
  e-invoice BDL pitch, Fabrik investor narrative, or any Solytics offer. One
  prompt got a deck with CAC/LTV/payback and cited research.
- **Wireframe-first to control spend.** Same discipline we want on FK/HC/launch-
  kit landing pages: define screens + features in a cheap low-fi pass before
  committing tokens (or agent time) to hi-fi.
- **Steal the questionnaire pattern.** The "ask the user like a PM, then
  extrapolate" front-end is exactly the spec-quality gap in our agent-task /
  Fabrik pipeline — a structured clarifying questionnaire before build would cut
  the needs-info round-trips.
- **Reference-driven prompting.** "Research X and Y, make it familiar but fresh,
  good enough that the CPO of X would love it" is a reusable quality lever for
  any generation task, not just design.
- **Copy lesson:** "Share this **win**" > "Share on Facebook." Frame share/CTA
  copy around the user's win — a free conversion tweak for our calculators and
  apps.
- **Design ↔ code, skip the Figma handoff.** Worth evaluating Claude Design for
  our own landing-page and dashboard mockups; pair with Claude Code to build.
- **Right tool per job:** Claude Design for wireframes/visuals/decks; a Veo-class
  tool (ever-since.ai) for real video ads.

## References

- Episode: https://www.youtube.com/watch?v=vyLaimDeK_g
- Tool: https://claude.ai/design (research preview)
- Companion tweet (scorecard): https://x.com/gregisenberg/status/2045625206434115902
- Idea Browser: https://www.ideabrowser.com

> Note: distilled from the full episode transcript. Prompts are quoted as spoken;
> light cleanup for filler words only.
