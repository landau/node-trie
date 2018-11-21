'use strict';

function createNode() {
  const children = new Map();

  function add(key) {
    children.set(key, createNode());
  }

  function has(key) {
    return children.has(key);
  }

  function get(key) {
    return children.get(key);
  }

  return {
    isLeaf: false,
    add,
    has,
    get
  };
}

function createTrie() {
  const root = createNode();

  function insert(key) {
    if (typeof key !== 'string') {
      throw new TypeError('Expected a key of type string');
    }

    if (!key.length) return;

    let cur = root;
    for (const char of key) {
      if (!cur.has(char)) cur.add(char);
      cur = cur.get(char);
    }

    cur.isLeaf = true;
  }

  function find(key) {
    if (typeof key !== 'string') {
      throw new TypeError('Expected a key of type string');
    }

    if (!key.length) return true;

    let cur = root;
    for (const char of key) {
      if (!cur.has(char)) return false;
      cur = cur.get(char);
    }

    return cur != null && cur.isLeaf;
  }

  return { insert, find };
}

module.exports = { create: createTrie };
