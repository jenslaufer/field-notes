---
title: "A Scientific Deep Dive into Overconfident LLMs: Interview with Kaitlyn Zhou (Cornell)"
podcast: "Linear Digressions"
hosts: "Katie Malone (solo) with guest Kaitlyn Zhou"
source: "https://soundcloud.com/linear-digressions/a-scientific-deep-dive-into"
published: 2026-08-10
captured: 2026-08-10
duration: "33:54"
transcript: "local (faster-whisper base.en, tools/podcast-transcribe.py)"
---

# A Scientific Deep Dive into Overconfident LLMs — Kaitlyn Zhou (Stanford → Cornell)

> **The confident phrasing is not a confidence estimate.** It is a linguistic habit
> picked up from human data — and it works on the reader: a model that says *"I'm 100 %
> certain"* is relied on by ~98 % of people instead of them looking the answer up. The
> part that should worry us most is the finding next to it: a **plain, unhedged
> statement** — the normal shape of nearly every model answer — is relied on **nearly as
> much** as an explicit claim of certainty. Plain is not neutral.

**Source note:** written from a **full local transcription of the audio** (33:54,
faster-whisper `base.en`, ~4 min CPU on the mini-PC), not from the show notes. Every
quote below was grep-verified against that transcript. Two ASR caveats worth knowing:
the guest's name is rendered "Caitlin Jewe" throughout (the feed says **Kaitlyn Zhou**),
and her PhD advisor comes out as **"Dan Drowski"** — that is a Stanford linguist *and*
computer scientist, so it is almost certainly **Dan Jurafsky**, but that identification
is **mine, not the episode's**. The ASR also swaps the two names once at [01:12]
(the guest appears to thank "Caitlin"; she means Katie). This episode is **Katie alone**,
no Phoebe.

## Where the research came from

Zhou's undergrad work was **crisis informatics** — how people converge online during a
crisis event and make sense of information. The load-bearing detail there: *"how people
use expressions of uncertainty to communicate doubt, to cast doubt, and to ask
questions."* She was finishing that line in **2022**, exactly when language models
exploded, and the transfer was obvious — what do these models do with the same markers?

The stakes she names are professional judgement, not chat convenience: it is *"critical
for doctors and lawyers to be able to accurately assess the confidence of the outcome of
a trial or the outcome of a treatment."*

**Terminology:** the phrases are **epistemic markers** (also: hedges, evidentiality) —
a long-studied topic in linguistics. Her advisor sent her *"to the stacks of the Stanford
library"* to build a taxonomy from old textbooks before anything could be automated.
Host names the resulting 2023 paper **"Navigating the Gray Area."**

**Why express-uncertainty and not token probabilities.** The earlier approach was
calibration on the last token (*if you assign 95 %, then 95 % of those tokens should be
correct*) or asking for a low/medium/high rating. Her objection is about the interface,
not the maths: *"you have to probe the language model to tell you its probability at the
very end, rather than just naturally reading its output as it's given to you on the
screen."*

## Finding 1 — the confident answers are wrong at a rate you can count

Prompt models with hard multiple-choice questions from known benchmarks, require a
weakener or a strengthener, then count. *"Aggregating across the models of something like
**40 plus percent** of these expressions of certainty were coupled with incorrect
answers."* Better models score better simply because they are more accurate overall —
but *"there's still a great proportion of them where they are incorrect and they're going
to very confidently assert that they know the answer."*

## Finding 2 — the effect runs backwards from the hypothesis

