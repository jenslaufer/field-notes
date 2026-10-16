---
title: "Zählen AGENTS.md, CLAUDE.md und Agent Skills 2026 noch?"
type: "paper survey"
papers: 30
captured: 2026-10-16
source: "arXiv abstract pages + Anthropic/OpenAI docs, all fetched 2026-10-16; second independent check pass (section 9)"
---

# Recherche: Zählen AGENTS.md, CLAUDE.md und Agent Skills 2026 noch?

Stand: 2026-10-16. Alle zitierten Papers wurden in dieser Sitzung auf arxiv.org abgerufen (Abstract-Seite). Zahlen stammen aus den Abstracts, nicht aus dem Gedächtnis.

## 1. Forschungsfrage

Verbessern Kontextdateien im Repo (AGENTS.md, CLAUDE.md, .cursorrules, copilot-instructions.md), Context Engineering und Agent Skills (SKILL.md) im Jahr 2026 die Arbeit von Coding-Agenten messbar? Was sagt die Forschung, was sagen Anthropic und OpenAI öffentlich?

Im Rahmen: Coding-Agenten (Claude Code, Codex, Cursor u. ä.), empirische Studien 2023 bis Oktober 2026, Herstellerdokumente und Vorträge.
Außerhalb: Fine-Tuning, RAG-Systeme ohne Agent, allgemeine Prompt-Technik ohne Bezug zu Dateien.

## 2. Kernaussagen (BLUF)

**Ja, es zählt noch, aber anders als 2025 beworben.** Eine Kontextdatei macht einen starken Agenten nicht zuverlässig klüger. Sie spart Zeit und Tokens, sie setzt Projekt-Eigenheiten durch, und sie kostet bei jedem Aufruf Kontext. Lange, generierte oder beschreibende Dateien helfen kaum oder schaden. Kurze, von Menschen geschriebene Dateien mit Befehlen, Verboten und nicht ableitbaren Eigenheiten helfen. Skills helfen, wenn sie kuratiert, fokussiert und gut beschrieben sind; wahllos installierte Skills schaden.

Die Belege im Einzelnen:

1. **Korrektheit steigt durch Kontextdateien meist nicht** (hohe Sicherheit, drei unabhängige Studien). Gloaguen et al. (ICLR 2026): kein genereller Anstieg der Erfolgsrate, aber über 20 % mehr Inferenzkosten; Repo-Übersichten helfen nicht. Khatri (2026): kein messbarer Effekt auf Korrektheit bei Claude Code und Codex. Arman et al. (2026): kompakte Doku schlägt das nackte Issue nicht.
2. **Effizienz steigt** (mittlere Sicherheit, eine Studie). Lulla et al. (2026): mit AGENTS.md 28,64 % kürzere Median-Laufzeit, 16,58 % weniger Output-Tokens, gleiche Erledigungsquote.
3. **Wie die Datei entsteht, entscheidet** (mittlere Sicherheit). Getestete und nachgeschärfte Anleitung hebt die Lösungsrate auf SWE-bench Verified von 25,5 % auf 33,0 % (Shepard et al.). Regeln, die einen konkreten Befehl oder Pfad nennen, wirken am stärksten (Wang et al., Skill-Revisionen).
4. **Verbote wirken, Gebote eher nicht** (mittlere Sicherheit, eine große Studie). Zhang et al. (5.000+ Läufe, Claude Opus 4.6): Jede einzeln nützliche Regel war ein Verbot („do not refactor unrelated code"), jede einzeln schädliche ein Gebot („follow code style"). Aber: Zufällige Regeln halfen gleich viel wie kuratierte (+13,8 pp) – der Effekt ist großteils „Priming", nicht Inhalt.
5. **Lange Dateien schaden, und sie wachsen trotzdem** (hohe Sicherheit). CLAUDE.md-Dateien wachsen über ihre Lebenszeit um +226 % (Chakrabarti, 1.867 Repos). 42 % der Dateien in 100 populären Repos zeigen „Context Bloat" (Santos et al.). Irrelevante Regeln senken die Befolgung (Liu et al.). Grundlagenforschung bestätigt: Leistung sinkt mit Kontextlänge (Lost in the Middle, NoLiMa, Chroma Context Rot) und mit Anzahl der Anweisungen (IFScale: beste Modelle 68 % bei 500 Anweisungen).
6. **Kuratierte Skills helfen im Schnitt deutlich** (hohe Sicherheit für den Mittelwert, große Streuung). SkillsBench: +16,6 pp (33,9 % → 50,5 %) über 18 Modell-Harness-Kombinationen; fokussierte Skills mit höchstens drei Modulen schlagen umfangreiche Pakete.
7. **Skills können auch schaden** (mittlere Sicherheit). WebDev-Skills senkten Pass@2 um 1,3–4,2 % und erhöhten die Token-Kosten um 72–394 % (Yang et al.). Bei 100 Skills im Pool sinkt die Treffergenauigkeit der Auswahl auf 3,3 % (Jiang et al.). Jeder fünfte Lauf nimmt bei ähnlichen Skills den falschen (Yan et al.).
8. **Sicherheitsregeln in Prosa sind keine Sicherheit** (mittlere Sicherheit). Nur 4–16 % der Sicherheitsregeln in CLAUDE.md haben eine passende eingebaute Sperre (Yan 2026). Durchgesetzte Prüfungen erreichen 88,3 % Regel-Einhaltung gegenüber 67,0 % nur per Prompt (ContextCov). 26,1 % der Marktplatz-Skills enthalten eine Schwachstelle (Liu et al.).
9. **Die Hersteller sagen dasselbe** (hohe Sicherheit, Primärquellen). Anthropic: „Bloated CLAUDE.md files cause Claude to ignore your actual instructions!" und „smallest possible set of high-signal tokens". OpenAI Codex: Skills laden zuerst nur Name und Beschreibung, höchstens 2 % des Kontextfensters; AGENTS.md wird bei 32 KiB abgeschnitten.

