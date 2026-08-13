---
title: "Taleb on the Financial Crisis — the same argument, with the tail behind it"
concept: "Nassim Nicholas Taleb with Russ Roberts on EconTalk, recorded mid-crisis: why small probabilities cannot be estimated, model fragility as the real defect, nine bonuses and the free option, Value at Risk and the number that answers the wrong question, large deviations having no predecessors, returnless risk, why the Internet made tails fatter, leverage and lumping, break-it-early, decisions without probabilities, tinkering over knowledge, and religion as practice rather than belief"
sources: "EconTalk (Russ Roberts), 'Nassim Nicholas Taleb on the Financial Crisis', published 23 March 2009, recorded 15 March 2009 — timestamped Podcast Episode Highlights (NOT a verbatim transcript) at https://www.econtalk.org/taleb-on-the-financial-crisis/"
captured: 2026-08-13
type: podcast distillation
---

# Taleb on the Financial Crisis

> **"I told you so."**
> Recorded 15 March 2009, in the worst week of the crisis, and framed by Roberts in the
> first line as a conversation with one of the few people entitled to say exactly that.
> The interest is not the vindication. It is what a man does with an argument *after* it
> has paid off — which of the old claims he keeps, which he drops, and which he only now
> finds words for. Two years earlier the same guest spent an hour on distributions and
> sampling. Here the word carrying the argument is **fragile**, the unit of analysis has
> moved from the estimate to the exposure, and the recommendation is no longer to get
> better data. It is to build something that does not need the data.

Companion notes in this directory: the Black Swans episode two years earlier, before any of
it happened, and the antifragility episode three years later, when the missing noun gets
coined. Both linked under **Sources**, with the cross-source synthesis
[`../complexity/antifragility.md`](../complexity/antifragility.md).

## A caveat on quotes that matters here

**This page carries no transcript.** Under an `AUDIO TRANSCRIPT` heading, EconTalk published
a condensed, timestamped set of **Podcast Episode Highlights** — telegraphic notes taken by
a listener, no speaker labels, almost no complete sentences of speech. So the rule for this
note, stated rather than implied:

- **Quotation marks only around strings verbatim in the source file.**
- **Attribution to a speaker only where the source itself uses quotation marks.** In this
  entire episode there are three: Roberts' framing that Taleb is one of the few people who
  can say "I told you so."; Greenspan's "We never saw these events before."; and the Arabic
  idiom where the way to say "I don't know" is "God knows." Those are the only places I
  write that anybody *said* anything.
- Everywhere else: *the notes record*, *the summary reads*. The wording belongs to the
  note-taker; the argument is presumably Taleb's, but the seam between his voice and
  Roberts' is invisible here and I do not guess at it.

**The compression leaves visible seams**, and they show how much is being lost. The opening
segment announces "Three things:" as the explanation of banker behaviour, then prints a
numbered 1 and a numbered 2 and no 3. The worst historical daily deviation before the crash
of 1987 is given as close to -10% in one segment and as -11% in the next; one of the two is
the note-taker's. And Cicero's glass of water arrives as "Would you drink water from a glass
left on the table left the table by a stranger?" — a duplicated clause, and a good reminder
that these are notes typed at speed. Two further lines read like dropped negations; I flag
them where they appear rather than smoothing them. The timestamps are real and are the
actual structure of the recording; the sections below follow them.

## 1. The claim, and why small probabilities cannot be estimated (0:36)

Roberts names the position under review — Taleb as a critic of mastering risk and
uncertainty with mathematical tools — and asks the honest version: where was he right and
where wrong? The answer narrows the target immediately, and the narrowing is the most
important line in the episode for anyone tempted to read this as anti-quantitative: *not so
much a critique of mathematics as of methods to estimate rare events.* The argument is not
that models are bad. It is that one specific input — the probability of something that has
hardly ever happened — cannot be obtained, and everything downstream inherits the defect.

The reasoning runs in four moves, tighter here than two years earlier because it no longer
goes through sampling theory:

1. **The definitional trap.** We do not know much about rare events because, by definition,
   they are rare: "If an event happens once in 10,000 years and the person is less than
   10,000 years old, you know he is getting the probability from outside his experience."
