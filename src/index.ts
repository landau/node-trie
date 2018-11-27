type TrieNode = {
  isLeaf: boolean;
  add(key: string): TrieNode;
  get(key: string): TrieNode | undefined;
};

function createNode(): TrieNode {
  const children = new Map<string, TrieNode>();

  function add(key: string): TrieNode {
    const node = createNode();
    children.set(key, node);
    return node;
  }

  function get(key: string): TrieNode | undefined {
    return children.get(key);
  }

  return {
    isLeaf: false,
    add,
    get
  };
}

type Trie = {
  insert(key: string): void;
  find(key: string): boolean;
};

export function createTrie(): Trie {
  const root = createNode();

  function insert(key: string): void {
    if (!key.length) return;

    let cur = root;
    for (const char of key) {
      cur = cur.get(char) || cur.add(char);
    }

    cur.isLeaf = true;
  }

  function find(key: string): boolean {
    if (!key.length) return true;

    let cur = root;
    for (const char of key) {
      const next = cur.get(char);
      if (!next) return false;
      cur = next;
    }

    return cur != null && cur.isLeaf;
  }

  return { insert, find };
}
