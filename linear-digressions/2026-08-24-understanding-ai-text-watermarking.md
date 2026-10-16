---
title: "Understanding AI Text Watermarking"
podcast: "Linear Digressions"
hosts: "Katie Malone (solo)"
source: "https://feeds.soundcloud.com/stream/2386923495-linear-digressions-understanding-ai-text.mp3"
feed: "https://feeds.feedburner.com/linear-digressions?format=xml"
published: 2026-08-24
captured: 2026-08-24
duration: "29:57"
transcript: "local (faster-whisper base.en, tools/podcast-transcribe.py)"
---

# Understanding AI Text Watermarking

> **The watermark is not hidden *in* the text — it *is* the text.** Nothing is added: no
> tag, no invisible Unicode, no first-letter code. Anthropic changed the source of the
> randomness that picks the next word, so the word choices themselves carry the signature.
> Two consequences fall straight out of that mechanism and matter more than the news
> story. First, **it only lives where there was a real choice** — high-entropy prose is
> heavily marked, `the capital of France is ___` and code are barely marked at all.
> Second, **the output distribution is unchanged**, so the watermark removes none of the
> familiar tells: Claude still writes *"quietly"* and *"load bearing"* exactly as often as
> before. The detectable thing and the recognisable thing are two different things.

**Source note:** written from a **full local transcription of the audio** (29:57,
faster-whisper `base.en`, ~3 min CPU on the mini-PC, 206 segments), not from the show
notes. Every quote below was checked against that transcript. Solo episode — Katie alone,
prompted by the Anthropic announcement roughly a week and a half earlier: *"There were a
lot of big feelings about this."* Her own position, stated up front: *"I, frankly, did not
have either of those reactions super strongly."* What interested her was the machinery.

