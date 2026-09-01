---
title: "Ein Architekturdiagramm für jeden KI-Agenten (Instagram)"
type: "screenshot distillation + Abgleich gegen den eigenen Agenten"
source: "Instagram @Codewithbrii — „One Architecture Diagram That Explains Every AI Agent""
captured: 2026-09-01
---

# Ein Architekturdiagramm für jeden KI-Agenten

**Quelle:** Instagram-Post von @Codewithbrii, „One Architecture Diagram That Explains Every AI
Agent" (Screenshot 01.09.2026, 16:11 Ortszeit). Untertitel im Bild: *„The universal anatomy of
**any AI agent**, showing the common pattern every agent follows, regardless of specific tools or
frameworks."* Reaktionen: 661 Likes, 6 Kommentare, 151 Mal geteilt — und **2.060 Mal gespeichert**.

## Was das Diagramm zeigt

Sieben Bausteine, im Kreis verdrahtet. Verbatim aus dem Bild:

| Baustein | Phase | Inhalt laut Diagramm |
|---|---|---|
| **Input** | — | User text, API calls, sensor data, events, triggers |
| **Perception Layer** | Input | nimmt das Eingehende auf |
| **Reasoning Engine / LLM** | Think | Chain-of-Thought / ReAct / Plan-and-Execute |
| **Memory System** | Remember | *Short-term:* conversation context, working state · *Long-term:* vector store, episodic memory, learned patterns |
| **Planning Module** | Plan | „Breaks the goal into sub sub-tasks" [sic] — Step 1 → Step 2 → Step 3 |
| **Tool Execution / Action Layer** | Act | Model Context Protocol · API calls · Code execution · Database queries · File system · External services (GitHub, etc.) |
| **Observability Layer** | Observe | Traces, Logs, Metrics, Cost tracking, Latency monitoring |

Dazu ein roter Balken über die volle Höhe, **Guardrails & Safety**: Permissions, Approval gates,
Content filtering, Rate limits, Human-in-the-loop — unten noch einmal als „Human-in-the-loop
checkpoints" am Übergang zu den Werkzeugen.

**Die zwei Entscheidungspunkte sind der eigentliche Inhalt:**

1. **„Can I answer directly?"** — JA → direkt Output. NEIN → Planning Module.
2. **„Goal achieved?"** — kommt **zweimal** vor: einmal nach den Werkzeug-Ergebnissen, einmal vor
   dem Output. NEIN → zurück in die Reasoning Engine. Das ist die Schleife.

Kasten unten rechts: *„This pattern applies to: ChatGPT, Claude, Copilot, Custom Agents,
Multi-Agent Systems, Autonomous Workflows"* (zwei Wörter vom Like-Button verdeckt, aus dem
Kontext ergänzt).

## Ehrliche Einordnung

Das Diagramm ist solide und richtig — aber es ist eine **Landkarte, kein Fund**. Wer schon einen
Agenten betreibt, lernt daraus nichts Neues über den Bau. Zwei Stellen sind sogar angreifbar
(die dritte und größte — es fehlen Sensoren und Aktoren — steht weiter unten in einem eigenen
Abschnitt):

- **„Vector store" steht als Organ da, wo eine Implementierung gemeint ist.** Long-term memory
  braucht keinen Vektorspeicher. Otto hat null Embeddings und null Vektor-Datenbank
  (`grep -i "vector\|embedding\|faiss\|chroma"` über `tools/`, `scripts/`, `prompts/`: kein
  Treffer) und trotzdem funktionierendes Langzeitgedächtnis — kuratiertes Markdown mit einem
  Index, den ein Mensch lesen kann. Der Vektorspeicher ist eine Wette darauf, dass Ähnlichkeit
  die richtige Abrufregel ist; ein handgeschriebener Index ist die Wette, dass **Auswahl** es ist.
- **Der Kasten „gilt für ChatGPT, Claude, Copilot …" ist keine Bestätigung, sondern die
  Schwäche.** Ein Muster, das auf alles passt, sagt über den Einzelfall nichts. Die interessanten
  Unterschiede zwischen einem Chatbot und einem Agenten, der nachts allein läuft, sind genau die,
  die das Diagramm wegabstrahiert.

## Otto gegen das Diagramm

Alle sieben Bausteine existieren hier — nur trägt keiner den Namen aus dem Bild:

