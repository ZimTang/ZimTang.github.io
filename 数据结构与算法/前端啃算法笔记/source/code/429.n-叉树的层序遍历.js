/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
  if (root === null) {
    return []
  }
  let res = []
  let queue = [root]
  while (queue.length) {
    let len = queue.length
    let curLevel = []
    while (len--) {
      let node = queue.shift()
      curLevel.push(node.val)
      node.children.forEach(child => {
        child && queue.push(child)
      })
    }
    res.push(curLevel)
  }
  return res
};
// @lc code=end