## 3. Detailanalyse

### 3.1 Helfen Kontextdateien bei der Korrektheit?

**Befund: im Mittel nein, bei starken Modellen und normalen Aufgaben.** Sicherheit: hoch.

- Gloaguen et al. testeten auf SWE-bench (mit LLM-generierten Dateien) und auf echten Issues aus Repos mit von Entwicklern geschriebenen Dateien. Abstract: „providing context files does not generally improve task success rates, while increasing inference cost by over 20% on average." Das gilt über mehrere Modelle und Agenten und für beide Dateiarten. Anweisungen werden befolgt; „repository overviews ... are not helpful". Schluss der Autoren: Kontextdateien sind nützlich für „non-standard coding practices".
- Khatri (Einzelautor, 288 Läufe, 17 Aufgaben): Kontextstrategie bewegt die Korrektheit nicht (Äquivalenztest: Effekt höchstens 10–15 pp). Agenten scheitern an Implementierungs-Können, nicht an fehlendem Repo-Wissen. Die echte AGENTS.md machte nie aus einem Beinahe-Treffer einen Erfolg. Kleine Stichprobe.
- Arman et al.: Wenn der Quellcode vorliegt, schlägt weder kompakte Doku noch abgerufener Kontext das nackte Issue. Negativbefund mit Positivkontrolle – methodisch sauber.

**Gegenbefund:** Lulla et al. messen Effizienz, nicht Korrektheit: −28,64 % Median-Laufzeit, −16,58 % Output-Tokens bei gleicher Erledigung. Shepard et al. zeigen mit einem kleineren Modell (Qwen3.5-35B-A3B): getestete Anleitung 33,0 % vs. 25,5 % ohne Anleitung (p < 0,001). Der Gewinn kommt daher, dass der Agent die richtige Datei findet – nicht von besseren Patches.

**Deutung:** Kontextdateien ersetzen kein Können. Sie verkürzen die Suche und setzen Eigenheiten durch. Schwächere Modelle profitieren eher. Eine Erklärung für widersprüchliche Studien liefert Khatri: Welche Aufgaben „grenzwertig" schwer sind, hängt vom Agenten ab (Spearman ρ = 0,75).

### 3.2 Was in der Datei steht, zählt – aber anders als gedacht

- Zhang et al. (679 Regeldateien, 25.532 Regeln, 5.000+ Läufe): Verbote nützen, Gebote schaden. Gleichzeitig sind die Gewinne „largely content-independent": zufällige, gemischte und fachfremde Regeldateien wirken wie kuratierte. Die Pass-Raten bleiben bei 0 bis 50 Regeln stabil. Sicherheit: mittel (ein Modell, ein Benchmark-Ausschnitt).
- Wang et al. (Skill-Revisionen, 21 Modelle, 4 Agenten): Eine hinzugefügte Regel hebt die Befolgung um +0,41 (Einzelantwort) und die Rate der verlangten Aktion um +0,23 im Agenten; Endkorrektheit +0,10. Der Gewinn kommt vor allem von Regeln, die einen Befehl oder Pfad nennen.
- Polandra et al. (Okt. 2026, fünf Python-Bibliotheken): Die Zahl der Anweisungen allein bestimmt den Token-Verbrauch nicht; welche Kategorie hilft, hängt vom Modell ab. Sicherheit: niedrig (kleines Setup).
- Gloaguen et al.: Übersichten über das Repo helfen nicht.

