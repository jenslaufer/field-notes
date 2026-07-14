# "Claude Commands" — 14 Prompt-Kurzbefehle (Instagram-Listicle)

**Quelle:** Instagram-Reel von @akashafter2am, „Claude Commands — Secret Codes" (Screenshot 12.07.2026).

**Ehrliche Einordnung zuerst:** Das sind keine „Secret Codes" und keine eingebauten Claude-Funktionen. Claude kennt keinen dieser Befehle nativ — jeder ist nur ein benannter Prompt-Baustein („wenn ich /devil schreibe, meine ich: spiel den Advocatus Diaboli"). Der Wert liegt nicht in den Slashes, sondern in der Checkliste dahinter: 14 wiederverwendbare Denkzüge, die man sonst vergisst anzufordern.

## Die 14 Befehle (verbatim aus dem Reel)

| Befehl | Bedeutung |
|---|---|
| /goal | Define a clear goal |
| /devil | Challenge the assumption |
| /10x | Think 10x bigger |
| /pitch | 30-second pitch |
| /ghost | Simulate a user persona |
| /compare | Compare options |
| /scout | Explore risks & blind spots |
| /build | Build step-by-step |
| /solve | Solve complex problems |
| /optimize | Improve & optimize |
| /critique | Critique & improve |
| /explain | Explain like I'm 5 |
| /brief | Give concise brief |
| /teach | Teach me step-by-step |

Claim des Reels: „Better prompts. Better answers. Better everything." (Think deeper · Get better answers · Work smarter · Solve anything.)

## Solo-Builder-Read (Jens)

