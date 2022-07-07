/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let stack = [];
  for (const x of s) {
    let len = stack.length;
    if (len && stack[len - 1] === x) {
      stack.pop();
      continue;
    }
    stack.push(x);
  }
  return stack.join("");
};
// @lc code=end
