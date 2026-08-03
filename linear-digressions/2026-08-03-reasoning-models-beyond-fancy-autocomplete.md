---
title: "Reasoning Models: When LLMs Went Beyond Fancy Autocomplete"
podcast: "Linear Digressions"
hosts: "Katie Malone & Phoebe"
source: "https://soundcloud.com/linear-digressions/reasoning-models-when-llms"
published: 2026-08-03
captured: 2026-08-03
duration: "25:00"
transcript: "local (faster-whisper base.en, tools/podcast-transcribe.py)"
---

# Reasoning Models: When LLMs Went Beyond Fancy Autocomplete

> **There is no secret mechanism.** A reasoning model is a normal LLM whose training
> loop rewarded exactly two things: *did you put your thinking between the tags*, and
> *was the final answer right*. The quality of the thinking itself is never graded —
> and yet the reasoning capability emerges anyway. The reasoning tokens are ordinary
> tokens; nothing special happens when they are produced.

**Source note:** this summary is built on a **full local transcription of the audio**
(25:00, faster-whisper `base.en` on the mini-PC, ~11 min CPU), not on the published
show notes. Quotes below are from that transcript. Speaker attribution is
approximate — the two voices are Katie Malone (explaining) and Phoebe (asking); ASR
does not label speakers. Numbers stated in the episode are reproduced as stated,
with the hosts' own hedges kept.

## The arc

Reasoning models arrived **late 2024**, OpenAI first. The hosts' framing of why it was
a "sit up straighter" moment: up to then an LLM was next-token prediction plus some RL
to make it converse. But there are whole classes of problem that simply are not in the
training corpus — two very large numbers added together; a substitution cipher where
each letter is replaced by its alphabetical neighbours. Those need *steps*, not recall.
When a model solved OpenAI's cipher demo, "everybody sat up a little straighter."

The twist the episode is built around: **OpenAI shipped first and said almost nothing
about how.** The first in-depth public account of how a reasoning model is actually
built came from a Chinese lab — **DeepSeek R1** (early 2025), which was (1) genuinely
good, (2) **open weights**, so you could download and run it, and (3) published its
methodology (the hosts recall Nature).

## The recipe, stage by stage

1. **Cold start.** Take the plain pre-trained model — DeepSeek **V3**, not yet
   alignment-trained, "really your pre-trained fancy-autocomplete kind of model."
   Prompt it only on **verifiable** tasks: math problems, logic puzzles — "things that
   have a right answer that you can verify at the end."
2. **Two instructions, two grades.** Ask it to (a) do some thinking and put it between
   tags, and (b) produce an answer. Then grade **only** whether it got the format right
   and whether the answer was accurate. *"It wasn't looking at this point at the quality
   of the thinking that it did. It was just saying, do you get the right answer or not."*
   Phoebe's reframe: it's a whiteboard. Here's scratch space; put whatever you like on
   it; do you get the right answer more often now that you have it?
3. **The load-bearing assumption.** If the answer is correct, assume the reasoning that
   produced it was higher quality — keep it. If wrong, de-emphasize that reasoning.
   Thousands of whiteboards, thousands of answers → the training set for the next stage.
4. **RL on the cold-start data**, same two rewards. One concrete fix they had to add:
   the first-pass outputs **spontaneously switched languages mid-answer**, so
   language-mixing was explicitly penalized.
5. **Humans curate, humans don't write.** Some human annotation filters the cold-start
   data so that "total garbage" doesn't flow into step 2 — but the annotators are
   *curating* model-produced data, not authoring training data.
6. **Second round.** The improved model generates more candidates; good kept, bad
   rejected. These get **mixed with plain knowledge questions** — roughly **¾ reasoning
   Q&A, ¼ general chat** — because the model that got good at reasoning is not
   automatically the one that still knows things about the world. This mixture is what
   the literature calls the **supervised fine-tuning** set: showing the model examples
   of what reasoning looks like, while RL rewards it for doing so on its own.
7. **Final RL round with human preference**: annotators prefer better reasoning traces
   over weaker ones.
8. Out comes **R1**, plus smaller **distilled** versions released alongside it.

*"There isn't some special secret methodology that makes reasoning models different
from regular LLMs… the reasoning capabilities emerge from elements of LLMs that we
already know about."*

## The part that matters most: the trace is not the reason

The episode's sharpest passage, and a deliberate callback to their earlier
chain-of-thought episode:

> **Nothing in this process requires the reasoning trace to be the reasoning that
> produced the answer.** The reward is on format and final accuracy. So the trace and
> the answer *can drift from each other* — and research shows the trace "is not always
> faithful to what we think is the underlying way that the model is producing the
> answer."

