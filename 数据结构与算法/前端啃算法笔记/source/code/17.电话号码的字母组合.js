/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const len = digits.length;
  const arr = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];

  let res = [];
  if (len === 0) {
    return res;
  }

  let path = [];
  backtrack(digits, len, 0);
  return res;

  function backtrack(digits, l, i) {
    // 终止条件
    if (path.length === l) {
      res.push(path.join(""));
      return;
    }

    for (const v of arr[digits[i]]) {
      path.push(v);
      backtrack(digits, l, i + 1);
      path.pop();
    }
  }
};
// @lc code=end
