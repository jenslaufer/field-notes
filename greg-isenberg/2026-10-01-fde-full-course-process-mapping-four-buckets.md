---
title: "Become a $1M/yr FDE (Full Course)"
podcast: "The Startup Ideas Podcast"
host: "Greg Isenberg"
guest: "Vas / 'Voss' (Varick Agents) — ASR spelling uncertain, see source note; same guest as the 2026-07-20 note"
feed: "https://rss2.flightcast.com/ordbkg8yojpehffas7vr7qpc.xml"
audio: "https://episode.flightcast.com/01M3WAMGK6DNE62PV6VFRDDYR1.mp3"
published: 2026-10-01
captured: 2026-10-07
duration: "53:59"
transcript: "publisher VTT (flightcast), 805 segments, ~9,100 words — full episode"
related: "2026-07-20-fde-million-dollar-ai-job.md, 2026-09-28-ai-roll-ups-one-person-holdco.md, 2026-09-29-openai-devday-dots-sign-in-with-chatgpt.md, business-opportunities.md"
---

# Become a $1M/yr FDE — the method, not the salary

> The guest runs a forward-deployed-engineering shop and walks through how his team puts
> agents into a company. His thesis is in his article's title: AI is not applied like paint,
> it needs process re-engineering. The method: map the real process (interviews, mining the
> systems of record, existing documents), sort every step into four buckets — **delete,
> plain code, agent, human decision** — build the agents **inside** the tools the client
> already uses, and prove the result against a baseline months later. Three anonymised cases
> carry the numbers; the best one is an accounts-payable process cut from $31 to $6 per
> invoice. The $1M in the title is Greg's back-of-envelope (10 % of $10M value delivered),
> not a reported salary. It ends with a five-day starter plan whose first client is free.

