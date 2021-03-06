/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  if (board.length === 0) {
    return false
  }

  if (word.length === 0) {
    return false
  }

  let row = board.length
  let col = board[0].length
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      // 每一个都可以作为起点
      // 0就是当前查询的字母索引
      const res = breaktrack(i, j, 0) 
      if (res) {
        return res
      }
    }
  }
  return false

  function breaktrack(i, j, current) {
    // 判断越界
    if (i >= row || i < 0) {
      return false
    }
    if (j >= col || j < 0) {
      return false
    }

    let letter = board[i][j] 
    // 判断当前查询的结果
    if (letter !== word[current]) {
      return false
    }
    // 找到最后一个也匹配
    if (current === word.length - 1) {
      return true
    }
    
    // 选择当前的字母
    board[i][j] = null 
    // 进入下一层决策树
    const res = 
      breaktrack(i + 1, j, current + 1) || 
      breaktrack(i - 1, j, current + 1) ||
      breaktrack(i, j + 1, current + 1) || 
      breaktrack(i, j - 1, current + 1)  
    // 撤销选择
    board[i][j] = letter
    return res
  }
};
// @lc code=end

