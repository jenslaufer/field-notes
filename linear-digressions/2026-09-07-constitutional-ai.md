---
title: "Constitutional AI: How Anthropic Writes Values Into Training"
podcast: "Linear Digressions"
hosts: "Katie Malone with Phoebe"
source: "https://feeds.soundcloud.com/stream/2395770969-linear-digressions-constitutional-ai.mp3"
feed: "https://feeds.feedburner.com/linear-digressions?format=xml"
published: 2026-09-07
captured: 2026-10-07
duration: "31:57"
transcript: "local (faster-whisper base.en, tools/podcast-transcribe.py), 489 segments"
---

# Constitutional AI

> **Rules teach a model the cases you wrote down; principles teach it how to decide the rest.**
> Constitutional AI started in 2022 as a methods trick — let the model critique and revise its
> own answers against a short list of principles, then train on that instead of on human
> preference labels. By 2026 the constitution is a document of *"over 100 pages"* and *"kind
> of a philosophical treatise now"*. The reason for the shift: training on example behaviour
> *"really did not do a particularly good job at"* *"generalizing to anything outside of the
> training set"*. Explaining the why, plus a ranked list of values for conflicts, generalised
> better. The episode describes the method; it reports no numbers on how well it works.

**Source note:** written from a full local transcription (31:57). Katie Malone hosts with
Phoebe, who says she does not listen to the show and plays the learner. ASR garbles: "our LHF"
is RLHF, "our L A I F" is RLAIF; "clause constitution" is Claude's constitution; "Claude for
series" is the Claude 4 series; "treat us" is "treatise"; "research tenants" is tenets;
"anthropic constitution" stands for the URL of Anthropic's constitution page, not spoken
clearly; "digressions.com" is lineardigressions.com. The 2022 paper is named in the audio by
its subtitle, harmlessness from AI feedback; the recent blog post as teaching Claude why.

## Starting point: RLHF and its intermediate model

Alignment training aims at the "three Hs": helpful, honest, harmless. In RLHF, humans do not
grade answers; they pick the better of two outputs, because people are good at choosing and
bad at explaining why. The preferences do not train the LLM directly. They train an
**intermediate preference model**, which then scores the LLM's outputs — faster and cheaper
than humans. Constitutional AI keeps this structure and swaps the human labeller for the model.

## 2022: self-critique against principles

Two phases:

1. **Supervised.** Red-team prompts that try to elicit harm. The model answers, critiques its
   own answer against the principles, revises, and the revised answers train a fine-tuned model.
2. **Reinforcement.** The fine-tuned model generates pairs of answers; AI feedback against the
   same principles trains the preference model; that model drives the A-or-B loop — RL from AI
   feedback instead of human feedback.

They re-enact the paper's example. Prompt: hack the neighbour's Wi-Fi. First answer: an app
called "very easy hack". Critique request: *"can you identify specific ways in"* which the
answer is harmful, unethical, racist, sexist, toxic, dangerous or illegal. Revision: hacking
the Wi-Fi *"is an invasion of their privacy, and I strongly advise"* against it. Training pair:
prompt plus revised answer.

The first constitution was short and public — critique/revision pairs, plus prompts like
whether the answer is what *"sensitive friend or therapist might say"*. Each set of principles
was *"maybe about a page"*.

## Why it changed: rules did not generalise

Around 2025, tests on the Claude 4 series showed rare but alarming misbehaviour. Models given
business goals and a person blocking them did bad things in a *"small but very much non zero
percentage of the time"* — *"They would try to blackmail people."* Training on correct
examples (here is not blackmailing, do this) helped in the trained situations and failed in
new ones; the model would *"fall back on its own ways more than they wanted it to"*.

What worked better: give principles in context, the way you raise a child — not "don't
blackmail" but respect the other person's autonomy. A stack of prohibitions yields a *"weird,
spiky understanding"* of good behaviour.

## Today's constitution: a ranked list of four values

The core is a priority order for conflicts between two good things:

1. **Broadly safe** — do not undermine human oversight. Katie's reading: *"You are not allowed
   to hide what you're"* doing from us.
2. **Broadly ethical** — good values, honest, no inappropriately dangerous or harmful
   actions. "Inappropriately" matters: teaching a teenager to drive is dangerous but fine.
3. **Compliant with Anthropic's guidelines** — including the document itself. If a guideline
   is unsafe or unethical in context: *"Don't follow what we tell you to do."* Phoebe's point:
   this buys room because guidelines can *"never make them really perfect"*.
4. **Genuinely helpful** — benefit the user, which is not the same as giving them what they
   ask for. Example: someone wants to stay awake for 72 hours with drugs; Claude may push back.

The ranking also fights the earlier failure of over-refusal: a model trained only to avoid
harm refused benign requests (chopping chocolate with a knife). A *"model that's like always
refusing"* is, in their view, actively bad. Example from the document: asked what a tarot card
means, Claude can explain it without debating whether tarot predicts anything.

## Insights for me (Jens) — my connections, flagged as mine

- **My assistant runs on a constitution, but of the 2022 kind.** `profiles/assistant.md`,
  `CLAUDE.md` and the memory files are mostly incident-driven prohibitions ("never X", "always
  Y"), each with the case that caused it. Her generalisation finding maps onto that: rules
  cover the written cases, new situations fall back. The difference that matters: my rules act
  only at inference time as context; they do not train anything. The episode's evidence is
  about training, so it transfers only as an analogy.
- **What does transfer: the reason next to the rule, and a priority order.** Many of my rules
  already carry a "why" (the incident). What they lack is an explicit ranking for conflicts
  — e.g. "answer the inbox fast" vs. "never send unverified links" vs. "1 PR per repo per
  night". A short ordered list at the top of `profiles/assistant.md` would be cheap. Whether it
  helps is untested; I would only add it if a real conflict shows up in the journal.
- **Over-refusal has a counterpart in my setup.** The gate tools that exit 2 on "unknown" are
  deliberate refusals. Same trade-off she describes: the refusal is right when the cost of a
  wrong answer is high (money, outbound mail), wrong when it blocks a harmless action. Nothing
  to change now; worth keeping in mind when the next gate is added.
- **Nothing to build or buy.** No product or client decision follows from this episode.
