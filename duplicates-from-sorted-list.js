// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let d = {};
  let node = head;
  let prev;
  while (node) {
    if (node.val in d) {
      prev.next = node.next;
    } else {
      d[node.val] = true;
      prev = node;
    }
    node = node.next;
  }
  return head;
};