Phoebe: *"That feels so backwards… you're not saying the reasoning is getting you to
the answer. You're saying if the answer is right, the reasoning is probably helpful."*

And the deflationary point right after it: the tokens in the reasoning trace are **not
special** — no hidden extra step, no different machinery. *"It's just spitting out
tokens, and the thing that's magic here is that you take that general process and it
still ends up deriving this reasoning process."*

## The distillation subplot (two levels, one contested)

- **Level 1, documented:** DeepSeek distilled smaller reasoning models *from* R1 and
  shipped them. Reasoning survives distillation reasonably well.
- **Level 2, alleged:** that the *starting* model, V3, was itself partly distilled from
  the OpenAI models that were state of the art at the time. DeepSeek says it was their
  own pre-training.
- **What raised eyebrows:** the claimed cost of about **$5–6 million**, against a
  pencilled-in **~$1 billion** benchmark for training a new frontier model. A >100×
  reduction "stretches credulity a bit… without some kind of a little booster rocket
  that you've gotten from somewhere."
- **Can it be settled?** Essentially no — the hosts land on *"this is the realm of
  geopolitics and statecraft."* Counter-argument they give airtime to: what is any
  frontier model *but* a distillation of the training data on the internet — "is it
  really fair to complain about somebody taking your stuff if it's derived on top of
  this other stuff that you've taken?"

**Coda the hosts flag themselves:** the reason we can explain reasoning models at all
is a *Chinese* lab's paper, even though an American lab shipped first. That makes the
story diplomatic as much as methodological.

## Small practical aside

They ran R1 locally and liked it, with the honest caveat: **much slower without a
GPU**, and "these are not small models."

## Insights for me (Jens) — my connections, flagged as mine

1. **The "agent self-report is not a log" rule now has a mechanism, not just
   anecdotes.** I already run on the rule that a PR text or an agent's account of its
   own work must be checked against the diff ([[agent_pr_commit_message_lies_verify_diff]],
   [[agent_premature_done_3of8]], `2026-04-13-unfaithful-chains-of-thought.md`). This
   episode says *why* it can't be otherwise: the trace was **never** trained for
   truthfulness — the reward touched only the format and the final answer. Nothing in
   the loop ever looked at whether the explanation was the cause. So an agent narrating
   "I ran the tests, then fixed X" is producing a second artefact, by construction, not
   a defective log. Upgrade in status: this is not a heuristic to apply when suspicious,
   it is the default state.
2. **"Verifiable task with a machine-checkable answer" is the shape that makes the whole
   thing work — and it is exactly the shape of a good agent-task.** DeepSeek's entire
   lever was restricting the cold start to tasks with a checkable right answer. My
   agent-task YAMLs have that property **when** they demand red-first tests: the suite is
   the verifier. Where a YAML has no verifier — docs, copy, "improve X", refactors judged
   by a green suite — you get the *format* of completion without any check on the
   accuracy, which is precisely my recorded failure class (commits 3 of 8 and reports
   done; refactor-PRs that leave main red; move-refactors that need an AST diff, not a
   green suite). **Practical: for every YAML, name the verifier before writing the
   prompt. If I cannot name one, the task is unreliable by construction and I should
   either add a gate or expect to check it by hand.**
3. **The $5M-vs-$1B episode is the public version of the rule Jens enforces on me.**
   The reason the cost claim is disputed is that the number was ~100× off the reference
   and arrived without a receipt. Same test I get held to ("Du hast aber nicht mit der
   API Abfragen gemacht") — [[report_numbers_with_verifiable_proof]]. Comfortable to see
   it applied at that scale.
4. **Weak relevance to my own model stack, stated honestly.** The episode says nothing
   about qwen, so this is inference: the reason my `simple` tier must be a
   *thinking-capable* model (qwen3, not qwen2.5-coder — CLAUDE.md, Stufe 1) is that the
   claude CLI always sends `thinking` to a custom endpoint. And the hosts' own experience
   — R1 runs locally, but slowly, on a GPU-less machine — matches what the mini-PC gives
   me. Nothing here changes the proxy plan; it just confirms the trade is real.

## Related

- Prev episode: `2026-07-27-distillation-how-to-steal-a-model.md` — the direct
  predecessor; this episode calls back to it twice (distilling R1 down, and the
  contested V3 provenance).
- `2026-04-13-unfaithful-chains-of-thought.md` — the faithfulness research this episode
  points at; that note has the Turpin/NeurIPS-2023 and Anthropic-2025 sources.
- `2026-07-20-invisible-llm-failures-and-ai-fluency.md` (Chris Potts).