| Diagramm | Bei uns |
|---|---|
| Perception Layer | `scripts/telegram-bot.py`, `scripts/inbox-watcher.sh`, systemd-Timer (5 min) |
| Reasoning Engine | `claude` CLI, Modell aus `state/model.conf` (mit Fallback-Fenster) |
| Memory, short-term | Sitzungskontext + `state/memory/YYYY-MM-DD.md` |
| Memory, long-term | `state/memory/MEMORY.md` (Hooks) + `learnings.md` (Volltext) — **kein vector store** |
| Planning Module | `prompts/session.md`, Schleife Checken → Reagieren → Gestalten |
| Tool Execution | 68 Werkzeuge in `tools/`, agent-task-YAMLs, `gh`, MCP |
| Guardrails & Safety | `profiles/assistant.md` → „MUST NOT" · `tools/quota-check.sh` (50 Sitzungen/Tag) · `/ops pause` |
| Observability | `state/journal.md`, `scripts/watchdog.sh`, `tools/unit-health-check.py`, `tools/context-budget.py` |

**Was uns tatsächlich fehlt:** von der Observability-Zeile haben wir Traces und Logs (Journal),
Metriken und Health — aber **kein Cost tracking und kein Latency monitoring** pro Sitzung.
`context-budget.py` misst den Kontext, `quota-check.sh` zählt Sitzungen; was eine Sitzung an
Token kostet und wie lange sie braucht, misst niemand. Das ist der einzige Punkt, an dem das
Diagramm uns eine echte Lücke zeigt.

## Was fehlt: Sensoren und Aktoren (Einwand Jens, 01.09.)

Jens' Einwand am Diagramm: **es hat keine Sensoren und keine Aktoren.** Das klingt nach einem
fehlenden Kasten, ist aber der Grund für fast alles andere, was hier auffällt.

**Die Stelle, an der man es sieht.** Im Bild steht „sensor data" als *eine Sorte Input*, neben
„user text" und „API calls". In der klassischen Definition (Russell/Norvig) ist der Sensor ein
**Organ des Agenten** — das, womit er misst; was darüber ankommt, heißt Perzept. Das Diagramm
macht aus dem Organ einen Eintrag in einer Datenliste. Damit gibt es nur noch eine Art, wie Welt
in den Agenten kommt: **jemand schickt sie ihm.** Eine Linie für „der Agent geht von sich aus
nachsehen" existiert nicht.

**Das ist keine Spitzfindigkeit, sondern bei uns die Mehrheit der Werkzeuge.** Gezählt über
`tools/` (68 Stück):

| Klasse | Anzahl | Beispiele |
|---|---|---|
| **Sensoren** — messen etwas draußen, das niemand geschickt hat | **27** (25 über Netz, 2 die Maschine) | `cws-watch` (Store-Rang), `amo-watch` (Firefox-Listung), `stripe-watch` (Abos), `gsc.py` (Impressions), `check-links` (löst die URL auf?), `koordinaten-check` (liegt der Punkt auf einem Treppenlauf?), `creds-health-check`, `unit-health-check` |
| **Aktoren** — verändern etwas draußen, nicht rücknehmbar | **7** | `telegram-send.sh`, `telegram-doc.sh`, `telegram-photo.sh`, `alert-email.sh`, `deploy-landing-page.sh`, `fmap-bewerbung-send.py`, `fmap-postfach-send.py` |
| Rest — rechnen über eigenen Zustand | 34 | `klartext`, `context-budget`, `ortszeit`, `waiting-dupe-check` … |

**Keiner der 27 Sensoren hätte im Diagramm einen Platz.** Sie haben keinen Input, niemand löst sie
aus, sie stehen an keinem Pfeil. Der Store-Rang ändert sich, ohne dass jemand eine Nachricht
schickt — genau dafür gibt es sie.

**Auf der Aktor-Seite macht das Diagramm den umgekehrten Fehler: es wirft Lesen und Schreiben in
einen Kasten.** Unter „Tool Execution / Action Layer" stehen `Database queries` und
`External services` nebeneinander — eine Abfrage und eine Veröffentlichung als dasselbe. Diese
Unterscheidung ist aber die **gesamte Grundlage unserer Sicherheitsregeln**: die MUST-NOT-Liste
(kein Geld ausgeben, keine Repos löschen, keine Credentials ändern, keine PRs mergen) beschränkt
ausschließlich Aktoren. **Kein einziger Sensor ist eingeschränkt** — messen darf ich alles.

Deshalb ist auch der rote Balken falsch gezeichnet. „Guardrails & Safety" läuft im Bild über die
**volle Höhe**, also gleichmäßig über alles. Bei uns sind die Guardrails ein **Punkt, kein
Balken**: 7 von 68 Werkzeugen verändern etwas draußen, und **14 Werkzeuge schicken ihre Meldungen
durch dieselben drei Sende-Skripte**. An genau diesem Engpass sitzen `klartext.py`,
`check-links.py` und das Zustellprotokoll. Ein Gate an einer Stelle deckt vierzehn Aufrufer ab —
das geht nur, weil der Aktor ein Nadelöhr ist und kein Balken.

