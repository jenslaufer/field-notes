---
title: "You're using GPT-6 Astra WRONG"
podcast: "The Startup Ideas Podcast"
host: "Greg Isenberg"
guest: "Ras Mic (YouTube/X) — regular on the show, by his own count the sixth to eighth appearance"
feed: "https://rss2.flightcast.com/ordbkg8yojpehffas7vr7qpc.xml"
audio: "https://episode.flightcast.com/01M262A87SZCDMR1D5W0W1RSQV.mp3"
published: 2026-09-10
captured: 2026-09-11
duration: "22:52"
transcript: "publisher VTT (flightcast), 391 segments, 4,222 words — full episode"
related: "2026-09-08-local-ai-clearly-explained-gemma.md, 2026-08-17-claude-code-ai-employee-nine-pieces.md, 2026-08-12-ai-agent-workforce-allie-k-miller.md, 2026-06-11-you-are-using-fable-5-wrong.md"
---

# You're using GPT-6 Astra WRONG

> Two halves. Greg reads out nine prompts he published for Astra (Greg Brockman reposted them)
> — bill renegotiator, agency-to-software, mispricing scanner, one-person operator dashboard,
> agent-opportunity audit, browser operator, nightly QA team, competitor spy, lead-capture
> browser game. Then Ras Mic tells the story that carries the episode: he went from wanting his
> own agent inside a HomePod-shaped speaker to a Blender layout, a parts list, a **$561** order
> and a **merged pull request** in about half an hour, knowing nothing about hardware. Greg’s
> frame for it: 2024 was vibe coding, this is **vibe manufacturing**. The recurring sentence is
> that the models got smarter and people did not get braver.

**Source note:** written from the publisher's own transcript (flightcast VTT, word counts in the front matter), not
from show notes. Two speakers, no speaker labels; attribution follows content and is confirmed
against the publisher's episode description where it names Ras Mic.

**ASR garbles.** `Ross Mike` = Ras Mic (the show notes spell it) · `GP6 Astro` / `Astro` =
GPT-6 Astra · `codec subscription` = Codex subscription · `OT network icon` = XP network icon ·
`Omarchi` = Omarchy (Linux distro) · `Mickey` = Mic. Two I cannot resolve and therefore leave
standing: the agent Ras Mic loads onto the speaker is transcribed **`Ruth`**, and the smaller
model he contrasts with Astra is transcribed **`5.6 Soul`**. Neither is verifiable from the
audio alone — do not smooth them into a name.

## 1. What the model is, in the two speakers' words

Pricing and efficiency, from Ras Mic:

> *"So a couple of things about the model, first and foremost, this is OpenAI's most expensive model. It's on par with Fable in terms of pricing. But if you have a codec subscription, very subsidized. And not only that, it's also very efficient, meaning it doesn't take as many steps to complete a task."*

That is the honest version of the value claim: the per-task price is high, the step count is low,
so the intelligence-per-dollar holds up. The subsidy is the part with a deadline:

> *"So there's an insane level of subsidization that's happening. Take advantage of it now."*

His own measurement of that gap — he asked the agent to price his usage at API rates against a
couple of $200 subscriptions:

> *"And in the last week, I've spent over twenty four thousand dollars."*

Take that as an order of magnitude from one heavy user, not as a benchmark. The competitive read
he gives at the end is blunter than anything in the show notes:

> *"if I if someone asked me pick a subscription I would cancel and drop my anthropics subscription"*

## 2. Two things to run against an app you already have

This is the most directly usable minute of the episode, and it needs no new project.

**Performance audit.**

> *"I want to run a performance update. My pages aren't as fast as they need to be. My API calls aren't as fast as they need to be. Please review my entire app and suggest a performance update."*

> *"I did that for one of my apps and speeds went from 800 milliseconds to literally 20 to 30 milliseconds."*

**Security audit** — the one he says the previous model generation could not do:

> *"Number two, something we couldn't do with Fable is a security audit."*

> *"I ran the security audit and Astro was basically like my boy, you would have been cooked if I didn't read all this. So run a security audit if you have an app that people are actually using."*

Note the condition he attaches: *an app that people are actually using*. It is a triage rule, not
a slogan.

**UI, with one caveat.** He gave it the old Windows XP network icon as a reference image and liked
the result:

> *"Without a reference image, it kind of does too much, right?"*

## 3. The nine prompts

Greg published these on X; Brockman reposted. Reconstructed from the audio in the order he reads
them.

