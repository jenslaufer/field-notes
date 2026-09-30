---
title: "OpenAI DevDay: Dots, Agents & $100B Opportunities"
podcast: "The Startup Ideas Podcast"
host: "Greg Isenberg"
guest: "none — solo episode, Greg reacting to the OpenAI DevDay 2026 keynote"
feed: "https://rss2.flightcast.com/ordbkg8yojpehffas7vr7qpc.xml"
audio: "https://episode.flightcast.com/01M3QG88Q21NY7B8B1N45QW2T2.mp3"
published: 2026-09-29
captured: 2026-09-30
duration: "18:56"
transcript: "publisher VTT (flightcast), 212 segments, 2,800 words — full episode"
related: "2026-09-10-gpt6-astra-vibe-manufacturing-ras-mic.md, 2026-09-14-software-factory-isolate-build-prove-ship-ras-mic.md, business-opportunities.md"
---

# OpenAI DevDay: Dots, Agents & big-number opportunities

> A same-day reaction episode, one speaker, no guest. Greg picks four of the DevDay launches:
> **Dots** (a personal agent platform that selects third-party plugins for a user's job),
> the **Decisions API** (classification against fixed answers), the **Agents API with computer
> use** (a managed harness), and — the one he calls low-key — **Sign in with ChatGPT**, where
> the user's own ChatGPT plan pays for inference. His thesis: that last one makes a free core
> app viable for tiny niches, because the builder no longer pays for tokens. He closes with a
> trigger → decision → action → feedback frame and two ideas: real-world work APIs (human
> specialists behind a plugin) and an analytics layer that measures whether an agent picks
> your plugin. It is a keynote reading, not a case: no builder, no revenue, no measurement.

**Source note:** written from the publisher's own transcript (flightcast VTT, counts in the front
matter), cross-checked against the show notes' timestamps. One speaker throughout. Everything
about the launches is Greg paraphrasing or reading OpenAI's DevDay page aloud — nothing here is
from OpenAI directly, and nothing was tried on air (Decisions API: *"it's in limited preview
today. Excited to play around with it."*). The dollar figure in the episode title is never
spoken in the episode; the spoken claim is "billions" of transaction volume, which he calls
conservative himself.

**ASR garbles.** `chat cheap t` / `chat GPT` = ChatGPT · `greg eisenberg` = Greg Isenberg ·
`Conex harness` = Codex harness (the sentence before names Codex) · `permanent expediters` =
permit expediters (the permit example runs through the episode) · `custom brokers` = customs
brokers. Unresolved, left standing: `in the AJAI` (probably "AI age"), the competitor he calls
**`Jev`** and says he covered *"last week"*, **`Luna's intelligence`** (read off the Decisions
API page, model name unknown), `cloud slides and docs`, and `GPT 6.1 Sol` (same `Sol` garble as
the two previous Ras Mic notes). Do not smooth these into names.

## 1. Dots — the plugin gets hired, not the brand

The first launch and the frame for the rest. A user states a job; ChatGPT picks a plugin to do it.

> *"they now have this front door where you're going to have access to the 1.2 billion weekly active users."*

> *"And ChatGPT is going to understand that job. And your plugin that you have made, which is essentially like a mini app, is going to get selected for the work."*

> *"Because if you can do that, you can be hired before the customer knows your name."*

He is candid that plugins were tried before; he paraphrases Altman rather than quoting him:
*"he did say something to the degree, I'm paraphrasing, that they had some mixed reviews on
plugins. They're now doubling down on plugins."* The size claim is his own extrapolation, and
he labels it so: *"let's be conservative and say that there are billions of dollars that will be
in transaction volume."*

My judgement, not the episode's: "your plugin gets selected" is a distribution channel whose
ranking rule nobody outside OpenAI knows yet. It is the Chrome Web Store problem again — an
intermediary decides who is shown — with a bigger audience and less transparency.

## 2. Decisions API and Agents API — two building blocks, not businesses

Both are read off the DevDay page. The Decisions API:

> *"Decisions API enables real-time decision-making by focusing Luna's intelligence on a specific set of user-defined questions with finite predefined answers."*

> *"they get back answers they can use to classify content, route requests, or choose an agent's next question."*

His use case is conversion optimisation — *"the most highly converted converting app store
screenshots or direct response websites"* — and whether it beats the incumbent is open:
*"TBD, we will find out really soon"*.

The Agents API is the managed version of what builders assemble by hand today:

> *"It also brings Codex's multi-agent capabilities, tool search, tool calling, and context compaction into your application."*

> *"OpenAI runs the underlying infrastructure so your team can focus on building applications."*

His advice attaches the value to what the platform cannot supply: *"if you have, you know,
great data, if you have a great brand, if you understand a vertical better than other people"*.

## 3. Sign in with ChatGPT — the user pays for the tokens

This is the part he spends the most time on, and the only launch where he names a changed
economic fact rather than a new capability.

> *"basically, you can now sign in with your ChatGPT login and use your token allowance and... on those websites."*

> *"In the past, you couldn't create the core app for free because you were paying for inference, right?"*

> *"do I really want to spend $20 or $30 a month for another AI app? It's like, no. You can just sign in with ChatGPT and start using the plan you already have."*

The model he derives: free core, paid extras — *"you can charge for enterprise stuff, you can
charge for sharing with your team, you can charge for more data."* And the category it opens:

> *"These tiny AI categories that weren't viable, weren't economically viable today, as of today, are."*

> *"So you want to build these products that are too niche to become major open AI features"*

His examples are all one-workflow tools: *"an agent that cleans architectural CAD files"*,
*"a Shopify catalog cleanup desktop app"*, *"a contract review tool for one type of franchise
agreement."* The Facebook-login analogy (Yelp) is his; he offers no evidence that ChatGPT login
will carry a social graph the way Facebook's did, and the transcript does not say what share of
a user's allowance a third-party app may spend.

## 4. The frame — trigger, decision, action, feedback

> *"To me, it's this four-step framework, trigger, decision, action, and feedback."*

> *"there's going to be a trigger, an invoice becomes due, the inventory runs low, or it's tax time."*

> *"And then there's feedback. Was it approved? Was it rejected?"*

The conclusion is garbled in the delivery and should not be quoted as a clean rule: he says
*"the strongest businesses are going to own two of three"* and then lists three — *"they're
going to own trigger, they're going to own action and feedback."* Read it as: the platform owns
the decision; the business should own the event that starts the job, the act that does it, and
the result that comes back. The show notes put it the same way (trigger, action, feedback).

The moat list that goes with it, verbatim: *"a specialist workflow, access to outside systems,
collaboration and auditability, a network of humans or suppliers, a measurable business
result."* — summed up as *"sell workflows instead of tokens."*

## 5. Two ideas he hopes someone takes

**Real-world work APIs.** A plugin that routes a job to a vetted human who finishes it:

> *"How can you create real world work APIs in specific niches that you can connect dots or connect chat GPT to real world workers who can finish the last mile of the transaction?"*

Examples are permit expediters and customs brokers, paid by *"a transaction fee"*.

**Analytics for agent discovery.** The plugin-era version of SEO tooling. The feature list is
the most specific passage in the episode:

> *"That generates realistic indirect prompts which measures which plugin gets selected, which tracks activation share by customer intent, which finds metadata and tool definition problems, which measures whether invocation turns into completion, test every plugin update"*

His precedent is the AEO/GEO wave, and his figure for it is hedged on air: *"I think Profound
raised at a $2 billion valuation or billion-dollar valuation."* Treat the valuation as
unverified. The question he closes on: *"who's going to be the profound for this personal
agent era"*.

## Insights for me

- **"Sign in with ChatGPT" removes the one cost that keeps AI features out of the free tier —
  but only for apps that live on the web and can take a ChatGPT login.** The extensions
  (FinGrab 512 users, 3 paid subs; xG Calculator 51 users, no paywall) have no inference cost
  today, so the episode's core argument does not change their economics. Where it would bite:
  any AI feature I have kept behind a paywall *because* of token cost. That list is short, and I
  should check whether it is empty before treating this launch as relevant at all.
- **The episode says "distribution is the plugin getting picked" — that is my bottleneck
  renamed, not solved.** Being "hired before the customer knows your name" is exactly what a
  builder without an audience needs, and exactly what the Chrome Web Store already promised:
  rank follows the listing text, not the product. The first measurable question is the one in
  idea 2 — does an agent pick my tool for a stated job — and nobody can measure it yet from the
  outside. Wait for the ranking rule to become observable before building for Dots.
- **Trigger/action/feedback maps cleanly onto the e-invoice API — the one product where I
  could own all three.** Trigger: *"an invoice becomes due"* is his own first example. Action:
  generate and validate XRechnung. Feedback: accepted or rejected by the recipient's portal —
  *"Was it approved? Was it rejected?"* That is a concrete test for a plugin/Agents-API surface
  that fits the 2027 mandate; my judgement, the episode does not mention e-invoicing.
- **Fabrik vs. the Agents API.** OpenAI now sells multi-agent, tool calling and context
  compaction as a managed harness. That commoditises the harness half of Fabrik; what stays
  sellable is the workflow (worktree isolation, proof in the PR, review loop — the software-factory note).
  Pitch Fabrik as the workflow, never as the harness.
- **Not for me now:** the real-world work API needs a vetted supplier network in a niche — a
  two-sided marketplace, and the supply side is a network I do not have. The analytics layer is
  a venture-scale bet against funded incumbents. Neither is a small bet toward 5k EUR/month.
