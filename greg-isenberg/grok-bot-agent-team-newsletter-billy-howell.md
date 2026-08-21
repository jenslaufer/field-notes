---
title: "Grok Bot: How to Build a 1-Person $10M Company"
podcast: "The Startup Ideas Podcast"
host: "Greg Isenberg"
guest: "Billy Howell (The Arlington Bagel, ex-The Rundown)"
source: "https://www.youtube.com/watch?v=qQluNEfSVHk"
published: 2026-08-21
captured: 2026-08-21
duration: "44:21"
transcript: "kome.ai API on the YouTube video (7,629 words, hasMore=false — full episode)"
related: "skills-plugins-team-distribution-remy.md, ai-agent-workforce-allie-k-miller.md, buzz-agentic-slack-jack-dorsey.md, ai-agents-are-the-new-saas.md"
---

# Grok Bot: How to Build a 1-Person $10M Company

> Billy Howell runs a 6,000-subscriber local newsletter — *The Arlington Bagel* — on a team of
> Grok Bot agents after his human intern left. The tool talk is the wrapper; the payload is a
> **four-week operating rhythm for standing up an agent team** that is tool-independent:
> build the team in week one, execute with **no tinkering** in week two, hire and fire in week
> three, automate in week four. The sharpest lines in the episode are about restraint —
> one project per account, only add an agent when it is mission-critical, and never let the
> agent make the decision you are supposed to make.

**Source note:** written from the full YouTube transcript (kome.ai, `hasMore=false`, 7,629
words), not from show notes. Two speakers; `>>` markers unreliable, attribution follows content.

**ASR garbles.** `Grockbot`/`Crockbot`/`Rockbot` = **Grok Bot** · `Arag Eisenberg` = Greg
Isenberg · `Beehive` = beehiiv · `Calendarly` = Calendly · `Asian teams` = agent teams ·
`Spotify` in the closing line = Shopify (context). **Note the title drift:** the feed returned
**Grok Bot: Build a $100K+ Solo AI Agent Business** on one fetch and
**Grok Bot: How to Build a 1-Person $10M Company** minutes later — YouTube A/B-tests titles.

**Product check (nicht aus der Folge, separat geprüft 2026-08-21).** Grok Bot ist real, von
xAI/SpaceXAI, Beta seit **11.08.2026**; jeder Bot bekommt eine eigene Cloud-VM, die weiterläuft,
wenn der Laptop zu ist. **Der Preis ist unbestätigt:** Greg sagt in der Folge *"it's, you know,
$200, $300 a month"*, die erreichbaren Preisseiten widersprechen sich (120 / 200 / 300 USD, teils
mit sichtbar durcheinandergeratenen Produktnamen). Also: Größenordnung 200–300 USD/Monat,
**keine Zahl als Tatsache zitieren, bevor die offizielle Seite gelesen ist.**

## 1. Why the constraint is the feature

Grok Bot caps how many agents you can have — Billy counts roughly 76–88 possible unique agents,
because they are identified by shape-and-colour combinations.

> *"But the point is it it's all built around constraints."*

His argument: if you use a lot of AI tools you end up with an agent per stray thought, a ChatGPT
thread you never return to, a project folder you rediscover in two weeks. One thread per bot,
DM-style, forces you to be mission-oriented. He also defends the visual design seriously —
colour and shape are all the brain needs to tell teammates apart, versus grey threads.

Greg's placement of the product: the non-technical version of Jack Dorsey's Buzz — the
Slack-like agent-team experience for people who bounced off the technical one.

## 2. One project per account

> *"you don't have enough tokens to build four businesses as one at once"*

Two separate costs, and he is careful to distinguish them: you go into token debt, **and** you
get context bleed that makes every agent worse. Newsletter plus Twitter plus receipt-sorting in
one workspace means context bloat and stray files tripping the agents up.

He is so strict about this that he pays for a **second account** just for the Shopify
experiment, to keep the context separate.

Measured: one newsletter, heavy first week, ~10 % of the weekly allowance left.

## 3. The build: chief of staff first, then earn each agent

Day one, if you already have a business: give the chief of staff access to the existing
docs — Notion, Slack, Gmail — and ask for an **audit**, not for work. Then:

> *"I need you to tell me the top three agents that you suggest we create first for this team
> to drive revenue."*

The mission is stated as revenue, up front. His chief of staff came back with: a research agent
(the newsletter runs on three weekend things + new-restaurant news), a sales agent, and a
**beehiiv expert** — a platform specialist, so the chief of staff does not have to be expert in
everything. Generalises: if your business hangs on one platform (Shopify, beehiiv), that
platform gets its own agent.

