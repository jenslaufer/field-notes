---
title: "Marketing Agents Masterclass (GROW your startup)"
podcast: "The Startup Ideas Podcast"
host: "Greg Isenberg"
guest: "Cody Schneider (Companies Graph — companiesgraph.com)"
source: "https://www.youtube.com/watch?v=mD7JpNHLT70"
published: 2026-08-05
captured: 2026-08-12
duration: "44:00"
transcript: "kome.ai API on the YouTube video (8,932 words, hasMore=false — full episode)"
related: "marketing-agents-too-good-cody-schneider.md (his previous appearance, 27.07 — the Facebook-ads agent), marketing-agent-build-prompt.md, 145k-marketing-machine-claude-mcps.md, distribution-without-audience.md"
---

# Marketing Agents Masterclass (GROW your startup)

> Cody Schneider comes back one week later and builds **two** agents end to end. **(1) An
> outbound agent** that watches the LinkedIn posts of 10–20 niche influencers, pulls
> everyone who reacted or commented, waterfall-enriches them to email and phone, and runs
> cold email plus LinkedIn DM with an agent sitting on the reply inbox. The premise: every
> channel is drowning in AI output, so **stop targeting by firmographics and start targeting
> by a hand raise** — an engagement on niche content *is* the intent signal. **(2) An organic
> agent** that turns real human conversation (1:1s, sales calls, Slack, podcast transcripts)
> into scheduled LinkedIn posts across a whole team's accounts, with post analytics feeding
> back into the next writing cycle. Underneath both sits his sharpest claim: **stop paying
> per token for work that is just software.**

**Source note:** written from the full YouTube transcript (kome.ai, `hasMore=false`,
8,932 words), not from show notes. Two speakers — Greg's questions and Cody's answers are
distinguishable throughout; the `>>` markers in the raw transcript are unreliable, so
attribution below follows the content, not the markers.

**ASR garbles, corrected only where the vendor was verified (2026-08-12, HTTP 200 on each
site):** `ampify`/`appy` → **Apify** (apify.com), `codeex` → **Codex**, `git leads` →
**getleads.io**, `Prospio` → **Prospeo** (prospeo.io), `hey reach` → **HeyReach**
(heyreach.io), `Bot Dog` → **Botdog** (botdog.co), `Kalanley` → **Calendly**, `AI slot` →
*AI slop*, `Chad GPT` → *ChatGPT*, `graft` → **Companies Graph**. Quotes below keep the
garble verbatim where it sits inside quotation marks.

**Two things the episode gets wrong or leaves out, both checked:**

- Cody says to reach him at **"graph.com"**. `graph.com` is an unrelated parked investment
  site; his company is **companiesgraph.com** (title tag: *Companies Graph*).
- He says the scheduling tool **Ordinal** — the live product is **tryordinal.com /
  useordinal.com** (*Ordinal | Social Media Management Tool*). `ordinal.so` is listed for
  sale on Spaceship.

---

## The strategic premise: intent beats targeting

> "right now cold email is getting decimated. Reply rates are down. Everything is down.
> Actually every marketing channel is down right now."

His diagnosis: *"the reason is just because like AI slop is flooding the zone and it's
becoming just red ocean everywhere."* The way out is not better copy — it is a **different
selection criterion**. Instead of firmographics, demographics or psychographics, you look for
a **trigger**: an action that only someone interested in the topic would take.

A like or comment on a niche LinkedIn post is exactly that. In his words, engagement means
*"they have a propensity or an interest in this topic and we are going to go and now get in
front of them."* Greg's reaction is the honest summary of why this works: it is data you
otherwise cannot buy.

**The 80/20 that makes it cheap — and he uses the same rule twice:**

> "In reality, it's like there's a handful of outliers within any niche and everybody is
> engaging with those handful of outliers. If you just monitor those outliers, you're
> actually going to get, you know, 80% surface area coverage for that entire industry."

