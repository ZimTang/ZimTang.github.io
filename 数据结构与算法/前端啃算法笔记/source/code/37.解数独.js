/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      // 跳过已经放置了数字的格子
      if (board[i][j] !== ".") {
        continue;
      }
      // 开始放置数字
      for (let k = 1; k <= 9; k++) {
        k = k.toString();
        // 判断数独是不是合理的
        if (isValid(board, i, j, k)) {
          board[i][j] = k;
          // 放下一个数字的解
          if (solveSudoku(board)) {
            return true;
          }
          board[i][j] = ".";
        }
      }
      // 放不了
      return false;
    }
  }
  return true;
};

function isValid(board, row, col, k) {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === k || board[i][col] === k) {
      return false;
    }
  }
  const x = Math.floor(row / 3) * 3;
  const y = Math.floor(col / 3) * 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[x + i][y + j] === k) {
        return false;
      }
    }
  }
  return true;
}
// @lc code=end
