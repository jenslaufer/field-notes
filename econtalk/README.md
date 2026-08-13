# EconTalk (Russ Roberts)

Weekly conversations on economics, hosted by Russ Roberts since 2006. Relevant here for
two recurring guests whose ideas sit in the owner profile: **Nassim Nicholas Taleb**
(antifragility, tails, skin in the game) and **Rory Sutherland** (perceived value,
psycho-logic, alchemy).

**All ten Taleb appearances (2007–2022) and the single Sutherland appearance are written
up below, each from the official page text, read end to end.**

## Working with this source

Every episode page carries an `AUDIO TRANSCRIPT` heading — but **what sits under it is not
the same kind of document from one decade to the next**, and getting that wrong is the way
to invent quotes. Measured across the eleven episodes here:

| Era | What the page actually contains | Attribution |
|---|---|---|
| 2007, 2009, 2010 | a condensed, timestamped **"Podcast Episode Highlights" summary** in telegraphic note form — *not* speech. 2,100–4,700 words for a full hour. | none. Only strings the source itself puts in quotation marks may be quoted (six in 2007, three in 2009, eleven in 2010) |
| 2012 | full running text, **one unbroken block** | reconstructed from content; a listener asks Roberts in the comments for labels and is told no |
| 2013, 2015 | full dialogue, inline `Russ:` / `Guest:` | read, but check it: in 2013 a missing `Guest:` marker silently hands one of Taleb's turns to Roberts |
| 2017, 2018, 2019, 2020, 2022 | full verbatim transcript, clean `Russ Roberts:` / `<Guest>:` labels on every paragraph | read directly |

Practical notes:

- `www.econtalk.org` returns **HTTP 403 to a bare curl** — send a browser User-Agent.
- The full episode list is in the feed: `curl -s https://feeds.simplecast.com/wgl4xEgL`
  (~1,060 items). Grep titles for the guest.
- **The transcripts are lossy even where they are verbatim.** Every note here carries a
  garble table (`[sic]` as printed, resolved alongside) rather than silently smoothing —
  e.g. "empty fragile" for *antifragile* (2012), "Blacks won" for *Black Swan* (2017),
  "Repetitions are very easy to game" for *Reputations* (2013). One transcript, 2015,
  simply **stops at 44:02** mid-argument.
- Every note was checked with `tools/verify-quotes.py` (in `~/repos/assistant`): each
  quoted string of ≥8 words is verbatim in its own transcript, no cross-episode
  contamination, every number traceable. All eleven exit 0.

## Notes — the Taleb arc in order

- [`2007-04-30-taleb-on-black-swans.md`](2007-04-30-taleb-on-black-swans.md) — the first
  appearance, weeks after *The Black Swan* was published and **eighteen months before the
  crisis proved him right**: Mediocristan vs Extremistan, confirmation bias as "not taking
  seriously what you don't see", the fourth quadrant, the blurry-dog experiment (raise the
  resolution *gradually* and the viewer never sees the dog), and "I want to turn lack of
  knowledge into action". Measurable absence: *fragile, robust, antifragile, convex, option,
  barbell, via negativa, skin in the game* appear **zero times** — the barbell is already
  there, with a number, but has no name and no ethics attached
- [`2009-03-23-taleb-on-the-financial-crisis.md`](2009-03-23-taleb-on-the-financial-crisis.md)
  — Taleb eighteen months later, "one of the few people who can say 'I told you so'": why
  small probabilities are the fragile ones, the bailout argument that is about the *prudent*
  rather than the reckless (the firms who stayed out are now unable to buy the ones who did
  not), one large error against ten small ones, and the religion segment that is not a
  digression — the Arabic "God knows" as a grammar that makes it socially cheap to decline
  to estimate. The vocabulary shift from 2007 is countable and in the note
