---
title: "Memory Management for AI Agents (The Agents Season, Episode 4)"
podcast: "Linear Digressions"
hosts: "Katie Malone & Ben Jaffe"
source: "https://feeds.soundcloud.com/stream/2318075642-linear-digressions-memory-management-for-ai.mp3"
published: 2026-05-10
captured: 2026-06-13
---

# Memory Management for AI Agents

> The context window is a finite desk. A long task piles on conversation history
> *and* working notes until something falls off — and what falls off, or gets
> blurred into a summary, is what the agent then contradicts itself about. The fix
> isn't a bigger desk. It's borrowing fifty years of operating-system tricks for
> deciding what stays in fast memory and what gets paged out.

## Core message

Agent memory is an **operating-systems problem**, not a bigger-context problem.
A finite window forces a tradeoff between conversation history and working memory;
managing that tradeoff well — with a hierarchy and explicit paging — is what keeps
a long-running agent coherent instead of letting it drift into contradictions.
This builds directly on **Lost in the Middle** (Episode 3): since the middle of
the window is structurally unreliable, *which* information lives *where* matters.

## The headline paper: MemGPT

**"MemGPT: Towards LLMs as Operating Systems"** (2023) — Packer, Wooders, Lin,
Fang, Patil, Stoica, Gonzalez (arxiv.org/abs/2310.08560).

The move: let the agent **manage its own memory the way an OS manages virtual
memory**. Data is paged between the fast, finite context (RAM) and slower external
storage (disk), and the agent decides — via tool calls — what to bring in and what
to evict. On long-document tasks this **significantly outperformed standard
fixed-context approaches**: the agent that actively curates its window beats the
one that just lets the window fill and truncate.

## The context hierarchy

Treat the window as tiered, not flat:
- **System prompt** — top priority, always present.
- **Durable instructions** (e.g. a `CLAUDE.md`) — pinned facts and constraints
  that must survive.
- **Flowing conversation history** — the cheap, evictable tier.

Place the load-bearing stuff in the high tiers, at the high-attention positions;
let the disposable stuff flow through the bottom.

## Three kinds of memory, three solutions

- **Semantic** (facts about the world) → **RAG** / external knowledge stores.
- **Episodic** (what happened on this task) → **MemGPT-style** active paging.
- **Procedural** (how to do things) → **skills loaded and discarded** as needed.

One "memory" abstraction doesn't fit all three; match the mechanism to the type.

## Compaction is useful but lossy

The common fix for a filling window is **compaction**: summarize the history and
replace the original with the summary. It buys room, but it's **lossy** — it keeps
the high-level decisions and loses the **specific reasoning, subtle constraints,
and exact exceptions**. Worse, the loss **compounds across multiple rounds** of
summarization. The result is **"context rot"**: after enough compaction cycles the
agent starts to **contradict itself and re-ask questions it already answered**.

## The Claude Code lesson: a pinned file beats a summary

`CLAUDE.md` is the practical antidote: it's **re-injected at every compaction**, so
it survives context rot. The architectural decisions, conventions, and hard
constraints that *absolutely must persist* live there — not in the conversation
history that summarization will eventually blur.

## Practical takeaways

- **Make the pinned file first-class.** For any long session, put the
  must-not-be-forgotten constraints in `CLAUDE.md`-style durable context, not in
  chat history. Assume anything 20 messages old is effectively gone.
- **Design context as a managed resource with a hierarchy** — critical
  instructions early (strongest positional attention), disposable history late.
- **Pick your eviction strategy on purpose:** threshold-triggered compaction
  (simple, lossy) vs. agent-controlled paging (MemGPT-style, more capable) —
  choose by task complexity.
- **Distrust "infinite context" claims.** Ask what actually gets *preserved* vs.
  *lost* during summarization. A huge window that quietly rots is worse than a
  small one you manage deliberately.

## Next in the season

Episode 5 turns from *remembering* to *deciding*: once the agent holds the right
context, how does it choose what to do? That's **agentic planning** — search,
not smarter linear reasoning.
