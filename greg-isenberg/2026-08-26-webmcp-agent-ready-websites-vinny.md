---
title: "WebMCP clearly explained (and how to make $$)"
podcast: "The Startup Ideas Podcast"
host: "Greg Isenberg"
guest: "Vinny (X: @hot_town) — back after the Buzz episode (28.07.)"
feed: "https://rss2.flightcast.com/ordbkg8yojpehffas7vr7qpc.xml"
audio: "https://episode.flightcast.com/01M0ZJPYQ7EHVKBPDSK8402R8Q.mp3"
published: 2026-08-26
captured: 2026-08-28
duration: "28:58"
transcript: "publisher VTT (flightcast), 394 segments, 5,359 words — full episode"
related: "2026-07-28-buzz-agentic-slack-jack-dorsey.md, 2026-08-10-cloudflare-agent-internet-1000-millionaires.md, 2026-08-25-sip-live-support-eats-engineering-jonathan-courtney.md"
---

# WebMCP clearly explained (and how to make $$)

> A website can hand an agent a short list of actions — search, compare, add to cart, apply
> coupon — instead of making it read the whole page. Vinny demos a live espresso store where
> his agent picks a machine that fits a 32 cm counter, matches the accessories, adds one to the
> cart and applies a coupon, all while the human watches the normal UI update. The
> load-bearing idea is not the API: it is that **the login already happened in the browser**,
> so there are no tokens, no keys and no MCP server to stand up. Greg closes with two
> businesses a semi-technical founder can start on it.

**Source note:** written from the publisher's own transcript (flightcast VTT, 5,359 words),
not from show notes. Two speakers, no speaker labels; attribution follows content.

**ASR garbles.** `Cloud Code` = Claude Code · `Crema and Co client fly.dev` =
`crema-and-co-client.fly.dev` · `Lilit Bianca` = Lelit Bianca · `Mara X` = Lelit MaraX ·
`Softner` = softener. One sentence is garbled in a way that inverts it — see the note in
section 5.

## 1. What it is, in one line

Greg's frame:

> *"AI agents are about to become a new kind of visitor on the internet, and I think billions of dollars of wealth will change hands in the process."*

And the mechanism:

> *"So instead of an AI agent trying to figure out a page like a human being, the site can basically tell an agent, here's how to search, here's how to book, here's how to buy."*

Greg's own compression, which Vinny confirms: websites with agent buttons.

> *"So we're making websites agent-readable and agent-actionable."*

The three-era line is the one worth stealing for a sales conversation:

> *"It was like, can Google understand the page?"*

— SEO. Then AEO: can the AI cite the answer. And now:

> *"And now we're entering this WebMCP era, which is basically, can the agent finish the job?"*

## 2. The demo, and what it proves

The store is a real espresso-gear shop. Vinny types a genuinely awkward buying request — upgrade
from his current machine, must make two flat whites a day, must fit a counter about 32 centimetres
wide. The agent puts two machines side by side and highlights **which spec answers which part of
the request**: portafilter fit, throughput, width. Second turn: which accessories fit that machine,
add the water softener to the cart, apply the coupon. He never leaves the page and sees every step
happen in the UI.

His point is not that this was impossible before — it is that the old way was expensive:

> *"So they're getting the entire DOM, which means they're getting all the code from the website and they're like scanning through it and finding where to click, taking screenshots and stuff."*

The store exposes **16 tools** in total in that demo.

## 3. The part that actually removes work: the browser session

This is the section to read twice, because it is the difference between a weekend and a quarter.

> *"So this is really cool because one of the big hurdles to doing other kind of agent native approaches like an MCP server or an API is that you have to deal with tokens, credentials, people sending their identity through, you know, API keys and tokens and things like that."*

> *"Whereas this, you just log in, right?"*

Tools are **conditional on session state** — logged out, the page offers three tools; logged in,
the full set. No auth plumbing, because the auth already happened the way it always did.

> *"So it's like the least technical thing"* … *"approach to making an app or a website or a web store agent native, but with the most flexibility and the most features."*

## 4. The map: five ways an agent can meet your app

Vinny walks a diagram, from headless to bound-to-UI. Worth writing down because it is the
vocabulary for the sales conversation in section 6:

| Approach | What it is | Cost |
|---|---|---|
| Raw API (headless) | agent hits your backend directly | you own key handling, agent holds credentials |
| MCP server (headless) | a protocol layer on your backend | another service to build and run; *"your agent can't manipulate the UI"* |
| Computer use | agent drives a real computer, screenshots and clicks | *"this is slow and fragile at the moment"* |
| Browser MCP | agent reads the HTML and figures out where to click | fragile for the same reason |
| **WebMCP** | tools declared in the page, run in the user's session | the middle: keeps the UI, no auth layer |
| In-app agent | your own sidebar agent | you pay the tokens, you configure everything, user cannot bring their own |

The tweet Greg reads out is the whole argument against the last row:

> *"I don't want to use your products agent."* … *"I want my agents to be efficiently enabled to use your product."*

Vinny does not dismiss in-app agents — he names Notion (offers both) and the Cloudflare dashboard
(gated on purpose so nothing hazardous happens). But he expects consumers to settle on **one**
agent that carries their context everywhere:

> *"And to be able to bring that one agent with all that context to different tools is really powerful."*

## 5. Where to implement it first

Vinny's list, in his order of priority:

- **Compatibility-driven commerce** — anything where "does this fit that" is the hard part:
  espresso gear, camera systems, hardware, car parts.
- **SaaS admin consoles** — admin boards, analytics, marketing tools; make setup easier for your
  own customers and your own team.
