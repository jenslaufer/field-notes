# Orthogonal Verification — individual paper notes

One note per paper from the [Orthogonal Verification survey](../orthogonal-agent-verification.md).
Each note carries the paper's problem, method, key result, and takeaway — plus a
link back to the survey and to the paper.

Ordered as in the survey's reading list, grouped by family.

**1 — Redundancy**
- [01 · Self-Consistency](01-self-consistency.md) — sample many CoT paths, majority-vote
- [07 · Tree of Thoughts](07-tree-of-thoughts.md) — search tree of thoughts with self-evaluation + backtracking

**2 — Solve-then-check**
- [02 · Constitutional AI](02-constitutional-ai.md) — critique/revise against an explicit written constitution
- [03 · CRITIC](03-critic.md) — tool-grounded critique; unaided self-correction fails
- [05 · Self-Verification](05-self-verification.md) — verify backward by reconstructing a masked condition

**3 — Adversarial & heterogeneous**
- [04 · Multi-Agent Debate](04-multi-agent-debate.md) — instances read and challenge each other over rounds
- [08 · LLM-Blender](08-llm-blender.md) — pairwise-rank then fuse heterogeneous models

**4 — Learning from feedback**
- [06 · Reflexion](06-reflexion.md) — written natural-language reflection carried into the next attempt

**5 — Measuring reliability itself**
- [09 · Towards a Science of AI Agent Reliability](09-ai-agent-reliability.md) — 4 dimensions, 12 metrics; capability ≠ reliability
- [10 · Holistic Agent Leaderboard (HAL)](10-holistic-agent-leaderboard.md) — cost-aware, third-party, behaviour-aware evaluation
