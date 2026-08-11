---
title: "Alle 22 Papers in verständlicher Sprache — und was davon heute in unser Setup passt"
type: "synthesis"
covers: "reading-list-2026-08-llm, 22 Volltext-Destillate"
written: 2026-08-11
---

# Was 22 Papers zusammen sagen

Geschrieben für Jens, nicht für die Ablage. Jede Zahl steht so in einem der Destillate
im selben Ordner; der Dateiname steht dabei.

---

## Das Ergebnis in einem Satz

**Ein zweiter Blick auf eine Antwort hilft nur, wenn er etwas nachrechnen kann, das
außerhalb des Modells liegt. Kann er das nicht, kostet er Geld und ändert nichts — und
wenn man ihn zwingt, eine Zahl abzugeben, erfindet er sie.**

Fünf Papers aus vier verschiedenen Gruppen kommen unabhängig dort an. Keines zitiert
das andere.

---

## 1. Ein Kritiker ohne Werkzeug ändert nichts

Der übliche Aufbau ist: ein Modell schreibt etwas, ein zweites Modell bewertet es,
das erste bessert nach. Genau diese Schleife läuft bei uns dreizehnmal — jede
`*-critic`-Skill ist so gebaut.

**Was gemessen wurde:**

- Ein Kritiker ohne Belege von außen ändert exakt nichts. Gemma-4-12B, drei Aufgaben,
  inhaltlicher Effekt 0,000 — die gemessene Verbesserung war jedes Mal nur, ob ein
  Textmuster die Antwort im Text wiederfinden konnte
  (`2608.04355-calibration-floor.md`).
- Bei einem Panel aus sieben Modell-Richtern schlägt „einfach die Tests laufen lassen"
  jede Panel-Regel: 87,60 % gegen 85,62 %. Ein einzelner gut gewählter Richter kommt auf
  87,16 %, das ganze Panel allein auf 82,44 % (`2608.06940-pivotal-vote.md`).
- Ein Sicherheits-Benchmark, dessen Titel von zusammenarbeitenden kleinen Modellen
  handelt: Nimmt man das deterministische Sammeln von Belegen weg (`grep`, `jq`, feste
  Abrufe), fallen 11,17 Punkte. Nimmt man den LLM-Prüfer weg, fallen 0,26
  (`2607.20216-small-free-effective.md`).
- Wix, 756.641 echte Kundennachrichten: Sie prüfen die Abbruchbedingungen einer Skill
  **als Code**, bevor deren Beschreibung überhaupt ins Modell geht. 59,4 % der
  inhaltlich passenden Kandidaten fallen weg (`2608.01050-executability-gating.md`).
- Ein Autor baut einen aufwendigen Wächter (Telemetrie, Training) und misst dann drei
  **triviale** Checks dagegen, auf denselben Läufen: **60 % gefangen bei 0 von 63
  Fehlalarmen** gegen 54 % bei 17 % Fehlalarmen. Auf ein anderes Modell portiert, nichts
  nachgestellt: 110 von 110 (`2608.02464-detection-and-repair.md`).

**Die Ausnahme, die die Regel erklärt.** In einer Untersuchung über sieben
Aufgabentypen half die Selbstkorrektur klar bei genau einem: SAT-Formeln, wo der zweite
Durchgang die Antwort Klausel für Klausel nachrechnen kann. Dort werden 65,66 % der
Fehler beseitigt und fast nichts kaputtgemacht (unter 2,1 %). Bei den anderen sechs
werden ein Fünftel aller Antworten umgeworfen, um zwei bis drei Punkte zu bewegen — und
in vier von 35 Fällen geht es nach unten (`2606.23196-when-does-sc-help.md`).

**Also nicht „Kritiker sind sinnlos", sondern:** ein Kritiker braucht etwas zum
Nachrechnen. Testlauf, `grep`, API-Antwort, Datei-Existenz. Geschmacksfragen — „ist der
Text gut", „klingt das nach KI" — sind der Fall, in dem er nichts leistet.

