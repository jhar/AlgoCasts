// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let level = 0;
  const output = [];
  const arr = [root, null];

  while (arr.length) {
    const node = arr.shift();
   
    if (node) {
      if (output[level]) {
        output[level]++;
      } else {
        output[level] = 1;
      }
      
      arr.push(...node.children);
    } else if (node === null) {
      if (arr.length) {
        arr.push(node);
        level++;
      }
    }
  }

  return output;
}

module.exports = levelWidth;