- [`2010-05-03-taleb-on-black-swans-fragility-and-mistakes.md`](2010-05-03-taleb-on-black-swans-fragility-and-mistakes.md)
  — the post-crisis post-mortem, twenty months **before** the antifragility conversation and
  before the word existed: the epilogue essay "On Robustness and Fragility", why 1987 taught him
  more than 2008, techne vs episteme, debt as what fragilises a system, forecasting and debt as
  one-to-one, the four quadrants and the pilot flying to New York with the map of Chicago,
  redundancy as the opposite of debt, moral hazard as broken feedback, nonlinear liquidation cost
  as the mechanism behind "large companies, large states are disproportionately more fragile",
  and the one idea he names when pressed — **convexity**, not the black swan
- [`2012-01-16-taleb-on-antifragility.md`](2012-01-16-taleb-on-antifragility.md) — Taleb
  eleven months **before** *Antifragile* was published, with the manuscript still open:
  why the word had to be invented (the Greeks had no word for blue), the
  fragile/robust/antifragile triad as a shipping problem, hormesis and the organic-vs-
  engineered split, nonlinearity as the universal signature of fragility (and why a stress
  test at 10% tells you nothing), the barbell, via negativa, why small probabilities are
  uncomputable, skin in the game as Book V, size and localism, and Seneca as a man long
  options
