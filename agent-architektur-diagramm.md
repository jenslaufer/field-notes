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
Agenten betreibt, lernt daraus nichts Neues über den Bau. Zwei Stellen sind sogar angreifbar:

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

## Der Baustein, den das Diagramm nicht hat

**„Output" ist im Bild ein Endknoten.** Der Pfeil zeigt hinaus, und dort hört das Diagramm auf.
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
- **Ein Diagramm, das für alles gilt, unterscheidet nichts.** Vor der nächsten „universellen"
  Architektur die Gegenprobe: Was schließt sie aus? Schließt sie nichts aus, ist sie Dekoration.
- **Verteilungs-Beobachtung:** 2.060 Speicherungen bei 661 Likes — dreimal so oft gespeichert wie
  geliked. Bei Referenzgrafiken ist Speichern das echte Signal, nicht das Like. Wer so etwas
  baut, baut für den Wiederbesuch, nicht für den Daumen: eine gute Übersichtsgrafik ist ein
  Lead-Magnet ohne Formular. Vergleichbar mit dem Listicle in
  [`claude-prompt-commands.md`](claude-prompt-commands.md) — dort 1.471 Likes für dieselbe
  Bauform: einfache Tabelle, klares Nutzenversprechen.

*Erfasst 2026-09-01 aus einem Screenshot; die Bausteine sind verbatim aus dem Bild, die Zuordnung
zu unserem Code gegen den Baum geprüft.*
