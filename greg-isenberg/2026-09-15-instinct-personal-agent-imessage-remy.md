---
title: "Instinct AI: The AI Assistant for normal people"
podcast: "The Startup Ideas Podcast"
host: "Greg Isenberg"
guest: "Remy Gaskell (AI with Remy) — regular on the show"
feed: "https://rss2.flightcast.com/ordbkg8yojpehffas7vr7qpc.xml"
audio: "https://episode.flightcast.com/01M2K2X1JQ8H03GC1CNGN2695V.mp3"
published: 2026-09-15
captured: 2026-09-30
duration: "27:29"
transcript: "publisher VTT (flightcast), 373 segments, 5,174 words — full episode"
related: "2026-08-19-skills-plugins-team-distribution-remy.md, 2026-08-21-grok-bot-agent-team-newsletter-billy-howell.md, 2026-08-17-claude-code-ai-employee-nine-pieces.md"
---

# Instinct AI: The AI Assistant for normal people

> A product review, not a build tutorial. Remy scrolls through his real iMessage history with
> Instinct, an invite-only personal agent, and Greg asks questions. The thesis: the agent is
> not better than OpenClaw or Hermes, it is **simpler** — log in with a phone number, talk in
> iMessage, no MCPs, no markdown files. The four tasks shown (haircut in Copenhagen, restaurant
> table, Bali visa on arrival, Emirates Skywards sign-up) each save minutes, not lives. Remy
> caps the payment risk with a throwaway card that has a daily limit. The weak points: it
> cannot use phone apps or local checkouts, you cannot see what it is doing, and users report
> that it keeps copies of their email after they disconnect Google. Two go-to-market ideas
> sit on top: invite-only scarcity, and a "trusted person network" where one Instinct talks
> to another.

**Source note:** written from the publisher's own transcript (flightcast VTT, counts in the
front matter), not from show notes. Two speakers, no speaker labels; attribution follows
content (Remy shares the screen and did the tasks, Greg asks) and is checked against the
episode description. The valuation figures are **rumour, said as rumour** — nobody on the show
has a source for them. Neither host is affiliated with Instinct, by their own statement.

**ASR garbles.** `Cut Pong` = Cup Pong (a Game Pigeon game) · `club host moment` = Clubhouse
moment · `instinct is buy Apple` = Instinct by Apple · `Cloud, Code` = Claude Code · `open clone
Hermes` = OpenClaw / Hermes · `grads in Indonesia` = Grab (the Indonesian delivery app; the show
notes speak of an Indonesian checkout page) · `CV` = CVV · `a table for $7.45` = a table for 7:45, a
time, not a price. Left standing because I cannot resolve them: `GrokBot` (said three times,
used as the name of a business agent), `Muse agents`, `all stage just needs a card on file`, and
`a place I've ran a desk in Bali`. Do not smooth these into names.

## 1. The product is the absence of setup

Remy's whole case rests on onboarding, not on capability:

> *"There's no concept of MCPs, CLIs, Markdown files. It was just logging with a phone number, bang, you're in."*

> *"it's basically just OpenClaw or Hermes agent, but for regular people."*

His argument for why the power tools cannot fill this slot is structural, and it is the most
reusable idea in the episode:

> *"But every new feature they add to cater to that group moves it further out of reach for a normal person who doesn't really understand agents very well"*

His own counter-example is setting up Hermes for his mother: *"I had to set up a VPS with like
Docker"*, then Composio for her tools, and *"the gateway crashes here and there and then it
needs an update just a pain in the ass and then like I have to manage that too"*.

The value claim is modest and stated as such:

> *"none of them individually are life changing. They just took like 10, 15 minutes off my plate here and there."*

Greg's version, from the buyer's side: *"it's the hours a week of stuff that I hate doing."*

The workspace behind the chat is small: contact methods (iMessage, WhatsApp), connectors
(email, Slack, Granola, Link for payments), a vault for logins, cards and addresses, and — added
later — its own inbox per user (*"every Instinct now has its own email address"*) so bookings do
not clutter the owner's mail. Remy's guess at what a normal user needs: *"I can't really see
many people needing more than an email and maybe some kind of payment method"*.

## 2. Channel feel: it behaves like a human in iMessage

Much of what impresses Remy is not task completion but native channel behaviour — thumbs-up
reactions read as approval, iMessage effects, voice notes, even playing a Game Pigeon game.
Greg names it as the product's hook:

> *"A human being knows when to react to something and when to write. And I think that's the big aha moment that people are having with instinct is it's scary human."*

Two behaviours carry real value rather than charm. Memory across tasks (the monitor box from an
earlier chat turned up on the visa arrival card), and proactivity — it followed up the next
morning with a same-day cutoff. The cost is opacity: *"You can't see what the agent's doing or
what it's working on"*, and it would go silent for minutes. Remy's adjustment was learned trust,
not a feature: *"now I've started to realize that when it just goes silent, like it's not broken,
it's just handling it."*

