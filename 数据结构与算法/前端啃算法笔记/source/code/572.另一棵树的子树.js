/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 var isSubtree = function(root, subRoot) {
  if (root === null) {
      return false
  }
  if (root.val === subRoot.val) {
    if (isSameTree(root, subRoot)) {
      return true
    }
  }
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};

var isSameTree = function(root1,root2) {
  if (root1 === null && root2 === null) {
    return true
  }
  if (root1 === null || root2 === null) {
    return false
  }
  if (root1.val !== root2.val) {
    return false
  }
  return isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right)
}
// @lc code=end

