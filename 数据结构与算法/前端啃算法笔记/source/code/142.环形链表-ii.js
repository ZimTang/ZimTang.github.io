/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let slow = fast = head
  while (fast && fast.next) {
      slow = slow.next
      fast = fast.next.next
      if (slow === fast) break
  }
  // 有空指针就说明不是环
  if (!fast || !fast.next) {
      return null
  }
  slow = head
  while (slow != fast) {
      slow = slow.next
      fast = fast.next
  }
  return slow
};
// @lc code=end

