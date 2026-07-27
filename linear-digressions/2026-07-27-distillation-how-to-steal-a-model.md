---
title: "Distillation, or, How to Steal a Model"
podcast: "Linear Digressions"
host: "Katie Malone"
source: "https://soundcloud.com/linear-digressions/distillation-or-how-to-steal-a"
published: 2026-07-27
captured: 2026-07-27
duration: "23:38"
---

# Distillation, or, How to Steal a Model

> **Distillation = train a small, cheap "student" model to copy a large "teacher"
> model's outputs.** Two motives: (1) legit — make a lighter, faster, task-focused
> model; (2) contentious — clone a rival's flagship by hammering its API and training
> on the answers. It's hard to prove after the fact, which is why some distilled
> models occasionally introduce themselves as "Claude."

**Source note (read before quoting):** the audio (23:38) was **not** transcribed on
this machine. The summary below is faithful to the **published show notes** (quoted
verbatim next) plus the one paper they reference by name (Hinton/Dean/Vinyals 2015,
a landmark I know independently). Anything not in those two sources is flagged as my
own connection, not something the episode said.

## The published description (verbatim)

> "This week we're covering model distillation: the technique of using a large
> 'teacher' model's outputs to train a smaller, cheaper 'student' model that mimics
> it. They cover the two big reasons labs do this — making lighter, faster, more
> focused models for specific tasks, and the more contentious use case of effectively
> copying a rival's flagship model by hammering its API with questions (with a
> callback to the old Bing/Google search controversy). They also get into why it's so
> hard to prove distillation happened, why some models occasionally introduce
> themselves as 'Claude,' and a surprisingly old idea: a 2015 paper by Geoffrey
> Hinton, Jeff Dean, and Oriol Vinyals on distilling knowledge using the full
> probability distribution over a model's outputs — not just its single most likely
> answer — and what that 'soft label' approach captures about how a model relates
> concepts to each other."

## The core idea

- **Teacher → student.** A big expensive model generates outputs; a small model is
  trained to reproduce them. The student ends up punching above its parameter count
  because it learns from a model that already did the hard work.
- **Two reasons labs distill:**
  1. **Efficiency / focus** — a small student is cheaper to serve, faster, and can be
     specialised to one task. This is the mainstream, uncontroversial use.
  2. **Copying a rival (the "steal")** — point a lot of questions at a competitor's
     API, collect the answers, and train your own model on them. You get much of the
     competitor's behaviour without their training budget. The episode ties this back
     to the old **Bing-copying-Google** search dispute (Google fed synthetic queries
     with planted answers to catch Bing echoing its results).
- **Why it's hard to prove.** The student never sees the teacher's weights, only its
  outputs — and outputs aren't copyrightable in the obvious way weights might be.
  After training there's no clean forensic signal. The **tell** is behavioural: a
  model trained partly on another model's text sometimes **inherits its identity** and
  says it's "Claude" (or ChatGPT), because that phrasing was all over its training
  data.

## The surprisingly old idea — soft labels (Hinton, Dean, Vinyals, 2015)

The episode's technical anchor is **"Distilling the Knowledge in a Neural Network"**
(2015). The insight the notes highlight:

- Don't train the student only on the teacher's **single top answer** (the "hard
  label" — e.g. "this image is a dog"). Train it on the **full probability
  distribution** the teacher assigns across *all* options ("dog 0.9, wolf 0.08,
  cat 0.01…").
- That distribution — the **soft labels** — encodes *how the teacher relates concepts
  to each other*: that a dog is much more wolf-like than cat-like. That relational
  structure ("dark knowledge") is the real value, and it's thrown away if you keep
  only the single best guess.
- So a model's *uncertainty* is information, not noise. The runner-up probabilities
  carry most of what makes distillation work.

## Insights for me (Jens) — my connections, not the episode's

1. **This is the mechanism under my whole "model independence" layer.** My LiteLLM
   proxy's cheap tiers — `simple` = local qwen3:8b, `cloud-oss` = qwen3-coder — are
   viable *because* of distillation. Small open models (Qwen, DeepSeek-R1 distilled
   variants) get their surprising competence by being trained on large models'
   outputs. The "OSS insurance if the Anthropic abo dies" plan (CLAUDE.md, Stufe 1)
   literally rides on this technique working.
2. **"Introduces itself as Claude" explains behaviour I might see.** If my
   `cloud-oss` fallback ever answers as "Claude" or apes Claude's style, that's a
   distillation fingerprint, not a bug or a leak of my key. Harmless, but now named.
3. **The "steal a model" path is a legal/ToS minefield — do NOT productise it.**
   Anthropic's and OpenAI's terms forbid using their API outputs to train a competing
   model. Tempting thought — "distil a tiny task-specific model from Claude on my own
   agent-task/Fabrik workflows to cut cost" — is exactly the contentious use the
   episode describes, and it's contractually off-limits for anything I'd ship or sell.
   Fine as a private experiment on *my* data; not a business.
4. **Soft labels ≈ the honesty lesson I already carry.** "Keep the whole
   distribution, not just the argmax" rhymes with my standing rule to assert per
   element rather than trust one aggregate ([[coverage_test_or_clause_hides_gap]],
   unfaithful-chains-of-thought): the top answer hides the structure; the runner-ups
   are where the real information — and the real failure modes — live.

## Related

- Prev episode: `2026-07-20-invisible-llm-failures-and-ai-fluency.md` (Chris Potts)
- `2026-04-13-unfaithful-chains-of-thought.md` — a model's self-report is a second
  artefact, not a log; distillation's "says it's Claude" is another such tell.
- Hinton, Dean, Vinyals, *Distilling the Knowledge in a Neural Network*, arXiv:1503.02531 (2015).