---

## 2. Prüfen ohne Reparieren: 0,250 gegen 0,275 ohne jede Prüfung

Das ist die Zahl, die mich am meisten überrascht hat. Ein Paper misst auf **denselben
Läufen** drei Zustände (`2606.27281-resource-aware-neuro-symbolic.md`):

| | Ergebnis |
|---|---|
| gar nicht prüfen | 0,275 |
| **nur prüfen, ohne Reparaturweg** | 0,250 |
| prüfen und reparieren | 0,933 |

Die reine Prüfung ist dabei sehr genau — rund 97 % auf dem, was sie annimmt. Sie wirft
nur drei Viertel der brauchbaren Arbeit mit weg. **Eine Kontrolle, die nur ablehnen
kann, ist ein Verlustgeschäft.** Der ganze Gewinn steckt in der Reparaturschleife, und
die kostet 13,6 % mehr Token.

Ehrlichkeitshalber: die 0,250 zählt „Modell enthält sich" als „falsch". Genau die
Verwechslung, die im nächsten Block das Thema ist.

---

## 3. Pflichtfeld ohne Belege: 2 % erfundene Werte werden zu 100 %

Zwei Papers messen dieselbe Maschinerie und je eine Hälfte davon.

**Die gute Hälfte** (`2608.03065-parser-stack-classification.md`): Ein festes
Ausgabeschema ist der billigste Qualitätsgewinn, den ein schwaches Modell bekommen kann.
Es verdoppelt ein 270-Millionen-Parameter-Modell (28,3 → 56,6). Vorlauf rund 30
Sekunden, danach quasi umsonst. Wichtig: die generische JSON-Vorgabe bringt fast
nichts — nur das konkrete Schema zählt.

**Die andere Hälfte** (`2607.20492-phantomfill.md`): Dasselbe Schema, aber auf Felder
angewendet, für die es im Text keine Belege gibt. GPT-5.5, gleiche Frage, gleicher Text:

- als Fließtext: 2 % erfundene Werte
- mit Pflicht-Schema: 100 %