2. **So the number comes from theory, not data.** The smaller the probability, the more you
   rely on some a priori specification or on a model — a representation of the world rather
   than an observation of it.
3. **And the dependence runs the wrong way**: "The smaller the probability the more fragile
   and in some areas, the larger the impact." Rarity and consequence are positively
   correlated exactly where the estimate is weakest.
4. **So what matters is the product.** "A ten year flood has a higher probability than a
   100 year flood, but the 100 year flood will be massively more consequential." — "You care
   about the probability times the size of the impact, the expectation of these events."

**Note what changed since the Black Swans episode.** There the demand was: give me the data
so I can figure out the general distribution. Here the position is that for the region that
matters, no amount of data produces the number, because it was never in the data. The
critique has moved from *people sample badly* to *the quantity is not obtainable*.

The consequence for the crisis is given as two separate model failures, and the second did
the damage: they relied on theories to produce small probabilities, **and** they were
themselves very fragile and lent to the build-up of humongous positions. A fragile model is
not merely wrong — it licenses size. Companies looking at their risk reports "were sitting
on a lot of dynamite and ended up exploding, maybe a little later than Taleb thought." Via
the Joe Nocera article on value at risk, the two error kinds are fixed: the probabilities
were not right, and — more importantly — the size and magnitude of the consequences were
not. **The second error is the one nobody was measuring.**

## 2. Nine bonuses and a free option (0:36)

Roberts asks the question that decides whether this is a story about error or about
incentives: were the heads of Bear Stearns and Lehman Brothers not aware how much they were
gambling, or did they not care? A combination — and the mechanism given for the second half
is the sharpest thing in the first ten minutes:

> "if you blow up every 10 years, you will make 9 bonuses and the 10th year someone will
> pay the cost, not you"

Then the loop closes: "Vicious: taxpayers are paying retrospectively for the bonuses of the
first 9 years." — "Banks are insolvent, have lost more than their capital base, but managers
have kept their bonuses."

**The part that is easy to miss, and is the real cost, is what happens to the prudent.**
The firms that did not do it had lower returns year after year; they should now be doing
extremely well; and they are "now unable to buy up some of the firms that have made the
mistakes because the government is propping them up." The bailout does not merely spare the
reckless — it cancels the one moment at which caution finally gets paid, at precisely the
moment it was about to be paid. That is a far stronger argument than moral hazard in the
abstract, and it is being made in real time.

The historical framing is given twice and with two dates — the rescues around 1981 and Long
Term Capital Management in 1998, with the moral hazard problem said elsewhere to have
started in 1982. (The document is not internally consistent on the year; the claim is about
the pattern.) Had we not saved them, "we wouldn't have let something so fragile grow to be
so large." Which yields the principle, a design rule rather than a moral one:

> "Capitalism is about failing early, not having some government prop you up so when you
> fail you fail big."

With the enforcement condition attached — "If you have incentive without punishment,
someone has a free option" — and, on the people who built the risk methods, "on the part of
scientists, some breaches of ethics." **The word *option* appears in this episode and does
not appear in the Black Swans episode at all.** The asymmetric-payoff vocabulary arrives
here, and it arrives first as an accusation.

## 3. Value at Risk, and why robustness is cheap (8:36)

The technical centre. The notes state the instrument fairly before demolishing it: "Value
at risk told you that with 99% probability you won't lose more than a million dollars.
Problem it had was that should you lose more, the expected loss could be $50 million." In
plain language: "Not just a bad quarter--you get wiped out." — "Care about how much you can
lose when you lose." The measure answers *how often*; the survivable question is *how much,
conditional on it happening*. Expected Shortfall is named as the alternative and immediately
called intractable, which is the honest part — he is not selling a replacement metric.

Roberts pushes the obvious objection: did the people using these models not know? The reply
is chronological and damning — VaR came into use in 1993 and produced its first problem in
1994. The warnings are older than the crisis by fifteen years.

Then the deeper defect, which is about *any* backward-looking calibration and is worth
lifting clean out of its banking context. Standing in October 1987, just before the crash,
the worst deviation in history "would have had close to -10% on any given day", so you
calibrate to about -10%. The event that arrives is close to -23%, so you recalibrate to
-23%. And: "Next largest deviation is going to be different and worse." **The past maximum
is not a bound — it is a biased sample from the very tail you are trying to measure**; the
notes add that random variables tend to show the rosier scenarios, linked to survivorship
bias. Greenspan's apology for letting the banks take so much risk, quoted in the source, is
the perfect specimen: **"We never saw these events before."**