**Deutung:** Konkret und überprüfbar schlägt beschreibend. „Führe `npm run typecheck` aus" wirkt; „schreibe sauberen Code" nicht.

### 3.3 Länge, Wachstum, Veralten

- Chakrabarti (247.694 Anweisungs-Lebensläufe, 1.867 Repos): Dateien wachsen um +226 % und +4,9 Anweisungen pro Commit; je älter eine Anweisung, desto seltener wird sie gelöscht. Grund: Löschen ist riskant, wenn der Grund vergessen ist. Vorschlag: Kommentare mit Begründung.
- Liu et al. (Okt. 2026, theoretisch + Experiment): Es gibt eine obere Schranke für die optimale Dateigröße; alles Nützliche anzuhängen kann beliebig schlechter sein als eine Auswahl. Irrelevante Regeln aus echten Dateien senken die Befolgung. Wichtig: Wer ignorierte Regeln löscht, löscht unvermeidlich auch nützliche.
- Santos et al.: In 100 populären Repos: Lint Leakage 62 %, Context Bloat 42 %, Skill Leakage 35 %.
- Treude et al. (Context Rot im Code-Sinn): Veraltete Code-Verweise in 23,0 % von 356 Repos.
- Chatlatanagulchai et al. (2.303 Dateien, 1.925 Repos): Die Dateien entwickeln sich wie Konfigurationscode durch häufige kleine Zusätze; Sicherheit (14,8 %) und Performance (14,5 %) fehlen meist.

### 3.4 Grundlagen: Warum lange Kontexte schaden

- Lost in the Middle (Liu et al., 2023): Leistung am höchsten, wenn die relevante Information am Anfang oder Ende steht; deutlich schlechter in der Mitte.
- NoLiMa (Modarressi et al., 2025): Bei 32K Tokens fallen 11 von 13 Modellen unter 50 % ihres Kurzkontext-Werts; GPT-4o von 99,3 % auf 69,7 %.
- Chroma Context Rot (Hong, Troynikov, Huber, 14.07.2025, Industriebericht, kein Peer Review): 18 Modelle; Leistung „grows increasingly unreliable as input length grows"; „Even a single distractor reduces performance".
- IFScale (Jaroslawicz et al., 2025): Beste Modelle 68 % Genauigkeit bei 500 gleichzeitigen Anweisungen; Bias zugunsten früher Anweisungen.

**Deutung:** Eine CLAUDE.md steht in jedem Aufruf im Kontext. Jede überflüssige Zeile ist ein Ablenker. Diese Befunde stammen aus Nicht-Coding-Aufgaben; die Übertragung auf Agenten ist plausibel, aber indirekt (Sicherheit: mittel).

### 3.5 Agent Skills

- SkillsBench (Li et al., 87 Aufgaben, 8 Domänen, 18 Konfigurationen): +16,6 pp (33,9 % → 50,5 %); Spanne +4,1 bis +25,7 pp. Fokussierte Skills (≤ 3 Module) schlagen umfangreiche. Kleine Modelle mit Skills erreichen große ohne.
- Jiang et al. (Demystifying Agent Skills): Skills wirken als „prozedurale Anker", die die Ausführung stabilisieren (65,7 % der Fälle), nicht als Wissensspritze (4,5 %). Sie schlagen Workflow-Memory um 6,06 Punkte. Auswahl ist ein eigener Engpass: bei 5 → 100 Skills im Pool fällt die Präzision von 29,6 % auf 3,3 %.
- Yang et al. (WebDev-Skills-Bench): 31 öffentliche Skills senken Pass@2 um 1,3–4,2 %, Kosten +72 bis +394 %; Gewinn nur in 17–36 % der Skill-Projekt-Paare. Anti-Pattern-Regeln schlagen beispiellastige Inhalte.
- Shaposhnikov et al. (500 Skills, 19 Konfigurationen): Modelle halten sich sehr unterschiedlich an Skill-Anweisungen; Skills verändern Verhalten deutlich.
- Wang, Yanze et al. (SkillCorpus, 96.401 Skills aus ~821.000): kuratierter Korpus mit Retrieval bringt bis +7,5 pp auf SkillsBench.
- Qualität und Konflikte: 91,8 % von 138.133 öffentlichen SKILL.md haben mindestens einen Mangel, meist schwache Beschreibung (Routing-Metadaten) und aufgeblähter Text (Zhang, Chi et al.). Ähnliche Skills stehlen jedem fünften Lauf die Ausführung; die Antwort nennt den falschen Skill nur in 0,9 % der Fälle (Yan, Chaoliang et al.).
- Wang, Jiajie et al.: Das Laden eines Skill-Körpers erhöht die Tokens einer Episode um 50 %; bei bedarfsweisem Laden bleibt etwa die Hälfte des Aktionsgewinns erhalten.

