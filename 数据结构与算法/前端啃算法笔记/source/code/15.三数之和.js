/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if(nums.length<3){
    return []
  } 
  const list = []
  // 排序
  nums.sort((a,b)=>a-b)
  for(let i=0;i<nums.length;i++){
    // 因为是有顺序的所以要排除重复的
    if(nums[i]===nums[i-1]){
      continue
    }
    let left = i+1
    let right = nums.length-1
    while(left<right){
      // 找到了一组
      if(nums[i]+nums[left]+nums[right]===0){
        list.push([nums[i],nums[left],nums[right]])
        // 略过重复的
        while(nums[left] === nums[left+1]){
          left++
        }
        left++
        while(nums[right] === nums[right+1]){
          right--
        }
        right--
      }else if(nums[i]+nums[left]+nums[right]<0){
        left++
      }else{
        right--
      }
    }
  }
  return list
};
// @lc code=end

