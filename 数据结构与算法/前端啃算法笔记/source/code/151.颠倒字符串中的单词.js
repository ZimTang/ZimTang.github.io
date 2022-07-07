/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 颠倒字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let left = 0;
  let right = s.length - 1;
  let queue = [];
  let word = "";
  while (s.charAt(left) === " ") {
    left++;
  }
  while (s.charAt(right) === " ") {
    right--;
  }

  while (left <= right) {
    let ch = s.charAt(left);
    if (ch == " " && word) {
      queue.unshift(word);
      word = "";
    } else if (ch !== " ") {
      word += ch;
    }
    left++;
  }
  queue.unshift(word);
  return queue.join(" ");
};
// @lc code=end