### 3.6 Sicherheit

- Liu, Yi et al.: 26,1 % von 31.132 Marktplatz-Skills mit mindestens einer Schwachstelle; Skills mit Skripten 2,12× häufiger betroffen.
- Wang, Yupu et al.: Prompt-Injection in geteilten Regeldateien bringt Agenten dazu, Abhängigkeiten gegen Angreifer-Pakete zu tauschen.
- Yan, Ting: „do not" in CLAUDE.md ist keine Sperre; nur 4,4 % (strengster Maßstab) der Sicherheitsregeln haben eine passende eingebaute Kontrolle.
- Sharma (ContextCov): Regeln aus AGENTS.md in ausführbare Prüfungen übersetzt → 88,3 % Einhaltung vs. 67,0 % (nur Prompt) und 50,3 % (Reflexion).

### 3.7 Öffentliche Aussagen Anthropic und OpenAI

| Quelle | Datum | Aussage (Zitat) |
|---|---|---|
| Anthropic Engineering, „Effective context engineering for AI agents" (Rajasekaran, Dixon, Ryan, Hadfield) | 29.09.2025 | Ziel: „the smallest possible set of high-signal tokens that maximize the likelihood of some desired outcome". „Context ... must be treated as a finite resource with diminishing marginal returns." Claude Code ist hybrid: „CLAUDE.md files are naively dropped into context up front", glob/grep holen den Rest just-in-time. „smarter models require less prescriptive engineering". |
| Anthropic Engineering, „Equipping agents for the real world with Agent Skills" (Barry Zhang, Keith Lazuka, Mahesh Murag) | 16.10.2025, Update 18.12.2025 | „A skill is a directory containing a SKILL.md file." Progressive Disclosure ist „the core design principle"; beim Start lädt der Agent nur Name und Beschreibung jedes Skills. Update: Agent Skills als offener Standard veröffentlicht. |
| Talk „Don't Build Agents, Build Skills Instead", Zhang & Murag, AI Engineer Code 2025 | Ende 2025 (Seite ohne Datum) | „we think it's time to stop rebuilding agents and start building skills instead." „At runtime, only this metadata is shown to the model". |
| Claude Code Docs, „Best practices" (code.claude.com, aktuelle Fassung) | abgerufen 16.10.2026 | „Bloated CLAUDE.md files cause Claude to ignore your actual instructions!" Pro Zeile fragen: „Would removing this cause Claude to make mistakes?" Ausschließen: alles, was Claude aus dem Code ableiten kann, Datei-für-Datei-Beschreibungen. Gelegentlich Relevantes in Skills auslagern. Hooks statt Regeln für Dinge ohne Ausnahme („CLAUDE.md instructions ... are advisory, hooks are deterministic"). |
| OpenAI Codex Docs, AGENTS.md (learn.chatgpt.com) | abgerufen 16.10.2026 | Codex liest global `~/.codex/AGENTS.md`, dann pro Verzeichnis von Repo-Wurzel bis Arbeitsverzeichnis; nähere Dateien überschreiben. Abbruch bei `project_doc_max_bytes` „(32 KiB by default)". |
| OpenAI Docs, „Build skills" (learn.chatgpt.com) | abgerufen 16.10.2026 | Progressive Disclosure; Liste darf „at most 2% of the model's context window" nutzen. „Keep each skill focused on one job." „Prefer instructions over scripts unless you need deterministic behavior". Baut auf agentskills.io. |
| agents.md | abgerufen 16.10.2026 | „used by over 60k open-source projects"; „stewarded by the Agentic AI Foundation under the Linux Foundation"; „The closest AGENTS.md to the edited file wins". |
| Andrej Karpathy, X-Post (nur Sekundärquelle, pureai.com) | 25.06.2025 | „context engineering is the delicate art and science of filling the context window with just the right information for the next step." |

## 4. Gegensätzliche Positionen

