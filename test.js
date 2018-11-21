'use strict';

const assert = require('assert');
const { create: createTrie } = require('./');

const trie = createTrie();
const strings = ['hi', 'hello', 'bye', 'see ya'];

for (const s of strings) {
  assert(!trie.find(s), `Should not have found ${s}`);
  assert.strictEqual(trie.insert(s), undefined, 'No return value for insert');
  assert.ok(trie.find(s), `Should have found ${s}`);
}

assert.ok(trie.find(''), 'Returns true for empty string');
assert.strictEqual(
  trie.insert(''),
  undefined,
  'Does nothing for empty string inserts'
);

assert.throws(
  () => trie.insert(1),
  TypeError,
  'Throws a TypeError for non string'
);

assert.throws(
  () => trie.find(1),
  TypeError,
  'Throws a TypeError for non string'
);
