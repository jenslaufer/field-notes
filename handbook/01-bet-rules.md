# Bet rules

How to decide which idea to build, how to test it, and when to stop, keep or scale it. Source: a 20-question interview on 2026-11-14.

Words: a **bet** is one idea under test. **Stock** is a bet whose test is over and that stays online.

## The numbers

| Rule | Value |
|---|---|
| Signal | Only a real payment counts. Clicks on a buy button, installs and sign-ups do not. |
| Leads | Do not count toward the threshold. They are still an asset: an email list is a channel of its own. Collect them where it costs little — optional, double opt-in, consent wide enough for later products. |
| Threshold | €1,000 of real revenue within the 2 test weeks. No projection. |
| Test window | 2 weeks from the first day with real traffic. |
| Test budget | €200–300 per bet, then look at the numbers. |
| Top-up | Once at most, and only if a payment already came in. |
| MVP size | At most 2 days of build. Larger is too big for a bet. |
| Analysis before building | Thorough, at most half a day. |
| Fixed costs per bet | Low. €20–50 a month for servers is fine. |
| Channel | Traffic from day 1 with measurable volume. Never SEO as the plan. |

## Before building

1. Run the short analysis (half a day at most):
   - The platform does not offer it natively (check changelog, blog, release notes of the last six months).
   - A channel with day-1 traffic and measurable volume exists ([Channel evaluation](07-channel-evaluation.md)).
   - A buyer is plausible.
2. Paying competitors are a positive pre-signal. An empty market is no reason to drop the idea — building is cheap.
3. The edge is reaching the customers. The bet need not be better or cheaper.
4. Check that the idea can scale with ad spend. Write it down if it cannot.
5. If the analysis ends unclear: build and let the market decide. The experiment beats the analysis.
6. Test with a built, buyable MVP. No pre-order, no fake door.

Preferences, not filters: mid to high ticket (low ticket where customers are easy to reach), subscription over one-off, B2C and B2B alike, worldwide, as little customer contact as possible. Build sub-problems on your own stack rather than renting a service. Services that take a revenue share are fine.

## Running a bet

- One large bet at a time. Small ones may run in parallel.
- A changed audience, channel or price is the same bet continued. It gets no new budget and no new 2 weeks.
- Platform bans are an accepted risk. Many parallel bets; expect some to die.

## After the test

The first matching row applies.

| Result | What happens |
|---|---|
| Threshold reached | Raise the ad budget in steps, never in one shot. If it later gets complicated or binding, sell it or leave it running. |
| Below, with a complex backend | Lay out the case with its numbers; decide deliberately. |
| Below, earns at least its running costs | Becomes stock: stays online, gets no more effort. |
| Below, costs more than it earns | Take it offline. |

Stock gets small repairs. Improvements only when customers ask. A new bet goes before work on stock.

A stopped idea may come back in a new form. Mark it "do not propose again" when you are done with it.

## Rules for yourself

- Never spend money without a deliberate decision — not inside an approved budget either.
- Prices and A/B tests: change freely.
- Publishing a landing page or store listing: just do it.
- Mails to prospects or customers: read each one before it goes out (GDPR), automatic ones included.
- Legal grey zones (platform terms, scraping): read the terms, then decide consciously.
- Bet below threshold after 2 weeks: switch the ads off the same day. Decide the rest afterwards.

## Reporting a decision

Write it in five lines:

1. One recommendation with a short reason. No list of options.
2. The numbers: money spent, visitors, purchases, revenue, cost per buyer.
3. The projection per month, as information only. It never decides the test.

## Your two biases

They pull in opposite directions. Each applies at its own stage.

- **Before the test you discard ideas too fast.** Before dropping one, write what it still has going for it and what a test would cost.
- **After the test you are not strict enough** with products that earn €10–30 a month. Hold the threshold. No more work on stock that missed it.
- **Tool-building drift.** Infrastructure served learning; the goal now is revenue. Stop when you build tooling while no bet is under test, or product infrastructure (payments, accounts) before a channel exists.

## Owner constraints

Measured facts. Each closes or narrows channels for every idea.

- **No network, audience or list.** Channels must create reach from zero. Plans that start "ask people you know" are void.
- **Fast feedback where a bet is actively run.** Marketing is the self-named weak spot; prefer simple, direct channels with a short time to first signal. Slow channels only for fire-and-forget bets with ~0 build cost.
- **No customer-support burden.** Prefer backendless, self-running products; keep support bounded or delegated.
- **SEO on young domains is closed** as a cash-flow channel.
- **Google Ads is closed for Chrome extensions.**
- **Validate before building:** native-feature check, channel fit and shelf or demand measurement come before the first line of code.
