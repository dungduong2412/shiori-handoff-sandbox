import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

test('NOTES.md has the two expected lines', () => {
  assert.ok(fs.existsSync('NOTES.md'), 'NOTES.md missing');
  const lines = fs.readFileSync('NOTES.md', 'utf8').split('\n').filter(Boolean);
  assert.equal(lines[0], 'hello from the handoff bridge');
  assert.equal(lines[1], 'reviewed by the bridge');
});