10–20 accounts is enough. He picks them **by hand, not with an agent** — the business
already knows whose content its customers read, and the personal feed surfaces it. The same
rule reappears later as his fix for creative entropy in paid ads: track ~10 human creators,
watch for outlier posts, harvest the new hook format instead of letting the agent loop invent
variations of itself.

## Agent 1 — LinkedIn engagement → cold outbound ("SDR in a box")

**Step 1 — source the accounts.** 10–20 influencers *or business accounts* in the niche,
collected manually into a spreadsheet.

**Step 2 — scrape the engagers (Apify).** One API key, many maintained actors. He names the
provider **apimaestro**, and the three actors he describes are live under that account
(verified 2026-08-12): `linkedin-profile-posts` (pull net-new post URLs per profile daily),
`linkedin-post-reactions`, and the post-comments scraper. The coding agent reads the endpoint
docs and writes the script; a live run in the episode shows *"the duped by public profiles
there's 63 raw"* before pulling contacts.

**Step 3 — ICP gate before you spend on enrichment.** The agent researches the person and
their company (headcount and so on) and an LLM decides fit. Only a pass goes into enrichment.
This is the one place he puts a thinking loop in the pipeline.

**Step 4 — waterfall enrichment.** Cheapest and most accurate first, then down the ladder:
**getleads.io → Apollo → Prospeo / Origami**. His worked example: 50 LinkedIn URLs → ~32
emails at getleads → the remaining 18 to Apollo → ~10 more → the last 8 to a third tool.
*"this is the way that you get to uh you know an 80% fine rate etc."* (his "fine rate" is the
ASR's rendering of *find rate*). **Origami** (origami.chat, founded by
Finn Mallery — the "Finn" he name-checks) aggregates the whole waterfall behind one call, so
you send a LinkedIn profile and it walks the ladder for you. **LeadMagic** is his pick for
mobile numbers specifically.

**Step 5 — validate before sending.** Every address through **MillionVerifier** (good /
catchall / risky / bad). Provider data is not send-ready; sending to invalid addresses is how
you wreck deliverability.

**Step 6 — buy inbox infrastructure, never send from your own domain.** Vendors: **InboxKit**,
**Instantly**'s prebuilt inboxes, or **Hypertide** (his partner). The rule underneath is a
four-way domain separation that most people collapse into one:

| Domain class | Used for |
|---|---|
| Burner domains | cold email only |
| Marketing domain | newsletters, campaigns |
| Transactional domain | product → customer (password resets) |
| Business domain | what the team actually reads and writes from |

**Costs he states:** ~**$100/month** of inbox infrastructure carries ~**10,000** cold emails
a month; **Instantly** starts around **$97/month**; ~**$200** all-in to get going.

**Step 7 — LinkedIn DM in parallel.** **HeyReach** or **Botdog**, both with APIs. He adds
that plain LinkedIn InMail is working well right now too.

**Step 8 — the agent on the reply inbox.** Instantly's API plus **webhooks**: a positive
reply fires a webhook to an agent running on a cheap server, and the agent works a base prompt
(*here is the context, get them to book on this link*). Three capabilities he calls out that
a human SDR does badly:

- answering questions and pushing the thread toward a booking,
- **programmed re-approach months later** — he describes programming in a re-contact of the
  people who went cold on a roughly six-month cycle,
- a **Calendly / Cal.com** connection so the agent can see whether the meeting actually got
  booked, i.e. measure the outcome rather than the send.

Deployment is deliberately dull: Railway or similar, plus a ClickHouse-backed data pipeline
so the agent decides off a live data stream. And explicitly **no agent framework** —
*"a lot of the times you don't need it it's just bloat."*

## What he means by "agent" — and the token argument

> "It's it's code. It's maybe some thinking loop and it's a live data stream, right?"

The definition is a job-to-be-done, not an architecture. Then the part worth arguing with:

> "everybody tried to put God in a box and give it access to a Facebook ads account and we
> realized that is not the right way to do this whatsoever."

The right way is to model what the human actually did — a media buyer researches angles,
makes creative, tests it, prunes losers, promotes winners — and write software that does
those steps. Which leads to his sharpest claim of the episode:

> "You should not be paying anthropic. You should not be paying Chad GPT to do an API call.
> You should be paying them to make the software that uses CPU to do the API call. Why are
> you paying this tax on tokens every time that you're trying to do this marketing activity?"

> "Build the software that does the solution for you, not tokens burning every time that
> you're trying to do the action."

His co-founder Max's version: *"the only agent is a coding agent actually"* — everything else
is software the coding agent wrote. The second argument for it is reliability, not cost: a
deterministic script running the process a competent human ran has fewer ways to blow up an
ad account than a model with credentials.

## Agent 2 — organic content at scale, from real conversation

The question Greg asks on behalf of everyone who does not want to cold-email: what does the
organic version look like?

**1. Source material must come from a human, not from a prompt.** He runs weekly 1:1s with
the people he does this for — *"just like tell me everything that like you've learned in the
last week"* — and records them. It does not have to be an interview: sales calls, internal
comms, Slack, Notion, the codebase, Gong transcripts. Agents query those sources for insight,
and *"a lot of the times you find that it's really inside like it's really good content
that's trapped in there"* — the example he gives is a prospect explaining why they did
**not** buy.

Why not just ask the model to write? Two reasons, and the second one is new:

> "you're going to get flagged for AI slot by LinkedIn's new feature that just released this
> morning."

> "the better way to do this is source this from real human conversation because that's where
> these original ideas are coming from."

**The feature is real — the timing in the episode is off by a few days.** LinkedIn's *"Seems
like AI slop"* flag rolled out around **30./31.07.2026**, not on the morning of the 5th; it
is a member-facing report button whose signal trains LinkedIn's detection models. It landed
alongside a study finding **more than 40 % of long-form LinkedIn content fully AI-generated**,
the highest of any platform measured.

**2. Writing.** A plain API call — he says Claude Sonnet is *"probably good enough on the
writing side"*. No framework.

**3. Scheduling.** **Ordinal** (tryordinal.com), via API or MCP. Multiple LinkedIn accounts
under one roof, and the accounts can engage with each other.

**4. The loop that makes it an agent.** Ordinal pulls per-post LinkedIn analytics back in, per
account. That stream goes to the agent, which sees which topics earned impressions and biases
the next writing cycle — he uses the words **"snowball"** and **"remix"** as the actual
instruction.

**5. The model underneath is what a good social media manager did.** Prospect for ideas → make
content → publish → read the impressions → turn the winners into a recurring calendar.

> "If you look at my Twitter like post as an example or even my LinkedIn, it is the exact same
> thing remixed every 90 days like full stop."

Once the corpus is big enough you know in advance what will land; the only constraint is
cadence. His verdict on the job title: *"I actually think the social media manager job like
full stop."* … *"I think it's already dead"* — replaced by one person running 10, 20, 100
accounts with agents.

## The reframe: don't invent, find what is already being bought

Applied to product **and** to content, and it is the same sentence twice:

> "I don't want to invent a new idea at all."

> "what do people want to buy that currently like they can't buy and can I go and figure out
> this the way to build that thing?"

> "you need to think about content in the same way where like what is the content that the
> market is currently receptive to and by mining that content from other sources that has
> already had a viral moment."

## Earned media — and a number that does not hold up

Cody's argument for organic: *"I get paid to build lead pipeline."* Then the arithmetic —
*"on LinkedIn, it's like $22 per thousand impressions is the average"*, so a 500-follower
account pulling 1,000 impressions on a post has effectively pocketed ~$20 of media.

**Checked, and his number is too low, not too high.** Published 2026 LinkedIn CPM benchmarks
start around **$28** and run to **$60–$100+** in the US depending on targeting depth; narrow
B2B targeting is quoted well above that. So the earned-media case is *stronger* than he
states — but do not repeat "$22" as the benchmark, it is not one.