**And then the constructive half, which is why this episode is not merely a complaint.**
Robustness, the notes insist, is easy, and the example is a pair of brothers: two
portfolios, "one gentleman exposed to rare events and his brother exposed to same variables
without so much toxic payout." Same variables, different payoff shape. Then the allocation
— the same barbell as two years earlier, same split:

> "Linear combination of 80% no risk and high risk for 20% is more robust to rare events
> than 100% allocated to medium risk portfolio."

> "Robustness is extremely easy to build, but have to abandon these metrics."

**The obstacle is not difficulty. It is the measurement system**, which cannot see that the
barbell is safer and keeps scoring it as if it were not. The cost of holding the position is
stated without self-pity, and it is the best image in the episode: standing on the shore as
the Titanic heads off to sea. "That's where the party is, where the champagne is flowing;
difficult to have lower returns than you year in and year out but there is one year when I
will trounce you." With the coda from the middle of the crisis: in this crisis, cash
performed the best.

## 4. Large deviations have no predecessors — and returnless risk (14:38)

The generalisation of the calibration failure, and the piece I would keep if I could keep
only one: "Large deviations do not have predecessors. The first great war did not have a
predecessor. Cold War did not have a predecessor." The corollary for the moment of
recording, with everyone predicting another depression: if the economy takes another bad
tumble it will be *different*. We can learn that rare bad things happen; we would like to
learn principles, and sometimes there are none.

The failure mode gets a name — a form of autism with regard to history — and a precise
instruction: "Don't look at the past in relation to its own past". Looking at 1987, the fact
that the worst event moved from -11% to -23% does not license saying the next worst could be
50%. Today's past, today's future: do not transfer. Two remarks attached: the error may
*increase* with the use of mathematics, and a cab driver would get the point — the
sophistication is what buries it. And the worked case: some ratings agencies did build into
their forecasts the possibility that default rates on housing would reach Great Depression
levels, which "Seems to be very safe" — but "we could have default rates even worse than
that." **The most conservative assumption anyone made was still an extrapolation from the
worst thing in the record.**

Exposure to these tail events was preventable, and the detail makes the crisis look less
like bad luck than like a category error. Banks lost on subprime first, then on other areas
that were not particularly profitable, and increased exposure. "Why did people buy the
senior tranches? Only making pennies." — "Those who blew up were those who made pennies." —
"Most risk with least return." And the inversion that names it, five words and the most
portable phrase in the hour: **"Returnless risk, not riskless return."**

The macro version follows. Risk kept building through 1991-1992 with what the notes call
Greenspan's Novocain, and then the specific disappointment — Ben Bernanke calling the era of
low volatility the Great Moderation, when he "Didn't realize that what we call the tails are
getting fatter; risk coming from jumps increasing." The period he was describing is given as
1982-2000. **Low measured volatility was read as a decline in risk while the shape of the
risk changed underneath the measurement.** Suppressed variance and fattening tails look
identical on the instrument that was being used.

## 5. Why complexity rose after the Internet (14:38)

The most surprising stretch, and it has nothing to do with banking. Why did the system get
more complex after 1995? The Internet — argued through Harry Potter and an opera singer.

- "Environment that doesn't have complexity is an environment that doesn't produce
  large-tail events." — "The more tail events, the more complexity." The same phenomenon
  seen from either end.
- "Before the Internet couldn't spread cultural ideas very fast." Afterwards: "Harry Potter
  effect, whole planet reading the same book." Planetary-wide fads, and the consequence is
  concentration — large right-hand tails for a small group, fewer people making larger
  incomes in sports and the arts.
- **The opera singer is the model case, and it is a story about storage.** With no way to
  store your voice, the singer in Italy has an audience because people who love opera must
  travel to Italy; the local singer performs at weddings and makes a living. Then the
  gramophone, then the Internet — technology lets you hear anybody, so why listen to that
  poor guy. "Whole planet will have a handful of opera singers making huge amount of money."
