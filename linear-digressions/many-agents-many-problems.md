---
title: "Many Agents, Many Problems (The Agents Season, Episode 8)"
podcast: "Linear Digressions"
hosts: "Katie Malone & Ben Jaffe"
source: "https://feeds.soundcloud.com/stream/2334937361-linear-digressions-many-agents-many-problems-the.mp3"
published: 2026-06-08
captured: 2026-06-13
---

# Many Agents, Many Problems

> When is a multi-agent system actually better than one good agent? The episode
> grounds the answer in two research papers. Bottom line: more agents is *not* a
> one-way ticket to a better system — the architecture has to match the task.

## Core message

The closer a multi-agent system looks to a single well-equipped agent (a strong
model with good tools), the better it tends to perform. Multi-agent has a real
but narrow niche — narrower than the hype suggests.

## Paper 1 — "The Collaboration Gap" (Davidson et al., Microsoft Research / EPFL, 2025)

**Question:** Can agents that were never trained together actually coordinate,
the way humans do — not via a scripted, pre-wired workflow?

**Setup:** Two agents each get half of a maze; the halves are complementary, so
neither can solve it alone. They must communicate to share their views. No
prescribed message format. 32 models tested, solo vs. paired.

**Findings:**
- Models that solve mazes well **solo** often fail badly when forced to
  collaborate — sometimes the performance falls off a cliff.
- The failure: agents never converge on a **shared representation**. One uses
  left/right/up/down, another uses compass directions, another counts from a
  different corner. They burn the whole conversation reconciling languages
  instead of solving the maze.
- **Distilled models collapse the hardest.** Distillation preserves the ability
  to produce correct answers, but does *not* optimize for explaining reasoning in
  a way another agent can build on. Geniuses at the answer, poor at communicating it.

**Thesis:** Collaboration is a **separate capability** from raw intelligence.
A super-smart model isn't automatically good at working with others. You can't
prompt-engineer your way out of this.

**Partial fix — "relay inference":** Pair a strong agent with a weaker one and
let the strong agent go first to set the communication rules; the weaker one
follows. This closes most of the gap — but it's leader/follower, not teamwork.

## Paper 2 — Scaling laws of multi-agent systems (Google DeepMind / MIT, late 2024)

**Setup:** 180 multi-agent configurations across 4 benchmarks, 3 model families —
deliberately broad to find generalizable patterns.

**Three patterns that act almost like laws:**

1. **Tool use kills multi-agent value.** On tool-heavy tasks (web browsing, API
   calls, retrieval), coordination overhead dominates. Every inter-agent message
   eats the reasoning budget. A single well-equipped agent almost always wins.

2. **The ~45% threshold.** Once a single agent can solve a task ≥~45% of the time
   alone, adding agents stops helping and starts hurting. *Below* 45%,
   parallelization helps (multiple explorers raise the chance one succeeds);
   *above* it, coordination cost exceeds the benefit. (Empirical, not derived.)
   - Analogy: stuck on hard math homework → a study group helps. Already the
     strongest student → five people second-guessing each other slows you down.

3. **Topology amplifies errors.** Hierarchies (orchestrator → sub-agents) let a
   sub-agent's mistake propagate up and corrupt the whole task; more layers, worse.
   Flat topologies fail differently but also amplify errors. A single agent has
   no error-propagation path at all.

**The big swing — same models, different task structure:**
- **Parallelizable** tasks (independent sub-tasks, e.g. financial analysis):
  multi-agent improved performance by **>80%**.
- **Sequential planning** tasks (step B depends on A, C on B): multi-agent
  **degraded** performance by **~70%**.

## Synthesis

- A relay/strong→weak pairing resembles a **sequential pipeline** — exactly the
  fragile, error-amplifying case. So the fix for the collaboration gap runs
  straight into a structural problem from the scaling-laws paper.
- Multi-agent is **not bad** — it requires matching architecture to task, which
  takes real thinking. Current training doesn't optimize agents for collaboration
  in unstructured settings.

## Practical takeaways

- **Slide-deck smell test:** if the diagram has 70 boxes with arrows everywhere,
  your skepticism detector should fire. Ask: *could one good agent with the right
  tools do this?* If yes, that's probably the better approach.
- **Use multi-agent when** the task genuinely splits into independent sub-tasks
  (below the ~45% solo-success threshold, parallel exploration helps).
- **Avoid multi-agent when** the task is tool-heavy, has sequential dependencies,
  or a solo agent already clears ~45%.
- **Don't artificially split** a task into pieces — the back-and-forth can negate
  the gains from specialization.
- Delegating to a *team* of AIs is not obviously better than to one good one, and
  is often worse. "Get smart people in a room" ≠ an effective team; you have to
  design for collaboration.

## Newsletter teaser

A follow-up paper on resolving disagreements between agents: **debate vs. voting**
— which yields better decisions for multi-agent LLMs.