Und der Teil, der wehtut: Der legale Ausweg („unbekannt") stand im Schema. Auf den drei
Feldern, die die Erfindung tragen, wurde er 0 von 203 Mal benutzt — auf dem einen
Feld, wo Ausweichen nichts kostet, 12 Mal.

**Auflösung: Form erzwingen, nie einen Wert erzwingen.** Und der Ausweg muss gemessen
werden, nicht nur angeboten.

**Das trifft uns direkt und gemessen.** Unsere 13 `*-critic`-Rubriken enthalten
**137 Pflicht-Zahlenfelder und 0 Ausweg-Werte**. Zwei davon haben das Problem gesehen
und am schlechtesten gelöst: `email-marketing-critic` und `seo-critic` schreiben vor,
**100 Punkte** zu vergeben, wenn eine Dimension gar nicht zutrifft. Eine vorgeschriebene
Bestnote ohne Beleg, die in den Mittelwert läuft, der die Schleife steuert.

---

## 4. Wie man einen prüfenden Agenten fragt

Drei Papers, dieselbe Richtung, aus drei Ecken.

**Ein Satz reicht, um ein Modell umzudrehen.** In der Bystander-Untersuchung gibt es gar
keinen Schwarm — die Manipulation ist ein Satz im Prompt: „n benannte Modelle haben
deine Ausgabe geprüft und sind sich einig, dass X gilt", wobei X den Belegen im Kontext
widerspricht. GPT-5.4 fällt von 1,00 auf 0,23 und übernimmt den falschen Konsens in
**74 %** der Fälle. Claude Sonnet 4.6 bleibt auf allen Stufen bei 1,00
(`2605.10698-bystander.md`).

Genau diesen Satz schreibe ich ständig: „prüfe diesen Befund", „die letzte Sitzung kam zu
X". Ab jetzt nicht mehr.

**Und die Gegenprobe von der anderen Seite.** Fünf Reparatur-Formulierungen gegeneinander:
**nur den Namen der gerissenen Prüfung nennen, ohne Werte** rettet 45 %. Den Befund
**mit Zahlen** mitzuliefern rettet 36 % — bei mehr Aufrufen. Der Autor zeigt warum:
26 der 55 „konkreten" Hinweise enthielten die richtige Antwort im Klartext, und die
Variante ohne jede Zahl rettete trotzdem mehr (`2608.02464-detection-and-repair.md`).

→ Einem prüfenden Agenten die Koordinaten geben, nie das Urteil.

**Die Temperatur entscheidet die Debatte, bevor sie anfängt.** Unter etwa T = 0,5 wird
eine beliebig kleine gemeinsame Neigung innerhalb von 1–2 Runden zur Einstimmigkeit;
ein Unterschied von 0,1 reicht zum Kippen. Gegenmittel, beide gemessen und billig:
Temperaturen über die Agenten mischen und Modellfamilien mischen
(`2608.02827-biased-consensus.md`). Actor und Critic dürfen also nicht auf derselben
Temperatur laufen.

---

## 5. Mehrere Modelle statt eines: wann das schadet

- **Die Obergrenze steht vorher fest.** β = wie oft alle Kandidaten dieselbe Frage
  falsch beantworten. Kein Router, kein Voting, keine Kaskade kann besser sein als 1−β.
  Bewiesen. Und die übliche paarweise Fehlerkorrelation kann β ab drei Modellen
  **beweisbar nicht** sehen (`2606.27288-co-failure-ceiling.md`).
- **Bei ungleicher Güte schadet Abstimmen.** Gleiche Güte: gemischte Gruppe +0,027.
  Ungleiche Güte, über alle 455 Dreier-Kombinationen: −0,10 — die schwächeren
  überstimmen das starke Modell. Das ist exakt die Lage unserer LiteLLM-Aliase
  (`smart` = Opus, `simple` = qwen3:8b). Über die abstimmen zu lassen würde schaden.
- **Und die guten Schwarm-Zahlen stammen aus Multiple Choice.** Dieselben 79 Fragen: mit
  Antwortoptionen β ≈ 0, ohne Antwortoptionen β = 0,127. Unsere Arbeit ist durchweg
  Freitext — Entwürfe, Analysen, Code. Die Zahlen übertragen sich nicht.
- **Der billigste Test der ganzen Leseliste entwertet das Paper, das ihn enthält.**
  Ministral-8B allein 10,84 % → Debatte mit einer Kopie seiner selbst 23,0 % → mit
  dem echten Fachexperten 23,60 %. Der Partner trägt 0,6 von 12,76 Punkten, also 5 %.
  Der Rest ist, was ein Modell davon hat, sieben Runden mit sich selbst zu reden
  (`2607.20216-small-free-effective.md`).
- Ein Paper der Leseliste enthält gar kein LLM-Experiment — der Teil läuft laut Anhang
  gegen ein Attrappen-Backend, das „kein wissenschaftliches Ergebnis liefert". Als
  Vokabular brauchbar, als Beleg nicht (`2608.00028-width-memory-delay.md`).

---

## 6. Die Schleife selbst: Budget und Anzahl der Runden

Ein Versuch, der die Kontrolle richtig setzt (`2607.26117-try-again.md`). Vier Varianten
bei gleichem Token-Budget, kleine Code-Modelle:

- Dem Modell seinen eigenen gescheiterten Versuch zeigen und um Korrektur bitten
- Ihm nur sagen „das war falsch", ohne Details
- Einfach neu würfeln, ohne den Fehlversuch zu zeigen

**Neu würfeln gewinnt.** Der diagnostische Inhalt der Fehlermeldung — der Teil, den alle
für den Wirkstoff halten — trägt +0,000 / +0,026 / +0,008, nichts davon signifikant.
Und den eigenen Fehlversuch zu sehen schadet: −0,061 und −0,069. Der Grund ist
gemessen: der Anteil fast identischer Wiederholungen springt von 2–14 % auf 33–68 %.
Wer seinen eigenen Text sieht, redigiert ihn; wer neu gefragt wird, denkt neu.

Ebenfalls aus dem Paper: **rund die Hälfte des erreichbaren Gewinns liegt beim zweiten
Versuch**, ab dem siebten ist es null. Alles, was „iterieren bis es gut ist" heißt, zahlt
ab Runde drei für Rauschen.

**Wichtige Einschränkung:** alle getesteten Modelle sind 7B und kleiner. Für Opus-Klasse
überträgt sich die Methode (gleiches Budget gegenprüfen), nicht das Vorzeichen.

---

## 7. Ein Prüfer, der Quelltext liest, gegen einen, der ausführt

Aus dem Produktionsbericht des Qwen-Teams (`2606.26300-verification-horizon.md`), das
sauberste Einzelexperiment der Leseliste:

Ein Richter, der den Quelltext liest, führt beim Training dazu, dass das Modell immer
längeres CSS und JavaScript ausgibt, um die Punktzahl zu heben. Ein Richter, der die Seite
**im Browser ausführt** und das aufgezeichnete Verhalten bewertet, ist dagegen von sich aus
immun — gleiche Rubrik, gleiches Modell, nur die Messstelle verschoben.

→ **Wo die Belohnung das Artefakt liest statt es auszuführen, optimiert das Modell das
Aussehen des Artefakts.**

Drei weitere Funde aus demselben Papier, die direkt auf unsere Arbeitsweise passen:

- **Fünf von sieben Verhaltensweisen, die nach Schummeln aussehen, gehen mit
  schlechteren Ergebnissen einher.** Am Test-Gerüst herumzubasteln ist kein
  funktionierender Kniff, sondern das, was ein scheiterndes Modell tut.
- **Mehr Regeln machten den Prüfer schlechter.** Die Prompt-Fassung mit erschöpfenden
  Regeln (v5) fällt gegenüber der schlankeren (v4) auf fast jeder Kennzahl zurück. Ab
  einem Punkt konkurriert das Detail mit dem Urteil.
- **Schweigen heißt Zustimmung, und zwar in 76,6 % der Fälle.** Aus 535.737 echten
  Nutzer-Rückmeldungen: neutral 76,6 %, negativ 20,0 %, positiv 3,5 %. Ablehnung wird
  klar ausgesprochen (81,8 % hochsicher), Zufriedenheit gar nicht. Das ist die Grundrate
  hinter deiner Inbox.

---

## 8. Gedächtnis: was die Papers für `state/memory/` bedeuten

- **Fenster und Zusammenfassungen finden nichts, was weit zurückliegt.** Auf dem
  Langzeit-Benchmark: gleitendes Fenster 0,000, Zusammenfassung 0,005, dichte
  Suche über alle Einträge 0,573 (`2608.00009-agentmembench.md`). Unser
  `state/memory/` ist genau die ersten beiden. Die ehrliche Lehre ist nicht „bau eine
  Vektordatenbank", sondern: **einer Zusammenfassung nichts zutrauen, was sechs Wochen
  zurückliegt** — und der Weg, den der Benchmark nie misst, ist unser `grep` über
  `learnings.md`, exakt statt wahrscheinlich.
- **Die Datei, die wächst, braucht einen Schlüssel, nicht mehr Disziplin.** In der
  AutoMem-Untersuchung fiel eine Kartendatei von 138 auf 6 Zeichen pro Schritt (−95 %)
  durch eine einzige Änderung: statt anzuhängen, den Eintrag zur Koordinate
  überschreiben (`2607.01224-automem.md`). Das ist dieselbe Lehre wie unsere
  `waiting.md`- und `routines.md`-Verdichtungen.
- **„Ignorier einfach, was du später gelesen hast" ist wertlos.** Gemessen: 0,9–2,8 %
  gegen 31–36 % bei echtem Zurückrollen im Dateisystem
  (`2607.27773-chronomem.md`). Eine zurückgenommene Tatsache muss in der Datei
  zurückgenommen werden, nicht in der Anweisung. Genau der Fehler mit „Sie waren nie im
  Haus".
- **Beim Schreiben prüfen ist billig, kostet aber die impliziten Fakten.** Ein Fakten-Gate
  vor dem Schreiben senkt die Verseuchung stark — wirft dabei aber **42 % der richtigen
  Fakten** weg, wenn sie über viele Turns verteilt sind (`2607.22962-consistencygate.md`).
  Für kurze, strukturierte Werte (eine Zahl aus einer API-Antwort, einer Rechnung) passt
  es; für Sitzungs-Lehren nicht.
- **Erfinde keine eigene Notation.** Ein Paper baut eine Kompressionssprache und die
  eigene Tabelle zeigt: sorgfältige strukturierte Prosa ist gleich treu (1,00) und im
  Schnitt kürzer (66,4 gegen 71,2 Token) (`2605.17304-context-codec.md`). Brauchbar
  ist daraus nur die Fehlerliste — Auslassung, Abschwächung, Vorzeichenwechsel,
  „eine verworfene Option taucht wieder auf".

---

# Was du heute anwenden kannst

Sortiert nach Wirkung geteilt durch Aufwand. Alles hier ist umkehrbar.

### 1. Ausweg-Wert in die 13 Kritiker-Rubriken — 30 Minuten, heute erledigt

Gemessen: 137 Pflicht-Zahlenfelder, 0 Ausweg. Jedes Feld ohne ehrlichen Wert bekommt
`"n/a"` statt einer erfundenen Zahl, und `"n/a"` fließt nicht in den Mittelwert. Die zwei
Rubriken, die „gib 100 Punkte, wenn es nicht zutrifft" vorschreiben, verlieren diese
Zeile. Belege: PhantomFill 2 % → 100 %.

### 2. Erst der deterministische Check, dann erst ein Modell

In jeder Prüfung, die wir haben: Testlauf, `grep`, API-Antwort, `test -f`. Das Modell wird
erst gefragt, wenn die Prüfung nichts entscheiden kann. Belege: 87,60 gegen 85,62;
11,17 gegen 0,26 Punkte; 60 % bei 0 Fehlalarmen gegen 54 % bei 17 %. Nebenbei die
Wirtschaftlichkeit: ein Testlauf 49 ms, ein Richter-Aufruf 5,72 s — Faktor 117.

### 3. Keine Prüfung ohne Reparaturweg

Wo wir heute nur melden („QG rot", „Kritiker sagt 55"), muss entweder ein Reparaturschritt
dranhängen oder die Prüfung sich enthalten dürfen. Beleg: 0,250 gegen 0,275 gegen
0,933.

### 4. Prüf-Prompts ohne das vorherige Ergebnis

Nie mehr „die letzte Sitzung kam zu X, prüf das". Stattdessen: „versuche zu widerlegen, im
Zweifel widerlegt" — und bei einer gerissenen Prüfung nur ihren Namen nennen, nicht
den Wert. Belege: 1,00 → 0,23 bei 74 % Übernahme; 45 % gegen 36 %.

### 5. Skills mit unerfüllbarer Voraussetzung gar nicht erst anbieten

122 von 162 Skills wurden nie aufgerufen, der Index kostet 8.642 Token pro Sitzung.
Fehlende Zugangsdatei, nicht ausgechecktes Repo, eingestellter Kanal, kaputter
Browser-Stack — alles mit `test -f` entscheidbar, bevor die Beschreibung geladen wird.
Heute ist der einzige Filter mein Gedächtnis. Beleg: Wix schneidet so 59,4 % weg, auf
einer gepflegten Bibliothek.

### 6. Nicht über die LiteLLM-Aliase abstimmen lassen

`smart` (Opus) und `simple` (qwen3:8b) haben stark ungleiche Güte. Mehrheitsentscheid
darüber ist −0,10. Die Rückfallkette `smart → cloud-oss → simple` ist davon nicht
betroffen — sie schaltet bei API-Fehlern, nicht bei schlechten Antworten. Sie kauft
Verfügbarkeit, nicht Qualität, und der README darf nichts anderes behaupten.

### 7. Fünf kleine Handgriffe

- **Actor und Critic nicht auf derselben Temperatur** — unter T ≈ 0,5 kippt eine Debatte
  in 1–2 Runden in Einstimmigkeit.
- **Jede Rubrik-Dimension in einem eigenen Aufruf bewerten.** Alle in einer Antwort zu
  bewerten erzeugt genau die Korrelation, die man messen will. Und: „hilfreich" und
  „korrekt" koppeln mit 0,92 — das sind keine zwei Dimensionen
  (`2608.01810-radar.md`).
- **Bei einem falschen Ergebnis vom Subagenten neu beauftragen**, nicht seine Ausgabe
  zurückgeben und um Korrektur bitten. Und die Schleife bei zwei Runden deckeln.
- **Dritter Ausgang „nicht lesbar"** in jeder Auswertung — nie mit „falsch" verrechnen.
  `deadline-check.py` macht das mit Exit 2 bereits richtig.
- **Bevor eine zweite Stufe gebaut wird: die Prüfliste in den ersten Prompt schreiben und
  einstufig messen. Zwei Aufrufe müssen einen Aufruf mit derselben Prüfliste**
  schlagen, nicht einen ohne.

---

## Was NICHT gilt

- **„Selbstkorrektur ist nutzlos"** — nein. Sie ist nutzlos ohne etwas zum Nachrechnen.
  Mit einem Prüfer beseitigt sie 65,66 % der Fehler und macht fast nichts kaputt.
- **„Kleine Modelle im Schwarm schlagen ein großes"** — die Zahl dafür ist 35,30 gegen
  34,77, das sind rund 3 von 609 Fragen, ohne Konfidenzintervall, und im selben Paper
  steht, dass 95 % davon aus der Selbstdebatte kommen.
- **„Schema-Zwang ist immer gut"** — nur solange jedes Feld einen ehrlichen Wert haben
  kann.
- **„Neu würfeln schlägt Reparieren"** — gemessen nur bis 7B. Für Opus ist das offen; was
  überträgt, ist die Messmethode.

---

## Die 22 Papers, je ein Satz

| Datei | In einem Satz |
|---|---|
| `2607.01224` AutoMem | Gerüst schlägt Modell, aber nur bei Gedächtnis innerhalb einer Episode; brauchbar sind die vier deterministischen Gerüstregeln im Anhang. |
| `2607.22962` ConsistencyGate | Fakten beim Schreiben prüfen senkt Verseuchung, kostet aber 42 % der richtigen impliziten Fakten. |
| `2607.27773` ChronoMem | Versionierung mit Rückrollen; die haltbare Erkenntnis ist die negative: „ignorier das einfach" bringt 2 %. |
| `2608.00009` AgentMemBench | Fenster 0,000 und Zusammenfassung 0,005 gegen 0,573 für dichte Suche — und die eigene Vergleichstabelle löst das Kostenargument auf. |
| `2605.17304` Context Codec | Nützlich ist die Fehlerliste; die eigene Tabelle zeigt strukturierte Prosa gleich treu und kürzer als die erfundene Notation. |
| `2608.06940` Pivotal Vote | Eine zweite Stimme kann nur bei 4:3 etwas ändern — sonst beweisbar null; und Tests laufen lassen schlägt jede Panel-Regel. |
| `2608.01810` RADAR | Eine Rubrik mit zehn Namen liefert weniger als zehn Signale; „hilfreich" und „korrekt" koppeln mit 0,92. |
| `2606.26300` Verification Horizon | Skalierbar, treu, manipulationsfest — man bekommt zwei; ein Prüfer, der ausführt, ist immun gegen das, wofür ein Prüfer, der liest, belohnt. |
| `2607.26117` Try Again | Bei gleichem Budget schlägt Neuwürfeln das Zeigen des eigenen Fehlversuchs; die Fehlermeldung trägt 0,000. |
| `2606.23196` When Does SC Help | 19 von 35 Zellen signifikant, 4 negativ — und der ganze Effekt hängt am einzigen Benchmark mit echtem Prüfer. |
| `2608.04355` Calibration Floor | Der Großteil gemessener „Selbstkorrektur" ist ein Textmuster, das eine Zahl findet; erzwungen lesbare Ausgabe löscht 71 %. |
| `2606.27288` Co-Failure Ceiling | Jeder Router und jedes Voting ist bei 1−β gedeckelt; bei ungleicher Güte ist Abstimmen negativ. |
| `2607.20216` Small/Free/Effective | Der eigene Anhang zeigt: 95 % des Zusammenarbeits-Gewinns kommt aus der Selbstdebatte, und die Werkzeuge tragen 11,17 gegen 0,26 Punkte. |
| `2605.10698` Bystander | Ein einziger Satz über einen angeblichen Konsens drückt GPT-5.4 von 1,00 auf 0,23; Claude 4.6 bleibt bei 1,00. |
| `2608.02827` Biased Consensus | Eine Debatte ist ein physikalisches System und die Temperatur ist der Regler; unter 0,5 kippt sie in 1–2 Runden. |
| `2608.00028` Width/Memory/Delay | Enthält kein LLM-Experiment — als Vokabular brauchbar, als Beleg nicht. |
| `2608.01050` Wix Executability Gating | Abbruchbedingungen einer Skill umdrehen und als Code prüfen, bevor die Beschreibung ins Modell geht: 59,4 % weg. |
| `2608.02464` Detection and Repair | Drei triviale Checks schlagen den trainierten Wächter; der beste Reparatur-Hinweis nennt die Prüfung und verschweigt den Wert. |
| `2606.14935` PrologMCP | Sauberes Werkzeug-Design, aber der entscheidende Testteil hat nur ein Label — konstantes „falsch" erreicht die Bestnote. |
| `2606.27281` VFR-LLM | Das am besten gebaute Paper der Liste: prüfen ohne reparieren (0,250) ist schlechter als gar nicht prüfen (0,275). |
| `2608.03065` PSC | Schema-Zwang ist billig und verdoppelt ein schwaches Modell — aber nur das konkrete Schema, nicht die generische JSON-Vorgabe. |
| `2607.20492` PhantomFill | Dasselbe Schema auf unbeantwortbare Felder: 2 % → 100 % erfundene Werte, Ausweg-Token 0 von 203 Mal benutzt. |

---

## Nebenbefund zur Verlässlichkeit der Papers

In acht der 22 Papers widerspricht die zitierfähige Überschrift der eigenen Tabelle, und
der Satz, der reist, ist immer der schmeichelhaftere. Bei ChronoMem stehen im Fließtext
39,4 % und in der Tabelle 33,4 %. Bei Context Codec heißt es, die eigene Notation sei
kompakter — die Tabelle sagt 71,2 gegen 66,4 zugunsten der Prosa. Bei Try Again behauptet
die Bildunterschrift, die beste Variante sei auch die billigste, was bei 7B nicht stimmt.

**Zwei Papers machen es umgekehrt und sind deshalb die verlässlichsten der Liste.**
Calibration Floor veröffentlicht den eigenen Programmierfehler, dessen Symptom eine
**zu gute** Anpassung war, und meldet den ehrlichen Boden p = 0,333 statt des
schmeichelhaften p < 10⁻⁷. Detection and Repair misst die eigene angenommene Voraussetzung
nach, stellt fest, dass beide angenommenen Werte außerhalb der gemessenen Intervalle
liegen, und druckt die korrigierte Zahl — das eigene Ergebnis fällt damit von 82 % auf
43 %, unter eigener Überschrift.
