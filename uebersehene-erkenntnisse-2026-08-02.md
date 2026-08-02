---
title: "Was in den Field Notes steht und untergegangen ist"
type: cross-source review
scope: "alle 88 Notizen, ~98.000 Wörter, Stand 2026-08-02"
captured: 2026-08-02
---

# Was in den Field Notes steht und untergegangen ist

> Ein Durchgang durch alle 88 Notizen mit einer einzigen Frage: welche Erkenntnis
> ist schon aufgeschrieben, aber nie in eine Entscheidung übersetzt worden?
> Zwei der Punkte waren nachmessbar — die sind gemessen, nicht behauptet.
> Sortiert nach Wert, nicht nach Quelle.

---

## 1. Der Markenname ist der einzige Suchbegriff, der bei dir zieht — gemessen

**Die Notiz.** Tim Soulo (Ahrefs, `kopywriting-kourse/`, erfasst 30.06.): rund die
**Hälfte aller Google-Suchen sind Marken-Suchen**, und eine Marken-Suche entsteht
**nicht bei Google** — jemand hört von dir woanders und tippt dann deinen Namen.
Deshalb: Social/Aktionen *erzeugen* Marken-Suche, Suchmaschinen-Arbeit *bedient*
sie. Und: eine kleine Marken-Suche zu bedienen lässt sie wachsen (Ahrefs sah
10–15 Suchen im Monat nach einem Werkzeug, baute es, die Zahl stieg).

**Nachgemessen** (`tools/gsc.py`, 03.07.–31.07.2026, 28 Tage, volle Abfrage):

| Property | Klicks gesamt | Einblendungen | Klicks aus benannten Suchbegriffen |
|---|---|---|---|
| fingrab.app | 15 | 952 | **10 — alle aus „fingrab"**, Position 1,0, Klickrate 47,6 % |
| solytics.de | 60 | 4.750 | 3 — davon **2 aus „solytics"**, Position 2,8, Klickrate 16,7 % |
| finanzkalkulatoren.com | 5 | 4.425 | — |
| healthcalculator.app | 2 | 2.309 | — |

Bei fingrab hat **kein einziger** der 60 anderen benannten Suchbegriffe je einen
Klick gebracht — die ganze „best free stock screener"-Familie steht auf Position
50 bis 96. Bei solytics dasselbe Bild über 238 weitere Begriffe.

**Was daran neu ist.** Unsere eigene Begründung für das FK/HC-Aus lautet
„Autorität war der Engpass, nicht das Rechner-Inventar". Die Richtung stimmt, der
Mechanismus ist aber schärfer: **solytics hat einen Namen, den Menschen tippen,
FK und HC hatten nie einen.** Der einzige Begriff mit belegter Umwandlung auf
beiden lebenden Seiten ist der Markenname. Alles andere ist Einblendungs-Rauschen.

**Was folgt — drei konkrete Züge:**

1. **fingrab hat 21 Marken-Einblendungen in 28 Tagen und wandelt sie zu 47,6 % um.**
   Das ist exakt die Ahrefs-Lage. Es gibt bis heute nichts, was diese Suche
   bedient außer dem Store-Eintrag: keine „So benutzt du fingrab"-Seite, keine
   Fehlerbehebungs-Seite, keine Änderungsliste. Das ist die billigste
   Verteilungs-Arbeit im ganzen Bestand.
2. **solytics.de steht auf Platz 2,8 für den eigenen Namen** — fingrab steht auf
   1,0. Ehrliche Einschränkung: „Solytics Partners" ist eine echte, größere Firma,
   also womöglich eine Namenskollision, die man nicht wegoptimiert. Aber es ist
   nachprüfbar, und ein dritter Platz beim eigenen Namen ist ein Leck.
3. **Jede künftige Suchmaschinen-Wette auf allgemeine Dauerbegriffe ist tot,
   unabhängig von Autorität.** Soulos Regel: auf *neue* Themen setzen, wo es noch
   nichts gibt, nicht auf die zehnte Anleitung zu einem alten Thema.

---

## 2. Vier unabhängige Quellen sagen dasselbe über dein fehlendes Netzwerk — und keine sagt „poste mehr"

