/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  let arr = []
  let first
  let second
  function traverse (root) {
    if (root === null) {
      return
    }
    traverse(root.left)
    arr.push(root)
    traverse(root.right)
  }
  traverse(root)
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].val > arr[i+1].val) {
      // 第一次出现两者不是递增的
      if (!first) {
        first = arr[i]
      }
      second = arr[i + 1]
    }
  }
  let tmp = first.val
  first.val = second.val
  second.val = tmp 
};
// @lc code=end

