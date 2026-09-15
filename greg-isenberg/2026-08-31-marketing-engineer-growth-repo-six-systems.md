---
title: "Making $$$ as a Marketing Engineer"
podcast: "The Startup Ideas Podcast"
host: "Greg Isenberg"
guest: "none — solo episode"
feed: "https://rss2.flightcast.com/ordbkg8yojpehffas7vr7qpc.xml"
audio: "https://episode.flightcast.com/01M1CBQNS9R4HG8K2Z9FZ45MAW.mp3"
published: 2026-08-31
captured: 2026-09-15
duration: "35:18"
transcript: "publisher VTT (flightcast), 398 segments, 5,403 words — full episode"
related: "2026-07-20-fde-million-dollar-ai-job.md, 2026-08-17-claude-code-ai-employee-nine-pieces.md, 2026-08-12-ai-agent-workforce-allie-k-miller.md, 2026-07-13-making-money-loop-engineering.md, 2026-08-05-marketing-agents-masterclass-linkedin-outbound-cody-schneider.md"
---

# Making $$$ as a Marketing Engineer

> Solo episode, no guest, and Greg says outright he wants it to be *"the de facto episode about
> this whole era"*. The claim: each technology shift creates a new most-valuable kind of marketer
> — Don Draper, then the digital marketer, then the growth hacker — and the next one is the
> **marketing engineer**, the person who turns market signal into pipeline with agents. The
> concrete payload is two things: **a growth repo** (five folders of markdown that give every
> agent real context instead of a blank chat) and **six systems** built on top of it, of which
> the first, `what-the-market-is-telling-us.md`, is the one he says went viral. Plus four ways
> to get paid for it and a 30-day plan.

**Source note:** written from the publisher's own transcript (flightcast VTT, counts in the front
matter), not from show notes. One speaker throughout, so attribution is unambiguous.