Das ist die stärkste Konvergenz im ganzen Bestand, und sie steht in vier Notizen
verstreut, die sich gegenseitig nicht zitieren:

- **Creanza (Vogelgesang, SFI):** Teilvernetzung schlägt Vollvernetzung.
  Neuerungen verbreiten sich **schneller** entlang eingeschränkter Netzwerke als
  wenn jeder mit jedem redet. Aber: *der Gewinn entsteht beim Kontakt, nicht in
  der Isolation.*
- **David Krakauer (2019):** Berg → **Kloster** → Metropole. Jede Idee braucht
  alle drei, in dieser Reihenfolge.
- **West & Krakauer (2021):** je größer das Team, desto mehr Zitate und desto
  weniger Umbruch — umgekehrt proportional. Kleine Gruppen stören, aber „niemand
  hört zu". Krakauers Schluss: **abwechseln, bewusst.**
- **Isenberg, Fähigkeit 6:** 6–8 Leute um **eine scharfe Frage**, danach eine
  kurze Zusammenfassung an alle. Kein Event, eine Gewohnheit.

**Was daran untergegangen ist.** Du hast den Berg (Ideen sind bei dir fast
kostenlos) und die Metropole (das offene Netz, wo Sachen an Stille sterben). Es
fehlt **die mittlere Stufe** — eine kleine, wohlwollende Runde, die eine Idee
prüft, *bevor* sie öffentlich stirbt. Deine stehende Randbedingung heißt „ich habe
kein Netzwerk". Die Antwort dieser vier Quellen darauf ist nicht „bau dir
Reichweite auf" (das ist die Metropole, und die willst du nicht), sondern
**acht Leute an einen Tisch um eine Frage.** John Krakauers Learning Salon gibt
sogar das Rezept: 10–15 Minuten Vortrag, **zwei Stunden Fragen**, Rangordnung
flach, Fächer bewusst gemischt.

Das ist kein Reichweiten-Zug. Es ist billig, es braucht keine Bühne, und es ist
die einzige Sache im ganzen Bestand, die dein „kein Netzwerk" wirklich angreift
statt es zu umgehen.

---

## 3. Das meistempfohlene ungebaute Ding kostet null Werbebudget — und du machst seine Arbeit jede Woche von Hand

Vier Notizen zeigen auf dasselbe Bauteil:

- `marketing-agent-build-prompt.md`, Phase 1, wörtlich: *„Fang bei Phase 1 an und
  überleg ernsthaft, dort aufzuhören."* Ein eigenes Datenlager über die
  **verstreuten eigenen Zahlen** (Stripe, Search Console, Store-Installationen,
  Anzeigen) plus „frag Claude Code" als Abfrage-Ebene.
- **Buzz-Notiz, Demo 2:** App → offene Schnittstelle → geplanter Lauf schreibt die
  Zahlen **in den Kanal, in dem du ohnehin redest** → du fragst mit den Zahlen
  schon im Kontext. Kernsatz: *die Messung kommt dorthin, wo entschieden wird —
  ungefragt.*
- **Loop-Engineering:** eine Schleife braucht eine objektive Kennzahl und eine
  Gedächtnisdatei, sonst ist sie keine Schleife.
- **Linear Digressions, Finale:** ziele mit Agenten auf **die Arbeit, an der du
  sonst aufhörst** — nicht auf den schönen Teil.

**Der Beleg, dass es der richtige Griff wäre, steht in deiner eigenen Inbox:**
„Analysiere Stripe" (01.08., 31.07., 22.07., 21.07., 06.07., …), „Untersuche die
Search Console" (29.07., 22.07., 16.07., …), „Wie ist der Stand bei fingrab"
(29.07., 19.07. viermal, 17.07., 16.07., …). Dieselbe Handarbeit, immer wieder,
jedes Mal drei getrennte Abfragen.

**Ehrliche Einordnung, sonst wäre es Artefakt N+1:** das ist
**Verteidigungsarbeit, kein Nachfrage-Zug**. Es verkauft nichts. Es rangiert
hinter Punkt 1 und 2. Aber es ist das einzige Bauvorhaben im Bestand, das ohne
Werbebudget auskommt, jede Kanal-Entscheidung bedient und eine belegte
wiederkehrende Reibung tötet.

