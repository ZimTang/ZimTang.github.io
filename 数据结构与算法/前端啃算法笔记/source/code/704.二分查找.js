/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  // 不能访问到right
  // let right = nums.length;
  while (left <= right) {
    // let mid = (left + right) >> 1;
    let mid = left + ((left + right) >> 1);
    if (nums[mid] < target) {
      // 右边找
      left = mid + 1;
    } else if (nums[mid] > target) {
      // 左边找
      right = mid - 1;
    } else if (nums[mid] === target) {
      return mid;
    }
  }
  return -1;
};
// @lc code=end
