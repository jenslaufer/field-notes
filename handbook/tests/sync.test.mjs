// Fails when the handbook lags its sources: a source path changed after
// its synced commit, or a learning has no L-number.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { homedir } from 'node:os';
import { fileURLToPath } from 'node:url';

const here = join(dirname(fileURLToPath(import.meta.url)), '..');
const repos = process.env.REPOS_DIR ?? join(homedir(), 'repos');
const sources = readFileSync(join(here, 'SOURCES.md'), 'utf8');
const learningsChapter = readFileSync(join(here, '10-learnings.md'), 'utf8');

const rows = (re) => [...sources.matchAll(re)].map((m) => m.slice(1));
const sourceRows = rows(/^\| ([\w-]+) \| (\S+) \| ([0-9a-f]{7,40}) \| [^|]+\|$/gm);
const learningRows = rows(/^\| (L-\d+) \| (\S+\.md) \|$/gm);

test('SOURCES.md parses', () => {
  assert.ok(sourceRows.length > 0, 'no source rows');
  assert.ok(learningRows.length > 0, 'no learning rows');
});

for (const [repo, path, synced] of sourceRows) {
  const dir = join(repos, repo);
  test(`${repo}/${path} unchanged since ${synced}`, { skip: !existsSync(dir) && `${dir} missing` }, () => {
    const log = execFileSync('git', ['-C', dir, 'log', '--oneline', `${synced}..HEAD`, '--', path], { encoding: 'utf8' }).trim();
    assert.equal(log, '', `changed since ${synced} — update the chapters, then the Synced column:\n${log}`);
  });
}

const learningsDir = join(repos, 'marketing', 'learnings');
test('every learning has an L-number', { skip: !existsSync(learningsDir) && 'marketing repo missing' }, () => {
  const mapped = new Set(learningRows.map(([, file]) => file));
  const missing = readdirSync(learningsDir).filter((f) => /^\d{4}-\d\d-\d\d-.+\.md$/.test(f) && !mapped.has(f));
  assert.deepEqual(missing, [], 'add to 10-learnings.md and SOURCES.md');
});

test('every L-number has a section in 10-learnings.md', () => {
  for (const [l] of learningRows) assert.match(learningsChapter, new RegExp(`^### ${l} `, 'm'), `${l} missing`);
});