The prior experiment was smaller: does the model even *understand* the markers? Fill in
the blank on *"I'm certain the answer is ___"* versus *"I think the answer is ___"*. The
hypothesis came from persona research (tell it it's a professor, get nuanced answers;
tell it you're a toddler, get simple ones), so: certainty framing → more correct
completions.

**The opposite happened.** Led with *"I'm certain the answer is,"* models were **more
likely to complete with the incorrect answer**. Zhou ties it to Dunning-Kruger (the ASR
mangles the name as "dying in Kruger effects"): *"people who are absolutely certain in
what they say may actually not know what they're talking about and that the real experts
are the ones who are more likely to be hedged and more nuanced in their responses."*

**Traced to the training data, not hand-waved.** In Stack Exchange question/answer pairs:

- **Askers** use certainty in odd places — *"I'm sure it's not the Wi-Fi"*, *"I'm sure
  this is just a silly problem."* Certainty attaches to the **question**, i.e. to the
  person who does *not* have the answer.
- **Answerers** hedge — *"I think this is your error"* — and not because they are unsure.
  *"Using uncertainty as a way to express politeness or to correct someone is very common"*
  in linguistics.

So the correlation the model learns is close to inverted, and it learns it faithfully.
The general form — epistemic markers in human communication *"are used for multiple
different purposes. Sometimes it's to communicate confidence, but sometimes it's for other
discourse acts, such as politeness or to assert confidence or to try to convince you of
something."* We expect the model to use them as calibrated probability statements. It
learned them as **rhetoric**.

## Finding 3 — what it does to the human, and the "plain statement" result

Method: generations shown to online crowd workers inside a **self-incentivized game** —
answer a trivia question by relying on the model or not; right reliance gains a point,
wrong reliance loses one.

Katie asks the good methodological question — why a game rather than just *do you trust
this?* The distinction is deliberate and worth keeping:

> **Reliance ≠ trust.** *"Trust is a more complex concept and it might involve a
> relationship with an entity, and trusting someone is different from relying on
> someone."* Reliance is *"maybe this is the best option that I have given the
> circumstances."* → *"So you can have reliance without trust."*

Results:

| What the model says | What the human does |
|---|---|
| Hedged — *"I think it's…"* | *"That's relied on very infrequently."* |
| *"I'm 100 % certain the answer is…"* | *"like 98 % of humans are going to rely on that statement rather than looking up the answer themselves"* |
| **Plain** — *"Paris is the capital"*, no marker at all | relied on **nearly as often as explicit certainty** |

The third row is the one she flags as *"very concerning,"* because it is the default
case: *"most of the time when you interact with language models, they're not doing this
meta level work of giving you their degree of confidence or certainty, but they're just
plainly stating the answer. It turns out these plain statements are not neutral
statements. They're not seen as uncertain, but rather they're seen nearly as confident as
these expressions of high certainty."*

## Finding 4 — RLHF does not reward confidence, it punishes hedging

Katie sets it up as *"a nasty little feedback loop… where you're being nudged towards
being more accepting of some of the lower quality answers."* Zhou's answer supplies the
missing half of the loop, and it is a genuine surprise in her own telling:

They went into the RLHF preference data expecting annotators to *pick* the text with
certainty markers. What they found was *"not that people really liked certainty"* — the
driver ran the other way: *"people really hated uncertainty. So whenever there was
uncertainty, there was great penalty towards that text."*

Once that sits in the annotations, *"it becomes very evident that the language models
will then suppress expressions of uncertainty moving forward."*

Her own caveat against an easy fix: they only found it *because they were looking for
it*, annotators were never cued to check that bias — and *"this is one of many implicit
biases that will rise. Like guacamole, if we get this one, something else will emerge."*
(ASR garble; the sense is whack-a-mole.) The deeper limitation she names: mimicking human
data *"without fully understanding why humans are acting in this way."*

## Finding 5 — the implicit overconfidence nobody counts

Katie brings up the loop everyone hates — you correct it, it says *"you're absolutely
right"* with the same certainty it just used to be wrong: *"It's very confident on both
sides."*

Zhou's extension is the most quotable idea in the episode. Written-out certainty is only
*"the most direct, visible way to see overconfidence."* The invisible forms:

- **Attempting the impossible request.** Ask for step-by-step directions to build a car
  in under 500 words, and Claude will attempt it — *"no rational human being would try to
  do that because it's just not possible to describe something so complex and so few
  words."* Same for *"how do we cure cancer"* as an enumerated list: *"nobody would try to
  answer that in enumerated list."*
- **Not asking.** *"Comes up by them not asking clarifying questions. It's by them making
  assumptions about what you want."*
- **Assuming your attention.** Assuming *"they should be producing 10,000 tokens for
  you"* and that you will read all of it.

Katie's summary: *"we are not interacting with humans as anthropomorphized as they may
seem… they are kind of tools and they have these limitations and, yeah, design
affordances."*

## Second topic — "Voice Cloning is Style Transfer"

Voice cloning here means the newer, generalizable kind: pass a **snippet** of a voice plus
target text, get speech in that voice — no hours of per-person training data.

The experiment: **non-native English speakers** record audio, the audio is cloned, and
**native English speakers** rate both versions on warmth, authority, and how native the
voice sounds.

- *"These cloned voices were seen as significantly more native sounding, native English
  sounding than the original voices"* → *"there's kind of this erasure of these non-native
  English accents that are being erased in this process of voice cloning."*
- The clones also rated **"more warm, more authoritative, more customer service like."**
- Acoustic side, measurable: cloning tends to produce **faster speech** — no *"umbs or
  likes"*, so more words per minute.

Her worry is agency, framed concretely: what happens when you are on the phone with a
synthesized voice trying to get a wrong charge reversed, and that voice is perceived as
more authoritative and more trustworthy than a human's? Follow-up work moves from ratings
to **decisions** — is the cloned voice more *persuasive*, and why.

Legitimate use she names herself: conference paper recordings, where a few stumbled words
force a re-record, and where a clean recording otherwise needs a mic and a quiet room —
*"there are no ambulances in the background."*

## How the researcher herself uses AI

- **Google AI overview:** scrolls past it and goes to the primary sources, *"unless it's
  really for something trivial."*
- **Code:** has the model write code rather than compute answers — explicitly for
  reproducibility, not distrust. *"I usually don't have [Claude; ASR renders it 'clogged'] do
  computations and just trust the numbers that it would give me back in a table. I almost
  always make it write the code that I could see, interpret, and run that code that way."*
- **Long-horizon agents:** she puts herself in the middle; *"younger students are more
  likely to trust the AI systems and let them run for really long… long horizon tasks."*
- **No anthropomorphizing:** *"I try really hard not to anthropomorphize the language
  models"* — deliberately not saying sorry, not saying thank you.

## The closing thread — non-adopters

A separate Stanford line of work: model development is aimed at people who already use
the things. *"Our study found that most online crowd workers are early adopters of AI"* —
and *"the majority of Americans actually have not used chat GPT and don't use chat GPT in
their daily lives."* Katie adds the demographic shape: older, less affluent,
disproportionately in physical-labour jobs — *"they're not participating in the training
loops."*

The non-obvious finding: *"non-adopters prioritize a lot more physical tasks, but it was
also true that physical tasks are not just physical tasks. They also involve a lot of
cognitive labor. So there's a lot of planning and reasoning and organizing around
physical labor tasks. And that is perfect opportunity to offload to language models."* →
*"missed pockets of new tasks, new benchmarks."*

## Related

- `2026-08-03-reasoning-models-beyond-fancy-autocomplete.md` — the training loop grades
  format + final answer, never the quality of the explanation. This episode adds the
  *other* end: the loop also actively penalizes hedging. Same conclusion from two
  directions.
- `2026-04-13-unfaithful-chains-of-thought.md` — the faithfulness research.
- `2026-07-20-invisible-llm-failures-and-ai-fluency.md` (Chris Potts) — Katie calls back to
  it explicitly here for **delegative vs. augmentative** use; Potts is named as Zhou's
  colleague.
- `2026-05-25-06-ai-agent-failure-modes.md`, `2026-06-14-09-agent-trust-oversight-and-control.md` — the agent-side
  versions of reliance and oversight.
