---
title: "An AI Design Workflow That Doesn't Ship Slop"
podcast: "The Startup Ideas Podcast"
host: "Greg Isenberg"
guest: "Meng To (@MengTo, Aura)"
source: "https://www.youtube.com/watch?v=oLu32YpiIJw"
captured: 2026-06-18
---

# An AI Design Workflow That Doesn't Ship Slop

> Meng To runs four products as a team of one by treating **taste as the moat**.
> The engine is **DESIGN.md** — Google's open-sourced format that captures the
> "soul" of a design as portable tokens + prose, so it ports across landing
> pages, slides, motion, and mobile mocks without drifting. Combined with
> **skills** and **HTML references**, it turns one-shot AI output into custom,
> on-brand work — even a thousand prompts deep.

## The core problem: design drift
- **One-shot prompts drift.** Each generation re-guesses your colors, type, and
  spacing, so everything converges on the same generic AI look.
- **The fix is a persistent blueprint** the agent reads every time — not a fresh
  vibe each prompt.

## DESIGN.md — the portable blueprint
- **One file = tokens + rationale.** YAML front matter holds machine-readable
  tokens; the markdown body explains *why* those values exist and how to apply them.
- **Token categories**: colors (`hex` / `oklch()`), typography (family, size,
  weight, line-height, letter-spacing), spacing/rounded (px/rem), and named
  **components** mapping bg/text color, typography, rounded, padding.
- **Canonical section order**: Overview → Colors → Typography → Layout →
  Elevation & Depth → Shapes → Components → Do's and Don'ts.
- **CLI keeps it honest**: `lint` (structure + WCAG AA contrast), `diff`
  (token-level changes), `export`, `spec`.
- **Exports anywhere**: Tailwind v3 config, Tailwind v4 CSS theme, or W3C DTCG
  `tokens.json` — so the same identity feeds any agent (Claude Code, Cursor, Kiro).

## The workflow (live demo, ~21:36 landing page; ~31:44 skills)
- **Author DESIGN.md once** — capture the soul of the brand, not just hex codes.
- **Feed it to the agent every run** so output stays coherent across mediums.
- **Use skills** as reusable, named capabilities for repeat tasks (e.g. a
  landing-page skill) instead of re-prompting from scratch.
- **Supply HTML references** as concrete examples the agent matches against —
  reference-driven beats description-driven.
- **Iterate deep.** Meng runs 1,000+ prompts on a single artifact; the blueprint
  is what keeps prompt #1,000 on-brand.

## Tools in Meng's stack
- **DESIGN.md** — the persistent design system.
- **Aura** (aura.build, Meng's product) — ship landing pages/mocks.
- **New Form, Codex, OpenClaw** — generation + agent harnesses.
- **Google Stitch** (origin of DESIGN.md), **Midjourney** — visual generation.

## Marketing tips
- **Taste is the differentiator, not the model.** When everyone has the same AI,
  the on-brand, custom-feeling page is the one that converts and gets remembered.
- **Ship custom across every surface** — landing page, slides, motion, mobile —
  from one DESIGN.md, so your brand reads consistent everywhere a prospect lands.
- **Reference, don't describe.** Hand the agent real HTML/visual references; it
  copies a look far more reliably than it interprets adjectives.
- **Solo-team leverage**: codified taste (DESIGN.md + skills) lets one person run
  four products' worth of branded output — a distribution multiplier, not just a design one.

## Why this matters for us
- **DESIGN.md is our anti-slop weapon.** A single committed file gives every agent
  our exact colors/type/components — directly addresses generic AI UI in our products.
- **It exports to Tailwind** — drops straight into our Vue 3 + Tailwind stack.
- **Skills + HTML references** are a copyable recipe for repeatable, on-brand
  landing pages in the launch-kit.
- **Taste-as-moat** reframes design from cost to distribution edge for a small team.

## References
- Episode: https://www.youtube.com/watch?v=oLu32YpiIJw
- DESIGN.md spec (GitHub): https://github.com/google-labs-code/design.md
- Google announcement: https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-design-md/
- Aura: https://aura.build
- Meng To on X: https://x.com/MengTo

> Note: built from Apple Podcasts show notes (with timestamps) + the official
> DESIGN.md spec; no full transcript. File-structure details are from the spec;
> demo specifics are paraphrased from chapter titles.