- **Regulated industries, read-only** — insurance, banking self-service. Expose a couple of tools
  that only read or only touch non-sensitive settings, so the agent can find and summarise
  information without being able to break anything.
- **Internal tools** — his sleeper pick: *"There might be a really great solution for you in-house, like your internal tools, stuff for yourself, for your employees."*

**Garbled sentence, flagged rather than smoothed.** On regulated industries the transcript reads
*"the nice thing is, is that you can't use API keys"* — from the surrounding sentences he means
the opposite: you do **not have to** hand out API keys. Quoted as it stands, read as intended.

## 6. Startup idea 1 — WebMCP conversion agency

> *"how can you make boring business websites agent ready?"*

Target: law firms, home service, HVAC, med spas, dentists. You build the V1 tools — request a
quote, book a consult — and you sell the premise, not the technology:

> *"that there's going to be a new class of citizens on the internet."* … *"These are going to be these AI visitors."*

Pricing he names: **$2,000 to $10,000 setup**, then **a few hundred dollars a month, $500 to $700**,
for monitoring and evals, sized to the client.

Vinny's amendment is the better version of the business: sell it as **agent conversion**, with
WebMCP as one of several deliverables alongside an MCP server, so the offer survives the technology
churn. Greg agrees on the spot: *"maybe it's just agent conversion agency."*

## 7. Startup idea 2 — the agent mystery shopper

Test whether an agent can actually complete the journeys that make the money: buy the hoodie, book
the consult, file the claim, request the quote. Ship a report:

> *"Where did the agent get stuck?"* — bad descriptions, missing tools, conversion risk.

Sold monthly or weekly at **$100 to a few hundred dollars a month**; Greg's framing is *"just a credit report almost"* for agent-readiness, and the repeated fixes become the software. Vinny's
pairing is obvious once said: run the mystery shopper first, and the report **is** the pitch for
the conversion agency.

## 8. On building on an experimental feature

The objection and the answer, verbatim, because this is the reusable part:

> *"I can just see the comment of someone saying, well, it's an experimental, it's so experimental."* … *"Why even bother playing with this stuff?"*

> *"Because the arbitrage exists when it's experimental."*

> *"So I wouldn't fade this personally."*

To try the demo today you must turn it on yourself:

> *"go into Chrome Flags, enable WebMCP support, and go into Chrome Inspect and allow remote debugging."*

Demo store (checked 2026-08-28, HTTP 200): **https://crema-and-co-client.fly.dev** — the page
carries a GitHub-repo button next to the WebMCP tools pill, so the implementation is clonable.

## Gegenprobe — was ausserhalb der Folge nachweisbar ist

Nicht aus dem Transkript, am 2026-08-28 direkt an der Quelle geprueft. **Die Datumsangabe in der
Folge stimmt nicht.** Vinny sagt *"they made the proposal two years ago"* und *"it launched in
February, joint effort from Microsoft and Google"*.

- Das Spezifikations-Repo `webmachinelearning/webmcp` (W3C Web Machine Learning Community Group)
  wurde am **05.08.2025** angelegt — also gut ein Jahr, nicht zwei. Letzter Push: 26.08.2026.
- **Der Google-und-Microsoft-Teil stimmt:** Origin Trial live in **Chrome 149** und in
  **Edge 150**. Die Monatsangabe „February" laesst sich an keiner dieser Quellen belegen.
- Weiter unterstuetzt: **ChatGPT Desktop** und experimentell **Brave Leo**. Firefox und Safari
  haben nur einen `standards-positions`-Eintrag, also keine Unterstuetzung.
- chromestatus fuehrt das Feature als **„Proposed"**, die Spezifikation als *„being incubated in a
  Community Group"*. Das ist der ehrliche Reifegrad: kein Standard, kein Default, ein Origin Trial.
- Erklaerer + Implementierungsstand: https://github.com/webmachinelearning/webmcp

Fazit fuer die Bewertung der beiden Geschaeftsideen: die Technik ist echt und von zwei Browser-
Herstellern getragen, aber sie steht **hinter einem Flag**. Ein Kunde, der heute dafuer zahlt,
kauft Vorbereitung, keinen Traffic — und genau so muss man es ihm sagen.

## Insights for me

- **Das ist dieselbe These wie die Cloudflare-Folge vom 10.08., eine Etage tiefer.** Dort war das
  Produkt „agent readiness" als Beratung, hier ist es eine Browser-Schnittstelle. Der verkaufbare
  Satz ist in beiden Faellen derselbe: die Seite ist fuer Menschen gebaut und der naechste Besucher
  ist keiner.
- **Was hier konkret anschlussfaehig ist: solytics.de.** Eine Handvoll WebMCP-Tools auf der
  Firmenseite (Leistungen filtern, Kontakt anfragen, e-invoice-Fragen beantworten) kostet wenig,
  ist echt vorzeigbar und passt zum Positionierungssatz „AI-Beratung". Es ist ausserdem das
  seltene Beispiel, wo Bauen *ist* Distribution: das Artefakt selbst ist der Beleg im Verkauf.
- **Der Mystery Shopper ist die bessere der beiden Ideen und braucht WebMCP gar nicht.** Er misst
  nur, ob ein Agent den Kaufweg schafft — das laesst sich heute mit computer use gegen jede Seite
  fahren, ohne Flag und ohne Kunde, der etwas einbauen muss. Und es ist exakt die Bauart, die hier
  schon steht: `tools/paywall-health-check.py` misst genau das fuer die eigenen Extensions.
  Der Sprung von „mein eigener Kaufweg" zu „dein Kaufweg, als Bericht" ist klein.
- **Nicht ablenken lassen.** Ein Flag-Feature ist keine Distribution. Der Engpass bleibt, dass
  niemand die fertigen Produkte findet.
