# Greg Isenberg — The Startup Ideas Podcast

Distilled field notes: practical, hands-on, marketing-heavy takeaways. One file
per episode. No transcripts.

**Start here:**
- [`marketing-playbook.md`](marketing-playbook.md) — every marketing/growth tip across all notes, deduped into 10 themes.
- [`business-opportunities.md`](business-opportunities.md) — every concrete business idea, grouped by category with monetization + audience-light tags.
- [`glossar.md`](glossar.md) — alle Abkürzungen (CAC, SEO, MCP, EBITDA …) auf Deutsch erklärt.

## Episodes

### Marketing & growth
- [Everyone is saying SOFTWARE IS DEAD (LIVE Q&A)](software-is-dead-unfair-advantage.md) — the rebuttal to the indie-hacker gloom (Bannerbear + levels.io on halved Google traffic): **code is no longer the unfair advantage** — distribution, niche depth, proprietary data, network effects and maintenance are; who actually loses is the $20/mo tool sold to other indie hackers; agent-first ≠ AI bolted on ("Instagram was mobile-first Facebook"); ACP (audience→community→product), earn attention vs craft affinity, anti-positioning copy, downplay "AI-powered" because public sentiment is negative; first $25K = niche service, one-time + monthly
- [Marketing Agents Are Too Good Now](marketing-agents-too-good-cody-schneider.md) — Cody Schneider builds a Facebook-ads marketing agent end to end (Perplexity→Reddit pain points → Nano Banana/HeyGen creative → write-only Marketing API → Airbyte→ClickHouse warehouse → kill-losers/promote-winners loop → entropy solver); + the "AI for WordPress" idea. Companion: [`marketing-agent-build-prompt.md`](marketing-agent-build-prompt.md) (copy-paste Claude Code build prompt)
- [Marketing Agents Masterclass (GROW your startup)](marketing-agents-masterclass-linkedin-outbound-cody-schneider.md) — Cody Schneider one week later, **two** agents end to end: **(1) outbound** — watch 10–20 niche LinkedIn accounts, scrape reactors/commenters (Apify `apimaestro`), ICP-gate, waterfall-enrich (getleads → Apollo → Prospeo/Origami), MillionVerifier, burner-domain inboxes (~$200 to start, ~$100/mo per 10K sends), Instantly + HeyReach/Botdog, agent on the reply inbox via webhooks → Cal.com; **(2) organic** — real human conversation as source material → LLM writes → Ordinal schedules across team accounts → post analytics loop back. Core claim: **stop paying per token for work that is just software.** Checked: LinkedIn's "seems like AI slop" flag is real (30./31.07.2026, not "this morning"), his $22 LinkedIn CPM is *below* every 2026 benchmark, and § 7 UWG blocks the cold-send half in Germany
- [Stop Vibe Coding. Start Getting Customers.](stop-vibe-coding-start-getting-customers.md) — 7 distribution weapons
- [$145K marketing machine (Claude + MCPs)](145k-marketing-machine-claude-mcps.md) — Cody Schneider, GTM engineering
- [$450K marketing campaign — Promoter Blueprint](450k-marketing-campaign-promoter-blueprint.md) — Jonathan Courtney
- [AI Marketing Masterclass](ai-marketing-masterclass-boring-marketer.md) — The Boring Marketer
- [OpenClaw, one job: go viral (Larry Loop)](openclaw-go-viral-larry-loop.md)
- [AI tools for viral IG Reels](viral-ig-reels-ai-tools.md)
- [Making $$$ with iOS apps](making-money-with-ios-apps.md) — gotcha feature + paid-ads recipe

### Agent businesses & monetization
- [My top secrets to running an AI Agent Workforce](ai-agent-workforce-allie-k-miller.md) — Allie K. Miller (ex-AWS/IBM) on **34 agents**: 1 chief of staff + 6 directors, all named after *Friends* characters. **"Managing agents" is the wrong word** — you set the infrastructure and wait for escalations. The best prompt she has is three words (*do smart things*) on top of full context access + quarterly **goals** review; scope widened, risk tier unchanged. Don't staff 2015 job titles: the roles worth hiring at zero marginal cost are **Phoebe** (asks "how do we 10× this?") and **Toby** (watches the workforce, logs friction and missing access). Ramp: one agent → one proactive agent → two agents → workforce; sub-agents on Haiku/Sonnet, *"not everything needs opus"*. Two opportunities: **AI as a watchdog with insight-to-action** (*"dashboards are dumb"*) and **build the factory, not the thing**. SaaS apocalypse is slower than predicted — bandwidth, liability (*"who's liable now?"*), lab-access lag, maintenance
- [FDE: The $1M/Year AI Job Explained](fde-million-dollar-ai-job.md) — Vas (Varick Agents): intelligence is commoditized, the edge is *deployment*; the Forward Deployed Engineer ($150K–$1M/yr) bridges messy business reality ↔ the model via the **audit → evals → deployment** loop; build-on-existing not migrate; free-audit-then-paid-on-value; 30-day plan to "do the job before you have the title" — the *delivery* half to Ganim's *acquisition* half
- [The $1,000/hour Solo AI business](1000-per-hour-solo-ai-business.md) — Corey Ganim: $999 AI Tools Assessment (45-min interview → prescribe 3–7 off-the-shelf tools, refund guarantee) as tripwire → 50% buy implementation → AI Concierge retainer ($1,200–2,000/mo for two calls ≈ $1,000/h, cap 6 clients); 7 zero-capital client channels
- [Making $$$ with Loop Engineering](making-money-loop-engineering.md) — Elie Steinbock: run the business on monthly agent loops (task + objective metric + stop condition): SEO loop on GSC + DataForSEO, ads loop, product-feedback loop, MVL ("10 likes, not 100k followers"), ~$5/run
- [AI Agents are the new SaaS](ai-agents-are-the-new-saas.md) — the full "product is the job" playbook: paycheck-workflow filter, shadow the human, minimum useful agent, the wrapper = trust, sell the pilot like labor → productize, 30-day plan
- [The $1M+ solo AI agent business](1m-solo-ai-agent-business.md)
- [Start an AI agent business today](start-ai-agent-business-today.md)
- [Making $$$ with OpenClaw](making-money-with-openclaw.md)
- [AI agents run my business and life](ai-agents-run-my-business-wilkinson.md) — Andrew Wilkinson

