---
title: "LLM As A Judge: What You Get When an AI Grades an AI"
podcast: "Linear Digressions"
hosts: "Katie Malone (solo)"
source: "https://feeds.soundcloud.com/stream/2408635923-linear-digressions-llm-as-a-judge.mp3"
feed: "https://feeds.feedburner.com/linear-digressions?format=xml"
published: 2026-09-28
captured: 2026-10-07
duration: "30:12"
transcript: "local (faster-whisper base.en, tools/podcast-transcribe.py), 342 segments"
---

# LLM As A Judge

> **An LLM judge is a cheap annotator, but its agreement numbers flatter it.** The 2023 paper
> that started the field found GPT-4 agreeing with humans in about 80 to 90% of clear cases,
> dropping to around 60 to 65% once ties and position bias count. Since then the view has
> shifted: humans disagree with each other too, raw agreement includes chance agreement, and
> judges are non-deterministic. A 2026 preprint found the most *consistent* judgments among the
> least accurate. A 3% improvement measured by a judge *"could very well be within the envelope
> of the biases and"* the noise. Her verdict: useful, but not *"turn on the LLM, turn off your
> brain"*; calibrate against humans and study the judge before relying on it.

**Source note:** written from a full local transcription (30:12). ASR garbles: "GPT for" is
GPT-4; "comfortable to what you might get" is most likely comparable to; "L.O.L.U.M.S." is
LLMs; "Dr. John Krohn" is Jon Krohn; "boost on employment" is quoted as heard. She gives the
headline agreement once as "80 to 85%" and once as "80 to 90%" for the clear-preference case —
both are in the audio; which one the paper reports is not clear from the episode. The models in
her live arena demo are transcribed as "Claude Fable five" and "Claude Opus five medium".

## The premise

Labeled data is expensive because labels usually come from humans. For AI workflows it gets
worse: you need a judgment on every exchange (helpful, honest, hallucinated?) and for agents
also on tool calls and reasoning. The question she poses: is an LLM judge *"just an example of
grading your own homework"*, or something close to an expensive human annotator?

## Where it started (2023)

The paper Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena (UC Berkeley, UC San Diego,
Carnegie Mellon, Stanford, MBZUAI) built a benchmark for which of two answers humans prefer.
Her example: a Fed bond-buying question with a follow-up "give three examples". Assistant A
repeats "increasing the money supply" three times; B gives interest rates, inflation,
employment. GPT-4 picks B with the same reasoning a human would.

Three mechanics, which she says *"still cover most of the territory in this space"*:

1. **Pairwise comparison** — A or B, like preference data in RLHF.
2. **Single-answer grading** — "how good is this?"; the prompt wording shapes the result.
3. **Reference-guided grading** — single answers against good examples or a rubric.

Results: six models compared, GPT-4 the main judge. Position bias was real (*"it'll always pick
the first one"*), so they swapped the order; a verdict that flipped counted as ambiguous. With
clear preferences only, agreement was about 80 to 90%; with ties and positional bias allowed it
*"drops to around 60 to 65%"*. The data came from Chatbot Arena, still live at arena.ai: two
anonymous models answer, you vote. She votes live — the winner turns out to be Claude Fable
five — and notes she has *"just created a little piece of training data"*.

## What the field learned since

- **Known biases:** position; self-preference (a judge prefers answers from itself or its model
  family); length (longer answers win).
- **Mitigations studied:** juries of many small models instead of one large judge; making the
  judge reason step by step before the verdict.
- **The reframe she calls more accurate:** human ground truth is itself disputed. Inter-rater
  reliability: give several humans the same question and *"some fraction of the time, they're
  going to disagree"*. How much tells you how hard the task is (a dog mentioned in a text vs.
  is the caller angry).
- **Chance agreement:** raw agreement overstates alignment; you have to subtract the agreement
  you would get by chance. So *"we are very likely looking at numbers that make these judges
  sound better than"* they are.
- **Non-determinism:** the same input can score differently on reruns; taking the first answer
  loses the spread and gives an *"artificially confident sense"* of right or wrong.
- **Overconfidence:** asked whether a human would agree, judges tend to say yes too often.
- **"Reliability without Validity"** (UC Berkeley, 2026, preprint): 21 judges, over 500,000
  judgments. Finding: *"Some of those most consistent ones are among the least accurate."*
  Asking the same question repeatedly and getting the same answer does not make it correct.

Consequence: bias and noise can exceed the effect you want to measure. A 3% gain from a new
model *"could very well just be"* an artifact — or of *"the fact that it happened to be a
Tuesday instead of a Wednesday"*.

## What to do in practice

1. **Measure human-human agreement first.** It sets the ceiling; if humans disagree a lot, the
   best you can hope for is a judge *"in the general vicinity of the"* humans.
2. **Study the judge:** permute the response order and count how often it changes its mind; run
   the same evaluation multiple times.
3. **Which model judges?** Depends on the job:
   - Up-front labeling for a benchmark: use the strongest model.
   - Production monitoring of a task that **decomposes into checkable pieces**: strong model does
     the task, small model checks — *"it can be considerably easier to evaluate whether something
     was done"* correctly than to do it. Small models perform well with explicit criteria.
   - Holistic or open-ended judging: the literature favours the strongest model in production;
     an alternative is a cheap model in production and the smart model as judge.
   - Either way, this *"does not get you out of needing human labels to calibrate the"* judge.

## Insights for me (Jens) — my connections, flagged as mine

- **My checks are mostly not LLM judges, and that is the point.** `verify-quotes.py`,
  `check-links.py`, the test-first rule all compare against a ground truth (transcript, HTTP
  answer, red-then-green test). They are deterministic and have no position or length bias. Her
  episode is a reason to keep it that way where a source exists — nothing to change.
- **Where I do use a model to judge (critic agents with JSON scores, `--critic` loops), her
  three cheap tests apply directly:** swap the order when comparing two drafts, run the same
  critic twice and look at the spread, and do not trust small score differences. A critic score
  moving by a few points between drafts is likely inside the noise. This is a usage habit, not a
  build — no new tool.
- **Her decomposition rule matches how the tools were built:** each gate checks one explicit
  criterion (quote verbatim, link resolves, weekday fits the date). That is the case where she
  says a small, cheap checker is enough.
- **For client work (AI engineering):** if a client proposes an LLM judge as their eval, the
  first questions are hers — what is the human-human agreement on this task, is it
  chance-corrected, and how stable is the judge on reruns.
