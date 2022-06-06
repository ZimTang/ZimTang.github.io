/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {

  // 贪心＋二分 Vue中的diff算法
  // 让序列尽可能增长的慢
  // [1,3,5] 比 [1,4,5] 好一些
  let n = nums.length
  // arr是有序递增的
  let arr = [nums[0]]
  for (let i = 0; i < n; i++) {
    if (nums[i] > arr[arr.length - 1]) {
      // 新增一个
      arr.push(nums[i])
    } else {
      // 找到arr中第一个比nums[i]大的数字，修改它
      // 二分查找
      let left = 0
      let right = arr.length - 1
      while (left < right) {
        let mid = (left + right) >> 1
        if (arr[mid] < nums[i]) {
          left = mid + 1
        } else {
          right = mid
        }
      }
      arr[left] = nums[i]
    }
  }
  return arr.length

  
  // 动态规划解法
  // dp[i]的定义：在i位置以前的数组，最长递增子序列的长度
  // nums:[0,1,0,3,2,3]
  // dp:[1,2,2,3,3,3]
  // let n = nums.length
  // let dp = Array(n).fill(1)
  // for (let i = 0; i < n; i++) {
  //   for (let j = 0; j < i; j++) {
  //     if (nums[i] > nums[j]) {
  //       dp[i] = Math.max(dp[i], dp[j]+1)
  //     }
  //   }
  // }
  // return Math.max(...dp)
};
// @lc code=end

