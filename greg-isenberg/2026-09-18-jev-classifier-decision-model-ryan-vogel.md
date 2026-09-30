---
title: "Jev is HERE. How to use it"
podcast: "The Startup Ideas Podcast"
host: "Greg Isenberg"
guest: "Ryan Vogel (founding team of OpenCode, YouTube @vogeldev)"
feed: "https://rss2.flightcast.com/ordbkg8yojpehffas7vr7qpc.xml"
audio: "https://episode.flightcast.com/01M2TVPD7JF23WA30637M194AD.mp3"
published: 2026-09-18
captured: 2026-09-30
duration: "28:24"
transcript: "publisher VTT (flightcast), 435 segments, 5,302 words — full episode"
links: "https://typesafe.ai (Jev, waitlist) · https://vercel.com/ai-gateway (instant access)"
related: "2026-09-10-gpt6-astra-vibe-manufacturing-ras-mic.md, 2026-09-08-local-ai-clearly-explained-gemma.md, 2026-08-25-sip-live-support-eats-engineering-jonathan-courtney.md"
---

# Jev: a model that only decides

> Ryan Vogel demos Jev, a new model that is not a chat model but a **classifier**: you pass an
> input and an output schema (categories, true/false scores), and it returns a probability per
> choice — no text, no reasoning trace, about 200 ms per call. His demo scores 1,700 of his own
> emails on category, priority, spam and "warrants a reply" for 18 cents. Greg turns it into one
> startup rule: find a business with an expensive queue of incoming information and put Jev at
> the front of it. Ryan's own limit: keep it advisory, and do not point it at trading — his
> Bitcoin buy/hold/sell test did badly. Access runs through the Vercel AI Gateway; direct access
> is a waitlist.

**Source note:** written from the publisher's own transcript (flightcast VTT, counts in the front
matter). Two speakers, no speaker labels; attribution follows content and the publisher's
description. Everything about Jev here is the guest's claim on air — no accuracy figure is shown
for any demo, only speed and price. Greg says up front he has not used it himself. The creator
attribution in the intro (a named researcher "whose research built ChatGPT") is Greg's claim and
is not checked here.

**ASR garbles.** The model's name is transcribed as `Jev`, `Jeff`, `Jeb` and `JEV` — all the same
model; quotes keep whatever the transcript says. `Excalibur whiteboard` = Excalidraw ·
`Why are we doing Jason` = JSON · `type safe AI` = typesafe.ai (the show notes write both
"typesafe.ai" and "Typeface AI"). Unresolved and left standing: the score type is called a
`null` and a `newel`/`new` (from context a number between 0 and 1, but I cannot recover the word),
and the payment line reads `Exxon Enterprise received $22 from Stripe`. The cost sentence is
self-contradictory on air: *"The entire cost was 18 cents for each one of those emails"* — the
show notes say "18 cents total", which matches the demo; read it as total.

## 1. What Jev is — input, schema, probabilities

> *"Jev is a classifier at its truest being."*

> *"you define an input."* … *"And then the output is a schema."*

The worked example is an iPhone and the question "what colour is it":

> *"I'm pretty confident it's 80% orange, but it could be 10% red or it could be 10% blue, which adds up to 100."*

It does not generate the categories; you pass them in. And there is no text layer between input
and answer — which is the part Ryan keeps correcting Greg on:

> *"You don't really ask Jeff because Jeff isn't a text model."*

> *"There's no internal reasoning or anything like that, which is why people are like, well, I don't know if I can trust it"*

> *"It's a decision model."*

The developer argument is the typed output: *"it's actually type safe"*, and the score comes back
as a number object, *"not like text that is a number or something weird that you would have to do
some additional data processing on."* He also shows it forced to type text letter by letter
("what is bigger, a cat or an elephant?") — a curiosity, and he says himself it is not trained for
that.

## 2. The demo: 1,700 emails for 18 cents

