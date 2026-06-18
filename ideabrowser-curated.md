---
title: "IdeaBrowser — ideas curated for my profile"
source: "IdeaBrowser 'Idea of the Day' newsletter (Greg Isenberg)"
captured: 2026-06-18
filter: "solo tech founder · Vue 3 + FastAPI · accounting/GoBD know-how · Launch-Kit (lead funnel + email infra) · German market"
---

# IdeaBrowser — curated picks

> Screened ~50 "Idea of the Day" mails (May–June 2026). Kept only what is
> **software-only, solo-buildable, recurring-revenue**, and ideally has a
> **German-market edge**. Ranked by fit. Idea name + IdeaBrowser product name +
> date so the full report is findable (`ideabrowser.com/idea/...`).

## Top picks

### 1. AI-Search rank monitor (GEO/AEO tracker) — strongest fit
*"ChatGPT rank monitor" / Answerspot · 2026-06-17*
Shows local service businesses what ChatGPT/Perplexity/Google-AI answer when a
customer searches their category + city: which competitors get recommended, where
they rank, which signals (reviews, citations, schema markup) are missing.
Week-over-week diffs + concrete fixes.
- **Fit:** Pure software — LLM API calls + scraping + dashboard. Exactly my stack. Recurring SaaS.
- **DE edge:** Wide open. Every KMU knows "SEO", nobody knows "GEO/AEO" yet — early-mover. Funnel via Launch-Kit.
- **Effort:** Low–med. MVP = prompt set + scheduled jobs + diff logic.

### 2. Cabinet to Cloud — document/receipt digitization
*"Cabinet to Cloud" / Boxchive · 2026-05-25*
Phone photos → searchable digital archive. OCR reads text, extracts dates/names,
sorts by document type, files everything.
- **Fit:** Hits my accounting/GoBD knowledge head-on (already run `buchhaltung`, `kontoauszug`).
- **DE edge:** Strong — **GoBD-/revisionssichere Archivierung** is a real selling lever for Mittelstand, clubs, law/tax firms. That's the moat against US tools.
- **Effort:** Med (OCR + classification + storage), but I have much of the pipeline.

### 3. Smart lead form with AI enrichment
*"Smart leads zero research" / Replede · 2026-05-31*
Replaces the contact form with an AI chat widget (one script tag) that captures
intent/budget/timeline and enriches company data in the background.
- **Fit:** Bolts onto Launch-Kit lead-capture infra. B2B, recurring.
- **DE edge:** GDPR-compliant enrichment as a feature, not a risk — compliance angle again.
- **Effort:** Low–med. Widget + enrichment API + webhook.

### 4. No-code Chrome-extension builder
*"DIY Chrome extensions" / Tabsmith · 2026-06-13*
User describes behavior → platform builds the extension, handles Web-Store
submission, manifests, and auto-updates on Chrome API changes.
- **Fit:** I already have a `chrome-publish` skill — Web-Store-API experience is the edge. The real pain (publishing/maintenance) is what I already automate.
- **DE edge:** None — global/English. Platform risk (Chrome).
- **Effort:** Higher — a real platform, not a weekend.

### 5. Markdown → multi-channel publisher
*"Markdown everywhere" / Fmttr · 2026-06-04*
One markdown file → blog, newsletter, social thread, LinkedIn, each correctly
formatted. File stays source of truth.
- **Fit:** I write in markdown (Quarto, podcast-insights). Dogfoodable day one.
- **DE edge:** Neutral — global content tool. Market is crowded.
- **Effort:** Low. Good small self-serve product.

## Worth watching (from sub-lines)
- **Drip email platform for dev tools** (markdown-based · 2026-06-04) — fits Launch-Kit email engine + dev audience.
- **Calendly for AI agents** (2026-05-11) — technically appealing, speculative market; watch.

## Rejected (why)
Health/medical (post-surgery, women's health radar, vocal load, voice lab),
hardware/physical (Lego scanner, closing-shop), US-specific regulation (electric
code, defense cert, CPA/tax-pro library, trust tracker, labor-law wire) —
licensing/hardware hurdles or no DE transfer.

---

**Bet:** #1 (AI-search tracker) as a new product + #2 (GoBD archive) as where my
knowledge builds a real moat.