- [`2013-09-09-taleb-on-skin-in-the-game.md`](2013-09-09-taleb-on-skin-in-the-game.md) — Taleb four
  and a half years **before** the *Skin in the Game* book, working from the Taleb/Sandis paper:
  Hammurabi as an information mechanism rather than retribution ("no inspector, no regulation, will
  ever ever outperform that simple rule"), the agent who picks up nickels in front of the bulldozer,
  why a nine-year track record is not evidence under fat tails, who is long the option and who is
  short it, honour as a risk position, binary vs vanilla prediction with Tetlock, and Roberts'
  pushback that you can have *too much* skin in the game — which forces two scope limits the
  popular version of the idea has since lost
- [`2015-01-19-taleb-on-the-precautionary-principle-and-gmos.md`](2015-01-19-taleb-on-the-precautionary-principle-and-gmos.md)
  — the one hard-technical hour, working from the paper with Read, Douady, Norman and Bar-Yam:
  the precautionary principle as decision-making without evidence (the water on the floor), the
  three layers from biologist to statistician to risk analyst, the Carpenter Fallacy, harm vs
  ruin, why a risk of ruin must be **zero and not small** ("ruin is not a renewable resource"),
  bottom-up/local vs top-down/global as the source of fat tails, why GMOs skip zillions of steps
  that breeding does not, **why the principle explicitly does NOT apply to nuclear** ("a Fukushima
  cannot lead to destruction in India"), the inverted burden of proof, and circuit breakers that
  turn nature's fat tails into "modified thin tails". **The transcript breaks off at 44:02** —
  the note says what is therefore unknowable
- [`2017-08-14-taleb-on-work-slavery-the-minority-rule-and-skin-in-the-game.md`](2017-08-14-taleb-on-work-slavery-the-minority-rule-and-skin-in-the-game.md)
  — Roberts and Taleb reading the **manuscript** of *Skin in the Game*, seven months before
  publication, with Roberts saying on air that parts may not survive: the Rubin trade, the
  **minority rule** and renormalisation (a stubborn 3% sets the rule for everyone — and the flip
  condition is the size of the *pot*, not the size of the minority), employees as domesticated
  animals who buy reliability with freedom, the Lindy effect, and skin in the game as a **filter**
  rather than an incentive ("largely disincentive"). Two live disagreements left standing —
  minimum wage and globalization — plus Taleb retracting a structural decision from *Antifragile*
- [`2018-03-05-taleb-on-rationality-risk-and-skin-in-the-game.md`](2018-03-05-taleb-on-rationality-risk-and-skin-in-the-game.md)
  — recorded three weeks *after* the book shipped, so the finished argument against the 2017
  manuscript version: what "rational" actually means once ruin is possible, ensemble probability
  vs time probability, the **absorbing barrier** (his term — the word *ergodicity* never appears),
  why even a positive edge loses to any non-zero ruin probability, mental accounting as
  *necessary* rather than merely defensible, and the same move made five times over — not "the
  experiment was bad" but "the model you scored the deviation against is the wrong model".
  Roberts publicly retracts his own reading of skin in the game from the previous episode
- [`2020-07-27-taleb-on-the-pandemic.md`](2020-07-27-taleb-on-the-pandemic.md) — Taleb four
  months into COVID, recorded 3 Jul 2020 with the outcome still unknown: the precautionary
  principle running live. Risk of variation vs risk of ruin; contagion breaks the
  individual/collective split; the two convexities the WHO and CDC missed on masks (he indicts
  himself here — "very embarrassing"); the January 2020 warning with Norman and Bar-Yam as the
  output of a standing watch; quarantine as 300-year-old standard operating procedure; why a
  single-point forecast on a fat tail is unscientific **and so is scoring it**; the protocol that
  is explicitly *not* a lockdown. **The famous "not a Black Swan" line is not in this episode** —
  the note says so, and separates his risk-management claims from his empirical ones
- [`2022-07-11-taleb-on-nations-states-and-scale.md`](2022-07-11-taleb-on-nations-states-and-scale.md)
  — the **tenth and final** appearance, and the one where scale stops being an aside and
  becomes the subject: the nation-state as a modern invention (1780) that is intolerant by
  definition, the state as a body of laws (*medinat/din*) rather than a people, city-states and
  Switzerland's cantons as the working counter-example, the elephant that is not a large mouse,
  monitoring costs that grow super-linearly, skin in the game as a village-distance technology,
  optimal size as domain-dependent (military centralises, bridges do not), and confederation
  rather than fragmentation as the prescription. It also closes the arc: what survived from 2007
  unchanged, what hardened, and the entire finance apparatus he drops

## Notes — Sutherland

- [`2019-11-11-rory-sutherland-on-alchemy.md`](2019-11-11-rory-sutherland-on-alchemy.md) —
  markets are inventive, not efficient; variance reduction as rational behaviour in a
  non-ergodic world; the airline question that cost £15m a year; minority rule; hedonic
  opportunity cost (20% faster vs 20% more enjoyable); "look at what the map leaves out";
  the McNamara fallacy and the Soviet chandeliers; brands as reputational skin in the game;
  advertising as costly signalling — "a flower is effectively a weed with a marketing
  budget"

**Rory Sutherland has exactly one EconTalk appearance.** Checked against the full feed
(title search across all ~1,060 items); there is no second one. Other Sutherland long-form
material lives outside EconTalk.

Related: [`../complexity/antifragility.md`](../complexity/antifragility.md) — the
cross-source synthesis of the antifragility concept, with a solo-builder playbook. The
notes here are the primary sources under it.

## The arc at a glance

| Date | Episode | Written up |
|---|---|---|
| 30 Apr 2007 | Nassim Nicholas Taleb on Black Swans | ✓ |
| 23 Mar 2009 | Nassim Nicholas Taleb on the Financial Crisis | ✓ |
| 3 May 2010 | Nassim Nicholas Taleb on Black Swans, Fragility, and Mistakes | ✓ |
| 16 Jan 2012 | Nassim Nicholas Taleb on Antifragility | ✓ |
| 9 Sep 2013 | Nassim Nicholas Taleb on Skin in the Game | ✓ |
| 19 Jan 2015 | Nassim Nicholas Taleb on the Precautionary Principle and GMOs | ✓ |
| 14 Aug 2017 | Nassim Nicholas Taleb on Work, Slavery, the Minority Rule, and Skin in the Game | ✓ |
| 5 Mar 2018 | Nassim Nicholas Taleb on Rationality, Risk, and Skin in the Game | ✓ |
| 11 Nov 2019 | Rory Sutherland on Alchemy | ✓ |
| 27 Jul 2020 | Nassim Nicholas Taleb on the Pandemic | ✓ |
| 11 Jul 2022 | Nassim Nicholas Taleb on the Nations, States, and Scale | ✓ |
