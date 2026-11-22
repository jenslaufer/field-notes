# handbook

A human-runnable copy of the opportunity and marketing methods. Readers have a browser and a spreadsheet, no AI. Overview: `index.md`. Sources: `SOURCES.md`.

## Test

`node --test handbook/tests/` from the repo root. Run it at the start of every session here.

## Sync when the test fails

1. `git -C ~/repos/<repo> log -p <synced>..HEAD -- <path>` for each failing row.
2. Carry over what changes how a human works: a rule, a threshold, a step, a finding with its numbers. Skip agent mechanics: file contracts, scripts, subagents, gates, tool names.
3. New learning: next L-number by date order, a section in `10-learnings.md` under its theme, a row in its index and in `SOURCES.md`, references in `08-channel-cards.md` and `09-playbooks.md`.
4. Set the row's `Synced` to the new commit. Rerun the test.

## Rules

- Rewrite, never copy agent wording. Replace every tool step with its manual equivalent (`index.md` table). Why: the book must work when no AI tool is available.
- Numbers keep their source and date. Why: the methods rest on evidence discipline (`02-evidence.md`).
- New source paths go into `SOURCES.md` first, or the test cannot watch them.

## PDF

`node handbook/build-pdf.mjs` → `handbook/_book/handbook.pdf` (pandoc → Typst bundled with Quarto; no LaTeX). Chapter order lives in its `CHAPTERS` list — a new chapter goes there too. `_book/` is git-ignored.
