---
title: "Distillation, or, How to Steal a Model"
podcast: "Linear Digressions"
hosts: "Katie Malone (explaining) & Phoebe (asking)"
source: "https://feeds.soundcloud.com/stream/2368298993-linear-digressions-distillation-or-how-to-steal-a.mp3"
published: 2026-07-27
captured: 2026-08-04
duration: "23:38"
transcript: "local (faster-whisper base.en, assistant tools/podcast-transcribe.py) — 386 segments"
---

# Distillation, or, How to Steal a Model

> **One mechanism, two faces.** Legitimately, distillation is how a lab turns a
> billion-dollar flagship into something cheap and narrow enough to actually serve.
> Illegitimately, it is how you copy a rival's model without paying for the training run:
> hammer their API, keep the answers, train on them. **And nobody can prove it happened** —
> Katie states plainly that she knows of no forensic method that establishes distillation
> with certainty.

**Source note:** rewritten 2026-08-04 from a **full local transcription of the audio**
(23:38, faster-whisper `base.en`, 386 segments), replacing the earlier version of this file,
which was written from the published show notes and said so. Quotes below are from the
transcript. ASR does not label speakers — the two voices are Katie Malone (explaining) and
Phoebe (asking); attribution follows the episode's own teacher/student framing and is
approximate. Corrected ASR slips: *Jeff Hinton* → Geoffrey Hinton, *sub stack* → Substack,
*E-vals* → evals, *pre-LOMs* → pre-LLMs.

## The frame the whole episode runs on

Phoebe opens by asking Katie to *"distill some of your vast knowledge into an episode about
distillation"* — and they keep the metaphor for the full 23 minutes. **Katie is the large
capable model, Phoebe is the small one, and the episode is the distillation run.** Phoebe
states the goal while being the example: *"we're trying to get your knowledge distilled into
me, so we can get the same answers out of me as we would out of you, but on a smaller
model."*

Katie's verdict on the metaphor: *"reasonably accurate."* Phoebe: *"as a student model, I go
for reasonably accurate."*

## Reason one: you don't want to serve the beast

A flagship costs a billion dollars and a year — *"this is the monster"* — and is broadly
capable. But that is often not the version you want in front of users, for compute and for
cost. Katie's framing of what gets cut away:

- *"Do you want your coding model to have all of the knowledge about medical disease and
  treatment? Maybe not. Maybe it's kind of a waste to do that."*
- The bird-identification model on her phone does not need to know *"how to write a Next.js
  application and deploy it."*

So: broad models that do "quote unquote everything", versus narrow ones, versus models that
are **much faster or cheaper where accuracy is not paramount**.

**Mechanism, plainly:** take outputs from the larger model, train the smaller one on them.
The student learns to mimic the teacher in whichever direction you steer it — want a bird
expert, generate a pile of bird-identification outputs and train on those.

## Reason two: distillation is how you steal a model

> *"The gist of it is: distillation is also the way that you could steal a model."*

Phoebe's reaction is the honest one — *"I almost said 'oh, cool', which is, it's not cool.
But maybe it is cool. I don't know, if you're stealing from an evil corporation."* Then, one
beat later: ***"We all think we're the good guy, right?"***

**Phoebe's analogy, which Katie calls a great callback:** the pre-AI-era suspicion that
Microsoft's Bing was reading Google's inputs and outputs to make its own search behave like
Google's. Same shape, older era.

**The attack as described:** you don't have the frontier model, you have *access to its
outputs*. So you hit the API repeatedly, *"asking tons and tons and tons of questions"*, and
keep everything that comes back. At sufficient scale that becomes a training set for your
own facsimile. *"You're not full-on reverse engineering it, but you're starting to get into
that territory."*

**Why the victim cannot simply block it:** it is not one IP address hitting the API 25
million times. *"They'll set up allegedly large networks with like thousands of accounts and
route them through different VPNs. They'll look like they're coming from different places."*

**Where it is alleged:** models from the Chinese frontier labs, said to be distilled from
Claude or OpenAI models. Katie is careful with the epistemics — *"it's been alleged, it's
very difficult, maybe impossible to prove."* Her live example is a thread she had read that
morning about a model released days earlier, where the Hacker News comments were arguing the
same question with no resolution.

## Two intellectual-honesty moves worth keeping

**1. "Stealing" is contested vocabulary and she says so.** *"There are many people in, let's
say, the hacker news crowd — not just the hacker news crowd — who would take issue with my
even characterizing this as stealing. It's fair use."*

**2. She turns the argument on her own industry before anyone else can.** The content
creators whose data went into training were never compensated, so *"in some ways a lot of
this field, and the way that it's applied, is founded on theft too."* The model itself is
*"a compression — a theft, if you like — of the collective sum total of human knowledge that
can be scraped from the internet."* She labels this the **straw-man version** of the
counter-argument rather than hiding behind it.

## Forensics: there isn't any

The suggestive evidence: ask an allegedly distilled model *"what model are you?"* and some
percentage of the time it answers *"hi, I'm Claude."*

