---
title: "Obsidian + Claude Code as a Personal OS"
podcast: "The Startup Ideas Podcast"
host: "Greg Isenberg"
guest: "Vin (Internet Vin)"
source: "https://www.youtube.com/watch?v=6MBq1paspVU"
captured: 2026-06-18
---

# Obsidian + Claude Code as a Personal OS

> Vin turns years of personal markdown notes into a 24/7 "second brain" by pointing
> Claude Code at his Obsidian vault. The vault is the **context**; Claude is the
> **agent** that reads it, finds patterns, generates ideas, and executes tasks.
> One hard rule: **humans write, agents read** — never let the AI pollute the vault.
> Custom slash commands turn raw notes into ideas, essays, and delegated work.
> "Markdown files are the oxygen of LLMs."

## The setup (two pieces)
- **Obsidian** — free app over a folder of plain `.md` files (your "vault"). Notes
  link via wikilinks (`[[Project Alpha]]`), forming a **knowledge graph** that mirrors
  how your brain connects ideas — not a dumb folder tree.
- **Claude Code** — terminal AI agent that reads, references, and acts across the
  whole vault in plain English. The vault becomes its working context.
- **Obsidian CLI plugin** — the bridge. Lets Claude query the vault and its
  *relationships*, not just raw files. Finding orphan notes: **~0.26s and ~100 tokens**
  vs. ~15s and millions of tokens scanning files by hand.

## Vault structure
- **Daily notes** — reflection, what happened, what you're thinking. The engine.
- **Projects** — one note per project; reference files replace re-explaining context.
- **Beliefs** — stated positions, used later to pressure-test for contradictions.
- **People** — who you know, context per relationship.
- **Meetings** — notes that feed daily planning and follow-ups.
- **Link everything** so the graph reflects actual associations.

## The note → idea → content pipeline
1. **Write** — daily reflection into markdown. The more you write, the more context
   the agent has. No setup substitutes for the writing habit.
2. **Load context** — `/context` (a.k.a. `/my-world`) pulls full life + work state
   into one session. Stop re-explaining yourself every time.
3. **Surface** — thinking commands mine the graph for latent patterns, contradictions,
   and unstated implications you'd never see manually.
4. **Generate** — `/ideas` scans ~30 days of notes for tools to build, people to meet,
   essays to write.
5. **Graduate** — `/graduate` promotes a loose daily thought into a real asset
   (essay, project, post). This is the note → content jump.
6. **Delegate** — write one sentence in Obsidian; the agent handles the rest from
   inside the note.

## The custom slash commands
- **`/context` (`/my-world`)** — loads full life + work state; maps the graph.
- **`/today`** — prioritized daily plan from calendar, messages, recent notes.
- **`/close` (`/close day`)** — end-of-day review; extracts action items + missed connections.
- **`/trace`** — tracks how one idea evolved over months/years.
- **`/connect`** — bridges two unrelated domains you've been circling (e.g. filmmaking × worldbuilding).
- **`/ideas`** — generates startup ideas / essays / intros from the vault.
- **`/ghost`** — answers a question in *your own* writing voice.
- **`/challenge`** — pressure-tests a belief against your past writing for contradictions.
- **`/emerge`** — surfaces implications you never stated explicitly.
- **`/drift`** — compares stated priorities vs. actual activity over 30–60 days.
- **`/graduate`** — promotes daily thoughts into real assets.

## The one rule: humans write, agents read
- **Only Vin writes into the vault.** Claude reads, suggests, and executes — but
  never writes back. This keeps the vault an authentic record of *his* thinking, so
  pattern detection reflects him, not the model's defaults.
- **Payoff** — once the vault exists, the agent stops being generic and starts
  thinking in your voice. "99.99% won't do this because it requires reflection + setup."

## Marketing tips
- **Vault as a content engine.** `/ideas` + `/graduate` convert private reflection
  into a backlog of essays, threads, and posts — written in your own voice via `/ghost`.
- **Ride your own obsessions.** `/trace` and `/connect` surface the themes you've
  circled for years; those are your most authentic, differentiated content angles.
- **Voice-consistent at scale.** Because the agent is grounded in *your* writing, the
  output reads like you — not AI slop. Distribution-ready drafts, not generic filler.
- **Accountability loop.** `/drift` flags when your output diverges from stated goals —
  a built-in check that your content/GTM actually serves the strategy.

## Why this matters for us
- **This is the content brain, personalized.** Same thesis as our content-engine note:
  a durable corpus of your thinking, queried by an agent — here the corpus is a linked
  Obsidian vault and the query layer is Claude Code.
- **Idea validation upstream.** `/ideas` mines real, lived notes for startup angles —
  feed those into the launch-kit's validation step instead of cold-brainstorming.
- **Copyable recipe.** Obsidian (free) + Claude Code + Obsidian CLI plugin + ~10 slash
  commands. The "humans write, agents read" rule is the load-bearing constraint.
- **Markdown-first leverage.** Reinforces the house pattern: write everything in `.md`
  so agents have "oxygen." More writing = more agent capability, compounding.

## References
- Episode: https://www.youtube.com/watch?v=6MBq1paspVU
- Interactive lesson (CC for Everyone): https://ccforeveryone.com/mini-lessons/vin-obsidian-workflows
- Obsidian: https://obsidian.md
- Claude Code: https://www.claude.com/product/claude-code
- Obsidian CLI skill (pablo-mano): https://github.com/pablo-mano/Obsidian-CLI-skill
- Obsidian Claude plugin (sidedwards): https://github.com/sidedwards/obsidian-claude-plugin
- Greg's thread: https://x.com/gregisenberg/status/2026036464287412412

> Note: Built from show-notes / recaps + the CC-for-Everyone interactive lesson + Greg's
> X thread (no full transcript reached). Vault folders, command list, the 0.26s/100-token
> figure, and the "humans write, agents read" rule are triangulated across sources;
> exact command internals are paraphrased.
