/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let slow = 0
  let fast = 0
  while (fast < nums.length) {
    if (nums[fast]) {
      [nums[slow],nums[fast]] = [nums[fast],nums[slow]]
      slow++
    }
    fast++
  }
    // 双指针
    // let slow = 0
    // let fast = 0
    // while(fast<nums.length){
    //   if(nums[fast]){
    //     [nums[slow],nums[fast]] = [nums[fast],nums[slow]]
    //     // let tmp = nums[slow]
    //     // nums[slow] = nums[fast]
    //     // nums[fast] = tmp
    //     slow++
    //   }
    //   fast++
    // }
};

const arr = [0,1,0,3,12]
// [0,1,0,3,12] slow 0 fast 1
// [1,0,0,3,12] slow 1 fast 2
// [1,3,0,0,12] slow 2 fast 4
// [1,3,12,0,0]
moveZeroes(arr)
console.log(arr)
// @lc code=end