**The rule for creating any further agent — the best operational idea in the episode:**

> *"Have your chief of staff do that exact task once and then once it does it and you've
> reviewed it and it worked"* … *"now create an outbound bot that does that thing that you just
> did."*

Greg's restatement: you **earn the right** to create an agent by having done the job once,
manually, through the chief of staff, and reviewed the output. Not before.

Why not just pile work on the chief of staff: you would not have the COO making Instagram posts
daily — *"like a real person, it takes up mental bandwidth for that agent."*

## 4. The pitfall: the agent making your decision

> *"Agent hasn't been able to make a choice for 3 weeks."*

Three weeks lost to *where should newsletter content live* — Notion database, local files,
Google Sheets. He ended it by deciding: Notion, no more tinkering.

> *"So, at some point, you're the person that has to make the decision, not the agent."*

He names the underlying trap as shopping around for the perfect solution — a rabbit hole AI
makes cheaper to enter and therefore more dangerous.

The same failure in a second costume, later: he catches himself producing a report, putting it
on the desktop, then into Notion — *"you end up just working on the system more than the actual
output."* His fix is a standing instruction: work on your own computer, and only when it is
reviewed does it come to me in chat and go to Notion.

## 5. The four-week rhythm

Greg's recap, which Billy accepts verbatim:

> *"build team week one, execute, no tinkering, week two, week three, hire, fire, week four,
> automate"*

Week two is the load-bearing one and the one everybody skips: no new agents, no messing with
skills, maybe a connection — execution only. *"learned how to fly the plane"*

**Week four, the automation prompt he actually used:**

> *"hey based on how we ran this this week and our agent team what are some routines we could
> set up to make progress while I am not working on this?"*

Routines are the product's cron jobs. Each agent gets a daily/weekly end-of-day brief:
current to-dos, what did you create today, what blockers — **five lines**.

> *"I think that you just five lines is all you need. More than that is you're just going to be
> burning tokens and context."*

And the chief of staff aggregates upward into:

> *"what's shipped, what's stuck, and what needs you"*

## 6. Adversarial review as a work-quality lever

Greg asks how to automate feedback on agent output. Billy's pattern — he flags it as general,
from Codex, not Grok Bot specific:

> *"create a a panel of sub agents … and have them do an adversarial review of your work. Do
> that in three rounds."*

Effect he claims: **from ~50 % done to ~90 % done**, replacing review he would otherwise do
painstakingly by hand. Companion move: when you *do* give detailed feedback manually, turn that
thread into a skill so another agent reviews *the way you review*.

## 7. Push deterministic volume off the expensive agent

He filters ~200 candidate news items with Grok Bot, then has a make.com + OpenAI-key automation
write the two-sentence blurbs.

Why not have the good agent do it: models are a black box, output drifts run to run, and
**business-critical formatting wants determinism** — *"once you've got a workflow that's working
for you, you want to get rid of all the ambiguity."* Plus cost: *"If you have a high performing employee, I don't
want to waste it writing little two sentence summaries"*

Order matters, and he says it explicitly: **build → execute → automate.** He earned the
automation by running the blurbs manually through the agent first.

## 8. Research discipline

> *"your task should not be open-ended when you're doing research or you're just going to end up
> doing research for two weeks"*

His template: here are three ideas — research each, tell me pricing, tell me cost, **give me
your top three recommendations**. *"Always ask for recommendations."* Concrete win: asked to
source a product in a category, the agent found Import Yeti on its own and read competitors'
supply chains and margins.

## 9. Anti-creep

> *"I'm so anti idea creep and agent creep because that's how you burn tokens."*

Only add an agent when it is genuinely needed. Instead of new agents, re-run the chief-of-staff
audit periodically: what do we add, what do we remove, **what should become a routine or a
skill**. Asked how to keep agents from grinding the same creative loop into slop, he refuses to
fake an answer: *"I don't, Greg, really."*

## 10. The business shapes he names

- **Newsletter** (local or niche) — sources list → research bot twice a week → cards in Notion →
  beehiiv. Sales agent monitors the inbox: it surfaced a missed inbound from a local bagel-shop
  owner and drafted the pitch. Outbound discipline: **five prospects Monday, top three get a
  custom ad package**, not 200 emails and three burner subdomains.
- **Directory** — Astro static site + Cloudflare + Porkbun + GitHub, one research agent writing
  one brand page a day, an engineer agent publishing. Greg's frame: a directory is curated data,
  a 10k–100k/month shape, and **AI search needs curation more, not less**. He calls
  newsletter + directory the lowest-barrier stack, monetising each other.
