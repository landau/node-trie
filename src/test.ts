'use strict';

import * as assert from 'assert';
import { createTrie } from './index';

const trie = createTrie();
const strings: string[] = ['hi', 'hello', 'bye', 'see ya'];

for (const s of strings) {
  assert.equal(trie.find(s), false, `Should not have found ${s}`);
  assert.strictEqual(trie.insert(s), undefined, 'No return value for insert');
  assert.ok(trie.find(s), `Should have found ${s}`);
}

assert.ok(trie.find(''), 'Returns true for empty string');
assert.strictEqual(
  trie.insert(''),
  undefined,
  'Does nothing for empty string inserts'
);
