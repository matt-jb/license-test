const pnpmTopLevel = require("./package-managers-comparisons/pnpm-toplevel.json");
const pnpmRecursive = require("./package-managers-comparisons/pnpm-recursive.json");

const pnpmTopLevelDeps = [
  ...getDeps(pnpmTopLevel[0].dependencies),
  // ...getDeps(pnpmTopLevel[0].devDependencies),
  // ...getDeps(pnpmTopLevel[0].unsavedDependencies),
];
const pnpmRecursiveDeps = [
  ...getDeps(pnpmRecursive[0].dependencies),
  ...getDeps(pnpmRecursive[0].devDependencies),
  ...getDeps(pnpmRecursive[0].unsavedDependencies),
];

function getDeps(deps) {
  return Object.keys(deps).map((dep) => {
    return dep;
  });
}

console.log(pnpmTopLevelDeps.length);
console.log(pnpmRecursiveDeps.length);
