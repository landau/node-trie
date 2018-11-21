# node-trie

[![Build Status](https://travis-ci.com/landau/node-trie.svg?branch=master)](https://travis-ci.com/landau/node-trie)

A [trie](https://en.wikipedia.org/wiki/Trie) implementation for NodeJS

## Install

```sh
npm i -S trie-node
```

## Usage

```js
const { create: createTrie } = require('trie-node');
const trie = createTrie();
trie.insert('hi');
trie.find('hi'); // true
```
