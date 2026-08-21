---
title: "How I Use Skills + AI Agents to Run My Life"
podcast: "The Startup Ideas Podcast"
host: "Greg Isenberg"
guest: "Remy (\"AI with Remy\")"
source: "https://www.youtube.com/watch?v=xHsftiyT9pQ"
published: 2026-08-19
captured: 2026-08-21
duration: "32:27"
transcript: "kome.ai API on the YouTube video (6,629 words, hasMore=false — full episode)"
related: "ai-agent-workforce-allie-k-miller.md, grok-bot-agent-team-newsletter-billy-howell.md, last-30-days-skill.md, graph-engineering-clearly-explained.md"
---

# How I Use Skills + AI Agents to Run My Life

> The title undersells it. This is not a life-admin episode — it is one narrow argument:
> **a skill that lives only on your own machine is worth a fraction of the same skill in a
> git repo that everyone (and every machine) installs as a plugin.** Remy calls the current
> state the *"Microsoft Word era of skills"*: everyone builds valuable SOPs, they sit on
> laptops, and there is no source of truth. His fix is three steps — put the skills in a
> GitHub repo, add two JSON files so it registers as a plugin marketplace, have everyone
> install it with auto-update on. Everything else in the episode is texture around that.

**Source note:** written from the full YouTube transcript (kome.ai, `hasMore=false`,
6,629 words), not from show notes. Two speakers; the `>>` markers are unreliable, so
attribution follows content.

**ASR garbles.** `codeex` / `codecs` = Codex · `claude`/`cler` = Claude · `Verscell` = Vercel
(read ad) · `Cory Haynes` = Corey Haynes · `Matt PCO` = likely Matt Paulson/PCO, unresolved ·
**`Russ Mike`**, cited as the origin of *"thin agents, thick skills"* — a creator handle the
model mangled, **not resolved, so not attributed to a real name below.**

## 1. What a skill is — the bookshelf picture

> *"But skills are literally just SOPs for AI."*

The frame that makes it click, and worth stealing for explaining this to anyone:
the agent is the most capable employee you ever hired, sitting at a desk. The computer with
the tools plugged in is the MCPs. The instructions file is what he reads before every task.
And behind him is **a bookshelf of SOPs — the skills.** The name and description in the
frontmatter are *"what sits on the spine of all the books"*; the body is only opened when he
decides he needs it.

That spine/body split is the whole context economics of skills in one image: descriptions are
always loaded, bodies are not.

The failure it fixes: without a skill you re-explain your preferences (colours, logo, price at
the bottom not the top) every session, land on something good, and lose all of it next week.
His demo one-shot a branded sponsorship proposal with no re-explaining. Greg's addition:
*"a lot of people use AI and they get slop and a big reason is they don't have tight skills."*

His yardstick: **a good skill saves ~2 hours a week**, and they stack.

## 2. The actual argument: AI is still single-player

> *"We're kind of in our Microsoft Word era of skills at the moment."*

The analogy: pre-Google-Docs, a Word file lived on one machine, you mailed copies around,
and there was no source of truth. Skills are there now — your team builds brilliant ones and
they die on individual laptops.

The three sharing routes he tried and why the first two fail:

| Route | Why it breaks |
|---|---|
| Zip it, send on Slack/email | The copy never updates. Their edits never come back. Ten forks, no truth. |
| Google Drive / Dropbox / Obsidian folder | Claude only reads its own `skills` folder → symlink hacks. Survives a small technical team; breaks the moment a non-technical marketer joins. Obsidian adds an install for everyone. |
| **GitHub repo → plugin marketplace** | Works. Source of truth, version control, auto-distribution. |

## 3. The setup, concretely

1. Push all skills into one repo (his: `team-skills`), foldered **by department** — brand,
   content, newsletter, marketing, general, finance.
2. Two small JSON files turn the repo into a **marketplace**. He is blunt that he does not
   know how they work and does not need to: *"I just got Claude to set it up for me."*
3. In Claude Code: `/plugin` → marketplaces → add marketplace → paste the repo URL.
4. **Auto-update must be enabled on every install.** Without it the whole thing degrades back
   to the zip-file problem.

The mental model he gives the non-technical listener: **the marketplace is the App Store, the
plugins are the apps.** Splitting by department is access control — the copywriter does not
install the finance plugin.

Works in **Codex** too, tested by him; he assumes other harnesses behave similarly but has not
checked. On a Claude enterprise account you can push organisation plugins so non-technical
staff never open a terminal at all.

**Second repo, private.** He keeps `remy-skills` separate for personal SOPs (inbox triage,
morning brief) and for skills downloaded off the internet that he is not ready to roll out.
Why in the cloud at all if nobody shares it? Two reasons: cloud agents on a VPS can reach it,
and —

> *"I remember it was about two months ago, Claude deleted my Claude folder with 150 skills
> with like probably 500 plus hours of work into it and I had no backups"*

He does not treat that as a funny anecdote and neither should anyone: it is the argument for
version control stated as a loss.

**Ownership.** The repo sits in his GitHub *organisation*. If an employee builds a valuable
skill and leaves, the company keeps it. He thinks skills will end up as booked enterprise
value — *"the same way you have SOPs to train employees to do tasks."*

## 4. Don't start from scratch

Corey Haynes' marketing skills, The Boring Marketer's skills — trusted creators publish skill
sets. Download those as the foundation, then add your own on top, then distribute the whole
bundle to the team.

## 5. How many skills, and how to cut them

His rule: **anything repeatable that is not physical becomes a skill.** When he finishes a task
with Claude and knows it will recur, he says *"turn this into a skill"* — which is how he got
to 150.