### Ideas & trends
- [Cloudflare will make 1000+ AI millionaires](cloudflare-agent-internet-1000-millionaires.md) — **the agent web monetizes resources, not attention**: Cloudflare's Monetization Gateway (x402 / HTTP 402, waitlist since 01.07.2026) turns any page, dataset, API or MCP tool into a metered resource; three ideas — **niche data refinery** (one niche, one city, 100 businesses, sell to the agencies *already* serving them, $300–800/mo), **agent readiness** (20–50 buyer-intent prompts → show the screenshot → sell the agent-readable source of truth → monthly measurement loop, $3–10K), **expert archive → one job-specific agent tool**. Filter for any data business: *valuable · repeated · changing · fragmented · annoying*
- ["Learn AI" is bad advice — learn these 6 skills instead](learn-ai-bad-advice-six-skills.md) — agent operator, distribution, robotics, curation, builder-distributor, IRL community (+ one rep each)
- [9 startup opportunities in the AI boom](9-startup-opportunities-in-the-ai-boom.md)
- [23 AI trends](23-ai-trends.md)
- [Firecrawl — and how to make $$](firecrawl-make-money.md)
- [Karpathy's autoresearch — 10 business ideas](karpathy-autoresearch-business-ideas.md)

### Build, validate, design
- [SaaS is minting millionaires again](saas-minting-millionaires.md)
- [Claude Code built me a $273/day directory](online-directory-273-day.md)
- [A/B-test startups in seconds](ab-test-startups-claude-code.md)
- [AI design workflow that doesn't ship slop](ai-design-workflow-no-slop-meng-to.md) — Meng To
- [Design with Weavy AI — no slop](design-with-weavy-no-slop.md)
- [Claude Design blew my mind](claude-design-blew-my-mind.md) — wireframes/decks 9/10, video 5/10; prompts + questionnaire
- [The "Last 30 Days" Claude Code skill](last-30-days-skill.md)
- [Obsidian + Claude Code as a personal OS](obsidian-claude-code-personal-os.md)

### Using the models well
- [Graph Engineering Clearly Explained](graph-engineering-clearly-explained.md) — **(from the audio transcript, 03.08.)** prompt eng. = better question, context eng. = better information, **graph eng. = designing the work around the AI**: jobs + arrows + shared state, so it stops living in one giant chat. Knowledge graph (how information connects) vs agent graph (how work moves) — this is about agent graphs. The diamond: planner → parallel researchers → **skeptic** → merge → human gate, worked end-to-end on "should I launch AI bookkeeping for Shopify merchants". Three levels: manual lanes on a whiteboard → a repo where each step writes `plan.md`/`review.md`/`recommendation.md` → LangGraph/AutoGen GraphFlow/n8n. Anti-pattern: more agents = more noise; aim for the **smallest** graph that raises quality, delete the fake waiting, put the human gate where mistakes are expensive. Sleeper point (absent from the show notes): graphs **produce memory**, and that context is the moat
- [Jack Dorsey's Buzz: clearly explained](buzz-agentic-slack-jack-dorsey.md) — Vinny (Wasp): Block's open-source, Nostr-based "Slack where agents are members". The two real features: **swappable harness under any agent** (Claude Code/Codex/Goose — context travels with you) and **shared compute** (one local model, whole team). Plus parallel-worktree Git on your own relay, audio huddles, public channels so a user's bug goes straight to an agent. Steal regardless of Buzz: pin agents to model tiers, build a router agent, and the closed loop app→public API→daily post into the channel→ask questions with the numbers already in context. Honest status: alpha-ish, workflows don't land, slower than Claude Code direct
- [You are using Claude Fable 5 wrong](you-are-using-fable-5-wrong.md) — prompt patterns
- [Claude Fable 5 is banned — what to do](claude-fable-5-is-banned-what-to-do.md)