- **The control case is the dentist**: "Dentist cannot store, leverage, or scale his work;
  same for massage professional." Non-scalable work stays thin-tailed.

The verdict is deliberately two-sided, which is rare here: "The more informational economic
life is, the more it can deliver large deviations." Good overall — we get great opera
singing. But expect spikes: "Can get very rich if you are on the right side, but blow up if
you are on the wrong side." Especially if leveraged. **This is the fragility argument applied
to a career rather than a balance sheet**, made about digital goods in 2009. Anyone whose
work is storable and scalable is in the fat-tailed regime whether they chose it or not.

## 6. Leverage and lumping (25:17)

The bridge: "complexity cannot tolerate leverage, since no room for error." And the
magnitude — since 1980, a tripling in leverage in the U.S. and in Europe, measured as the
ratio of leverage to GDP. Then two mechanisms by which apparent efficiency manufactures
tails.

**Small imbalance, large move.** Commodity prices "can have rise in wheat prices in response
to very small imbalance in demand, followed by rapid collapse." The notes catch the whiplash
of the moment — not long ago everyone talked about inflation, now deflation — and ask how
much of the commodity spike came from mistakes of the same family as Greenspan's.

**Concentration disguised as diversification.** "Globalization has side effects; produces
fat tails." The example is outsourcing: many U.S. and German firms concentrate on one
destination, say Bangalore. "Probability of failure low because only one source of
randomness." But suppose a problem there — political, storms — disrupts communication. What
happens to all these firms at once? **The low failure probability was purchased by making
the failures perfectly correlated.**

And the arithmetic that makes size itself the risk, via the French bank's rogue trader: "If
you had 10 small banks each with 5 billion, wouldn't have a problem because easy to
liquidate." With one bank the same trader's position is ten times the size, and execution
cost is not linear — "Liquidating $50 billion is more costly than 10 times liquidating $5
billion." Hence "Lumping makes you more vulnerable to large events." — **"One large error is
a lot worse than 10 smaller errors."** That is the nonlinearity argument in finished form,
three years before it is delivered as convexity and second derivatives. Here it arrives as
an observation about liquidation costs, not as a general theory — but it is the same claim.

## 7. Break it early, and who actually caused it (30:53 / 34:45)

Asked where we go from here, the first answer is pessimistic in an unusual direction: the
lessons will not be learned **because government will not let people pay those prices.** The
information is in the loss, and the loss is being suppressed. On nationalisation versus
bailing out — "you don't give heroin to heroin addicts" — stop the problem early rather than
late. Which gives the operational sentence of the whole episode:

> **"Whatever is fragile, it should break as early as you can."**

On the call for more regulation the notes turn it around, and this is what gets left out of
most retellings of Taleb-on-the-crisis:

- The risk measure was implemented **because the regulators wanted it.** "Regulators like
  VAR."
- "Nobody in Washington talked about that this crisis was caused by regulators, rating
  agencies."
- The AAA machinery is the concrete channel: a big premium was put on an AAA rating because
  "Pension funds couldn't hold some of their assets in certain categories." **The rating was
  not information, it was an access key** — so the demand for it was manufactured by rule.
- If the choice is bailout or ownership, ownership is probably better. But: "Problem is:
  government can't keep their promise to not bail out the other part." And the reason:
  "Civil servants, politicians, different incentives from the public. Like regulation."

**The regulation is not the opposite of the fragility; it is one of its sources**, because a
rule concentrates everyone onto the same measure and the same rating, which is the lumping
argument applied to institutions. Then the scale claim: "Will we continue to live in this
fantasy that we can create a riskless world? No government is big enough to save large
banks. System will break whatever is fragile no matter how big it is." AIG is the
demonstration in progress. And the boundary problem — "Failure of Swiss bank would be a
concern to the U.S. taxpayer", Gordon Brown in Washington talking about stabilising all the
banks — ends in "Nation-state, globalization: nation-state ceases to exist." Governments
have no control, with one exception that has aged interestingly: they "Still have control
over people's pocketbooks, though, through physicality of where you live."

Asked what is next for him, the answer is modest and worth recording next to the "I told you
so" opening: back to trading, back to being a philosopher, moving on; he doesn't need to be
heeded, and a small minority will understand the points.

