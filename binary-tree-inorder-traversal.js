// leetcode.com/problems/binary-tree-inorder-traversa

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
https: /**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const stack = [];
  const res = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      res.push(root.val);
      root = root.right;
    }
  }
  return res;
};

// much simpler recusrive approch

// const inorderTraversal = root => {
//     if (!root) {
//         return []
//     }

//     return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
// }