- **Du hast die stärkeren Versionen schon als echte Skills/Agents:** /devil ≈ nassim-taleb-Agent + Critic-Agents, /ghost ≈ ux-researcher-Persona, /critique ≈ die *-critic-Agents, /scout ≈ Premortem-Check, /pitch ≈ entrepreneur-Agent. Der Reel verkauft als „Geheimcode", was bei dir bereits Infrastruktur ist.
- **Was trotzdem mitnehmenswert ist:** die Liste als *Denkzug-Checkliste* vor wichtigen Entscheidungen — besonders /devil, /scout, /compare in Folge (Annahme angreifen → blinde Flecken → Optionen vergleichen). Das ist ein brauchbares 3-Schritt-Ritual vor jedem größeren Bau-Entscheid.
- **Meta:** Solcher Content (Listicle + „comment for the full guide") ist ein Lead-Magnet-Muster — Engagement-Köder, der Reichweite in DMs/Follows konvertiert. Als Distribution-Vorlage interessanter als als Claude-Tipp: einfache Tabelle + klare Nutzenversprechen + Kommentar-CTA = 1.471 Likes.

*Erfasst 2026-07-12.*

---

## Nachtrag: Die ECHTEN versteckten Claude-Code-Kommandos

Anders als die 14 Fake-Slashes oben sind die folgenden real — **verifiziert 2026-07-14** gegen die installierte CLI (`claude 2.1.209` auf dem Mini-PC, `claude --help`) und die offizielle Doku (code.claude.com/docs: commands, interactive-mode, workflows). Auswahl bewusst: nur was kaum jemand kennt; `/help`, `/clear`, `/model` & Co. ausgelassen.

### Die zwei geheimsten Hebel

| Hebel | Was er tut |
|---|---|
| **`ultracode` als Wort im Prompt** | Opt-in für Multi-Agent-Workflows: Claude schreibt ein Orchestrierungs-Skript (parallele Subagents, Verify-Stufen) statt Schritt für Schritt zu arbeiten. Beispiel: `ultracode: prüfe alle API-Endpoints unter src/routes/ auf fehlende Auth-Checks`. „use a workflow" in eigenen Worten geht auch. Versehentlich getriggert? `Alt+W` verwirft das Highlight. |
| **`/effort ultracode`** | Session-weit: xhigh-Reasoning + automatische Workflow-Orchestrierung für JEDE substanzielle Aufgabe — ein Request kann mehrere Workflows hintereinander werden (verstehen → bauen → verifizieren). Deutlich mehr Tokens. Zurück mit `/effort high`. Auch als Start-Flag: `claude --effort ultracode`. |

Dazu **undokumentiert** (nicht in der öffentlichen Doku, aber im Workflow-Harness von 2.1.209 verdrahtet): ein `+500k`-artiges Kürzel im Prompt setzt ein **hartes Token-Ziel** für den Turn — Workflows skalieren ihre Agenten-Flotte daran und stoppen am Limit.

### Versteckte Eingabe-Tricks (interaktive Session)

| Trick | Was es tut |
|---|---|
| `!befehl` am Zeilenanfang | Shell-Mode: Befehl läuft direkt, Output landet im Kontext |
| `@` | Datei-Pfad-Autocomplete mitten im Prompt |
| `Esc` `Esc` (bei leerem Input) | **Rewind-Menü**: Code UND Konversation auf einen früheren Checkpoint zurückspulen |
| `Ctrl+O` | Transcript-Viewer; darin `[` = ganze Konversation ins native Terminal-Scrollback (durchsuchbar), `v` = im $EDITOR öffnen |
| `Ctrl+B` | Laufende Bash-Befehle/Agents in den Hintergrund schicken |
| `Ctrl+X Ctrl+K` | Alle Hintergrund-Subagents stoppen (2× binnen 3 s) |
| `Ctrl+G` | Prompt im $EDITOR schreiben statt in der TUI |
| `Shift+Tab` | Permission-Modes durchschalten (Manual → acceptEdits → plan → …) |
| `Alt+P` / `Alt+T` / `Alt+O` | Modell wechseln / Thinking togglen / Fast Mode togglen — ohne den Prompt zu verlieren |
| `Space` halten | Diktat (Voice), wenn aktiviert |

### Unterschätzte Slash-Kommandos

- **`/btw <frage>`** — Seitenfrage stellen, ohne die Konversation/den Kontext zu verschmutzen.
- **`/branch [name]`** — Konversation verzweigen und andere Richtung probieren; Original bleibt via `/resume` erhalten.
- **`/fork <auftrag>`** — Hintergrund-Subagent, der die KOMPLETTE Konversation erbt und parallel arbeitet; Ergebnis kommt zurück.
- **`/cd <pfad>`** — Session in anderes Verzeichnis verschieben; Prompt-Cache bleibt erhalten (CLAUDE.md wird als Message angehängt statt System-Prompt-Rebuild).
- **`/compact [anweisung]`** — Kontext verdichten MIT Fokus-Anweisung („behalte die API-Details").
- **`/context`** — zeigt, was das Kontextfenster gerade belegt.
- **`/usage`** — Plan-Limits + Verbrauch, aufgeschlüsselt nach Skill/Subagent/Plugin/MCP (die 5h-Budget-Frage, direkt in der Session).
- **`/insights`** — Report über die eigene Nutzung inkl. Reibungspunkten über viele Sessions.
- **`/recap`** — Ein-Zeilen-Zusammenfassung der Session; `/copy [N]` — Antwort in die Zwischenablage; `/export [datei]`.
- **`/goal [ziel]`** — explizites Ziel für lange autonome Läufe setzen (long-horizon-Steuerung).
- **`/ultraplan <prompt>`** — Deep-Planning-Modus; **`/code-review ultra`** — Cloud-Multi-Agent-Review (Alias `/ultrareview`, auch headless: `claude ultrareview [PR]`).
- **`/loop`, `/schedule`, `/batch`, `/deep-research`** — Automatisierung: wiederkehrende Prompts, Cron-Cloud-Agents, parallele Massen-Änderungen, recherchierte Reports.
- **`/advisor [modell]`** — Zweitmodell, das an Schlüsselmomenten mitberät.
- **`/fewer-permission-prompts`** — scannt Transkripte und baut automatisch eine Permission-Allowlist.
- **`/fast`** — Fast Mode (Opus mit ~2,5× Output-Tempo); **`/powerup`** — interaktive Feature-Lektionen.
- Easter Eggs: **`/radio`** (Claude FM Lo-Fi-Stream), **`/stickers`**.

### CLI-Flags & Subcommands, die kaum jemand kennt (aus `claude --help`, 2.1.209)

- **`claude --bg`** + **`claude agents`** — Session als Hintergrund-Agent starten und verwalten.
- **`claude -w [name]`** (+ `--tmux`) — eigene Git-Worktree pro Session, optional mit tmux-Pane.
- **`claude -p --fallback-model modellA,modellB`** — automatischer Modell-Fallback bei Overload (headless).
- **`claude setup-token`** — langlebiger Auth-Token fürs Abo (statt kurzlebigem OAuth).
- **`claude --bare`** / **`--safe-mode`** — Minimal-Modus bzw. alles Custom aus (Troubleshooting kaputter Configs).
- **`claude --append-system-prompt '…'`**, **`--agents '{json}'`**, **`--effort xhigh`**, **`--session-id <uuid>`**.
- **`claude --exclude-dynamic-system-prompt-sections`** — bessere Prompt-Cache-Wiederverwendung über Maschinen hinweg.
- `claude -c` (continue) / `claude -r` (resume mit Picker), `claude doctor`, `claude update`.

### Solo-Builder-Read (Jens)

- **`claude -p --fallback-model`** macht nativ, was unser Session-Launcher (model.conf preferred→fallback) von Hand baut — Kandidat, den Launcher zu vereinfachen.
- **`claude setup-token`** ist der saubere Weg für das „Claude-Login vom Handy"-Problem: langlebiger Token statt pty-Login-Tanz. Prüfen, ob er den OAuth-Expiry-Ausfall (Silent-Outage-Klasse) eliminiert.
- **`--bg` + `claude agents` + `-w`** sind genau die Primitive, die agent-tasks teilweise selbst nachbaut (Worktree-Isolation, Nacht-Läufe).
- **`ultracode` / `+500k`** steuern Reasoning-Tiefe und Agent-Fanout direkt aus dem Prompt — der echte „Secret Code", den das Instagram-Reel oben versprochen hat.
- `/usage` und `/insights` beantworten Budget- und Reibungs-Fragen aus echten Daten statt Gefühl.

*Nachtrag erfasst 2026-07-14 (CLI 2.1.209, Doku-Stand live).*
