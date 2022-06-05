/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function backtrack(nums, track, res) {
  // 到达叶子节点
  if (track.length === nums.length) {
    res.push([...track])
  }
  for (let i = 0; i < nums.length; i++) {
    // 排除不合法的选择
    if (track.includes(nums[i])) {
      continue
    }
    // 做选择
    track.push(nums[i])
    // 进入下一层决策树
    backtrack(nums, track, res)
    // 取消选择
    track.pop()
  }
}
var permute = function (nums) {
  let track = []
  let res = []
  backtrack(nums, track, res)
  return res
}
// @lc code=end
