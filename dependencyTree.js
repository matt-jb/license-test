const dependencyTree = require("dependency-tree");

// Returns a dependency tree object for the given file
const tree = dependencyTree({
  filename: "./src/index.js",
  directory: "./",
});

// Returns a post-order traversal (list form) of the tree with duplicate sub-trees pruned.
// This is useful for bundling source files, because the list gives the concatenation order.
// Note: you can pass the same arguments as you would to dependencyTree()
const list = dependencyTree.toList({
  filename: "./src/index.js",
  directory: "./",
});

console.log(tree);
console.log(list);