1. **„Kontextdateien sind Lärm" vs. „sie sparen Zeit".** Gloaguen, Khatri und Arman messen Korrektheit und finden nichts. Lulla misst Laufzeit und Tokens und findet Gewinne. Beides kann stimmen: gleiche Lösung, schneller gefunden. Gloaguen findet aber +20 % Kosten – das widerspricht Lulla direkt. Mögliche Ursache: generierte Übersichten (Gloaguen) vs. echte, gepflegte Dateien (Lulla). Ungeklärt.
2. **„Kurz ist besser" vs. „umfassend ist besser".** Anthropic und die Context-Rot-Literatur sagen kurz. ACE (Zhang, Qizheng et al., 2025) warnt vor „brevity bias" und zeigt +10,6 % auf Agenten-Benchmarks mit wachsenden, strukturierten „Playbooks". Zhang, Xing et al. finden keine Schäden bei 0 bis 50 Regeln. Auflösung: Umfang schadet nicht per se, unpassender Inhalt und Ablenker schaden; und ACE pflegt den Kontext automatisch mit Rückmeldung, statt ihn anzuhäufen.
3. **„Inhalt zählt" vs. „nur Priming".** Zhang, Xing et al.: zufällige Regeln wirken wie kuratierte. Wang, Jiajie et al.: Regeln mit konkretem Befehl wirken gezielt. Wahrscheinlich beides: ein allgemeiner Effekt (Vorsicht, Fokus) plus ein gezielter Effekt für konkrete, prüfbare Anweisungen.
4. **Skills: großer Gewinn vs. Schaden.** SkillsBench +16,6 pp mit kuratierten Skills und passenden Aufgaben; WebDev-Bench Verlust mit öffentlichen Skills. Der Unterschied ist Passung und Qualität: Ein Skill ist eine Hypothese für eine Kombination aus Skill, Projekt und Modell.
5. **Anreize.** Anthropic und OpenAI verkaufen die Agenten und haben die Formate erfunden; ihre Dokus sind trotzdem auffällig zurückhaltend (kurz halten, Hooks statt Regeln). SkillsBench hat 78 Autoren, teils aus der Skill-Szene. Viele 2026er Papers sind Preprints ohne Peer Review, mehrere von Einzelautoren (Khatri, Chakrabarti, Yan, Sharma).

## 5. Unbekanntes und Lücken

- **Langzeit-Effekte fehlen.** Alle Studien messen Einzelaufgaben. Ob eine gute CLAUDE.md über Wochen Fehler-Wiederholungen verhindert (das eigentliche Versprechen), misst niemand.
- **Nicht-Python, private Repos, Monorepos** sind kaum untersucht. SWE-bench ist Python-lastig.
- **Modellabhängigkeit:** Ergebnisse mit Claude Sonnet 4.5 / Opus 4.6 / GPT-5.x können für die Modelle vom Herbst 2026 schon veraltet sein. Anthropic selbst sagt, klügere Modelle brauchen weniger Vorgaben.
- **Gloaguen vs. Lulla:** Der Kostenwiderspruch ist nicht aufgelöst.
- **Peer Review:** Gloaguen (ICLR 2026, laut ICLR-Seite im Suchergebnis), IFScale (NeurIPS 2025, laut Suchergebnis), Mohsenimofidi (MSR 2026, laut Suchergebnis) – Venue-Seiten selbst nicht abgerufen. Der Rest sind Preprints.
- **Was die Schlussfolgerung ändern würde:** eine große, vorregistrierte Studie mit echten, gepflegten Dateien und Messung über viele Sitzungen; oder Modelle, die Repos so schnell erkunden, dass auch Befehle und Eigenheiten keinen Zeitgewinn mehr bringen.

## 6. Praxis: was wirkt, was nicht

**Wirkt (belegt):**
- Kurze, von Menschen geschriebene Datei mit dem, was der Agent nicht aus dem Code lesen kann: Build-/Test-Befehle, abweichende Konventionen, Fallstricke.
- Konkrete Befehle und Pfade statt Haltungen.
- Verbote („ändere keinen fremden Code", „kein Push auf main").
- Harte Regeln als Hook, Permission oder Test durchsetzen, nicht als Prosa.
- Seltenes Wissen in Skills auslagern; Skills fokussiert (≤ 3 Module), mit scharfer Beschreibung; wenige statt viele.
- Jede Änderung prüfen: verhält sich der Agent danach anders?

**Wirkt nicht oder schadet (belegt):**
- Repo-Übersichten und Datei-für-Datei-Beschreibungen.
- Ungeprüft LLM-generierte Kontextdateien (`/init`-Dumps ohne Nacharbeit).
- Endloses Anhängen; Regeln ohne Begründung, die niemand mehr löschen traut.
- Sicherheitsregeln nur als „do not".
- Viele ähnliche, aus Sammlungen kopierte Skills.

## 7. Quellen

### Papers (alle VERIFIZIERT: Abstract-Seite auf arxiv.org in dieser Sitzung abgerufen)

