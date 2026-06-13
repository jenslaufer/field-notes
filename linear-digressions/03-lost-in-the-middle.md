---
title: "Lost in the Middle (The Agents Season, Episode 3)"
podcast: "Linear Digressions"
hosts: "Katie Malone & Ben Jaffe"
source: "https://feeds.soundcloud.com/stream/2313951773-linear-digressions-lost-in-the-middle-the-agent.mp3"
published: 2026-05-03
captured: 2026-06-13
---

# Lost in the Middle

> A good talk lives or dies by its opening and closing — and LLMs have the same
> quirk. They read the start and the end of the context window closely and quietly
> zone out in the middle. The information *is* in the window; the model just barely
> looks at it. For long-context agents, that dead zone is where your critical
> instruction goes to die.

## Core message

Not all context positions are equal. Attention across the context window is
**U-shaped**: strong at the beginning, strong at the end, weak in the middle.
Stuffing more into the window doesn't help if what matters lands in the trough —
and crucially, this is **architectural**, not a training artifact you can prompt
your way out of.

## The headline paper

**"Lost in the Middle: How Language Models Use Long Contexts"** — Liu, Lin,
Hewitt, Paranjape, Bevilacqua, Petroni, Liang (2023, Stanford/Berkeley,
arxiv.org/abs/2307.03172).

They moved the relevant document to different positions in a long context and
measured retrieval accuracy:
- Accuracy is **highest when the answer is first or last**, lowest when it's in
  the middle — a clean U-curve.
- Going from **20 to 50 retrieved documents improved GPT-3.5 Turbo only ~1.5%** —
  more context, almost no gain.
- In some middle-position cases the model did **worse with the document supplied
  than answering from its own memory** — the extra context actively hurt.
- The degradation held **nearly identical across different context-window sizes** —
  a bigger window doesn't dissolve the dead zone.

## Why the middle gets ignored (it's structural)

Follow-up work — **"On the Emergence of Position Bias in Transformers"** (2025) —
Xinyi Wu, Yifei Wang, Stefanie Jegelka, Ali Jadbabaie (MIT) — locates the cause in
the architecture itself:
- **Causal masking** puts early tokens on the most computational pathways: *every*
  later token attends back to them, so the start is over-represented by
  construction.
- **Middle tokens are attended to by fewer subsequent tokens** — less downstream
  reinforcement, so their signal washes out.
- **Residual connections** give end-of-sequence tokens structural anchoring — the
  recency end stays sharp.

Because it falls out of the mechanism, you can't fully train or prompt it away —
you design *around* it.

## Why this bites agents specifically

An agent's important decision from step three can end up **buried under twenty
steps of subsequent context**, landing squarely in the middle dead zone. The
constraint was stated, it's technically still "in context," and the model has
effectively stopped reading it. RAG makes it worse — see **"Seven Failure Points
When Engineering a Retrieval Augmented Generation System"** (Barnett et al.):
retrieval ordering is one of the documented ways these pipelines silently fail.

## Practical takeaways

- **Front-load constraints.** Put the must-not-break instructions at the very
  start of the context, where positional attention is strongest.
- **Or restate them at the end.** As a user: repeat your most important constraint
  near the *end* of your message — the recency edge is sharp too. The middle is
  the one place not to rely on.
- **Order RAG results deliberately.** Don't dump retrieved chunks in arbitrary
  order — place the most relevant ones at the start and end, not the middle.
- **Context *management* beats raw window size.** A bigger window doesn't fix the
  curve. When evaluating a system, ask *how it manages what's inside* the window,
  not how large the window is.

## Next in the season

Episode 4 takes the natural next step: if the middle of the window is unreliable
and the window is finite, how does an agent decide what to keep, summarize, or
page out? That's **memory management for AI agents**.
