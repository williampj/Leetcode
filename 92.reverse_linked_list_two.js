92. Reverse Linked List II

Given the head of a singly linked list and two integers left and right where left <= right, 
reverse the nodes of the list from position left to position right, and return the reversed list.
 
Example 1:

Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]

Example 2:

Input: head = [5], left = 1, right = 1
Output: [5]
 
Constraints:

The number of nodes in the list is n.
1 <= n <= 500
-500 <= Node.val <= 500
1 <= left <= right <= n
 

Follow up: Could you do it in one pass?


========== Data Structures ==========
head node 
left int 
right int 

prev node 
curr node 
next node 
anchor node (pointing at head, later at tail) 
head node (to be swapped with tail)
tail node (to be swapped with head)

========== Algorithm ==========
edge cases 
  empty or single node list => return head 
  
left times iterate (starting at 1)
  move prev, curr and next ahead 
set anchor to prev (same as dummy if left is 1)
set tail to curr 

right minus left times iterate 
  set prev to curr 
  set curr to next 
  set next to next.next
  set curr.next to prev 

set anchor.next to curr 
tail.next to next 

return dummy next 

========== Solution ==========

Time Complexity: O(N)
Memory Complexity: O(1)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

var reverseBetween = function(head, left, right) {
  if (!head || !head.next) return head; 

  let dummy = new ListNode(null, head);
  let prev = dummy;
  let curr = head;
  let next = curr.next; 

  let anchor;
  let tail;

  for (let i = 1; i < left; i += 1) {
      prev = curr;
      curr = next; 
      next = next.next;
  }
  anchor = prev; // anchor same as dummy if left is 1 (head is reversed)
  tail = curr; 

  for (let i = left; i < right; i += 1) {
      prev = curr;
      curr = next; 
      next = next && next.next
      curr.next = prev;
  }
  
  anchor.next = curr; // anchor.next is same as dummy.next if left is 1
  tail.next = next; 

  return dummy.next;
};

