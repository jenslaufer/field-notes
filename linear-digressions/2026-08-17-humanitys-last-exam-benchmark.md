---
title: "Better Know a Benchmark: Humanity's Last Exam"
podcast: "Linear Digressions"
hosts: "Katie Malone (solo)"
source: "https://feeds.soundcloud.com/stream/2382794751-linear-digressions-better-know-a-benchmark.mp3"
feed: "https://feeds.feedburner.com/linear-digressions?format=xml"
published: 2026-08-17
captured: 2026-08-17
duration: "23:21"
transcript: "local (faster-whisper base.en, tools/podcast-transcribe.py)"
---

# Better Know a Benchmark: Humanity's Last Exam

> **The step that made the benchmark hard is the same step that made part of it wrong.**
> Humanity's Last Exam filtered 70,000 expert-written questions by asking: do current
> LLMs get this wrong? Keep only those. That selection buys difficulty — and it also
> concentrates the questions whose *official answer* is wrong, because a model marked
> "incorrect" for disagreeing with a mistaken expert looks exactly like a model that
> failed a hard question. A follow-up study estimates **~30 % of the chemistry and
> biology answers could be wrong**. The bias is structural, not sloppiness.

**Source note:** written from a **full local transcription of the audio** (23:21,
faster-whisper `base.en`, ~2 min CPU on the mini-PC, 320 segments), not from the show
notes. Every quote below was checked against that transcript. This is a solo episode —
Katie alone, the first of a new recurring format called *Better Know a Benchmark*, whose
premise is stated up front: *"each time on better know a benchmark, we take one of those
benchmarks and unpack it."*

**ASR caveats** (`base.en` mangles proper nouns; left unsmoothed where quoted): `MMLEU`
= MMLU · `CLOD-3` = Claude 3 · `DeepSeq-R1` = DeepSeek-R1 · `lom-statts.com` =
llm-stats.com · `Cloud Fable 5` = Claude Fable 5 · `Okenneson` = **Oganesson** ·
`noble gas loads` = noble gases. The hummingbird anatomy quote below is garbled beyond
repair and is reproduced as heard.

## What the benchmark is, and why it was built

Benchmarks are how models get compared, *"whether it's across different companies or
different versions of the same model."* The problem HLE was built to solve is
**saturation**: GPQA was running *"anywhere from about 60 % to about 80 %"* and MMLU
*"80 % and above"* — so high that they *"basically weren't really differentiating between
models very clearly anymore because models were getting so many of the questions right."*

The original name was **Humanity's Last Stand** — *"it was meant to be the exam that human
experts could get the questions right, but that was about it. This was our last stand
against the models."* Hundreds of academic contributors; the paper opens with *"three
solid pages of names."*

**Design constraints, all deliberate:**

- **~2,500 public questions**, plus a private holdout set.
- **Closed form, one correct answer.** *"All of these questions are closed form and they
  have one and only one correct answer, or at least they're supposed to."* That makes
  grading mechanical: *"basically, it got the number right or it didn't."*
- **Not tricks.** *"They were not trick questions. They were answerable from the
  literature."* Just answerable only by an expert.

