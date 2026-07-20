---
title: "Invisible LLM Failures and AI Fluency"
podcast: "Linear Digressions"
guest: "Chris Potts (Stanford Linguistics)"
host: "Katie Malone"
source: "https://soundcloud.com/linear-digressions/invisible-llm-failures-and-ai"
published: 2026-07-20
captured: 2026-07-20
duration: "41:23"
---

# Invisible LLM Failures and AI Fluency

> **If you watch for complaints, corrections and negative sentiment, you see 12 % of
> your failures.** In 100K real ChatGPT conversations, 63 % contained a failure — and
> **79 % of those failures were invisible**: something went wrong and the user gave no
> sign of noticing. The twist: **fluent users hit failures in 64 % of their
> conversations, novices in only 24 %** — but 59 % of the expert's failures are
> visible, versus **85.6 % of the novice's being invisible**. More friction is the
> healthy state.

Chris Potts is Professor of Linguistics (and, by courtesy, Computer Science) at
Stanford. He came to AI sideways: he started out studying *swearing* — why people
swear, why society treats that language so specially — found theoretical linguistics
too limited a toolkit, moved to corpora, then to NLP tools to parse the corpora, "and
then I guess what you find is 17 years later you're just doing AI."

The show notes are one paragraph. Everything below comes from the audio (transcribed
locally) and from **reading the two papers directly**. Read the caveat in
[Who is publishing this](#who-is-publishing-this-read-before-quoting-the-numbers)
before quoting any number.

## The published description (verbatim)

> "What happens when a Stanford linguistics professor turns his attention to AI
> chatbots — and the surprisingly invisible ways humans misunderstand them? Chris
> Potts joins the show to unpack the hidden failure modes in how we interact with AI,
> what it really means to become a more fluent user, and why these language-wielding
> systems are genuinely alien in ways we're only beginning to reckon with."

## Paper 1 — Invisible failures

**Potts & Sudhof, "Invisible failures in human-AI interactions"
([arXiv:2603.15423](https://arxiv.org/abs/2603.15423), 16 Mar 2026, rev. 12 May 2026)**

The definition, in his words on the show:

> "An invisible failure would be any situation in which **we** can detect that
> something went wrong and the **user** gave no indication that that happened. […]
> They instead silently seem to accept it or ignore it. […] In fact in many cases you
> can kind of infer that the user walked away with some incorrect information."

**The numbers** — 100K English WildChat transcripts:

| | Count | Share |
|---|---|---|
| Transcripts with ≥ 1 failure | 62,557 | 63 % of 100K |
| — invisible | 49,368 | **79 % of failures** |
| — visible | 7,632 | 12 % of failures |
| — mixed | 5,557 | 9 % of failures |

The load-bearing sentence, verbatim:

> "If a monitoring system relies on detecting overt signals of failure — e.g.,
> negative sentiment, complaints, explicit correction — **it will catch just 12 % of
> failures.**"

**The eight archetypes.** This vocabulary is the most useful export of the paper:

| Archetype | What it looks like |
|---|---|
| **The Walkaway** | Conversation ends unresolved; the user just leaves. **The largest — present in over 65 % of multi-turn interactions.** |
| **The Silent Mismatch** | The AI answers a different goal than intended; plausible-sounding, disconnect never flagged |
| **The Confidence Trap** | Wrong answer delivered with complete certainty, accepted unquestioningly |
| **The Drift** | The conversation gradually loses the original goal as the AI elaborates tangents |
| **The Death Spiral** | The user keeps correcting; the AI keeps emitting the same output without incorporating feedback |
| **The Contradiction Unravel** | The AI contradicts its earlier statements without acknowledging it |
| **The Partial Recovery** | A visible failure gets partly course-corrected; the original goal stays unmet |
| **The Mystery Failure** | Residual catch-all (< 1 %) |

Over 99 % of invisible failures fall into the first seven. Co-occurrence analysis:
Confidence Trap + Contradiction Unravel are tightly associated — confident, and the
contradiction goes unnoticed.

**Does a better model fix it? (the Future-2K experiment.)** They took 2,000 single-turn
WildChat exchanges and regenerated the 2024-era responses with Claude Sonnet 4.6,
Claude Opus 4.6, GPT-4.1 and GPT-5.4, then re-annotated:

> "Overall, the story is one of progress: failure rates have gone down substantially,
> **from 41.7 % to under 10 %** for the newer models."

But: "the vast majority of failures continue to be invisible by our standards", and
"the archetype distribution for Future-2K is very similar to that of the original
WildChat." On the show:

> "They are getting better. […] The distribution is kind of remaining the same, which
> is striking, but the overall rate is going down."

So: capability buys you a **4× lower rate**, and buys you **nothing** on the shape of
what remains. Whatever is left, you still will not see.

**One domain finding worth its own line:** visible failure is highest in **software
development** — a "highly verifiable domain … dominated by experts." The inverse
reading is the uncomfortable one: a domain with *few visible failures* is not
healthier, it is **less verifiable**.

### A methods aside worth stealing

They tried to hand-label the transcripts and **couldn't**:

> "It's too hard to label these transcripts. Sometimes people code switch in and out
> of multiple languages or they just want a specification in Fortran and I don't know
> Fortran. So both of us were cheating by having Opus help us. And when we realized
> that we were like, well, we're not really doing human annotation at this point."

His warning about naive LLM labelling, from a blog post he calls "the seven levels of
enlightenment for AI annotation":

> "None of these systems are deterministic. […] But then you notice that even the
> frontier models are doing different things to the data, even with the same protocol.
> That certainly happens at a much higher rate than just randomness. So they have
> their own biases."

Inter-rater reliability did not stop being a problem when the raters became machines.
Their reported agreement: failure classification **κ = 0.84**, archetype **κ = 0.81
micro / 0.60 macro** — but the individual underlying signals only **κ = 0.47–0.58**.
The judgement is more reproducible than the evidence it rests on.

## Paper 2 — The paradox of AI fluency

**Potts & Sudhof, "A paradox of AI fluency"
([arXiv:2604.25905](https://arxiv.org/abs/2604.25905), 28 Apr 2026)** — 26,958
transcripts from WildChat-4.8M (primary analysis on a 20,969 "Standard" subset). It
builds on Anthropic's [AI Fluency Index](https://www.anthropic.com/research/AI-fluency-index)
(23 Feb 2026; 4D framework by Rick Dakan & Joseph Feller).

Two stances, as he put it on the show:

- **Augmentative** (expert): in the mix with the model — nudging it, refining the goal
  collaboratively, spotting mistakes so it course-corrects. Hundreds of small
  behaviours that in aggregate *are* the expertise.
- **Delegative** (novice): "They've probably been taught by the discourse that it's a
  super intelligence. You should just tell it what you want and let it churn away and
  the outcome will be good. And so they don't course correct. They don't spot
  mistakes."

| | High fluency | Minimal fluency |
|---|---|---|
| Conversations with ≥ 1 failure indicator | **64 %** | 24 % |
| …of which **visible** | **59 %** | 12 % |
| …of which **invisible** | 22.1 % | **85.6 %** |
| Task complexity (mean, 5-pt) | 3.1 | 1.5 |
| Labelled "augmentative" | **93 %** | **< 1 %** |

**The paradox, verbatim:** *"Fluent users experience more failures than novices — but
their failures tend to be visible … they are more likely to lead to partial recovery,
and they occur alongside greater success on complex tasks."*

The two behaviours that separate the groups: **iterative refinement** is "highly
characteristic of high-fluency users and essentially absent from low-fluency";
**passive acceptance** is "the strongest single indicator of minimal- and low-fluency."

Their framing line: AI expertise determines *"whether AI is a lottery or a tool."*

Potts, flatly, on the show: *"Right now the fluent users are probably a very small
minority of the people trying to use AI."*

## What Potts changed about his own working habits

> "I've learned, for example, that I'm **much too prone to offering a specification up
> front in one big block of text and then just hoping it will all work out**. When the
> more productive mode along almost any measure you want to take is to be a deep
> collaborator, to work with the AI as a kind of peer so that you discover things so
> that you can nudge in good directions. If you want to build towards something
> complicated, this is basically your only path to success."

> "I do complain but I don't do enough true iteration."

## Why the machine is genuinely alien

Not mysticism — a working instruction. On what makes agent reports untrustworthy in a
*specific* way:

> "They produce reports, and you might look at them and say, but **you didn't normalize
> any of these values** in the way that I would expect. And so when you say 75 % is a
> great finding, **you've overlooked the fact that everything is at 75 %**. And as soon
> as you say that to them in a message, they say **you're absolutely right**, and they
> redo all the work. If a human did that to you, you would be so weirded out by that
> human — because no human could both do that quantity of really interesting work, and
> also not only not know about that one step, but also simply go, all right, thanks
> boss, sure, and then do it all over."

On the seduction of the write-up:

> "You get seduced. They write in this way where **everything is field-changing
> discovery**. […] I open this report and it says, the headline finding is X and X is
> so exciting. You think, wow, we've got a real finding on our hands, and then you dig
> deep and you find, yeah, it was actually kind of very mundane, or it's not supported,
> or **it did many, many more comparisons than I would accept** before it arrived at
> the so-called headline result."

On the analogy that works — and its limit:

> "It's this alien creature. […] I love the movie *Arrival* […] because the linguist is
> the hero, and the reason the linguist is the hero is she just makes a presumption
> that they will be **social creatures** […] But these LLMs are even more alien than
> that, because they've not been subject to societal pressures or any kind of pressure
> of communication with each other. And so they're even weirder."

His practical advice is deflationary: drop the superintelligence narrative, drop the
human analogies, **treat it as a very powerful new tool you have to learn to use** —
with the unusual property that part of using it well is pushing back at it in free
form.

Where they genuinely extend him: *"They try things I would never try, which is always
the dream […] we all get in our ruts […] they try lots of weird stuff, and they can try
more stuff than I can because they can write code so fast and they never run out of
energy."*

## Build with friction — the part for people shipping AI products

- Confident language ("I know that", "I'm certain of that") is **anti-correlated with
  being correct** — and users *like* it and trust it more. (Stanford work from Dan
  Jurafsky's orbit; see [Rathi, Jurafsky & Zhou, *Humans overrely on overconfident
  language models, across languages*](https://arxiv.org/html/2507.06306v1).)
- Same structure as sycophancy: *"I don't think anyone wants a sycophantic language
  model as a societal actor, but in the moment we all kind of want to be validated.
  And we're going to be happier with products that validate us. Locally, in the moment.
  Long term this is disastrous."*
- So the optimisation target is poisoned: **local preference ≠ global preference**, and
  a well-meaning company's own data still points at the local one. *"I honestly don't
  know how we're going to get out of this. You have to design with friction in mind."*
- Product orthodoxy says minimise friction. The fluency paper says the opposite, in
  print: builders are *"designing not just model behavior but user behavior;
  encouraging deep engagement, rather than friction-free experiences, will lead to more
  success overall"* — while conceding it *"does risk making users less satisfied in the
  moment."*

**Why software development is the domain where this works:**

> "It's a domain in which you have a lot of high-fluency users already. […] It's also a
> very **verifiable** domain. The agent can check the code, and you can check the code
> yourself. So you're not going to be fooled for long, because probably at some point
> the code will run, and it will either be what you wanted or it won't be. But as soon
> as we travel even into very technical domains that are slightly less verifiable […]
> the problems get a lot deeper."

And the honest sting in the tail:

> "This is the most demanding thing of all, because after all, **you turned to AI
> because it was hard or impossible for you to do all this verification** — and now I'm
> saying, you've got to be in the role of verifier, at least part of the time. But I
> don't see a solution otherwise, because even if these error rates go way, way down,
> we're still going to be talking about one in 100, or one in 1,000 — and if it matters,
> that's a lot of failure in the world."

## Who is publishing this — read before quoting the numbers

Both papers are **Bigspin AI technical reports, not peer-reviewed**. Potts is
**Co-Founder and Chief Scientist of Bigspin AI**; Sudhof is Co-Founder and CEO. Bigspin
sells *"AI Agent Conversation Monitoring That Detects Invisible Failures."* The finding
and the product are the same object: most failures are invisible → your monitoring is
blind → buy our monitor. The company's homepage markets the number as "78 %"; the paper
says 79 %.

That does not make it wrong — his academic record is serious (ACL Best Paper 2024,
EMNLP Outstanding 2025, JMLR) — but the independence condition is not met, and two
methodological facts should travel with every citation:

1. **All annotation is done by LLMs**, not humans. Humans wrote the guidelines and
   supervised. There is **no human-labelled ground truth** for "did the user actually
   get what they wanted?"
2. **"The Walkaway" — the single largest archetype, > 65 % of multi-turn transcripts —
   is the most vulnerable to over-detection.** People abandon chats for many
   non-failure reasons: they got what they needed, got bored, got interrupted. An
   abandoned conversation is not self-evidently a failure.

The fluency paper has a sharper problem: "visible failure" is defined as *the user
pushed back*, and *pushing back* is itself one of the scored fluency behaviours. Some
of the headline correlation is definitional. The task-complexity gap (3.1 vs 1.5) and
the augmentative/delegative split (93 % vs < 1 %) are measured more independently and
are the sturdier results.

**Direction: trust it. Specific decimals: don't.**

> **A live demonstration, from building this note.** My first automated read of the
> paper returned two confident, well-formed statistics — "91 % of failures are
> interactional" and "94 % would persist with better models" — and I had them drafted
> into this file. Neither sentence exists in the paper. Checking against the full text
> returned NOT PRESENT for both. That is *The Confidence Trap*, committed by my own
> pipeline, inside a note about the Confidence Trap, and it was caught only because
> the numbers were checked one at a time against the source.

## Where this lands on our operation

This episode is the *user-side* companion to the note on
[unfaithful chains of thought](2026-04-13-unfaithful-chains-of-thought.md). That one
said: the model's self-report is a second artefact, not a log. This one says: **and you
will not notice.**

Our own logged findings are, one by one, Potts' archetypes with our names on them:

| Our finding | His archetype |
|---|---|
| PR commit message claims work that isn't in the diff | **The Confidence Trap** |
| Agent commits 3 of 8 items, declares done | **The Silent Mismatch** |
| `.failed` marker lies; task looks finished | **The Mystery Failure** |
| `A \|\| B` coverage test accepts the weak branch, stays green | **The Confidence Trap** |
| `toContain("56 articles")` green while 0 of 56 links exist | **The Confidence Trap** |
| Agent improvises literal values instead of copying the spec verbatim | **The Drift** |
| Same fix rebuilt four times across crashed sessions | **The Death Spiral** |

Three things that follow, concretely:

1. **Our task pipeline is the delegative stance, industrialised.** An agent-task YAML
   is a one-shot spec fired at 22:00 into a runner with nobody to ask. Potts' confessed
   personal weakness — *"a specification up front in one big block of text and then
   just hoping it will all work out"* — is literally the format of every YAML we write,
   and iterative refinement is the one behaviour that most separates experts from
   novices. This is not an argument to stop: his verifiability point says code is the
   *good* case, the one domain where you can't be fooled for long. It is an argument
   that the quality of an unattended run is decided **entirely** by how much
   verification we compiled into the spec up front, because no course-correction is
   available at runtime. Every YAML should be read as: *what will catch this if it
   drifts, given that nobody is watching?*
2. **Assert per element, never over an aggregate.** Already our rule, arrived at
   empirically after `A || B` and `toContain("56 articles")`. Potts' *"everything is at
   75 %"* is the identical failure seen from the research side. The fluency paper
   explains why we keep re-learning it: a well-written summary buys trust it hasn't
   earned — and it just bought some from me again, three sections up.
3. **Friction in our own tooling is not overhead.** The quality gate, the red-first
   proof requirement, the "verify all touched files are staged" guard — each was added
   after being burned, each makes the loop slower, and the research says that is the
   correct direction of travel, not something to optimise away.

**And one open question aimed straight at us.** Asked what he wants to work on next:

> "I want to address some fundamental questions that I feel everyone is taking for
> granted. **What is the marginal value of a skill file?** Everyone is out there
> investing in creating these skill files that are helping their environment do harder
> things for them in a more customized way. But does it lead to more productivity? Does
> it lead to interactions that have the right kind of friction, or that avoid the wrong
> kind of friction? **Does it lead to good things like more PRs on average?**"

We run ~90 skills, a 24 KB memory index, profiles and routines — a large, entirely
unmeasured investment in exactly the artefact a Stanford professor says nobody has
evidence for. Nobody has run that experiment on our setup. We have the data to: PR
outcomes, QG pass rates and task-failure markers are all logged per run.

## Sources

- Potts & Sudhof, *Invisible failures in human-AI interactions*, arXiv:2603.15423, 16 Mar 2026 (rev. 12 May 2026) — https://arxiv.org/abs/2603.15423
- Potts & Sudhof, *A paradox of AI fluency*, arXiv:2604.25905, 28 Apr 2026 — https://arxiv.org/abs/2604.25905 · code/data https://github.com/bigspinai/bigspin-fluency-outcomes
- Bigspin AI — About (Potts = Co-Founder & Chief Scientist) — https://bigspin.ai/about-us
- Anthropic, *Education Report: The AI Fluency Index*, 23 Feb 2026 (4D framework: Rick Dakan & Joseph Feller; 9,830 conversations) — https://www.anthropic.com/research/AI-fluency-index
- Rathi, Jurafsky & Zhou, *Humans overrely on overconfident language models, across languages* — https://arxiv.org/html/2507.06306v1
- Christopher Potts, papers — https://web.stanford.edu/~cgpotts/papers.html
- Episode audio — https://soundcloud.com/linear-digressions/invisible-llm-failures-and-ai

### Independent triangulation (not Bigspin)

- *SycEval*, arXiv:2502.08177 — 58.19 % sycophancy across ChatGPT-4o/Claude-Sonnet/Gemini-1.5-Pro; **14.66 % regressive** (talked out of a correct answer); persists in 78.5 % of cases
- *AbstentionBench*, FAIR at Meta, arXiv:2506.09038 — reasoning fine-tuning **degrades abstention by ~24 %**; scale barely helps; false-premise questions are the weakest category
- Magesh et al. (Stanford RegLab), *Hallucination-Free?*, arXiv:2405.20362 / *J. Empirical Legal Studies* 2025 — purpose-built legal RAG hallucinates on **17 % (Lexis+ AI)** and **33 % (Westlaw)** of queries despite "hallucination-free" marketing. The best-documented case of retrieval failing silently where the user cannot check.
