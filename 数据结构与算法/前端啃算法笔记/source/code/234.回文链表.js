/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let slow = fast = head
  let prev
  while (fast && fast.next) {
    fast = fast.next.next
    
    // 翻转
    let next = slow.next
    slow.next = prev
    prev = slow
    slow = next
  }

  // slow在中间
  if (fast) {
    // 奇数个结点
    slow = slow.next
  }

  while (prev && slow) {
    if (prev.val !== slow.val) {
      return false      
    }
    prev = prev.next
    slow = slow.next
  }
  return true
};
// @lc code=end