The sample question Katie reads out — chosen because it is the only readable one — asks
how many paired tendons are supported by a sesamoid bone in hummingbirds
(*"Hummingbirds within ampative forms uniquely have a bilaterally paired oval bone, a
cesamoid embedded in the cotolateral portion of the expanded creshit apon neurosis of
insertion of M depressor caudae"*). Others are images of non-English text to translate,
equations, and molecule diagrams.

**Topic mix:** ~41 % math · 9 % physics · 11 % biology and medicine · 9 % humanities and
social sciences · 10 % computer science and AI · 4 % engineering · 7 % chemistry · 9 %
other.

## The pipeline — remember step one

Katie flags this step explicitly and asks the listener to hold onto it:

1. Experts (mostly academics) submit → **~70,000 candidate questions**
2. **LLM difficulty check** — *"The first thing that we wanted to do was check for
   questions that LLMs generally get wrong."* Questions the models answered correctly
   were thrown out. → **~13,000 survive**
3. Expert review, refinement, peer feedback → **~6,000 candidates**
4. Organizer and expert approval → **2,500 public**, remainder private

**Why a private holdout at all:** public questions propagate. *"You can start to get
signal leakage where models can accidentally have those questions come into their
training set."* Once that happens the measurement is dead — *"when the model gets a
question right, you don't know if it's because the model is smart or because it read the
answer somewhere."*

## The numbers

**At launch (mid-2025, GPT-4 era, Claude 3, DeepSeek-R1 fresh):** accuracy ran from
*"about 3 % on the lower end"* up to a best of about 13 %. Against GPQA's 60–80 % that
was the intended shock: under 10 % for the models of the day.

*(Katie states the top figure twice and not identically — "about 13 %" at [08:11], "up to
about 14 %" at [09:27]. Reported here as heard rather than silently reconciled.)*

**Measured alongside accuracy: calibration error**, scaled 100 → 0, lower better. It
captures *"the gap between whether a model thinks it got the question correct and whether
it actually did."* The finding is a double one: *"not only are the models getting these
questions wrong, but they're not well calibrated to know that they're getting them
wrong."* — the direct sequel to last week's Kaitlyn Zhou episode on overconfidence.

**A year later:** best models top out around **65 %**.

## Three leaderboards, one benchmark, three different answers

This is the part worth carrying around. Katie pulled the same three models from three
leaderboards — llm-stats.com, **Scale Labs (the lab that co-built HLE)**, and
artificialanalysis.ai:

| Model | Scale Labs | llm-stats.com | artificialanalysis.ai | spread |
|---|---|---|---|---|
| Muse Spark | 40.5 % | 58.4 % | 39.9 % | **~18 pts** |
| Claude Fable 5 | not listed | 64.5 % | 53.3 % | **>10 pts** |
| GPT 5.4 | ~36 % | ~39.8 % | 41.6 % | ~6 pts |

Her candidate explanations: which question set was used (public, private, or backups
swapped in), LLM non-determinism (*"even if it gets the answer right on round one, some
percentage of the time is going to come up with a different answer on round two"*),
undocumented version differences, and **effort settings** — *"they might be set to
different levels of effort like low, medium, high, max effort."* Plus honest residue:
*"solar flares in the lunar cycle, like kidding, but not kidding."*

The instruction she draws: *"then it means that you're going to interpret any given
benchmark performance with a little bit more skepticism."*

## The Future House finding — ~30 % of chem/bio answers may be wrong

**Future House builds AI research agents**, so Katie names the conflict herself: *"they
certainly have some skin in this game."* Their agents scored much worse on HLE chemistry
and biology than expected, so they investigated — using their own agents to do the
digging — and published an estimate that **about 30 % of HLE chem and bio answers could
be wrong**.

The worked example: *"what was the rarest noble gas on Earth as a percentage of all
terrestrial matter in 2002?"* Official answer: **Oganesson**. The objections:

- Not a research question at all — *"this is not really a PhD level research question,
  but it's kind of a trivia question."*
- Oganesson is synthetic, made in a nuclear reactor for a few milliseconds in 2002; only
  a few atoms existed, so its properties were never measured.
- Evidence points to a solid, and to a reactive one — and *"noble gas loads are
  characterized by being low reactivity."*
- Contemporaneous peer-reviewed work on terrestrial fractions of noble gases never lists
  it.

Their summary, quoted: *"it's probably not a gas. It's probably not noble. And most peer
review work doesn't consider it a terrestrial matter."*

The HLE organizers accepted the feedback and added a peer review process for a later,
revised release — **so more than one version of this benchmark exists**, which is itself
a reason to ask which one a paper used.

## Why it happened — the mechanism, and the part that generalises

Wrong answers exist in most benchmarks. What makes HLE structurally different is step
two of its own pipeline:

> *"So what that's going to do is it's going to leave you with a data set that's biased
> towards questions that are hard, maybe that was the intended effect, but perhaps also
> questions where the answer that was attributed to that question was incorrect. And when
> the LLM was getting it quote unquote wrong, it was actually getting it right, but the
> LLM disagreed with the human expert and the human expert was taken as correct."*

Filtering on model failure cannot distinguish *the question is hard* from *the stored
answer is wrong* — both look like a model getting it wrong. So the filter enriches for
both. Katie's generalisation, aimed at anyone building evaluations:

> *"think very carefully about what it means to give questions to an LLM where previous
> LLMs have gotten it wrong because you could be introducing some biases like this one."*

## Where it stands

Somewhere **north of 50 %**, roughly 10 % → 50 % in a year, and *"this is still a
benchmark that doesn't appear to be saturated quite yet."* Katie's closing read: good
thing they dropped the name *Last Stand*, because 80–90 % looks *"very likely to happen at
some point sooner or later."*

Practical instruction for reading papers: when HLE appears, check whether the reported
score sits in the 40–60 % band or well above it — and remember the asterisk about known
incorrect answers that have since been corrected.

---

## Insights for me (Jens) — my connections, flagged as mine

*Genre: a method card, not a market card. Point 2 is the one that changes how I build
checks; points 1 and 3 are calibration on how I read and report numbers.*

1. **A benchmark number without its measuring station is not a number — 18 points of
   spread on the same model, same exam.** And the outlier is not the vendor with the
   obvious conflict of interest (Scale Labs co-built HLE and reports the *lowest* Muse
   Spark figure); it is a neutral aggregator. Two of the causes Katie names are things I
   routinely leave out of my own reports: **effort setting** and **exact model version**.
   That maps straight onto the agent-task YAMLs — a model comparison I run without
   recording both is not comparable to the next one, and a published leaderboard score is
   not evidence about my workload. [[proof with numbers]] [[number needs distribution]]
   [[haiku escalation]]

2. **The load-bearing one: a filter that keeps only the disagreements cannot tell a hard
   case from a wrong reference — and it enriches for both.** HLE selected questions
   *because* LLMs failed them, and roughly 30 % of the chem/bio answers turned out to be
   the graders' error, not the models'. I build exactly this shape of filter regularly:
   the actor/critic pairs (`copywriting-critic`, `vue-developer-critic`, the rest) produce
   a set of "actor failed the critic" cases, and I have been reading that set as a list of
   actor defects. It is a **mixture** of actor defects and critic defects, and nothing in
   the set itself separates them. Same for a red quality-gate run: "test disagreed with
   code" is not "code is wrong" until someone audits the expectation. My own logged
   instances of this family — the BR-DE-15 counting test that would have filtered away the
   real number it was built to check, the e2e suite that exited green without running —
   are the same error one level down. **Practical rule: whenever I collect cases by
   disagreement, a share of them belongs to the reference, and that share must be sampled,
   not assumed to be zero.** [[coverage || loophole]] [[unrunnable check]]
   [[test reproduces]]

3. **Accuracy and calibration are two separate measurements, and HLE reports both.** The
   Kaitlyn Zhou episode from last week measured overconfidence from the language side;
   this one measures it from the scoring side — *the gap between whether a model thinks it
   got the question correct and whether it actually did*. Worth keeping as a pair, because
   they name the same defect in two vocabularies: an agent that is wrong and flags it is a
   different object from one that is wrong and certain. Only the second one costs me a
   session. [[premature done]] [[pr message lies]]

4. **Small honest detail worth copying: the episode states its own conflict of interest
   before reporting the finding** ("they certainly have some skin in this game" about
   Future House), and still reports it. That is the move I want in my own reports when a
   measurement favours the thing I built.
