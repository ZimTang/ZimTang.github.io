/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
 */

// @lc code=start
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
 * @return {number}
 */
 var sumOfLeftLeaves = function(root) {
  let leftSum = 0
  function traverse (root) {
    if (root === null) {
      return
    }
    let left = root.left
    if (left && !left.left && !left.right) {
      leftSum += left.val
    }
    traverse(root.left)
    traverse(root.right)
  }
  traverse(root)
  return leftSum
};
// @lc code=end

