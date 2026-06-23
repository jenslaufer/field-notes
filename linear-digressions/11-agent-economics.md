---
title: "Agent Economics (The Agents Season, Episode 11)"
podcast: "Linear Digressions"
hosts: "Katie Malone & Ben Jaffe"
source: "https://lineardigressions.com/episodes/2026/6/21/agent-economics-the-agents-season-episode-11"
published: 2026-06-21
captured: 2026-06-23
---

# Agent Economics

> Per-token inference keeps getting cheaper — and total LLM spend keeps going
> *up*. That isn't a contradiction; it's the oldest result in resource economics.
> Make a unit cheaper and you don't save money, you unlock uses that were never
> worth it before. The episode's frame is Robert Moses: build a wider road to cut
> congestion and you get *more* traffic, because cheap throughput summons the
> demand that fills it. Agents are the cars. Cheaper tokens don't shrink the bill —
> they invent new trips.

## Core message

The intuitive model — "tokens dropped 10×, so my AI bill drops 10×" — is wrong,
and predictably so. When the cost of a unit falls, demand for it usually rises
**more than proportionally**, so total spend climbs. This is the **Jevons paradox**
(William Stanley Jevons, 1865: more efficient steam engines burned *more* coal in
aggregate, not less). Agents are a near-perfect setting for it, because an agent
turns one cheap token into a long, looping, many-token workflow.

## The Robert Moses analogy — induced demand

The episode reaches for mid-century New York infrastructure (the Robert Moses
story from *The Power Broker*). The lesson urban planners learned the hard way is
**induced demand**: adding highway lanes to relieve congestion reliably produces
*more* congestion, because cheaper, faster travel makes trips worth taking that
nobody would have made before. Capacity creates its own demand.

Map it onto AI:

- **Lanes → cheaper tokens / faster inference.**
- **Trips → agent tasks.**
- **Congestion that never clears → a compute bill that keeps growing.**

Each price drop doesn't settle the existing workload more cheaply; it pulls in
workloads that were previously uneconomical to automate at all.

## Why agents amplify the effect

A chatbot answer is one round trip. An *agent* is a loop, and the loop is a token
multiplier:

- **Multi-step reasoning** — perceive → reason → act → observe, repeated many
  times for a single goal. One "task" is dozens of model calls.
- **Tool calls and their results** get fed back into context, so each step carries
  the cost of everything before it.
- **Retries, self-checks, and verification** — doing the job *reliably* (re-reading,
  double-checking, repairing) costs far more tokens than doing it once.
- **Context growth** — long-running tasks accumulate history; cost per step rises
  as the window fills.
- **Parallel / many-agent setups** multiply all of the above by the fleet size.

So the cheaper a token gets, the more of these expensive, multi-token patterns
become affordable — which is exactly how a 10× price cut turns into a *bigger*
invoice, not a smaller one.

## Practical takeaways

- **Engineers / builders:** model cost **per completed task**, not per token or
  per call. A 10× cheaper model can still raise your bill if it unlocks agentic
  workflows you'd never have run before. Budget the *loop*, not the prompt.
- **Founders / product:** falling token prices are not a margin windfall you can
  bank — they get competed away as everyone spends the savings on more capability.
  Plan for total AI spend to *trend up* even as unit prices fall, and price the
  product on outcomes, not on your token cost.
- **Watch the induced-demand trap:** "it's basically free now" is the moment usage
  explodes. The cheap unit is what makes the expensive aggregate. Put ceilings
  (token/step budgets, task caps) where the loop can run away.
- **Where it bends the other way:** the same dynamic is the *opportunity* — tasks
  that were too expensive to automate last year quietly cross the line into
  worth-doing this year. The edge is spotting which trip just became affordable
  before competitors do.

## Note on this capture

Written from the episode's published description (Robert Moses framing; the
"cheaper compute ≠ cheaper AI" thesis; drivers of agent economics at scale). The
economic mechanism — induced demand / the Jevons paradox — is the established
principle the framing maps onto; specific figures and named sources from the audio
are not reproduced here to avoid misattribution. **Gap:** Episode 10 of the Agents
Season is not yet captured in this folder (this jumps 09 → 11).

## Links

- Episode — lineardigressions.com/episodes/2026/6/21/agent-economics-the-agents-season-episode-11
- Jevons paradox — en.wikipedia.org/wiki/Jevons_paradox
- Induced demand / *The Power Broker* (Robert Caro) — the canonical Robert Moses account