## 8. Decisions without probabilities: tinkering, medicine, religion (34:45 / 46:01 / 48:08)

If small probabilities are unobtainable, what replaces them? Not a better estimate — a
different decision procedure. "Don't make decisions based on true/false, heads/tails"; set a
confidence interval; "We make decisions based on payoffs and other judgments." The ancients
did not use probabilities either, and the notes credit **Cicero** with coining the word in a
sense since lost: "probability was something you approve of regardless of the odds." The
test case, printed with a duplicated clause: "Would you drink water from a glass left on the
table left the table by a stranger?" No. "But do you have evidence that that water would
hurt you? No, but you won't do it because it is not something you approve of." **A decision
made correctly with no probability anywhere in it** — the positive programme the earlier
episode lacked. The label is "What we do versus what we know", and it is placed closer to
Hayek.

**Medicine is the long historical case**, and where the tinkering vocabulary enters this
arc: "whenever we use knowledge as a driver instead of tinkering, we get in trouble." The
evidence — "Our understanding of biological processes led to a decrease in cures", "When
just tinkering we did better than with directed research" — and the mechanism: "Directed
research gives us a strong bias and blinds us to things we don't know are there." Then the
observation that carries it: "In medicine, most medicines are used to cure something
completely different from what the intention was." Side effects dominate, so: "Try to
collect positive black swans." The history runs the same way — empirical doctors were
successful until eliminated after the rise of Arabic medicine, and "Improvements after that
came from the barbers, not from the doctors." An honest limit keeps it from being
anti-science posturing: trust the science part, ask the doctor, "but the doctor has no idea
about the probabilities"; "Minimize the harm coming from theories."

**The market case** is options: "People think that quants make option formulas, therefore
the market uses them. Bogus." It is supply and demand — and traders "Did a lot better before
the Black and Scholes formula." **The general form** is the sentence everyone knows without
knowing where it comes from. Universities may have made a negative contribution to knowledge
compared with practitioners — he hopes not, but it could be: **"Lecturing birds how to fly
and later on claiming credit."** Descartes is named as the dangerous one, "idea that
Descartes dangerous because he thought reason could triumph over everything", against
pragmatism and the wisdom of trial and error.

**Then religion, which is not a digression.** "Most people think that religion is about
belief, but it is about practice." The evidence is linguistic and personal — Greek Orthodox
but Arabic-speaking — and it lands directly on the epistemics of the first half: the way
Arabs say "I don't know" is **"God knows."** It "Allows you to say you don't know, transfers
from yourself to another entity. Allows you to be humble." **The grammar of the language
contains a socially acceptable way to decline to estimate**, which is the exact move the
risk managers could not make. The rest:

- The historical fee for humility: a fortune given to the Temple of Apollo — "You saved me
  when my doctors failed me." Doctors gave negative contributions, particularly by bleeding,
  "or more recently, delivered a baby after going to the morgue."
- "Error we have in believing religion is about belief, but it's about commitment, the
  system, living with something. We're not yet good with ideas. Can see from this crisis."
  With the payoff line attached: "Great Moderation turned out to be not so great."
- The link to probability: not true/false but degree of belief, and you may "do something
  against the odds because the consequences or large or even without analyzing it" (the
  source drops a word; *are large* is meant). Then a formulation that reads as though a
  negation has been lost, but whose second half is unambiguous: "Probability is not opaque;
  and even if it were, we wouldn't use it because of the consequences." **The consequence
  dominates the probability regardless.** **Pascal's wager** is worked through the same way:
  "Payoffs from being religious are much higher than negative payoffs if God doesn't exist."
- Actions over beliefs — Maimonides, and the note that not every Jewish sage lists belief in
  God among the commandments, because there is a debate about whether belief can be
  mandated. Plus the etymology: "In Arabic, the name for religion, din, is the same as the
  word for law in Hebrew. To be a law-abiding citizen, keep the rules."
- And the closing barb, which ties the last segment back to the first: **"Losing patience
  about people who are skeptics about religion, and at the same time are not skeptical about
  economics or VAR."**

## What changed, measured against the earlier episode