**Skill vs. skill chain:** one large process is one skill *unless you will ever want to run a
sub-process alone.* His YouTube publish workflow is a chain — an orchestrator skill that runs
titles, thumbnails, descriptions in sequence — precisely because some days he only wants
thumbnails.

> *"thin agents, thick skills"*

Lean agent instruction files, fat and very detailed skills. Then any harness can run the skill
and get the same output.

## 6. Two additions worth copying outright

**(a) The self-improvement loop, pasted at the bottom of every `SKILL.md`.** At the end of every
run, before finishing, the skill asks itself:

- *"did any step fail or need a workaround"*
- *"did the user correct reject, you know, anything meaningful"*
- *"did you discover something a future run might need?"*

…and only proposes a change if it is substantial enough. He gets one or two suggestions per
run and says yes or no. Real example the same day: a team member hit an image-upload error in
Resend, found a workaround, the skill updated itself, and **the fix propagated to everyone's
machine on next use.** That is the multiplayer payoff in one concrete event.

**(b) A usage hook.** Every skill invocation fires a hook that tallies it, per team member.
Purpose is not vanity — it is the cull: *"show me all the skills that I haven't touched once
and they can probably go"*, so the stack does not bloat. Greg's addition, which is the better
half of the idea: **show me the skills I'm not using that I should be.**

He also built a web UI over the repo — the repo is the backend, the app renders the skill
graph (which skill calls which), a library view, and an *ask* box that searches the company's
own skill library: *"I've done the weekly research for the newsletter"* … *"what skills should
I run next?"* Onboarding aid for non-AI-native hires more than a power feature.

## 7. Greg's closing frame

Software always starts single-player and goes multiplayer — *"we needed Photoshop first before
we did Figma."* His read: AI is at that hinge now, and the tooling for multiplayer AI is the
opportunity.

---

## Relevance for Jens

**Der Kern der Folge ist bei uns seit Monaten gebaut — die Verteilung fehlt trotzdem.**

| Remys Schritt | Unser Stand |
|---|---|
| Skills in einen GitHub-Repo, eine Quelle der Wahrheit | **Da.** `~/.claude` ist ein Repo → `github.com/jenslaufer/claude`, sauber, 0 ahead/behind |
| Versionierung als Schutz gegen den gelöschten Ordner | **Da**, aus demselben Repo |
| Repo als Marketplace/Plugin ausliefern | **Registriert, aber leer**: `jenslaufer/plugins` und `jenslaufer/plugins-private` stehen seit 19.07.2026 in `known_marketplaces.json` und enthalten **0 `SKILL.md`** — nur README und LICENSE |
| Nutzungs-Hook, um ungenutzte Skills zu finden | **Da und besser**: `tools/skill-usage.py` misst aus 803 Transkripten, kein Hook nötig |
| Self-Improvement-Block am Ende jedes Skills | **Fehlt bei uns.** 51 von 118 `SKILL.md` haben `## Operational Self-Improvement` — **alle 51 stammen von gstack**, keiner von unseren eigenen |

**Die Zahl, die die Folge für uns aufmacht** (`tools/skill-usage.py`, 21.08.):
**133 von 162 Skills wurden nie aufgerufen.** Der Skill-Index kostet **~8.658 Token pro Sitzung**,
davon **~6.716 (77 %)** für nie aufgerufene Skills. Meistgenutzt: `investments` 30 ·
`firecrawl-search` 28 · `firecrawl-scrape` 16 · `test-driven-development` 8 · `telegram` 8.

**Aber nicht löschen, was nur still ist.** `~/.claude/CLAUDE.md` hält schon fest: Null Aufrufe
*bepreist* einen Skill, es *beurteilt* ihn nicht — wrapper-getriebene (ibkr, enablebanking) und
ereignisgetriebene (jahresabschluss, kontoauszug, betriebspruefung) lesen sich konstruktionsbedingt
als Null. Der Prune vom 07.07. hat genau diesen Fehler gemacht und drei benutzte Agents gekappt.
Die 6.716 Token sind der Preis, nicht das Urteil.

**Das Team-Argument der Folge zielt bei uns woanders hin.** Jens hat kein Team — aber er hat
Maschinen: den Mini-PC-Runner, die Fabrik-Worker, Cloud-Sitzungen. Für die ist „ein Skill, der
nur auf einer Maschine liegt“ dasselbe Problem, das Remy für Kollegen beschreibt. Der leere
Marketplace ist damit kein Schönheitsfehler, sondern der Grund, warum ein Skill heute über
`git pull` auf einem Dotfile-Repo verteilt wird statt über einen Kanal mit Auto-Update.

**Direkt kopierbar, in dieser Reihenfolge:**

1. **Self-Improvement-Block an unsere eigenen Skills** — der billigste Zug der Folge. Kostet
   ~6 Zeilen pro Skill, und er ist die einzige Mechanik, die einen Skill besser macht, ohne dass
   jemand daran denkt. Beleg, dass es trägt: der Resend-Fehler, den ein Teammitglied fand und der
   ohne weiteres Zutun bei allen ankam.
2. **`jenslaufer/plugins` füllen** — der Weg ist gebaut und wird nicht benutzt.
3. **Greg's Frage in `skill-outcomes.py`**: nicht nur „welche Skills nutze ich nie“, sondern
   „welche hätte ich nutzen sollen“. Die erste Frage beantwortet unser Werkzeug schon.

Nicht kopieren: die Skill-Graph-Web-App. Sie ist Onboarding-Hilfe für nicht-KI-native
Mitarbeiter — die Rolle existiert hier nicht.