| # | Titel | Erstautor | Jahr | arXiv-ID | Kernbefund (aus Abstract) |
|---|---|---|---|---|---|
| 1 | Evaluating AGENTS.md: Are Repository-Level Context Files Helpful for Coding Agents? | Thibaud Gloaguen | 2026 | 2602.11988 – https://arxiv.org/abs/2602.11988 | Kein genereller Anstieg der Erfolgsrate, >20 % mehr Inferenzkosten; Repo-Übersichten nicht hilfreich |
| 2 | On the Impact of AGENTS.md Files on the Efficiency of AI Coding Agents | Jai Lal Lulla | 2026 | 2601.20404 – https://arxiv.org/abs/2601.20404 | −28,64 % Median-Laufzeit, −16,58 % Output-Tokens, gleiche Erledigung (10 Repos, 124 PRs) |
| 3 | Do Context Files Help Coding Agents? A Two-Agent Ablation Study on Real Repositories | Prakhar Khatri | 2026 | 2607.27250 – https://arxiv.org/abs/2607.27250 | Kein messbarer Korrektheitseffekt (≤ 10–15 pp), 288 Läufe, Claude Code + Codex |
| 4 | Compact Documentation for Coding Agents: A Benchmark, an Optimizer, and Why It Does Not Transfer | Md Shohel Arman | 2026 | 2609.31587 – https://arxiv.org/abs/2609.31587 | Doku/Kontext schlägt das nackte Issue nicht, wenn Quellcode vorliegt |
| 5 | Probe-and-Refine Tuning of Repository Guidance for Coding Agents | Asa Shepard | 2026 | 2606.20512 – https://arxiv.org/abs/2606.20512 | 33,0 % vs. 28,3 % (statisch) vs. 25,5 % (ohne) auf SWE-bench Verified |
| 6 | Guardrails Beat Guidance: A Large-Scale Study of Rules, Skills, and Persistent Configuration for Coding Agents | Xing Zhang | 2026 | 2604.11088 – https://arxiv.org/abs/2604.11088 | Zufällige = kuratierte Regeln (+13,8 pp); nützlich nur Verbote, schädlich nur Gebote |
| 7 | Why Does CLAUDE.md Keep Growing? Catastrophic Remembering in Agentic Coding | Kushal Chakrabarti | 2026 | 2608.11095 – https://arxiv.org/abs/2608.11095 | Dateien wachsen +226 %, +4,9 Anweisungen/Commit (1.867 Repos) |
| 8 | Curating Always-Loaded Context for LLM Agents: A Capacitated Assortment Model with Censored Feedback | Zexuan Liu | 2026 | 2610.11007 – https://arxiv.org/abs/2610.11007 | Obere Schranke für optimale Dateigröße; irrelevante Regeln senken Befolgung |
| 9 | Configuration Smells in AGENTS.md Files: Common Mistakes in Configuring Coding Agents | Helio Victor F. dos Santos | 2026 | 2606.15828 – https://arxiv.org/abs/2606.15828 | Lint Leakage 62 %, Context Bloat 42 %, Skill Leakage 35 % (100 Repos) |
| 10 | Context Rot in AI-Assisted Software Development: Repurposing Documentation Consistency for AI Configuration Artifacts | Christoph Treude | 2026 | 2606.09090 – https://arxiv.org/abs/2606.09090 | Veraltete Code-Verweise in 23,0 % von 356 Repos |
| 11 | Agent READMEs: An Empirical Study of Context Files for Agentic Coding | Worawalan Chatlatanagulchai | 2025 | 2511.12884 – https://arxiv.org/abs/2511.12884 | 2.303 Dateien; Tests 75,9 %, Sicherheit nur 14,8 %, Performance 14,5 % |
| 12 | On the Use of Agentic Coding Manifests: An Empirical Study of Claude Code | Worawalan Chatlatanagulchai | 2025 | 2509.14744 – https://arxiv.org/abs/2509.14744 | 253 Claude.md aus 242 Repos; flache Struktur, v. a. Befehle, Implementierung, Architektur |
| 13 | Context Engineering for AI Agents in Open-Source Software | Seyedmoein Mohsenimofidi | 2025 | 2510.21413 – https://arxiv.org/abs/2510.21413 | 466 Projekte; keine etablierte Struktur, große Variation |
| 14 | The Role of Agentic Instruction Categories for Code Generation: A Study of Five Python Libraries | Warren Gerald Polandra | 2026 | 2610.21421 – https://arxiv.org/abs/2610.21421 | Anzahl Anweisungen bestimmt Tokenverbrauch nicht; Kategorie-Effekt modellabhängig |
| 15 | When "Do Not" Is Not Deny: Security Rules in CLAUDE.md vs Built-In Controls | Ting Yan | 2026 | 2608.23550 – https://arxiv.org/abs/2608.23550 | Nur 4–16 % der Sicherheitsregeln mit passender eingebauter Kontrolle (481 Dateien) |
| 16 | ContextCov: Deriving and Enforcing Executable Constraints from Agent Instruction Files | Reshabh K Sharma | 2026 | 2603.00822 – https://arxiv.org/abs/2603.00822 | 88,3 % Einhaltung vs. 67,0 % (Prompt) / 50,3 % (Reflexion) |
| 17 | Package Hallucination Attacks on Coding Agents through Prompt Injection in Rule Files | Yupu Wang | 2026 | 2610.09264 – https://arxiv.org/abs/2610.09264 | Injektion in Regeldateien tauscht Pakete gegen Angreifer-Pakete, hohe Erfolgsrate |
| 18 | SkillsBench: Benchmarking How Well Agent Skills Work Across Diverse Tasks | Xiangyi Li | 2026 | 2602.12670 – https://arxiv.org/abs/2602.12670 | Kuratierte Skills +16,6 pp (33,9 % → 50,5 %); ≤ 3 Module am besten |
| 19 | Demystifying Agent Skills: Why They Work-Until They Don't | Zhiyuan Jiang | 2026 | 2608.14036 – https://arxiv.org/abs/2608.14036 | Prozeduraler Anker 65,7 %; Auswahlpräzision 29,6 % → 3,3 % bei 5 → 100 Skills |
| 20 | Signal or Noise? A Benchmark Study of Agent Skills in Web Development | Ziyue Yang | 2026 | 2608.23067 – https://arxiv.org/abs/2608.23067 | Skills senken Pass@2 um 1,3–4,2 %, Kosten +72 bis +394 % |
| 21 | Agent Skill Evolution: How Revisions Affect Coding Agents | Jiajie Wang | 2026 | 2610.04832 – https://arxiv.org/abs/2610.04832 | Neue Regel: Aktion +0,23, Korrektheit +0,10; Skill-Körper +50 % Tokens |
| 22 | One Skill Too Many: How Co-Installed Skills Conflict in Coding Agents | Chaoliang Yan | 2026 | 2610.11647 – https://arxiv.org/abs/2610.11647 | Ähnlicher Skill übernimmt jeden 5. Lauf; nur 0,9 % der Antworten nennen das |
| 23 | What Keeps Agent Skills from Being Reusable? Evidence from 138K SKILL.md Files | Chi Zhang | 2026 | 2608.08453 – https://arxiv.org/abs/2608.08453 | 91,8 % der Skills mit mindestens einem Mangel |
| 24 | A Framework for Evaluating Agentic Skills at Scale | Maksim Shaposhnikov | 2026 | 2606.17819 – https://arxiv.org/abs/2606.17819 | 500 Skills, 19 Konfigurationen; Befolgung variiert stark je Modell |
| 25 | SkillCorpus: Consolidating and Evaluating the Open Skill Ecosystem for Real-World LLM Agents | Yanze Wang | 2026 | 2607.15557 – https://arxiv.org/abs/2607.15557 | 96.401 Skills; bis +7,5 pp auf SkillsBench |
| 26 | Agent Skills in the Wild: An Empirical Study of Security Vulnerabilities at Scale | Yi Liu | 2026 | 2601.10338 – https://arxiv.org/abs/2601.10338 | 26,1 % der Skills mit Schwachstelle; Skripte 2,12× riskanter |
| 27 | Agentic Context Engineering: Evolving Contexts for Self-Improving Language Models | Qizheng Zhang | 2025 | 2510.04618 – https://arxiv.org/abs/2510.04618 | +10,6 % Agenten, +8,6 % Finanzen; warnt vor „brevity bias" |
| 28 | Lost in the Middle: How Language Models Use Long Contexts | Nelson F. Liu | 2023 | 2307.03172 – https://arxiv.org/abs/2307.03172 | Leistung am besten am Anfang/Ende, schlechter in der Mitte |
| 29 | NoLiMa: Long-Context Evaluation Beyond Literal Matching | Ali Modarressi | 2025 | 2502.05167 – https://arxiv.org/abs/2502.05167 | Bei 32K: 11/13 Modelle < 50 % des Kurzwerts; GPT-4o 99,3 % → 69,7 % |
| 30 | How Many Instructions Can LLMs Follow at Once? | Daniel Jaroslawicz | 2025 | 2507.11538 – https://arxiv.org/abs/2507.11538 | Beste Modelle 68 % bei 500 Anweisungen |