Both source documents are the same kind of artefact — condensed highlights of roughly the
same length — which makes a crude vocabulary count fair. Occurrences per source file:

| Word | Black Swans episode | This episode |
|---|---|---|
| fragile / fragility | 0 | 6 |
| robust | 0 | 4 |
| option | 0 | 3 |
| tail | 2 | 10 |
| leverage | 0 | 6 |
| tinker | 0 | 2 |
| Mediocristan | 5 | 0 |
| Extremistan | 5 | 0 |
| serendipity | 1 | 0 |

The shape of that table is the finding. **The provinces disappear and the exposure
vocabulary arrives.** Two years earlier the work was taxonomic — establish which world a
variable lives in, show that our inference machinery is built for the wrong one. Here the
taxonomy is assumed and never mentioned, and the operative words are properties of a
*position*: fragile, robust, leverage, option. Three specific shifts:

1. **From estimate to exposure.** The earlier episode asks for the data so the distribution
   can be figured out. This one says the small probability is not in the data at all and
   moves the decision onto the payoff — the step that makes the later work possible.
2. **From error to incentive.** Earlier, the successful trader was an inference mistake by
   observers. Here the same trader holds a free option written by the taxpayer, and the
   notes track who keeps the bonus. **The ethics enter with the crisis** — and the phrase
   *skin in the game* still does not appear.
3. **From avoidance to construction.** The earlier advice was to sort exposures and keep an
   envelope of serenity. Here there is a positive claim — robustness is extremely easy to
   build, the obstacle is the metric — plus the first appearance of tinkering and of
   collecting positive black swans as a *method*. The word for the property being built is
   still missing.

## Synthesis: what the crisis actually taught him

1. **The number you most need is the one you cannot have.** Rare-event probabilities come
   from a model, never from experience, and consequence rises as the estimate weakens.
   Everything built on top inherits the softness — including the position size the number
   was used to justify.
2. **A calibrated worst case is a sample from the tail, not a bound on it.** Every
   backward-looking limit — the worst historical day, the Great Depression default rate — is
   an extrapolation from a record biased toward the rosier scenarios by the fact that we are
   here to read it. Large deviations have no predecessors.
3. **So stop grading the estimate and start grading the payoff.** The brothers hold the same
   variables and meet different fates because one has a toxic payout. The barbell works not
   because it predicts better but because it does not need to predict — and the reason
   nobody adopts it is not difficulty but that the measurement system scores it as inferior.
4. **Fragility must be allowed to break while it is small.** Suppress the small failures and
   you get one large one; the loss is where the information lives; and a rule that
   concentrates everyone onto the same measure manufactures the correlation it was meant to
   control.

Underneath all four, stated most clearly in the religion segment: **the consequence
dominates the probability.** You decline the stranger's glass of water without any estimate
at all. The whole hour is a case for decision procedures that never ask for a number nobody
can supply — and for treating a culture's ability to say *I do not know* as infrastructure
rather than manners.

## Solo-builder read (insights for Jens)

- **Break it early is the one rule here I can apply this week.** Every half-alive thing in
  the portfolio — a product with no users, a channel with no returns, a client relationship
  that only works when nothing goes wrong — is being propped up rather than allowed to fail.
  The argument is not that failing is virtuous; it is that suppressing the small failure
  builds the large one, and the information I need is precisely in the loss I keep
  preventing. Concretely: for each project, name what would have to be true for me to shut
  it, and set the date now, while the cost is still small.
- **The prudent-firm observation is the most personally relevant line in the episode.** The
  firms that stayed out had lower returns year after year, were finally about to be
  vindicated, and then could not collect because the reckless were propped up. Running a
  conservative solo business next to funded competitors is that position exactly: the payoff
  for prudence arrives only in the bad year, and can be cancelled by something outside my
  control. So prudence has to pay something *during* the good years too — a cashflow floor
  is not just risk management, it is the only part of the payoff I can actually bank.
- **Returnless risk is a portfolio audit I can run in an afternoon.** Where am I taking the
  most risk for the least return? The senior tranche is anything carrying real downside for
  pennies: a fixed-price contract with open scope, a free tier that costs support time, an
  unpaid integration built for one customer, a platform dependency with no fallback. None of
  them look risky, which is the point — they were bought because they looked safe.