1. **Bill renegotiator.** *"Go through my internet phone software bills, jump into each provider's chat support and negotiate them down or cancel what I'm not using."*
2. **Agency → software.** *"pick one service business in a niche. You can pick the niche and reverse engineer the exact workflow they sell to clients. Break it into steps, tools, use inputs, outputs, human judgment points in places where the work gets slow or expensive."* Then: *"design the simplest AI product that could replace the first version of that service. and charge $500 to $5,000 a month."*
3. **Mispricing scanner.** *"Watch Facebook Marketplace and Craigslist in my city for cameras, furniture, bikes, what have you. Listed way under market and text me the second ones mispriced with the link."* He frames it explicitly for people who cannot get a job right now.
4. **One-person operator dashboard.** *"Look at my docs, notes, Stripe exports, analytics, customer calls, and project lists, and build a weekly operator dashboard. I want to know what is making money, what's wasting time, what customers are asking for, what I should stop doing, and the three highest leverage actions for the next week. Be blunt and show your work."*
5. **Agent-opportunity audit.** *"Look at how this business works and find the tasks we should give to agents before hiring another person."* With the estimate columns: *"estimate the current human time, the cost of mistakes, the tools involved, the difficulty of automating it, and the first safe version we could deploy. Prioritize things that save money or create revenue within 30 days."* Greg on his own default: *"Before I hire anyone, I'm like, Should I just get an agent to do this?"*
6. **Browser operator.** *"Use the browser to complete this workflow."* … *"When you're done, give me the output, the repeatable SOP, and the automation plan so this can become an agent."*
7. **Nightly QA team.** *"every night, open my app on a real phone, go through sign up, check out in the main flows, and screenshot anything that's broken or confusing."* The word doing the work is *confusing* — he means UX bugs, not just exceptions.
8. **Competitor spy.** *"sign up to my top three competitors, sit inside their product and their emails, and send me a monthly report on every new feature, price change, and the thing they do better than that."* Greg's argument for the cadence: monthly is the happy medium between the founder who watches competitors too much and the one who ignores them entirely.
9. **Lead-capture browser game.** *"Build a browser game around this mechanic."* … *"Don't just make a cute demo. Add progression, tension, scoring failure, polish. And one reason, someone would send it to a friend."* … *"Then add lead capture, like email and SMS. And it needs to tie into my core product, which sells XYZ."*

## 4. The hardware story — the actual payload

Ras Mic wanted his agent inside a physical speaker, because the good-looking hardware has bad
software:

> *"In particular, I'm talking about the HomePod. If anyone has the HomePod, Siri is terrible, but this is the best looking speaker ever."*

Jailbreaking it turned out not to be possible, so he asked the agent to help him build one instead.
The chain, in his telling:

- He asked whether the agent could drive Blender, which he had installed. It could.
- He described the goal and pointed at his agent's repo: *"I want to build an AI home speaker. I want to load my agent Ruth from, and I gave it my repo. How would I DIY?"*
- It came back with a Raspberry Pi build, a diagram, and a shopping list: *"It's like $350 to $450 before tax."*
- He asked for Amazon.ca links: *"And it was $561 before tax. I was like, I just bought. I just automatically bought."*
- Then the part he did not expect — a rendered assembly: *"can you use Blender to show me the setup of this project? And will you believe it? It showed exactly how I would have each thing laid up."*
- And the code: *"It wrote the code and it made a PR."* … *"I merged the PR."*
- Beyond the prototype it named suppliers: *"it was even telling me Chinese suppliers to reach out to to build the HomePod shell."*

Elapsed:

> *"This was half an hour work."*

The second, smaller story makes the same point without any money: he has a PS4 gathering dust,
asked what to do with it, and ended up planning to run Linux and agents on it — *"I could run
Linux on my dust collecting PS4. I would have never imagined, thought, or even tried to do this."*

## 5. The line the episode is built on

> *"But the bravery for people to try new things hasn't gone up."*

And its sharpest form:

> *"the saddest thing that people can do with a model like GPT-6 Astra is generate landing pages."*

Greg's generalisation, and the reason the episode has a name worth remembering:

> *"It feels like we're having a similar shift right now, but for physical projects."*

He dates the precedent precisely — Lovable, Bolt, Replit and v0 in 2024 made anyone a vibe coder —
and puts a number on where he thinks this one lands:

> *"there's going to be thousands of $1 million a year plus businesses that get created in this whole shift that OpenAI has spearheaded with Astra around like vibe manufacturing"*

His own filter for what to build in it:

> *"what are some small little products that... that seem niche, but solve a real pain point that I can go and create in a short amount of time and then create meta ads to drive traffic to those products"*

Note that the last clause is the distribution half, and it is one sentence long. That ratio is the
episode's blind spot, not its lesson.

## Insights for me

- **The two audits are the cheapest thing in this episode and they apply tonight.** Five shipped
  extensions and a live Launch Kit instance have never had a model-run security review, and
  `fingrab` takes payments. The prompt is one line, the target is an app real people use, and the
  measurement already exists in the repo — a red finding is a ticket, not an opinion. This ranks
  above every idea in section 3 because it touches something already sold.
- **Prompt 4 is Otto's `/ops` report, written by someone who does not have Otto.** "What is making
  money, what's wasting time, what customers are asking for, what I should stop doing" is exactly
  the weekly summary this repo could produce from `state/` plus Stripe — and does not. Worth
  noting which half is missing: the "what customers are asking for" column is the same `/customers`
  gap the 17.08. episode exposed. Second independent source now pointing at the same hole.
- **Prompt 8 is already built here, one level down.** `stripe-watch.py`, `amo-watch.py` and
  `cws-watch` watch our own shelves; nothing watches the neighbours' listings, although the
  shelf-size measurements from 22.08. show that is where the competitive facts live.
- **Vibe manufacturing is not a thread for us and should be named as such.** It is the most
  entertaining part of the episode and the least connected to any money thread here — no hardware
  asset, no supplier relationship, no channel. Enjoy the story, do not open a project.
- **Watch the subsidy claim, do not repeat it.** "$24,000 of API value for a couple of $200
  subscriptions" is one user's self-reported number from his own agent, not a measurement. If it
  ever matters for a model decision here, it has to be re-derived from our own token counts.
