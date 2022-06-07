/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  // [3,2,2,3,4,5]  4
  let k = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k++] = nums[i]
    }
  }
  return k
};
// @lc code=end

