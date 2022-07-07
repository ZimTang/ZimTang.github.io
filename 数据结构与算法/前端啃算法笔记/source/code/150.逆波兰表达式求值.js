/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  let calc = {
    "+": (a, b) => a + b,
    "-": (a, b) => b - a,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.trunc(b / a),
  };

  for (let t of tokens) {
    if (t in calc) {
      console.log(calc[t]);
      stack.push(calc[t](stack.pop(), stack.pop()));
    } else {
      console.log(t);
      stack.push(Number(t));
    }
  }
  return stack.pop();
};
// @lc code=end