### Industriebericht (VERIFIZIERT, kein Peer Review)
- Chroma, „Context Rot: How Increasing Input Tokens Impacts LLM Performance", Kelly Hong, Anton Troynikov, Jeff Huber, 14.07.2025 – https://www.trychroma.com/research/context-rot – 18 Modelle; Leistung wird mit Eingabelänge unzuverlässiger; ein einziger Ablenker senkt die Leistung.

### Herstellerquellen (VERIFIZIERT, abgerufen 16.10.2026)
- Anthropic, „Effective context engineering for AI agents", 29.09.2025 – https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
- Anthropic, „Equipping agents for the real world with Agent Skills", 16.10.2025 / 18.12.2025 – https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills
- Claude Code Docs, „Best practices" – https://code.claude.com/docs/en/best-practices (alte URL anthropic.com/engineering/claude-code-best-practices leitet dorthin um)
- AI Engineer, „Don't Build Agents, Build Skills Instead" (Zhang, Murag) – https://www.ai.engineer/talks/CEvIs9y1uog-agent-skills
- OpenAI Codex, AGENTS.md – https://learn.chatgpt.com/docs/agent-configuration/agents-md (alte URL developers.openai.com/codex/guides/agents-md)
- OpenAI, Build skills – https://learn.chatgpt.com/docs/build-skills (alte URL developers.openai.com/codex/skills)
- agents.md – https://agents.md/

