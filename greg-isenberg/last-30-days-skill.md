---
title: "The 'Last 30 Days' Claude Code Skill"
podcast: "The Startup Ideas Podcast"
host: "Greg Isenberg"
guest: "Matt Van Horn (@mvanhorn)"
source: "https://www.youtube.com/watch?v=71ES9jzqa0Q"
captured: 2026-06-18
---

# The 'Last 30 Days' Claude Code Skill

> Matt Van Horn "fixes" Claude Code in 30 seconds with `/last30days` — a skill
> that scans Reddit, X, YouTube, HN, Polymarket, GitHub and the web from the past
> month, then synthesizes a brief ranked by **real engagement**, not editorial
> curation. His framing: "Google aggregates editors. /last30days searches people."
> It stops you building on stale model knowledge. Live, Greg and Matt go trending
> rap songs → cold-email frameworks → researching Clawdbot → building a competitor.
> ~44k GitHub stars, MIT, 1,000+ tests passing.

## What it does
- **Searches people, not editors.** Surfaces what communities actually discuss
  *right now*, ranked by upvotes/views/odds — not what ranks on Google.
- **Injects fresh ground truth into prompts** so Claude Code stops reasoning off
  its training cutoff.
- **Output**: a grounded narrative with inline citations + a "Best Takes" section
  (the sharpest/funniest quotes), each claim tied to a source with metadata.

## Data sources (free + keyed)
- **Free, zero-setup**: Reddit (upvotes), Hacker News (votes), Polymarket (odds),
  GitHub (stars/PR velocity), YouTube transcripts (via `yt-dlp`).
- **Keyed/optional**: X/Twitter (browser auth or API), TikTok / Instagram /
  Threads / Pinterest (ScrapeCreators), Bluesky (app password), Perplexity Sonar
  web search (OpenRouter), Brave Search (web).
- **Merge & score**: same story across platforms clusters into one evidence
  cluster; an AI judge ranks by relevance, freshness, virality. A 1,500-upvote
  Reddit thread outweighs an unread blog post.

## Install (pick your harness)
- **Claude Code (recommended)**: `/plugin marketplace add mvanhorn/last30days-skill`
  (auto-updates; `claude plugin update last30days@last30days-skill` to refresh).
- **50+ harnesses** (Codex, Cursor, Copilot, Gemini CLI, Windsurf, Cline):
  `npx skills add mvanhorn/last30days-skill -g`.
- **Claude.ai web**: upload `last30days.skill` from the latest release; enable code execution.
- **OpenClaw**: `clawhub install last30days-official`.
- **Zero config** for the free sources; first run launches a setup wizard for keyed ones.

## How a run works
1. **Topic resolution** — resolves entities first (person → X handle, product →
   GitHub repo, topic → subreddits/hashtags/channels).
2. **Parallel multi-source queries** with query expansion across all platforms.
3. **Deep pull** — full YouTube transcripts, Reddit comment threads w/ votes,
   Polymarket odds.
4. **Cross-source clustering** — dedupe the same story across platforms.
5. **Synthesis** — AI judge ranks; per-author cap (max 3 items/voice) prevents domination.
6. **Grounded output** — every claim cited with upvotes/views/odds.

## Example commands
- Basic: `/last30days OpenClaw` · `/last30days Peter Steinberger` · `/last30days Iran vs USA`
- Flags: `--hiring-signals`, `--competitors` (auto-discovers peers + compares),
  `--store` (SQLite for trend monitoring), `--emit=html` (self-contained dark-mode brief).
- Comparison: `/last30days "CLI vs MCP"` · `/last30days OpenClaw vs Hermes vs Paperclip`

## Marketing tips
- **Research what's working *this month*, then copy it.** In the demo they pulled
  the highest-performing **cold-email frameworks** live — current patterns, not 2023 advice.
- **Find the trend, ride it fast.** Trending rap-song structures → feed to Suno;
  the same move applies to meme formats and content angles with minimal revision.
- **Build a grounded competitor in one session.** They researched Clawdbot's real
  reception, then planned + built a competitor live with almost no hand-written code.
- **Engagement = demand signal.** A 1,500-upvote thread is market validation;
  rank ideas by what people actually react to, not by editorial coverage.
- **`--emit=html` briefs** are share-ready, offline assets — clean artifacts for
  pitches, newsletters, or client deliverables.

## Why this matters for us
- **Idea validation, live.** `/last30days [niche] --store` turns the launch-kit's
  validation step into a recurring, engagement-ranked demand signal.
- **Anti-stale prompting.** Grounding Claude Code in last-30-days data is a cheap
  fix for AI defaults — fresher copy, fresher positioning, less slop.
- **Distribution-first.** It reads the channels (Reddit/X/HN) where our audience
  already talks, so we build to demand instead of guessing.
- **Drop-in & free.** Reddit/HN/GitHub/Polymarket need zero keys; MIT-licensed,
  installs in one command.

## References
- Episode: https://www.youtube.com/watch?v=71ES9jzqa0Q
- Skill (GitHub, MIT): https://github.com/mvanhorn/last30days-skill
- Matt Van Horn on X: https://x.com/mvanhorn
- Walkthrough (3rd party): https://www.howdoiuseai.com/blog/2026-02-06-how-to-supercharge-claude-code-with-the-last-30-da

> Note: built from the official GitHub README (rich detail) + episode show notes
> and recaps; no full transcript. Commands and data sources are accurate from the
> repo; some live-demo specifics are paraphrased.