**Source note:** written from the publisher's own transcript (flightcast VTT, counts in the
front matter), cross-checked against the show notes' timestamps. Two speakers. The first
~2.5 minutes after the intro are a Google-sponsored segment on Gemini voice models, not part of
the interview. All case numbers are the guest's own and unaudited: he says the examples have
*"the details changed"* (Greg's intro), the workflows are *"anonymized"*, and one of the three
cases is not his client at all (*"This was not actually one of our clients, but someone else in
the industry that I had chatted with."*). The episode doubles as a hiring pitch — *"We want to
hire you."* Greg discloses no stake: *"I'm not involved in this company."*

**Guest name and ASR garbles.** The transcript introduces him as *"Voss from Varick Agents"*;
later he says *"here at Veric"*. The show notes spell him **Vas** from **Varick** (X handle
`vasuman`) — I take the guest identity from the transcript plus the matching company name; the
spelling of the first name is not certain. Other garbles: `FTE` / `four deployed engineers` /
`forward-to-play engineer` / `FD` / `FDs` = FDE · `Cloud Code` = Claude Code · `frontier mob` =
frontier model · `Hewling in the loop` = human in the loop · `AWS FedRock` = AWS Bedrock ·
`Kimmy, Quinn` = Kimi, Qwen · `code of paint` = coat of paint · `owe you a beard` = beer.
Unresolved, left standing: `Tipality` (probably Tipalti), `It's a cold now` (in the month-end
close passage), and **`Jev`** — the same unresolved name as in the DevDay note. `Fable or Astra`
are spoken as frontier models; I do not resolve them.

## 1. The premise — roll-ups need people who rebuild processes

He opens with the private-equity roll-up (the topic of the 2026-09-28 note): buy a firm that
runs on people and old software, then rebuild it.

> *"they'll rebuild that process with agents from the ground up."*

His example, hedged as research from the time he made the slides: Thrive *"have 35 engineers
across 70 firms as of me creating this and doing some research."* The results he cites for
them — *"Tax returns 30% faster, 98% accuracy."* — come without a source. The caveat matters
more than the numbers:

> *"it's a lot more involved than people had maybe initially surmised."*

The valuation logic is his illustration, not a case: buy for a billion, raise margin, *"sell it
for two billion or four billion or eight billion."*

## 2. Day zero — three sources for the real process

> *"our view is process mapping, then re-engineering, then building, deploying, and rolling out."*

1. **Interviews.** One department at a time, top down. The reason:
   *"a lot of information lives in their heads."* Greg names it a *"human API"*; the guest
   adopts the term.
2. **Mining the systems of record.** Live access to the CRM or ERP shows what really happens:
   *"if I have real-time access to a Salesforce, for example, over the course of three to four
   weeks,"* you learn what enters it and how often it gets corrected. Without interviews,
   *"you're missing half the picture."*
3. **Existing documentation** in SharePoint, Drive, Notion, Slack, Teams, Gmail, spreadsheets.

The mix depends on size: a large firm has *"10 years of Salesforce historical data"*; an SMB has
it *"mostly in people's heads"*.

## 3. Case: the $5B public software company — 7 documented steps, 20 real ones

Brought in by the CRO. The process document (he believes from a Deloitte engagement) said:
build quote, submit, deal desk, approve, send, negotiate, sign. Process-mining agents on the
CRM found:

> *"It's actually a 20-step process with seven different loops."*

> *"And that's 61% of requests actually follow that loop."*

Further down, *"legal sends it back 12% of the time"* and *"30% of the time a new quote has to
repeat"*. The payoff he reports is a reaction, not a number: executives tell them
*"I feel like you understand our department better than we do."*

## 4. The four buckets

> *"One is delete the step."* *"This shouldn't exist in a post-AI world."*

- **Plain code** — rules, no judgment: *"Plain code is to be used when it's a simple if X, then Y."*
- **Agent** — judgment backed by history: *"it's where you have enough historical data and
  judgment is required"*. His example: an invoice line "monitors" is office supplies — except
  from a certain vendor.
- **Human decision** — the risky steps: *"it's approval, it's negotiation, it's signing, it's
  submitting payment"*. Payment stays human because of phishing: an agent says *"this looks legit"*, then
  *"We're going to go ahead and pay it."*

In the software case, five of the 20 steps were agentic; the transcript does not give the full
split for that case.

## 5. Build inside the systems of record, not beside them

> *"pitch yourself as building these agents inside their systems of record."*

> *"there's no new surface that you need to go into to interact with this."*

The argument is switching cost — a client spent *"several million dollars, I think $10 million
one time, on migrating from one ERP to the next."* Selling a move to an AI-native CRM: *"you've
lost them."* Even the human-in-the-loop step is *"a message in Slack."* Greg's summary:
*"path of least resistance."*

## 6. PE portfolios — group by software, not by company

26 portfolio companies, each with 10 departments of 10 workflows, would need *"50,000 forward
deployed engineers across three years"* — his arithmetic, deliberately absurd. The fix: group
companies by system of record (*"the five that are on NetSuite as their ERP and four that are in
Dynamics"*) and learn what each product already offers. Side effect: *"You're working with CFOs
with the same buyer over and over again."*

## 7. Selling — the outcome the buyer owns

Value comes in three buckets: *"One is cost savings, but the second is revenue uplift and third
is risk mitigation."* For CFOs the opener beyond cost is month-end close: from roughly 22 days
*"down to four days or eight days"*. For a chief people officer: *"It's not about the cost."*
Greg's addition, which the guest takes up: put the estimated monthly agent cost on the slide,
because *"it's going to be shockingly low"* — and then *"you hold yourself to that standard."*

## 8. Case: accounts payable — the cleanest numbers in the episode

A real AP map, anonymised, uncovered in *"two, three weeks with interviews, process mining"*.
Before and after, as he reads it off the slide:

> *"So you show them from 17 process steps to seven, cycle time from 24 days to six, exceptional loops from six to one."*

> *"We drove that from 18% to 87% for this client."* (straight-through rate of an invoice)

> *"And then finally, we drove the cost of handling a single invoice down from $31 to $6."*

He calls it *"an 80% reduction"*. Note his own qualifier on the biggest lever: *"That's a process
reengineering flow, by the way."* *"That's not even all about agents."* On jobs, his claim (not
measured): *"It's not about doing mass layoffs"*.

## 9. Case: the 60-person accounting firm — the SMB entry point

Not his client. $12M revenue, 400 clients, four systems; books arrive in every form, including a
photo of a notebook. *"They said they had six steps."* *"The reality is they had 14."* Loops: re-asks
on collections *"70% of the time"*, a partner sending work back *"35% of the time"*. He cites
Michael Hammer: speeding up each step may not speed up the process,
*"Because it's the cycle time between steps that makes all the difference."*

His advice for a first project: *"if this is your first FDE project, you should probably start here."*

## 10. Models — frontier is rarely needed

> *"most of what you're looking to achieve does not need to be leveraging a frontier mob."*

They use Opus or Sonnet, GPT with lower thinking, open source. Enterprises
*"have an aversion to Chinese models"*. The rule: *"you should benchmark every single workflow
against every single model"*. Personal agent platforms (Muse, GrokBot, Instinct, Dots) he files
as sidekicks; the money is in background agents, because of the ROI gap he claims:
*"This gives them 10, 20% faster output."* versus *"70, 80% faster output with higher accuracy"*.
Governance for personal agents in the enterprise *"isn't there yet."*

On-prem GPUs for sensitive data: *"Truthfully, we've seen zero of that."* They route through
Azure Foundry, AWS Bedrock and Vertex with no-training and ZDR terms. Greg reads OpenAI's
"private intelligence" announcement from DevDay aloud; nothing is tried.

## 11. The FDE profile and the $1M

Three skills: *"you need to understand how the work actually gets done"*,
*"The second is shipping production code."*, and the AI layer — model choice, evals, harness,
*"Rollbacks on agents hallucinating"* — plus communication with senior leadership. No CS degree
required, per both speakers.

The salary claim is arithmetic, Greg's own: *"you gave $10 million of value to this company."*
*"Can I pay you 10% of that, a million dollars?"* — answered *"Maybe."* The guest adds PE carry deals:
*"you'll get 0.5% of whatever that delta is"*. Neither speaker names a person actually paid $1M.

## 12. The five-day starter plan

- **Monday:** list every app that holds your stuff; map your own life.
- **Tuesday:** *"take 20 things you did last week"*.
- **Wednesday:** write one process step by step — *"how you submit an invoice if you're a
  freelancer for work."*
- **Thursday:** sort every step into the four buckets.
- **Friday:** reach out to SMBs, *"Start with one workflow"*. Pricing:
  *"Do it for free if you have to, if you're getting started."* Then
  *"your next one, you can charge that five figures, that six figures."* — a forecast, not a
  reported result.

The closing playbook, verbatim in parts: *"We baseline before we build."* Timeline: four weeks
audit and POCs, four weeks building agents, then the proof at three and six months —
*"this is what it used to be."* *"This is what it is now."*

## What it means for Jens

- **The method is a sellable freelance package, and the rate question changes with it.** At
  90–110 EUR/h Jens sells hours. The episode sells a measured delta: steps, cycle time,
  cost per invoice, before and after. A fixed-price "process map + one agent" offer for one
  workflow (the guest's four weeks audit, four weeks build) prices against the delta, not the
  hour. My judgement: the AP case's units — cost per invoice, straight-through rate — are the
  format a German Mittelstand CFO reads; the dollar figures themselves are unaudited.
- **Jens has the Monday–Thursday homework already done, on his own books.** The bookkeeping
  workflow (invoice in, booking, account statements, UStVA) is exactly the guest's example
  *"how you submit an invoice if you're a freelancer for work"*, and the assistant is a
  background agent, not a sidekick. Concrete next step: write that one process down with the
  four buckets and a before/after number (minutes per invoice), and use it as the case study in
  the freelancermap profile. That is proof he owns, not a borrowed Fortune-500 slide.
- **The Friday step does not fit his channel as stated.** The guest's entry is cold outbound to
  SMBs and a free first project; Jens has no network, and freelancermap postings arrive already
  scoped as "build X", not "find what to automate". Measure before betting: count freelancermap
  postings that ask for process analysis plus AI (search terms like "Prozessanalyse KI",
  "Automatisierung", "Forward Deployed") over two weeks. If near zero, the FDE framing belongs
  in how he answers a scoped posting (map first, then build), not in a new channel.
- **"Inside the system of record" is the German stack: DATEV, SAP, lexoffice, sevDesk.** The
  guest's rule — no new surface — is also why a Chrome extension that works inside a page the
  user already opens is easier to adopt than a new app. For client work, knowing what DATEV and
  SAP already do (his NetSuite point) is the domain skill that separates Jens from a generic
  LLM engineer.
- **Model choice: his proxy setup is an asset, with one caveat.** Benchmarking each workflow
  against several models is what the LiteLLM proxy already allows. But the local default is
  Qwen, and the guest says enterprises refuse Chinese models — for client work, keep an
  approved non-Chinese route ready and say so in the offer.
- **Not for him now:** PE carry, Fortune-500 engagements, a 35-engineer roll-up team. Doing the
  first project for free is a real cost at his runway; one paid, small, measured workflow is the
  version that fits.