- **The opera singer describes my own market, and it cuts both ways.** Software and AI
  agents are storable and scalable, so the market is fat-tailed by construction: a handful
  of winners, and the local performer loses the wedding gigs. That is the argument against
  building the fifth-best version of anything, and also the argument *for* being in this
  market rather than the dentist's — the right tail only exists where work can be stored.
  What it rules out is the middle: scalable work aimed at a merely-decent outcome has the
  dentist's ceiling and the singer's floor.
- **The metric obstacle is the part I would underestimate.** Robustness is easy to build;
  what stops people is that their measurement system cannot see it. Whatever I put on a
  dashboard becomes what I optimise, and a dashboard of revenue and installs will always
  score the concentrated bet above the barbell. Worth adding one number that measures
  exposure rather than outcome — share of revenue from the largest client, days of runway,
  count of single points of failure — so the safe structure has something to win at.
- **"God knows" as an engineering practice.** A vocabulary that makes it socially cheap to
  say *I do not know* is infrastructure. An agent, a report or a status update must have a
  permitted way to return *unknown* — otherwise a forced field produces a fabricated value,
  which is the same defect as a risk model that must output a probability.

## Quotable

Only the first three are attributed to a speaker in the source; the rest are the
note-taker's compressions, quoted as printed. See the caveat.

- "I told you so."
- "We never saw these events before." (Greenspan, on why the banks were allowed the risk)
- The way to say "I don't know" is "God knows."
- "If an event happens once in 10,000 years and the person is less than 10,000 years old,
  you know he is getting the probability from outside his experience."
- "The smaller the probability the more fragile and in some areas, the larger the impact."
- "if you blow up every 10 years, you will make 9 bonuses and the 10th year someone will pay
  the cost, not you"
- "Capitalism is about failing early, not having some government prop you up so when you
  fail you fail big."
- "If you have incentive without punishment, someone has a free option."
- "Care about how much you can lose when you lose."
- "Large deviations do not have predecessors. The first great war did not have a
  predecessor."
- "Robustness is extremely easy to build, but have to abandon these metrics."
- "Standing on the shore as the Titanic heads off to sea."
- "Those who blew up were those who made pennies." / "Returnless risk, not riskless return."
- "Dentist cannot store, leverage, or scale his work; same for massage professional."
- "Probability of failure low because only one source of randomness."
- "Lumping makes you more vulnerable to large events." / "One large error is a lot worse
  than 10 smaller errors."
- "Whatever is fragile, it should break as early as you can."
- "No government is big enough to save large banks. System will break whatever is fragile no
  matter how big it is."
- "Cicero coined the word: probability was something you approve of regardless of the odds."
- "Directed research gives us a strong bias and blinds us to things we don't know are there."
- "Lecturing birds how to fly and later on claiming credit."
- "Most people think that religion is about belief, but it is about practice."
- "Losing patience about people who are skeptics about religion, and at the same time are
  not skeptical about economics or VAR."

## Sources

- EconTalk, "Nassim Nicholas Taleb on the Financial Crisis", published 23 March 2009,
  recorded 15 March 2009 — <https://www.econtalk.org/taleb-on-the-financial-crisis/>.
  **Not a transcript**: a timestamped condensed summary under the heading `Podcast Episode
  Highlights`, roughly 2,600 words. No speaker labels. Segments used here: 0:36, 8:36,
  14:38, 25:17, 30:53, 34:45, 46:01, 48:08.
- Named in the summary: Joe Nocera on value at risk · Bear Stearns, Lehman Brothers, AIG,
  Fannie Mae, Long Term Capital Management · Alan Greenspan · Ben Bernanke and the Great
  Moderation · Gordon Brown · Cicero · Descartes · Pascal · Maimonides · Peter Singer ·
  F. A. Hayek · Black and Scholes.
- The arc in this directory:
  [`2007-04-30-taleb-on-black-swans.md`](2007-04-30-taleb-on-black-swans.md) (before any of
  it happened) → this note →
  [`2012-01-16-taleb-on-antifragility.md`](2012-01-16-taleb-on-antifragility.md) (where the
  missing noun is coined). Cross-source synthesis:
  [`../complexity/antifragility.md`](../complexity/antifragility.md).