Input is the whole email object — subject, body, sender — with no pre-processing. Four outputs:
category, priority (low to urgent), a spam score, and a reply score (*"how much does this warrant
your reply?"*).

> *"there are 1,700 of these emails."*

> *"We had 4.2 million input tokens and 500,000 output tokens."*

What the demo does **not** show: how many of the 1,700 labels were right. The example he points at
— an account-violation mail scored at 90% "warrants a response" — is one row, picked by him.

## 3. Speed and price are the pitch

> *"it takes around 200 milliseconds per query to Jeff, no matter like what the input output structure is."*

> *"AI can take like up to like 30 seconds for some things."*

On price, his own account's experience, not a price list:

> *"We had like a $5 like, I guess, like intro credit, I guess, on the account."*

> *"We were able to use that for two days without hitting it."*

> *"you could probably like load $10 on it and be good for like maybe three months."*

Other demos, all his own, none measured for quality: a video clipper that transcribes a video and
has Jev score moments (*"It prepares audio and scores 17 moments and around like three seconds."*,
built in *"maybe 10 minutes"*), and a clip by the Browser Use team where Jev drives a browser to pick
a flight Zurich–London *"in 7.1 seconds"*.

## 4. Where to put it — and where not

Ryan's rule of thumb:

> *"If you're looking at some data and thinking, Hmm, I have to make a decision on this."* … *"You should probably think about adding Jev at that layer."*

And the qualifier in the same breath:

> *"Obviously not for like a hundred percent of interactions and stuff like that should be a very heavy advisory role"*

Concrete uses named: his girlfriend's design agency scores contact-form leads (*"is good lead"*, a
98% lead gets a reply first; vague ones cost the owner more effort); re-scanning old mail for
*"are there any leads I missed?"*; support routing to the right product team.

The negative result is the most useful part of the episode:

> *"I would not put this model in front of like your stock portfolio or Bitcoin or anything like that."*

> *"This is just for like routing or other sort of decisions like that, where it doesn't need insane and model intelligence."*

## 5. Greg's startup frame: the expensive queue

> *"How do I find a business with an expensive queue of incoming information and then just put Jev at the front of that queue?"*

Greg's routing picture: high confidence goes to a human now (*"This is CMO of Coca-Cola."*), middling
confidence goes to automation or an LLM draft, very low confidence gets ignored.

Ryan's one worked idea is a local-services layer: a customer types *"I need my driveway power
washed"*, Jev scores the local providers, and the "instant quote" form becomes actually instant —
*"it's never instant and it always is like, we'll email you by end of day."* He concedes it
*"would require a little bit of architecture"*. The last tip is the cheapest one in the episode:
ask your own AI agent *"what sort of workflows do I do on the daily basis that could benefit from a
decision maker like Jeff?"*

## Insights for me

My judgement from here on, not the episode's.

- **The episode sells a capability, not a moat.** Anyone reaches Jev through the Vercel gateway in
  an afternoon. Greg's own frame says where the value sits: in *owning the queue*. I own almost no
  queue with volume — launch-kit contacts are near zero, FinGrab has 512 users and 3 paying subs.
  A lead scorer in front of an empty funnel scores nothing. This is the distribution bottleneck
  again, dressed as a model launch.
- **Where I do have a queue: freelancermap listings.** That is the one inbound stream with real
  volume that I read by hand, and the decision is exactly Jev-shaped: fit to my profile (AI/data,
  remote, rate cap vs. my ~95 EUR/h), yes/no, probability. `tools/fmap-satz.py` already parses 40
  listings for rate caps; a fit score per listing is the same pipeline plus one classifier call. Small
  bet: score the last few weeks of listings, compare against the ones I would have applied to, and
  keep it only if the ranking beats my own skim. Measure hit rate before trusting it — the episode
  shows no accuracy number for anything.
- **The daemon's own routing is a cheaper fit than Claude for some jobs.** Inbox triage, mailbox
  sweeps, "does this message need an answer" (`tools/inbox-offen.py` decides that with rules today)
  are yes/no decisions on incoming text. Claude sessions are the expensive part of this system and
  Claude is still a single point of failure; a 200 ms classifier as a pre-filter would be a second,
  independent path for the boring decisions. Worth one agent-task to try on the mail sweep, not a
  rebuild.
- **Price, computed from the demo's own figures:** 4.2M input + 0.5M output tokens for $0.18 is about
  $0.04 per million tokens — roughly two orders of magnitude under frontier chat models. If that holds
  outside a demo, classification becomes free enough to run on every item, which is the real change.
- **Keep Ryan's limit.** "Advisory, not trading" matches my own rules: nothing it scores goes out
  (mail, applications, money) without a human or a verified gate. The Bitcoin miss is the reminder
  that a confident probability is not a correct one.