## 3. The four tasks, and where they hit a wall

- **Haircut, Copenhagen.** It could not message a Bali salon on WhatsApp and handed that back.
  In Copenhagen it researched salons, then *"it ran into the wall of it needed a Danish phone
  number. So then it just emailed them."* A few hours later: confirmed. Remy read the email it
  sent: *"It sounded very, very human."*
- **Restaurant table.** Checked availability, booked, needed a card for the no-show hold, added
  it to the calendar.
- **Bali visa on arrival.** Asked for passport photo and a photo of him, then built the list of
  countries visited from his email and Airbnb receipts: *"And it got everything spot on."* Then
  the PDF. The gate at immigration opened.
- **Emirates Skywards.** Run in parallel; it reused the passport's date of birth for the sign-up.

The limits named on air: WhatsApp messaging, phone-number-bound booking, and the food-ordering
problem in Indonesia, which Remy explicitly does not blame on Instinct: *"I'm going to give them
the benefit of the doubt."*

## 4. Payment risk: cap the blast radius, do not trust the agent

The one operational practice worth copying. When the restaurant needed a card, Remy did not give
it his real one:

> *"I spun up a new digital card, set a daily spending limit on it for about $500."*

> *"if like the agent goes nuts and if the max it spends is $500, it's not the end of the world for me."*

> *"the blast radius would be contained."*

## 5. Privacy: the open risk

Remy's biggest con, based on other users' public reports, not his own test:

> *"she disconnected her bot from Google at 11 a.m. but got a summary of her emails at 12."*

A second user (Peter Yang) reported the same retention, and Remy adds that the terms and
conditions contain *"some really uh concerning things about retaining and keeping control of
some of your private data like emails"*. Greg's position is resignation with open eyes: he would
rather trust Apple than a startup, *"But the reality is Apple is not there yet."*

## 6. Go-to-market: invite-only and agent-to-agent network effects

**Scarcity.** Greg compares it to Clubhouse in 2020, which raised at *"like, I don't know, a $4
billion valuation"* and *"never lived up to"* it; Instinct is *"rumored"* to raise at $10
billion. Remy's read on the invite gate: *"So they say they're rolling it out like that for
compute. But I kind of think that it was a marketing play as well"* — in a feed where every post
is *"introducing X agent, introducing Y agent"*, being locked out made him want in.

**Trusted person network.** One user can allow-list other users' Instincts, so the agents talk to
each other. Greg:

> *"it's the equivalent of network effects, but for the agentic era."*

> *"where are the moats of these companies? I think you're going to start seeing more and more companies do stuff like this."*

Open question Remy raises and nobody answers: whether the network stays closed or lets outside
agents in.

My judgement, not the episode's: the scarcity play needs an audience that is already watching;
the network effect needs a user base. Both are distribution assets the product has to own first.

## Insights for me

- **The segment is "normal people"; I have no route to them.** Instinct wins on consumer
  onboarding plus invite scarcity plus a rumoured large raise. Every lever is capital and
  audience. None of it transfers to a solo founder without either. Watching, not copying.
- **The copyable part is the argument, not the product: power tools drift away from normal
  users.** That is exactly my position with the assistant daemon — VPS, systemd, skills, a
  Telegram bot, and it still needs me to fix it (the Hermes-for-mum story is my daemon for
  anyone who is not me). If Fabrik or the assistant is ever sold, the buyer who pays is the one
  who wants the result without the setup. That argues for a *done-for-you* service on top of
  what I already run, not for a new consumer app.
- **Blast-radius card: adopt it now.** Any agent of mine that may pay (ads top-ups, API credits,
  bookings) should hold a separate virtual card with a daily cap, never the Finom main card. Same
  logic as restricted Stripe keys (`rk_live`), applied to spending. Cheap, reversible, one bank
  setting.
- **"Each task saves 10-15 minutes" is the honest pricing anchor for personal agents** and it is
  low. For B2B, where I sell, the anchor must be labour hours or a compliance deadline
  (XRechnung 2027), not convenience minutes. Confirms: stay B2B.
- **Privacy is a wedge, and it is a German one.** The episode's biggest con — email retained
  after disconnect, concerning T&Cs — is precisely what a DSGVO-careful, self-hosted German
  vendor can promise in writing. Not a product idea on its own; a sentence for the launch-kit and
  e-invoice positioning ("your data stays in Germany, deleted on disconnect").
- **Agent email inboxes per user (`<name>@mail.instinct.com`) are a feature the launch-kit
  tenant model could offer cheaply** (it already sends from tenant `smtp_from`). Only worth it if
  a tenant asks — per the validate-before-build rule.
