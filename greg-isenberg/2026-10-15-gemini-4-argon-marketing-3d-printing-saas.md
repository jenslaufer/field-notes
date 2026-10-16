---
title: "Gemini 4 Argon: AI Marketing, 3D Printing and SaaS (YouTube: Make cool things with AI that people buy)"
podcast: "The Startup Ideas Podcast"
host: "Greg Isenberg"
guest: "none — solo episode, sponsored by Google (early access to Argon)"
feed: "https://rss2.flightcast.com/ordbkg8yojpehffas7vr7qpc.xml"
audio: "https://episode.flightcast.com/01M4XGJQ554D82T8G5NW1VA488.mp3"
published: 2026-10-15
captured: 2026-10-16
duration: "30:50"
transcript: "publisher VTT (flightcast), 400 segments, ~4,800 words — full episode"
related: "2026-09-10-gpt6-astra-vibe-manufacturing-ras-mic.md, 2026-10-06-thirteen-businesses-age-of-ai.md, 2026-09-21-write-with-ai-commodity-personality-original-nicolas-cole.md"
---

# Gemini 4 Argon: three uses and six habits

> **A sponsored episode.** Google sponsored it and gave Greg early access; he says the opinions
> are his. One week with Gemini 4 Argon, three uses: **marketing** (interactive sites, writing in
> your voice), **"vibe manufacturing"** (customisable 3D-printed products) and **rebuilding old
> SaaS as a free tool**. Two findings hold beyond the model: Argon's creative output is poor
> **without references**, and the engineering is good on the first prompt. The six "hacks" at
> the end are generic agent habits (plan, sub-agents, goal, browser test, learn, effort level).

**Source note:** written from the publisher's VTT transcript of the full episode. ASR spells the
model "Argon" and "Argonne"; the harness is Google's Antigravity ("anti-gravity"). Every number
below is Greg's, said from memory, none verified. Weigh praise against the sponsorship.

## 1. Marketing with AI ("vibe marketing")

- **Interactive site instead of a normal one.** He asked Argon to redo his holding-company site
  (built 2021; he says it *"took 40,000 hours to build"* and *"probably cost us $200,000"*, and
  the business behind it brought in *"more than $40 million of revenue"*). Result: a Mondrian-style
  3D town with sounds, a "world passport" for visiting each building, a basketball mini-game.
  His claim: *"why are you creating a normal website in an Argon age?"*
- **The first prompt was bad.** "Make a better version of …" gave something he calls *"pretty
  brutal"* — too many buildings, *"Roblox-y"*, not premium. The lesson: *"I don't believe that
  you can get great creative out of Argonne unless you give it references."* He sees this as
  good news: the taste stays with you.
- **Other example:** Justine Moore (a16z) got an interactive museum of Apple computers without
  supplying images or data. Greg's point: such a page can build an audience first, and you
  decide later what to sell it.
- **Writing in your voice, one prompt.** Ask the model to research everything you have written
  (X, newsletter, YouTube) and *"internalize all that stuff into a skill"*, then test it with a
  topic. It produced a `SKILL.md` (voice rules, sentence rhythm, mental models, structure), a
  voice-and-lexicon file (coined terms) and a samples-and-templates file. He rates the post it
  wrote *"9.2 on 10"* and calls Argon *"probably the best frontier model for writing"*. Without
  public content: upload your own texts. He should have used sub-agents for the research.
  Rule he liked: *"AI does the plumbing, humans bring the taste."*

## 2. Physical AI ("vibe manufacturing")

- **Idea he gives away:** an embeddable **Shopify widget** that lets buyers customise a product
  (size, colour, live 3D preview), pay in the shop, and get a print-ready STL file. His mock-up
  shows print time, cost and suggested retail (one Bambu printer, eight hours, four units).
- Examples: famous mountains or riders for a snowboard shop; a custom espresso portafilter
  station, with the demand signal from r/espresso — people who *"spend $2,500 on machines and
  gladly pay $49"* (his figures).
- No printer: use a print-on-demand API (heard as "Slam 3D", likely Slant 3D).
- Second business: sell the widget as a service to other Shopify shops, split the margin
  (*"50% margin, 40% margin, 70% margin depending on how you price it"*).
- Why it works, in his words: *"When people customize things, they feel more attachment to it."*

## 3. Rebuild boring SaaS, give it away

- Find a recurring, boring problem on G2, Capterra, Reddit or his own Idea Browser; read the
  complaints; build a narrow product that fixes them.
- **Make the first tool free.** Not $50 a month times 10,000 customers: a free tool gets in front
  of likely buyers, and the second, third or fourth tool is paid — a small product studio around
  one ICP.
- His prompt shape for such a tool: what to build (commercial cleaning company: site-visit notes
  → reviewed price proposal, replacing the quoting spreadsheet), the main experience, customer
  complaints and source links, explain the plan briefly and then build, **no deploying, no
  sending**, and *"give an honest list of"* what remains unfinished.
- Result: plain-looking margin calculators — ugly without references, but in his view the
  engineering was right on the first prompt.
- His line on the critics: "SaaS is dead" is *"indie hackers selling to indie hackers"*.

## Six habits (any agent harness)

1. `/plan` first — his site would have been better on version one.
2. `/subagents` for independent jobs (research, checks) in parallel.
3. `/goal` with a reference image halfway through (*"make it amazing"*) — more tokens, better result.
4. `/browser` to let it click through the real user journey.
5. `/learn` to turn corrections into project rules or skills.
6. Effort **high** as default; start on medium to learn the tool.

**Price, as he states it:** Google AI Ultra, $100/month, includes the Antigravity app and CLI and
up to 1M output tokens; the $19.99 Pro plan does not include Antigravity or AI Studio. He also says
Antigravity *"is not my favorite harness"*; Argon runs in Cursor or OpenCode, too.

## Caveats

- **Discount:** sponsored, one week of use, revenue and cost figures from memory. The episode
  names no comparison with another model on the same task.