**Und die Folge, die am meisten kostet: ohne Sensoren und Aktoren gibt es keine Umwelt — also
schließt sich die Schleife im Kopf des Agenten.** Das Diagramm fragt „Goal achieved?" und geht
zurück in die Reasoning Engine. Es misst nie die **Wirkung der eigenen Handlung**. Ein Agent, der
so gebaut ist, glaubt seinem eigenen Tätigkeitsbericht.

Das ist die Ursache für den Befund im nächsten Abschnitt: „Output" ist nicht deshalb ein Endknoten,
weil ein Kasten vergessen wurde, sondern weil **der Rückweg aus der Welt fehlt**. `entwurf-offen`,
`zusage-check`, `inbox-offen` und `foto-antwort-check` tun alle dasselbe — sie messen nach, was der
Agent zu tun behauptet hat. In der Diagrammlogik sind sie überflüssig; bei uns sind sie die
Werkzeuge, die die teuersten Ausfälle gefunden haben.

## Der Baustein, den das Diagramm nicht hat

**„Output" ist im Bild ein Endknoten.** Der Pfeil zeigt hinaus, und dort hört das Diagramm auf.
Das ist der Spezialfall der fehlenden Aktoren aus dem Abschnitt davor: kein Aktor, kein Rückweg.
Genau dahinter liegen unsere teuersten Ausfälle: die Arbeit war fertig und richtig, und der
Empfänger hat nie etwas bekommen.

- Eine Sitzung starb am Zeitlimit mit einer **fertigen, geprüften Korrektur** im Ordner. Beide
  Sendegates grün, Text final — nur der Send fehlte. Die Nachricht ging 47 Minuten zu spät raus,
  weil zufällig jemand nachsah. → `tools/entwurf-offen.py`
- Eine Zusage von 03:39 blieb **5 h 42 min** unberichtet, bei 21 Sendungen dazwischen — alle zu
  anderen Themen. → `tools/zusage-check.py`
- Eine Inbox-Zeile saß **38 Minuten** unbeantwortet, während zwei Sitzungen die Zeile davor und
  die danach korrekt abarbeiteten. → `tools/inbox-offen.py`

Von 68 Werkzeugen sind **27 Prüfer und Wächter** — kein einziger davon hat im Diagramm einen
Kasten. Sie beantworten eine Frage, die zwischen „Goal achieved?" und „Output" nicht vorkommt:
**Ist das Ergebnis angekommen, und stimmt es noch?** Ein Agent, der nur bis zum Output denkt,
hält eine erledigte Aufgabe und eine zugestellte Aufgabe für dasselbe. Das sind sie nicht.

Zweite Auslassung derselben Art: die Schleife prüft „Goal achieved?", nie „war die Antwort
wahr?". Der Unterschied ist nicht theoretisch — ein Prüfer, der den Link im Text gar nicht sieht,
meldet „0 Links geprüft, alle erreichbar" und ist nach der Diagrammlogik fertig.

## Mitnehmen

- **Als Checkliste brauchbar, als Bauplan nicht.** Der ehrliche Nutzen: einmal die sieben Kästen
  durchgehen und fragen, welcher bei uns nur behauptet ist. Ergebnis dieses Durchgangs: Cost und
  Latency sind unbelegt.
- **Der Test für jedes Agenten-Diagramm: wo ist die Umwelt?** Ohne Sensoren und Aktoren gibt es
  keine, und dann schließt sich die Schleife im Kopf — der Agent prüft sein Ziel, nie die Wirkung.
  Bei uns: 27 Sensoren, 7 Aktoren, und die Guardrails sitzen an einem Nadelöhr statt über der
  ganzen Breite.
- **Ein Diagramm, das für alles gilt, unterscheidet nichts.** Vor der nächsten „universellen"
  Architektur die Gegenprobe: Was schließt sie aus? Schließt sie nichts aus, ist sie Dekoration.
- **Verteilungs-Beobachtung:** 2.060 Speicherungen bei 661 Likes — dreimal so oft gespeichert wie
  geliked. Bei Referenzgrafiken ist Speichern das echte Signal, nicht das Like. Wer so etwas
  baut, baut für den Wiederbesuch, nicht für den Daumen: eine gute Übersichtsgrafik ist ein
  Lead-Magnet ohne Formular. Vergleichbar mit dem Listicle in
  [`claude-prompt-commands.md`](claude-prompt-commands.md) — dort 1.471 Likes für dieselbe
  Bauform: einfache Tabelle, klares Nutzenversprechen.

*Erfasst 2026-09-01 aus einem Screenshot; der Abschnitt zu Sensoren und Aktoren geht auf Jens'
Einwand vom selben Tag zurück, die Zahlen sind über `tools/` nachgezählt; die Bausteine sind verbatim aus dem Bild, die Zuordnung
zu unserem Code gegen den Baum geprüft.*
