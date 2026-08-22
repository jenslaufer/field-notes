---
title: "Improving Factuality and Reasoning via Multi-Agent Debate"
type: "paper"
authors: "Du, Li, Torralba, Tenenbaum, Mordatch (MIT / Google)"
year: 2023
arxiv: "2305.14325"
link: "https://arxiv.org/abs/2305.14325"
survey: "../orthogonal-agent-verification.md"
family: "3 — Adversarial & heterogeneous"
captured: 2026-06-14
---

# Multi-Agent Debate

> Part of the [Orthogonal Verification survey](../orthogonal-agent-verification.md) (family 3 — Adversarial & heterogeneous). Paper: [arxiv.org/abs/2305.14325](https://arxiv.org/abs/2305.14325)

**Problem.** A single model asserts a fact with the same confidence whether it's right or wrong. Nothing pressure-tests a claim only one reasoning pass produced.

**Method.** Several model instances each answer independently, then **read each other's answers over multiple rounds** and refine toward consensus. The "society of minds."

**Why it works.** Contradiction is the signal. A fact every agent reaches survives; a fact only one agent asserts gets challenged by the rest. Disagreement surfaces error that agreement would hide.

**Result.** Improves factuality and reasoning and cuts hallucination across math, reasoning, and factual-validity tasks.

**Caution.** Debate pays off when a task parallelises or a solo agent is weak; once a single agent is already strong, coordination overhead can hurt (see `../../linear-digressions/2026-06-08-08-many-agents-many-problems.md`). Match the architecture to the task — don't reach for a panel by reflex.

**Takeaway.** Make verifiers *argue*, not just vote. Forced exposure to dissent is a stronger filter than parallel independent guesses.

**Our stack.** Premortem memory + refute-by-default skeptics in workflows = debate / devil's-advocate applied to our own findings.