**Greg's addition for people who will not build a personal brand:** run a **theme page**
instead of a name page. Julian Shapiro did not build @DemandCurve for his growth agency — he
built **@GrowthTactics**, and the audience for growth tactics discovers the agency from
there. Meme/aggregator pages (his example: *Chase passive income*) work the same way. The
page can be anonymous and still drive inbound.

## Legal — what the episode actually says, and what it does not cover

Both of them flag it themselves. Cody: *"It is fully legit to get these emails. um what you
do with those that's where things uh like from a compliance standpoint change."* Buying
contact data from a broker is legal; the sending is the regulated part. He names **CAN-SPAM**
and adds *"the EU has totally different compliance pieces"*, and both explicitly say they are
not lawyers.

**So the sending half of Agent 1 is a US playbook.** Germany's rule is the opposite default:
unsolicited commercial email requires prior consent under **§ 7 UWG**, including B2B, with
only a narrow existing-customer exception — there is no opt-out regime equivalent to
CAN-SPAM. The scraping, enrichment and inbox-agent machinery is unaffected; the *cold send to
German addresses* is the piece that does not transfer, and that is a lawyer's question, not a
build question.

## Honest limits of this episode

- **No numbers from a live account.** No reply rates, no meetings booked, no cost per meeting
  — the only figures are tool prices and an illustrative 50 → 32 → 10 → 8 waterfall.
- **He sells the destination.** Companies Graph both licenses the platform and forward-deploys
  engineers to build exactly these agents. Several tools named (Hypertide, Ordinal, Origami)
  are stated partners.
- **No code is shown.** He says so himself. The episode is the strategy and the tool list; the
  build is left to the harness.
- **The organic loop presupposes winners.** "Remix what worked every 90 days" is a maintenance
  strategy. It says nothing about how the first winner is found from a standing start.

## Relevance for Jens

**Agent 2 is the transferable half, and the money thread it hangs on is the freelance
channel — not a product.** The measurement from 11.08 stands: **54 live freelancermap
postings name Claude Code, Cursor, Copilot or agent mode in the body, 35 of them in ordinary
roles**. That is the market that pays the €2,000 day rate, and it reads LinkedIn. Cody's
requirement — source material from real human work, never from a prompt — is the one input
already in surplus here: `field-notes/`, the papers work, the session logs. The LinkedIn
article written on 12.08 is the first artefact of exactly this pipeline; it was produced by
hand. What is missing is the *cadence and the feedback loop*, not the content.

**Agent 1 does not transfer, and the blocker is legal, not technical.** § 7 UWG kills the cold
send. Worth separating cleanly: the *signal* idea (engagement = hand raise) is free and legal
to observe; the *send* is what is blocked. If a version ever gets built here it is DM/InMail
on a platform where the recipient consented to being contacted — and that needs a lawyer's
sentence first, not a build sprint.

**The token argument is a direct check on this setup's own drift.** His point — pay the model
maker to write the software, not to serve the call — describes what `tools/*.py` plus systemd
timers already are.
The rule to hold: **inference only where a decision is actually made** — a watcher that
greps, compares and exits with a code should never become an LLM call. Every existing watcher
here already obeys this; the temptation runs the other way.

**Two cheap patterns worth stealing regardless of channel:**

1. **Outlier coverage.** 10–20 high-signal sources ≈ 80 % of a niche. The freelance watcher
   currently reads a mailbox and, since 11.08, a search page. The outlier version would watch
   the handful of recruiters who actually post agent-mode roles, instead of re-querying a
   search whose hit count was already measured as unreliable.
2. **Measure the booking, not the send.** His Calendly hook is the same discipline as
   measuring the shipped artefact rather than the intent that produced it — the outbound
   agent is judged on meetings, not on emails delivered.

**What does not apply.** The theme-page idea needs sustained posting into a cold start, and
the "remix every 90 days" model needs winners that do not exist yet — both are Cody's
maintenance phase, not a cold start. And the whole outbound machine assumes a B2B product
with a nameable buyer; the live threads here are a freelance contract and a house sale,
neither of which is served by an SDR in a box.
