# Papers

Distillations of research papers — findings, method, and what is usable. No full text.

Personal takeaways for Jens' own setup live in one place: [`insights-for-jens.md`](insights-for-jens.md).

- [`orthogonal-agent-verification.md`](orthogonal-agent-verification.md) — survey of 10 papers on
  verifying AI agents; the organising idea is **orthogonality** (stack checks that fail for
  different reasons). One-page note per paper in
  [`orthogonal-agent-verification/`](orthogonal-agent-verification/).
- [`reading-list-2026-08-llm.md`](reading-list-2026-08-llm.md) — 20 papers (2026-05 to 2026-08)
  across four questions: context/memory optimisation · orthogonal evaluation and feedback
  loops · swarms of smaller models · "dumb" deterministic tools. Entries from abstracts,
  not distillations; all IDs verified against the arXiv API.
- [`llm-swarm-intelligence.md`](llm-swarm-intelligence.md) — Brenne & Meske, ECIS 2026
  ([2606.31404](https://arxiv.org/abs/2606.31404)): does averaging many LLM answers reproduce
  the wisdom of the crowd? Measured over 960 prompts on GPT-5 / Gemini 2.5 Pro / Claude Sonnet 4.5.
  Yes, but modestly, and only where the task has a statistical anchor. Includes four internal
  inconsistencies found in the paper.
- [`agents-md-context-skills-2026.md`](agents-md-context-skills-2026.md) — 30 papers plus
  Anthropic/OpenAI sources (German): do AGENTS.md, CLAUDE.md, context engineering and Agent
  Skills still matter in 2026? Correctness barely moves, speed and tokens do; short files with
  prohibitions and hooks beat long descriptive ones; curated skills help, piled-up skills hurt.
  All 30 arXiv IDs checked against title and first author, core numbers matched to the abstracts.
