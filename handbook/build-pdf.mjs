// Builds _book/handbook.pdf: chapters → one Markdown → pandoc → Typst (bundled with Quarto).
// Usage: node build-pdf.mjs   (needs pandoc ≥ 3 and quarto on PATH)
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
export const CHAPTERS = [
  'index.md', '01-bet-rules.md', '02-evidence.md', '03-niche-sweep.md',
  '04-opportunity-scan.md', '05-idea-research.md', '06-market-sizing.md',
  '07-channel-evaluation.md', '08-channel-cards.md', '09-playbooks.md',
  '10-learnings.md', '11-research.md', '12-appendix.md',
];

const anchor = (file) => 'ch-' + file.replace(/\.md$/, '');

// Tag each chapter's title with an id, point cross-chapter links at it.
const chapter = (file) =>
  readFileSync(join(here, file), 'utf8')
    .replace(/^# (.+?)(?: \{([^}]*)\})?$/m, (_, title, attrs) => `# ${title} {#${anchor(file)}${attrs ? ' ' + attrs : ''}}`)
    .replace(/\]\((\d\d-[\w-]+\.md|index\.md)\)/g, (_, f) => `](#${anchor(f)})`);

const out = join(here, '_book');
mkdirSync(out, { recursive: true });
const md = join(out, 'handbook.md');
const typ = join(out, 'handbook.typ');
writeFileSync(md, CHAPTERS.map(chapter).join('\n\n```{=typst}\n#pagebreak()\n```\n\n'));
execFileSync('pandoc', [md, '-s', '-o', typ, '--toc', '--toc-depth=2',
  '-M', 'title=Opportunity & Marketing Handbook',
  '-M', 'subtitle=Finding bets and marketing them — by hand',
  '-M', `date=${new Date().toISOString().slice(0, 10)}`,
  '-V', 'papersize=a4', '-V', 'fontsize=10pt'], { stdio: 'inherit' });
// Left-aligned cells with a light grid: worksheets get filled in by hand.
writeFileSync(typ, readFileSync(typ, 'utf8')
  .replaceAll('align(center)[#table(', 'block[#table(stroke: 0.5pt + luma(170), inset: 5pt, ')
  .replace(/align: \((auto,)+\)/g, 'align: left'));
execFileSync('quarto', ['typst', 'compile', typ, join(out, 'handbook.pdf')], { stdio: 'inherit' });
console.log(join(out, 'handbook.pdf'));
