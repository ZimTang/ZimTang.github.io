/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let res = [];
  let track = [];
  backtrack(0, track);
  return res;

  function backtrack(row, tmp) {
    // 终止条件
    if (row === n) {
      // 转换
      res.push(
        tmp.map((c, r) => {
          let arr = new Array(n).fill(".");
          arr[c] = "Q";
          return arr.join('');
        })
      );
    }

    for (let col = 0; col < n; col++) {
      let canNotSet = tmp.some((c, r) => {
        return c === col || r + c === row + col || r - c === row - col;
      });
      if (canNotSet) {
        continue;
      }

      backtrack(row + 1, [...tmp, col]);
    }
  }
};
// @lc code=end