**Second source, read separately and marked as such:** Anthropic's own FAQ,
[How Claude's text watermarking works](https://www.anthropic.com/news/claude-text-watermark).
Everything attributed to Anthropic below comes from that page, not from the episode. The
episode is about the *method*; the FAQ is about the *rollout*, and they agree on every
point where they overlap.

**ASR caveats** (`base.en` mangles proper nouns; left unsmoothed where quoted):
`Synth ID` = SynthID · `Leichi` / `leechies` / `me cheese` = lychee · `Duryan` = durian ·
`LOMs` = LLMs · `and tropics algorithm` = Anthropic's algorithm · `cloud selects` = Claude
selects · `wait the die` / `waiting function` = weight the die / weighting function ·
`M dashes` = em dashes · `one bright way` = one right way · `linear digrashions` = Linear
Digressions. One sentence around [18:32] is garbled beyond repair and is paraphrased, not
quoted.

## What it is not

The episode opens by clearing away the three guesses that were circulating:

- **A visible tag.** Not *"a giant tag at the beginning that says AI generated text
  because that would obviously give itself away."*
- **A first-letter code.** *"Or there was some jokes about maybe if you took the first
  letter of every sentence, it spells out a secret message and that's how you know that it
  was watermarked by an AI."*
- **Hidden characters.** *"There was some speculation that maybe what they were doing was
  they were encoding special invisible Unicode characters"* — special whitespace that
  renders as nothing to a human eye but signs the text for a machine.

*"But it's none of these."* The answer is one level down: *"It is a way of actually
generating the text itself."* The method is a version of **SynthID-Text**, published by
Google DeepMind in *Nature* in 2024 — *"our text watermark is a version of the Synth ID
text approach published by Google DeepMind, Nature in 2024."* The paper: *Scalable
watermarking for identifying large language model outputs*.

## The mechanism

Normal generation: preceding tokens → LLM → a probability distribution over next tokens →
sample → append → repeat. *"And the core of it is this LLM distribution right here."*

*"What generative watermarking does is it messes with this process."* One extra input and
one extra step:

1. A **watermarking key** — *"This is a private key that anthropic has, but you and I
   don't."*
2. Key **plus the recent context** go into a random seed generator → a seed.
3. The seed does not produce a token. It produces **a series of functions**, each *"at its
   simplest of vector of zeros and ones"*, one element per candidate token.
4. Those functions run a **tournament** over the candidates, and the winner is the output
   token.

*"You're basically putting your thumb on the scale in a very particular way."*

### The tournament, in her example

Context: *my favorite tropical fruit is ___*. Candidates: mango (most probable), lychee,
papaya, durian (*"just with a little bit of the probability weight"*). Under plain
sampling the model *"it's most likely to pick mango, but maybe 5% of the time it might
select durian."*

Now add three random functions of four bits each → a three-round knockout, *"kind of like
March Madness … or even better, World Cup."* Rule per pairing: a **1 beats a 0**;
*"In the case of Ties, you do a toss-up. You choose randomly."*

Round 1 vector `1,0,0,1` — mango and durian carry the 1s, so they beat lychee and papaya
in any pairing. Round 2 vector `0,1,0,0` — *"Anytime you get Leichi, Leichi's going to
win."* The other half of the bracket is durian vs mango, both 0, so it is a coin flip;
mango goes through. Final: mango vs lychee, mango has the 1 → **mango** is the emitted
token.

Two properties of that outcome matter:

- It is *"a perfectly valid answer according to the generation task"* — mango was already
  the most likely completion. *"It's not doing anything that looks overtly weird."*
- It is cheap. *"It turns out that you can still do this in a pretty computationally
  effective way. So it doesn't end up making it any slower."*

### The two numbers

*"By the way, just for your background, they have 30 levels of this tournament."* And the
context window feeding the seed: *"And at each level of that tournament, it's looking at
the previous four characters, or the previous four tokens rather, when it's generating."*
(She self-corrects mid-sentence; it is tokens.)

Thirty levels means thirty independent weak signals **per token**, not one:

> *"So each one of the tokens that it ends up generating has a bit of a weakness in the
> signal. It's not from a single token that you can tell unequivocally, like this was AI
> generated or it wasn't. Instead, it's many small signals that are starting to build up."*

## Decoding

Text + key → a scoring function that estimates, per token, whether that token looks like
it came from the weighted process. Sum the per-token signal over the whole passage, then
threshold: *"If that score is above some, some cutoff, that's in all likelihood, generated
by the AI."*

Decoding is *"quite fast and it's quite computationally efficient"* — which she flags as a
real design requirement, not a footnote, because a detector nobody can afford to run is
not a detector.

**It is single-vendor.** Anthropic's key detects Anthropic's text and nothing else — it
*"is not going to be able to tell you if a text was generated by OpenAI or Gemini, for
example, just anthropic in and anthropic out."*

**And Anthropic is not first.** Google has been running this in Gemini for about two years:
*"So everybody's talking about anthropic, but Google got there first, and of course
they're the authors of this paper."*

## Three properties that decide what this is actually good for

**1. The distribution is preserved — so the tells survive.** *"The overall distribution of
the outputs that you produce still look the same as the overall distributions of outputs
when you don't have any watermarking applied."* Which means watermarking is orthogonal to
style. Her aside on Claude's voice — *"I think Claude has the most distinctive voice of all
the LOMs"* — lists the giveaways: *"It loves to say things are happening quietly. It likes
to say something is load bearing genuinely is one that I get a lot,"* plus the em dashes.
And explicitly: *"So it's also not going to get rid of the things that are the quietly load
bearing phrases. Still going to use them."*

**2. The watermark lives in entropy.** *"The ability to wait the die basically lives in the
space where you have a choice of different things to say."* Tropical fruit is high entropy;
*the capital of France is ___* is not — *"Like there's really only one bright way to end
that sentence."* So: *"if the type of text that you're generating with the LLM is high
entropy, then that's where the watermark is really going to be strong."* Her own gloss on
the low-entropy case is the honest one — *"maybe that's where the stakes are relatively
low. If you read the sentence, the capital of France is Paris. You probably don't care as
much whether that was written by an LLM or a human."*

Anthropic's FAQ states the same limit in its own words and extends it to two cases the
episode does not cover: **code** (*"which in very many cases has to be exact"*) is
generally less watermarked than prose, and **proofreading** human text leaves almost
nothing to attach to, because nearly all the words are the person's.

**3. Detection needs length.** *"Your ability to detect whether something was watermarked
tends to get much better for longer samples of text."* The Google paper measured from
below 100 tokens up to 400. At the short end — *"something like 20 or 30 or 50 tokens,
then it's actually pretty hard to tell whether it's watermarked or not"* — there simply is
not enough accumulated signal. At the long end:

> *"But by the time you get up to 400 tokens in the sequence, so this is roughly a page of
> output text, then you're getting at the probability of being able to detect it as
> something like 80, 90% true positive rate, if the false positive rate is 1%."*

## Removing it

The removal recipe follows from the mechanism, and she gives it plainly: *"if you have a
page of LLM generated text and you start to go in and you change a bunch of words to be
basically synonyms with themselves, then that's going to start to mess with the watermark
pretty quickly."*

Her argument for why that is fine is the sharpest thing in the episode:

> *"So that editing process is arguably re-humanizing the text, making it valid to say that
> this is less of an LLM text at this point, that it has a heavier human hand behind the
> generation process."*

*"So I wouldn't necessarily call that a bug per se. It's probably closer to a feature or at
least just a characteristic to be aware of."* The watermark decays in proportion to human
editing — which is exactly the gradient you would want from a measure of how much of a text
the machine wrote unaided.

Anthropic's FAQ agrees and states the resulting limit bluntly: *"A watermark can only
determine that Claude was likely involved with the content at some point."* It cannot tell
the case where Claude wrote the text apart from the case where Claude heavily edited it.

## What is coming, and her closing question

The **detection API** is announced but not shipped — *"That's not available right now"* at
recording time; Anthropic's FAQ says "soon", details still being worked out. Then the
question she leaves the episode on:

> *"I really wonder how that AI slop economy is going to do once there's a detector out
> there that's pretty easy to use for at least one of the large sources of LLM generated
> text."*

And, without being asked, her own disclosure: *"Full disclosure, absolutely use Claude to
help me summarize the points that I'm making in these episodes."* — *"The content itself is
very human generated but anyway I've got a little Claude friend that helps me distill that
into material that I think folks who like these episodes may enjoy."*

**Not in the episode, from Anthropic's FAQ, because it changes the scope:** the reason is
regulatory, not voluntary — the EU AI Act, whose marking obligation became enforceable on
**2 August 2026**, and a Code of Practice Anthropic signed in July 2026 along with other
providers. Anthropic applies the watermark **globally**, because it has no durable way to
scope it by region. It costs no extra tokens and no extra money. It carries no user or
organisation identity. Images and other files get something different — a **C2PA content
credential** in the metadata, which is a label, not a watermark, and can be stripped by
anything that rewrites the file. Older Claude models are inside a transition period and
will be back-fitted over the coming months.