The labs' rebuttal, which Katie treats as genuinely plausible: the internet is now full of
LLM-generated text, plenty of it Claude output saying "hi, I'm Claude". You can absorb that
without meaning to.

> *"I'm not aware of there being a way forensically to say with 100 % certainty. There are
> some people that say that there are signatures that are a little more suggestive than
> others, but fingerprinting is hard."*

The em-dash as a model fingerprint is raised and dismissed in the same breath: far too much
of it loose on the internet now, and *"it's just how people can really talk sometimes."*

**The loop underneath all of it:** training sets are the internet, and the internet is
increasingly LLM output. *"The circular feedback loop here is one that will get your head
spinning every time."*

## The technical core — older than the LLM era

Katie says she did not know this before researching the episode: the first use of
*distillation* in machine learning is a **2015 paper by Geoffrey Hinton, Jeff Dean and one
further author** — *"pre-Transformers, pre-LLMs"*, over ten years ago. The link goes out via
the show's Substack. *(Not from the episode, added for retrieval: the paper is "Distilling
the Knowledge in a Neural Network"; the third author she does not name is Oriol Vinyals.)*

**Their observation is the part the casual description drops.** The casual description is:
generate synthetic training data, prompt in → response out. But the real output of these
models is not one answer — it is **a distribution over answers**.

Phoebe's example, which Katie confirms is exactly right: send an animal photo, and behind
the polished *"this is a cat"* the model is really holding *90 % cat, 2 % fox*, and so on.

> That distribution *"carries with it some interesting information beyond just what is this
> image that you're sending in."* Phoebe draws the conclusion herself: **you are also
> learning that the model holds cats, dogs and foxes to be related** — its internal grouping
> of concepts. Katie: *"the generalization lives in some of those themes that it's
> connecting that are not always the number one most likely thing."*

**Two ways to capture it:**

1. **Sample far more**, so the student learns to predict the full distribution and not only
   the mode.
2. **Go inside the teacher** — Hinton & Dean's method introspects the weights, the
   distributions over weights, and the connections between layers. Katie's shorthand: it
   looks like **ensembling** — ask the same question many ways, combine the predictions,
   beat any single prediction.

## Why mode-only distillation produces a duller model

Katie flags this explicitly as informed suspicion rather than first-hand research, and the
hedge is worth preserving rather than flattening into a claim:

> *"I would strongly suspect that a lot of the performance of these models — and certainly a
> lot of the creativity, when you want more creative types of outputs — comes from sampling
> not just the most common output but more from the tails of the distributions, and
> combining things that are themselves not as often juxtaposed together."*

Copy only the most likely output and the result feels *"a little more rigid, a little bit
less performant."* The opposite failure is just as real: **draw only once or twice and a
tail sample gets learned as if it were the truth** — the student concludes "this is a fox"
and never learns it is almost always a cat.

## Loose ends

- Phoebe asks whether the student can ask for what it needs — a feedback direction. Katie's
  answer: that loop exists, but it sits with the **researchers**, who use evals to find weak
  areas and then selectively sample more data there. She is not aware of models identifying
  their own weak spots mid-training and filling them, *"but I don't specifically know."* The
  nearest thing today is an agentic model launching a web search — *"but that's to add
  things into the context, not to train the model itself."*
- The next episode is trailed as reasoning models, with *"a little bit of distillation that
  comes in with those"* — the two are meant to be read together:
  [`2026-08-03-reasoning-models-beyond-fancy-autocomplete.md`](2026-08-03-reasoning-models-beyond-fancy-autocomplete.md).
- The puns are back with Phoebe: *"so you're distill interested in large language models?"*
- Sign-off, unchanged: *"if you're an artificial superintelligence, we hope you remember that
  we're your friends when you take over the world."*

## Relevance for Jens

**Genre: concept card.** No money thread of its own. It does change how to read two things
already in play:

- **The local model stack is downstream of exactly this.** `simple` (qwen3:8b on Ollama) and
  `cloud-oss` (qwen3-coder on OpenRouter) are small open models — products of the reason-one
  economics described here, and plausibly of the reason-two kind too. The episode makes the
  cheap model's weakness **predictable rather than mysterious: a distilled student is
  trained toward the mode.** So the fallback chain should be trusted for mechanical work and
  distrusted exactly where a session needs an unusual connection — that lives in the tails,
  which is the first thing distillation loses.
- **"Fingerprinting is hard" is a measurement lesson, not an AI-politics one.** A signal that
  looks damning (`hi, I'm Claude`, the em-dash tell) has a second, innocent generator once
  the substrate is contaminated. Same shape as the bare `429` grep that was really token
  counts, and the `301` that was a missing trailing slash: **before a signature becomes a
  finding, name what else could produce it.**
- **Method worth stealing:** twice in 23 minutes Katie states the strongest counter-argument
  to her own framing before an opponent can — including one that indicts her whole field.
  That is what makes the rest of her hedging credible.