- **Shopify / physical** — his live experiment, on the second account. Rationale worth keeping:
  *"the cost of creating digital things is going to zero"*, so a physical brand you compound
  has friction others must also pay.
- **Site-builder stack as an internal tool** — he replaced Calendly with an Astro page on his
  own domain, agent-built from a phone on a beach in 2–3 hours, reviewing style variants as
  separate Cloudflare preview branches.

Closing instruction: pick **one** thing you have been thinking about and run it for a month,
*"versus trying a new tool and researching ideas for 4 weeks."*

---

## Relevance for Jens

**Grok Bot selbst kaufen: nein.** Was Billy für 200–300 USD/Monat beschreibt — Chief of Staff,
Fach-Agents, Routinen, Fünf-Zeilen-Briefings, Cloud-VM — läuft hier seit Monaten auf dem
Max-Abo: der Assistant-Daemon ist der Chief of Staff, `state/routines.md` sind die Routinen,
agent-tasks und Fabrik sind die Fach-Agents, das Telegram-Briefing ist der Fünf-Zeilen-Report.
Der eine Punkt, an dem Grok Bot etwas hat, das wir nicht haben: **die Agents laufen auf einer
Cloud-VM, unsere auf dem Mini-PC.** Das ist kein Feature-Neid, das ist der bekannte Single Point
of Failure — und die Antwort darauf ist nicht ein Abo, sondern der Punkt, den `watchdog.sh` und
`alert-email.sh` schon adressieren.

**Vier Praktiken, die wir noch nicht haben — mit dem Faden, an dem sie hängen:**

1. **„Den Agent erst verdienen“** — die Aufgabe einmal selbst durchziehen, das Ergebnis prüfen,
   *dann* den spezialisierten Agent bauen. Wir bauen Werkzeuge oft an Tag eins. Prüfbar an der
   eigenen Historie: die Werkzeuge mit den meisten Aufrufen (`investments` 30, `telegram` 8,
   `buchhaltung` 7) sind genau die, die aus wiederholter Handarbeit entstanden sind; die 133 nie
   aufgerufenen sind überwiegend auf Verdacht gebaut.
2. **Woche zwei: ausführen, nicht basteln.** Das ist die härteste Zeile der Folge gegen unser
   Muster. Die 100-Tage-Lektion (Verteilung schlägt Artefakt N+1) und Billys „no tinkering“
   sagen dasselbe aus zwei Richtungen.
3. **Der gegnerische Prüf-Panel in drei Runden** (50 % → 90 %). Wir haben die Mechanik im
   `Workflow`-Werkzeug und in `/code-review`, setzen sie aber fast nur auf Code an, nicht auf
   Texte, Analysen und Entwürfe — dort, wo die Zahl 50→90 herkommt.
4. **Teure Agents nicht für deterministische Massenarbeit.** Billys make.com-Zug entspricht bei
   uns dem LiteLLM-Proxy mit `simple`/`cloud-oss` — gebaut, laut CLAUDE.md **„not yet wired into
   the agents“**. Die Folge liefert das Kriterium, das bisher fehlte: automatisiere den Schritt
   erst, **nachdem** er manuell durch den guten Agent gelaufen ist, und nur, wenn Ambiguität
   schadet statt hilft.

**Die Directory-Idee mit Vorsicht — sie ist die Wette, die hier schon zweimal verloren wurde.**
Ein SEO-Directory ist dieselbe Autoritäts-Wette wie finanzkalkulatoren und health-calculators,
und deren Zahl steht: 28 Tage bis 28.07.2026 FK **4.161 Impressionen / 2 Klicks**, HC
**2.250 / 2 Klicks**. Neu an Billys Fassung ist nur der Preis der Inhalte, nicht die Verteilung —
und der Engpass war die Verteilung.

**Ein Anschluss, der wirklich neu ist.** Jens' Ärger über das 14-Extensions-Limit (Inbox 21.08.,
02:33 und 05:26) trifft auf den Befund der Sitzung vom 21.08. 22:0x: auf den Aufgaben-Suchen
gewinnen **Webseiten**, nicht Store-Listungen (0 von 9 / 0 von 7 / 0 von 10) — und eine Webseite
verbraucht **keinen** der 14 Plätze. Billys Astro + Cloudflare + Porkbun-Stack ist genau der
Bauweg dafür, agentengebaut in Stunden. Das ist kein Directory-Vorschlag, sondern derselbe
Extension-Nutzen auf einer Fläche, die nicht rationiert ist.
