# Niklas Steenfatt — insights for Jens

## Recurring themes

**Prose rules rot; deterministic checks hold**
- Agent-written context files collect trivia and cost tokens. Move enforceable rules into hooks, permissions, lint and CI. ([Vibe Coding hat sich verändert](2026-10-16-vibe-coding-hat-sich-veraendert.md))

## By episode

### 2026-10-16 · [Vibe Coding hat sich verändert](2026-10-16-vibe-coding-hat-sich-veraendert.md)

Checked against [`../papers/agents-md-context-skills-2026.md`](../papers/agents-md-context-skills-2026.md). Setup figures measured 2026-10-16.

- **The skill pool is the biggest lever, not CLAUDE.md.** About 55 own skills, 64 entries in `~/.claude/skills/`, plus plugin skills — well over 100 in one session. Jiang: selection precision 29.6 % at 5 skills, 3.3 % at 100. Yan: a similar co-installed skill takes over every fifth run. The gstack name clashes (`review`, `qa`, `investigate`, `scrape`) are arbitrated in prose in the global CLAUDE.md — that is exactly the conflict the papers measure. Disable the losing side instead of describing who wins. The 2026-09-15 incident (five issues written past the ticket skill) fits the same pattern.
- **Three prose rules can become hooks or permissions:**
  - *Tickets only via the ticket skill* → PreToolUse deny on `gh issue create` unless the skill sets a marker.
  - *Never Playwright-MCP for page content* → permission deny on `mcp__playwright__*`; the tools are still loaded today.
  - *New skills never in `~/.claude/skills/`* → deny Write/Edit below that path except `synced/`.
  `guard-bash.mjs` already does this for destructive commands; extend the same file. ContextCov: 88.3 % compliance enforced vs 67.0 % prompt-only.
- **Trim CLAUDE.md by the papers' test, not by length.** Global 982 words, `assistant/CLAUDE.md` 1,730 words, both always loaded. Keep the non-inferable parts (agent-task vs Fabrik, secrets map, plugin version bump, prune rules with dates — Chakrabarti: rules with a reason get deleted when obsolete). Candidates to cut: generic commands like KISS/DRY, tech-stack and marketing principles — Zhang finds such *do X well* rules do not help, while prohibitions do.
- **Keep what the video calls obsolete:** quality-gate, merge-branch, handtest and small agent-task units are the deterministic loop and the context discipline the research still supports. Context management is the one claim with no paper behind it.
- **Keep the enforced-workflow skill style.** Concrete commands and paths drive the measured gains (Wang); focused skills beat broad packs (SkillsBench).
- **Process:** this note first misread the ETH paper from secondary write-ups; the paper survey in this repo caught it. Check video claims against `papers/` before writing the critique.