---

## 4. Die Rechner-Warnung stand einen Monat vor dem FK/HC-Aus in den Notizen — und sie gilt weiter

`kopywriting-kourse/`, erfasst **30.06.**, einen Monat vor deinem Aus für FK/HC am
30.07.: Neville Medhora sagt, ChatGPT baue inzwischen **auf Zuruf einen
persönlichen Rechner**, damit sei „die ganze Idee eines allgemeinen Rechners
weitgehend erledigt". Soulos Gegenrede: nicht jeder weiß, welche Fragen er
stellen muss — es bleibt Platz, aber nur für **spezifisch, eingebettet, mit
Namen**.

Das war ein *struktureller* Grund, unabhängig von deinen Klickzahlen, und er lag
vier Wochen vor der Entscheidung im Repo. Wichtiger ist, wofür er **noch gilt**:
für jedes künftige „ich bau ein kleines Werkzeug" — und für den
Concept-Simulator, dessen Wert genau nicht im Rechnen liegt, sondern im
Mitmachen (erst raten, dann aufdecken). Das ist die Verteidigungslinie, und sie
sollte in der Positionierung stehen, nicht implizit bleiben.

---

## 5. Der Dienstleistungs-Widerspruch ist in den Notizen längst aufgelöst

Drei Notizen (Ganim, Vas/FDE, „Software ist tot") empfehlen dir eine
Dienstleistung. Drei Mal steht in derselben Notiz deine eigene Gegenprüfung:
*„immer noch ein Dienst, immer noch eine Stunden-Decke, nicht konvex."* Der
Faden hängt seit dem Frühjahr in waiting #75.

**Die Auflösung steht in Schritt 6 der Agenten-SaaS-Notiz und wurde nie als Regel
ausgesprochen:** verkaufe **drei Piloten in EINER Nische**, dann mache das
*Wiederkehrende* zum Produkt. *„Du verdienst dir die Software, indem du die
Arbeit zuerst machst."* Der Dienst ist nicht die Sackgasse — er ist die **vom
Kunden bezahlte Spezifikation**. Damit ist die Frage nicht mehr „Dienst oder
Produkt", sondern „habe ich eine Nische, in der ich dreimal denselben Auftrag
bekomme". Das ist eine andere, viel leichter zu beantwortende Frage.

Dazu die Namensgebung, die du unabhängig selbst gefunden hattest: Vas' Agentur
hat „Audit" zu **„Sprint"** umbenannt, weil „Audit" nach Steuerprüfung klingt.
Dein „KI-Sprint" ist derselbe Zug — Bestätigung, kein Zufall.

---

## 6. Ein Stanford-Professor stellt genau die Frage über deinen Aufbau, die niemand gemessen hat

Chris Potts, gefragt, woran er als Nächstes arbeiten will (Notiz vom 20.07.):

> *„Was ist der Grenznutzen einer Skill-Datei? Alle investieren gerade darin —
> aber führt das zu mehr Produktivität? Führt es zu mehr PRs im Schnitt?"*

Du fährst 159 Skills, einen 24-KB-Gedächtnisindex, Profile und Routinen. Das ist
ein großer, **vollständig ungemessener** Einsatz in genau dem Artefakt, für das
laut Potts niemand Belege hat. Und du hast als einer der wenigen die Daten dafür:
`skill-usage.py`, `skill-outcomes.py`, Ergebnisse pro Lauf, Qualitätstor-Quoten.
Das ist ein abgeschlossenes, billiges Experiment, das noch niemand gefahren hat.

Aus derselben Notiz, härter: **fließende Nutzer stoßen in 64 % der Gespräche auf
Fehler, Anfänger nur in 24 % — aber 85,6 % der Anfänger-Fehler bleiben
unsichtbar.** Mehr Reibung ist der gesunde Zustand. Und die
Auftrags-YAML-Datei — ein Block Text, um 22:00 abgefeuert, niemand da zum
Nachfragen — ist die Anfänger-Haltung als Verfahren. Kein Grund aufzuhören
(Code ist der gut prüfbare Fall), aber die Regel daraus: **jede YAML muss
beantworten „was fängt das ab, wenn es abdriftet, während niemand hinschaut".**

---

## 7. Ein Ausfallmuster hat bei dir noch keinen Namen: „The Walkaway"

Die Notiz ordnet sieben deiner eigenen Lernpunkte den Fehler-Grundformen aus
Potts' Arbeit zu — Confidence Trap, Silent Mismatch, Drift, Death Spiral. Eine
Form bleibt ohne Gegenstück, und es ist ausgerechnet **die größte: „The
Walkaway"**, in über 65 % der mehrstufigen Gespräche. Definition: der Faden endet
einfach, ungelöst, ohne dass jemand es merkt.

In deinem Betrieb ist das kein Chat-Phänomen, sondern `waiting.md` mit 25 Punkten,
offene PRs, beantwortete Fragen ohne Folgeschritt. Es ist der einzige Fehlertyp,
gegen den du **keine** Schutzmaßnahme gebaut hast — für alle anderen gibt es eine
(Teil-Commit-Wächter, Diff-statt-Text prüfen, Qualitätstor). Ehrlich: das ist
meine Übertragung, nicht Potts' Aussage. Aber die Lücke ist echt.

---

## 8. Kürzere Liste — richtig, billig, nie gezogen

- **`claude -p --fallback-model A,B`** macht nativ, was der Sitzungs-Starter mit
  `model.conf` von Hand baut. **`claude setup-token`** gibt einen langlebigen
  Zugang statt kurzlebigem OAuth — die Notiz vom 14.07. sagt ausdrücklich
  *„prüfen, ob das die stille-Ausfall-Klasse beseitigt"*. Nie geprüft; stattdessen
  wurde der Telegram-Login-Tanz gebaut. (`claude-prompt-commands.md`)
- **„Vielleicht sollte in der Werbung gar nicht KI stehen."** Zwei Notizen sagen,
  dass die Stimmung zu KI außerhalb der Technikwelt negativ ist und man das
  *Ergebnis* verkaufen soll. Auf solytics.de steht „KI-Automatisierung" in
  `index.html`, `About.vue`, `Kontakt.vue`, `FunnelCTA.vue`,
  `RelatedArticles.vue`, `BlogArticle.vue` — nachgezählt. Kostenlos testbar, und
  solytics ist das einzige Repo, in dem du ohnehin Ideen einbringen darfst.
- **Die 45-%-Schwelle** (Linear Digressions 8) räumt einen Verdacht aus statt
  einen zu bestätigen: mehrere Agenten helfen bei **unabhängigen Teilaufgaben**
  (+80 %) und schaden bei **abhängigen Schritten** (−70 %). Fabrik = ein Arbeiter
  pro Ticket = der gute Fall. Die Warnung gilt dem Zerlegen *einer*
  aufeinander aufbauenden Aufgabe auf mehrere Agenten — nicht Fabriks Bauform.
- **Kill-Schwellen gehören in erwartete Abschlüsse, nicht in Euro oder Tage.**
  (`stochastic-processes.md`) Bei kleiner Rate sind Wochen ohne Verkauf der
  *erwartete* Verlauf, kein Todesbeleg. Die 500-€-Schwelle bei fingrab misst
  Ausgaben, nicht Erwartung.
- **West: melde Verzehnfachungs-Zeiten, nicht Verdopplungen** — und sag nie
  „exponentiell", wenn du „schnell" meinst. Eine Exponentialkurve ist am Anfang
  *langsam*, genau dann sagen es alle.

---

## 9. Hauswirtschaft

`my-rejection-story/anne-laure-lecunff-negativity-bias-tiny-experiments.md` endet
mit zwei versehentlich hineingeschriebenen Werkzeug-Marken (`</content>`,
`</invoke>`) — Rest eines Schreibvorgangs. Inhaltlich unversehrt, aber die Datei
sollte sauber sein.

---

## Die eine Zeile, wenn du nur eine liest

**Der einzige Suchbegriff, der auf deinen lebenden Seiten je einen Klick
gebracht hat, ist dein eigener Produktname — und niemand hat je etwas gebaut, das
ihn bedient.** Alles andere in diesen 88 Notizen ist Beiwerk zu dieser Zahl.
