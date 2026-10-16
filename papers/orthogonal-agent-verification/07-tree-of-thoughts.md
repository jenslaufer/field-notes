---
title: "Tree of Thoughts: Deliberate Problem Solving with LLMs"
type: "paper"
authors: "Yao, Yu, Zhao, Shafran, Griffiths, Cao, Narasimhan"
year: 2023
arxiv: "2305.10601"
link: "https://arxiv.org/abs/2305.10601"
survey: "../orthogonal-agent-verification.md"
family: "1 — Redundancy"
captured: 2026-06-14
---

# Tree of Thoughts

> Part of the [Orthogonal Verification survey](../orthogonal-agent-verification.md) (family 1 — Redundancy). Paper: [arxiv.org/abs/2305.10601](https://arxiv.org/abs/2305.10601)

**Problem.** Chain-of-thought runs a single line of reasoning left to right. If an early step is wrong, there's no way to reconsider — the model can't explore alternatives or back out.

**Method.** Generalise CoT into a **search tree of intermediate "thoughts."** The model proposes several candidate next steps, **self-evaluates** each state's promise, and a search procedure (BFS/DFS) explores branches with **lookahead and backtracking**. A one-shot guess becomes deliberate, revisable problem-solving.

**Why it works.** Orthogonality comes from exploring *and pruning* alternatives rather than committing to the first path — the self-evaluation step is an internal check applied at every branch.

**Result.** Game of 24: 4% (CoT) → **74% (ToT)**; also strong on creative writing and mini-crosswords where solutions need planning.

**Takeaway.** When a task needs planning or has dead ends, give the model room to branch and to judge its own partial states. Search beats a single confident trace.
