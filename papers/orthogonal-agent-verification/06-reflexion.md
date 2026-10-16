---
title: "Reflexion: Language Agents with Verbal Reinforcement Learning"
type: "paper"
authors: "Shinn, Cassano, Berman, Gopinath, Narasimhan, Yao"
year: 2023
arxiv: "2303.11366"
link: "https://arxiv.org/abs/2303.11366"
survey: "../orthogonal-agent-verification.md"
family: "4 — Learning from feedback"
captured: 2026-06-14
---

# Reflexion

> Part of the [Orthogonal Verification survey](../orthogonal-agent-verification.md) (family 4 — Learning from feedback). Paper: [arxiv.org/abs/2303.11366](https://arxiv.org/abs/2303.11366)

**Problem.** An agent that fails a task and retries with no memory repeats the same mistake. Fine-tuning on failures works but needs gradients and is slow.

**Method.** After a failed attempt, the agent **writes a natural-language reflection on *why* it failed** and stores it in an episodic memory buffer. The next attempt reads that reflection before acting. "Verbal reinforcement learning" — no weight updates, just self-authored lessons carried forward.

**Why it works.** The orthogonal axis is *time*. Trial N+1 is checked against the explicit, written mistakes of trial N — the agent's own past is the critic.

**Result.** Strong gains on decision-making (ALFWorld), QA (HotPotQA), and coding (HumanEval pass@1 ~91%).

**Takeaway.** Persisting *why it went wrong* in plain language — not just *that* it went wrong — is enough to improve behaviour without retraining. Memory is a verifier across attempts.