### Sekundärquelle
- PureAI, „Karpathy Puts Context at the Core of AI Coding", 23.09.2025 – https://pureai.com/Articles/2025/09/23/Karpathy-Puts-Context-at-the-Core-of-AI-Coding.aspx – zitiert Karpathys X-Post vom 25.06.2025. Original auf x.com nicht abrufbar (HTTP 402).

### Verworfen / nicht verifiziert
- **Boris Cherny** (CLAUDE.md im Team-Repo, „bei jedem Fehler Regel ergänzen", „CLAUDE.md löschen"): nur Blogs und Aggregatoren gefunden, kein Primärtext. Die Meldung „Cherny rät, CLAUDE.md zu löschen" (ainauten.com, 01.08.2026) nennt keine Primärquelle. Nicht zitiert.
- **Cat Wu, Alexander Embiricos:** Keine öffentliche Aussage zu AGENTS.md/CLAUDE.md gefunden. Lenny-Transkript von Embiricos über glama.ai nicht maschinenlesbar.
- **SkillFlow, arXiv 2504.06188:** ID-Datum (April 2025) passt nicht zur SKILL.md-Ära; nicht abgerufen.
- **„Selbst generierte Skills bringen nichts" (SkillsBench):** steht in Sekundärquellen zu einer früheren Version; der aktuelle Abstract sagt das nicht mehr. Nicht zitiert.
- **Chroma „gemischter Kontext schlägt geordneten":** nur Sekundärquelle.
- Weitere Treffer nur gelistet, nicht geprüft: 2610.11169, 2609.38822, 2609.05677, 2605.05584, 2604.21090, 2608.04661, 2609.39678.

## 8. Suchprotokoll

| Schritt | Werkzeug | Suchbegriffe / Ziel | Ergebnis |
|---|---|---|---|
| 1 | arXiv-API (export.arxiv.org) | `all:"AGENTS.md"`, `"CLAUDE.md"`, `"agent skills"`, `"cursor rules"`, `"context engineering"` | HTTP 429 „Rate exceeded", später 503 – unbrauchbar |
| 2 | Semantic-Scholar-API | „AGENTS.md coding agents", „CLAUDE.md agentic coding", „agent skills SKILL.md" u. a. | HTTP 429 ohne API-Schlüssel – unbrauchbar |
| 3 | WebSearch | AGENTS.md help or hurt; CLAUDE.md empirical; agent skills benchmark; IFScale | Kandidaten 2602.11988, 2601.20404, 2509.14744, 2602.12670, 2507.11538, 2606.15828 u. a. |
| 4 | arxiv.org/search (HTML, Abstract-Suche, neueste zuerst) | „AGENTS.md", „CLAUDE.md", „context files coding agents", „agent skills SKILL.md" | ~120 Treffer; 2026er Studien gefunden, die die Websuche verpasste |
| 5 | arxiv.org/abs/<ID> (curl) | 30 Abstracts | Titel, Erstautor, Datum, Abstract-Text extrahiert |
| 6 | WebFetch | Anthropic-Blog (2), Claude-Code-Docs, OpenAI-Docs (2), agents.md, Chroma, AI-Engineer-Talk, PureAI | Zitate und Daten |
| 7 | WebSearch | Boris Cherny CLAUDE.md; Embiricos AGENTS.md; Karpathy | nur Sekundärquellen; x.com 402, xcancel gesperrt |

Ausgeschlossen: Blogposts ohne eigene Messung als Beleg für Zahlen; Studien zu RAG ohne Agent; Papers, deren Abstract nicht abgerufen wurde.

## 9. Gegenprüfung (zweiter Durchgang, unabhängig)

- Alle 30 arXiv-IDs einzeln auf arxiv.org abgerufen: Titel und Erstautor stimmen bei 30 von 30.
- 24 Kernzahlen (z. B. 20 %, 28,64 %, 16,6 pp, 13,8 pp, 226 %, 88,3 %, 3,3 %) per Textsuche im Abstract gefunden: 24 von 24.
- Nicht geprüft: Inhalte jenseits der Abstracts (Methodik, Volltext) und die Venue-Angaben (ICLR, NeurIPS, MSR).
