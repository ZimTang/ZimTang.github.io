/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function (candidates, target) {
  let res = [];
  let path = [];

  // 先排序 nlgn
  candidates.sort();
  backtrace(0, 0);
  return res;

  /*
   * candidates 的索引
   * path 路径之和    
   */
  function backtrace(inx, sum) {
    // 1.终止条件
    if (sum > target) {
      return;
    }
    if (sum === target) {
      res.push([...path]);
    }

    // 2.迭代
    for (let i = inx; i < candidates.length; i++) {
      let num = candidates[i];
      if (sum + num > target) {
        continue;
      }
      // 3.标记
      path.push(num);
      sum += num;
      // 4.递归
      backtrace(i, sum);
      // 5.撤销标记
      path.pop();
      sum -= num;
    }
  }
};
// @lc code=end
