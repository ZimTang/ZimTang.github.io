/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  let prev = 0
  let cur = 1
  let sum = 0
  if (n === 0) {
    return 0
  }
  if (n === 1 || n === 2) {
    return 1
  }
  for (let i = 2; i <= n; i++) {
    sum = prev + cur
    prev = cur
    cur = sum
  }
  return sum
};
// @lc code=end

