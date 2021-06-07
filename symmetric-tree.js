// https://leetcode.com/problems/symmetric-tree/submissions/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  return isMirror(root.left, root.right);
};

const isMirror = (p, q) => {
  if (!p !== !q) {
    return false;
  }
  if (!p || !q) {
    return true;
  }
  if (p.val === q.val) {
    return isMirror(p.left, q.right) && isMirror(p.right, q.left);
  }
  return false;
};
