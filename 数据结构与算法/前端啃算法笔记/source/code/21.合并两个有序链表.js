/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  // 遍历两个链表，每次判断节点头部的大小
  // 优先把小的追加到新的链表

  // 新链表
  let dummny = {
    next: null
  }
  let tmp = dummny
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      tmp.next = list1
      list1 = list1.next
    } else {
      tmp.next = list2
      list2 = list2.next
    }
    tmp = tmp.next
  }
  // 接上没遍历完的
  tmp.next = list1 === null ? list2 :list1
  return dummny.next
};
// @lc code=end

