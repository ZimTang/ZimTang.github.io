/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let slow = (fast = 0);
  let sum = 0;
  let res = Infinity;
  while (fast < nums.length) {
    sum += nums[fast];
    while (sum >= target) {
      res = Math.min(res, fast - slow + 1);
      sum -= nums[slow++];
    }
    fast++
  }
  return res === Infinity ? 0 : res;
};
// @lc code=end
