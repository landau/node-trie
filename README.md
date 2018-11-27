# node-trie

[![Build Status](https://travis-ci.com/landau/node-trie.svg?branch=master)](https://travis-ci.com/landau/node-trie)

A [trie](https://en.wikipedia.org/wiki/Trie) implementation for NodeJS

## Install

```sh
npm i -S trie-node
```

## Usage

### TS

```js
import { createTrie, Trie } from '@landau/trie';
const trie: Trie = createTrie();
trie.insert('hi');
trie.find('hi'); // true
```

### JS

```js
const { createTrie } = require('@landau/trie');
const trie = createTrie();
trie.insert('hi');
trie.find('hi'); // true
```