**ASR garbles.** `the R framework` = AARRR, Dave McClure's pirate metrics · `Payne's buyers` =
pains buyers · `band language` = banned language · `Claw` = Claude · `Higgs field` = Higgsfield ·
`Stripe Movement` = Stripe movement · `AI search visibilities` = AI search visibility ·
`loss replacement revenue` = lost replacement revenue · `Did meetings get books?` = booked ·
`whatthemarketistellings.md` = the file he describes as "what is the market telling us" (he says
the long form later, so the short form is safe to resolve).

## 1. The claim, and the argument under it

> *"I think one of the most valuable people in tech over the next 18 to 24 months is going to be something called a marketing engineer."*

He names the aliases himself and shrugs at them — *"some people call it a forward deployed
marketer and some other people are calling it an AI growth operator"*:

> *"The name is probably going to change, but the job won't."*

The argument is historical, not hype. Each era produced its own most-valuable marketer: the
Don Draper era (story, psychology, print and radio), the digital marketer (*"the person who could
acquire customers through channels you could actually measure"*), the growth hacker (*"marketing
moved closer to product because the product itself could become the growth engine"*). His
definition of the new one:

> *"A marketing engineer is the person"* … *"who turns market signal into pipeline using AI agents' data code tastes."*

The old skills do not go away, and he is specific about which one appreciates:

> *"taste matters more now than ever because AI is about to make average marketing just unbelievably cheap."*

And the closing form of the same thought, which is the line worth keeping from the whole episode:

> *"The agents are going to be a commodity at some point."*

> *"Your judgment about what to point them to is the moat."*

The problem he says the role exists to fix is not a lack of data but its scatter:

> *"sales might hear one version of the market, support hears another."*

> *"Then everyone walks into the growth meeting with a slightly different version of reality."*

## 2. Build the growth repo first

Asked what to build first, his answer is a folder, and he insists it works for non-technical
people too — *"go and create a GitHub repo, or honestly just a structured folder"*, call it
**Growth OS**. The problem it solves is stated exactly:

> *"most people use AI in these random chats."*

> *"Next week, the AI is starting from scratch again, when what it really needed was the performance data and the founder's voice and the objection from the sales calls and the language that actually created replies."*

The five folders:

1. **customer truth** — sales call notes, support tickets, churn notes, interviews, live product feedback
2. **content engine** — founder voice guide, winning hooks, scripts, what has performed
3. **outbound engine** — ICP, account research, trigger events, approved angles, and **banned language**, because *"AI outbound gets weird fast"* — *"an overexcited SDR who just discovered personalization"*
4. **creative testing** — ad angles, landing page tests, hooks, offers, results
5. **agents** — the job specs of the AI workers

What it buys you is a different prompt. The beginner version is *"hey, write me 10 LinkedIn
posts"*. His version:

> *"read the customer truth file, read the founder voice file, read the last five posts that drove qualified replies, and draft five new posts around Payne's buyers that were actually mentioned this week."*

> *"the agent is now having real context."*

And the line that separates a tool from an asset:

> *"that repo is the difference between, hey, AI helped me make a thing, and AI is helping the whole company get smarter."*

## 3. Every agent gets a job spec

He says to write it as if hiring a person, and lists the fields:

> *"Here's the data source, here's when you run it, here's what you filter out, here's the output I expect, here's what good looks like, here's what's going to need human approval, here's the metric that matters, and here's what you write the result so the system gets smarter next time."*

The metric clause is the sharp part, and he makes the distinction explicitly:

> *"Messages sent is activity."*

> *"Qualified replies is going to be your signal."*

Training the agent is training a hire — small tasks, watch, correct, **write the correction into
the repo**, then widen scope. Three worked corrections he gives: a fake-sounding first line
becomes a rule; generic AI intros get three good and three bad examples; and

> *"If the customer truth agent makes a claim with no evidence, we've got a problem here."*

> *"You've got to add the rule that every insight needs a quote or a link or a source."*

His example of the jump in ambition, using SEO: the beginner asks for a blog post about a keyword;
the marketing engineer's agent checks Google Search Console, pulls keyword data from Ahrefs or
SEMrush, looks in the CMS for an existing page, ranks opportunities *"by volume and by buyer
intent"*, researches what already ranks, adds the founder's point of view, drafts, writes the meta
title, suggests internal links, and sends it for approval.

> *"the agent has a job, the job has inputs, and the inputs come from the business, and the output goes somewhere useful."*

## 4. The six systems (worked on one example)

The example is a vertical SaaS selling to commercial HVAC contractors — chosen because *"the
buyer has a lot of money. The workflows are messy and the language is specific"*.

1. **Customer truth system** → `what is the market telling us`, a markdown file rebuilt daily or
   weekly from sales calls, support tickets, churn notes, Stripe movement, CRM notes, social.
   Its only job is *"to show what's changed"*, with receipts: *"quote snippets, ticket links,
   event counts"*. The anti-pattern is named: *"customers want better collaboration"* is what a
   vague summary produces. His target shape —
   > *"five sales calls this week mentioned emergency dispatch."* … *"But the calls that actually converted all talked about missed follow-up quotes after the tech left."*

   And the sentence that says what the file is really for:
   > *"I want the thing that's going to make the business harder to lie to."*
2. **Founder content engine** — record the founder talking to customers, pull from podcasts,
   extract the strongest ideas, watch which hooks keep people watching, feed that back. One
   insight becomes five surfaces: a founder post, a short video, a landing-page line (*"every
   completed job should create the next quote"*), a cold-email angle, and a calculator that
   estimates the lost revenue.
3. **Outbound signal engine** — the reframe is timing, not lists.
   > *"bad outbound usually starts with a spreadsheet full of names."* … *"But good outbound starts with timing."*

   Who raised, who is hiring for the exact problem, who posted about the pain. *"You're selling
   painkillers, not vitamins, when timing hurts."* For the HVAC case: contractors hiring
   dispatchers, opening locations, collecting bad reviews.
4. **Creative testing engine** — one offer into 20 hooks and 10 ad angles, results recorded.
   > *"a lot of people say, Facebook ads don't work for me."* … *"Or maybe you're just not testing enough creative with the right angle."*
5. **AI search visibility** — whether your company is even legible to the assistants. He cites
   Sam Altman's billion-users figure for ChatGPT as reported, not measured (*"I just saw Sam
   Altman said they have a billion users"*), and separates it from Google AI Overviews, Gemini,
   Perplexity and Claude.
6. **Growth cockpit** — a weekly memo: what content worked, which campaign created real
   conversations, which objection repeated, what percentage of tests won, what competitors moved,
   what to test next. His sample line is the format worth copying, because it contains a
   contradiction rather than a total:
   > *"this week the lost replacement revenue angle drove fewer clicks than the dispatch angle."* … *"But twice as many demo requests from owners with more than 20 tech."*

## 5. Four ways to get paid, in his order

1. **Be the person inside the company.** *"this work sits directly next to revenue"* — pipeline,
   conversion, wasted spend. *"that's how someone becomes a $500,000 hire."* On his own earlier
   million-dollar claim: *"I actually think that's conservative."* He anchors it to the FDE
   comparison he made in the 20.07. episode.
2. **Consulting.** Embed with a founder-led company for 30/60/90 days, build **one** growth
   system, sell the outcome — *"you charge you know five ten thirty thousand dollars a month
   depending on what you're actually building."*
3. **Productized services.** One wedge, repeated: outbound signal engines for vertical SaaS,
   founder content engines for B2B CEOs, customer truth repos for seed-stage startups.
   > *"the tighter the wedge, the easier it is to sell, deliver, and repeat."*
4. **Software.** *"I think the biggest outcomes are going to come from this, but I do think that
   I would start with services first."* Build the same system for five or ten companies, notice
   the pain that repeats, then productize — *"that's also how you avoid building something that
   nobody wants."*

## 6. The 30-day plan, and the smallest possible start

If he were starting tomorrow he would keep it *"almost painfully simple"*: the Growth OS folder,
five files, paste in 20 real customer notes or call summaries, and give the agent **one** job:

> *"tell me what's changed, show me the receipts, suggest one marketing test that could create pipeline this week, not next week, not a month from now."*

> *"The first goal is just to prove the system can turn this messy market data into one useful action."*

The four weeks: **audit** one real company (website, offer, ICP, founder content, sales calls if
you can get them) and output a market map, including *"What are they buying instead of your
product"* and *"Where does the funnel leak?"* · **build the growth repo** and the first
what-is-the-market-telling-us memo, tools deliberately interchangeable (*"The tools actually
matter less than the workflow here"*) · **build one system** — *"one working system is going to
beat five half-built ones"* · **results**: did replies improve, did meetings get booked, did any
conversion lift, did the founder sound sharper.

The output is a case study, and he dictates its shape with numbers in it:

> *"I audited this company's growth, we built this customer truth repo, I found was one high intent pain that they didn't know about, and I turned it into an outbound signal engine which shipped 75,"* … *"targeted messages, got nine warm replies, booked three calls, and I documented everything what I learned."*

## Insights for me

- **The customer-truth folder is now the THIRD independent source naming the same missing thing
  here, and that changes it from an idea into a finding.** The 17.08. episode measured 8 of 9
  pieces present and named `/customers` as one of two gaps; the 10.09. episode's operator-dashboard
  prompt asked for *"what customers are asking for"*; this one makes it system number one and the
  precondition for the other five. The raw material exists and is unread: 16 FinGrab store
  reviews at 4.3 stars, a Stripe cancellation with reason `unused` after 6 minutes 43 seconds,
  and every AMO review that `amo-watch` now sees. None of it lives in a file an agent reads
  before writing anything.
- **His "receipts" rule is already the house rule here — which is the reason to trust the rest of
  the episode.** *"every insight needs a quote or a link or a source"* is verbatim the standard
  this repo runs on (`verify-quotes`, `check-links`, "a number without proof does not count").
  He arrived at it independently, as a correction he had to add to an agent that fabricated.
  Worth noting where the practice is *stronger* here and where it is weaker: the gates are
  better, the customer input is absent.
- **"Messages sent is activity, qualified replies is your signal" is the sharpest available test
  for the distribution problem.** Measured this repo against it and it fails on its own terms:
  the extension listings have ~500 users and 17 checkout sessions in five months, and the
  landing domains produced 1 click over 28 days. Those are activity counts. The number that
  would be a signal — how many people arrived with intent — is not collected anywhere, because
  none of the six systems above exists here.
- **Consulting item 2 is a live option, not a thought experiment.** Jens is already on
  freelancermap with an agent-built CV and two open contracting candidates. "Build one growth
  system, 30/60/90 days, 5–30K/month" is a materially different offer from "Data Engineer
  Python/LLM/MLOps" and it is the offer the assets here actually support — a growth repo, agents
  with job specs, and the gates that make their output trustworthy is a demo we could build in a
  day from what exists. Worth putting in front of Jens as a positioning question, not a project.
- **The growth repo is the cheapest thing in the episode and it is the same shape as `field-notes`.**
  This repo is already the pattern applied to podcasts: structured folders, distilled files, quote
  rules, an index. Pointing the identical mechanism at customers rather than at podcasts is a
  copy, not an invention.
- **Do not take: the 18–24 month window, the $500K and $1M figures, and the billion ChatGPT
  users.** All four are Greg's forecasts or second-hand citations, none measured in the episode.
  They are the reason the episode exists, not evidence from it.
