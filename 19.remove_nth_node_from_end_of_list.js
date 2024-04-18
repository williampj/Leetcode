19. Remove Nth Node From End of List

Given the head of a linked list, remove the nth node from the end of the list and return its head.
 
Example 1:

Input: head = [1,2,3,4,5], n = 2   length 5
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1] 

Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz


========== Data Structures ==========
head node 
n int 

dummy 
prev 
curr 
next 
counter int 

========== Algorithm ==========
edge cases 

loop through list, counting number of nodes 

loop counter minus n times 
  - advancing prev and curr 
set prev.next to curr.next 

return dummy.next 

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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (!head.next) return null;
  
  const dummy = new ListNode(null, head);
  let prev = dummy;
  let curr = head;
  let runner = curr;
  let counter = 0;

  while (runner) {
      counter += 1;
      runner = runner.next;
  } 

  for (let i = 0; i < (counter - n); i += 1) {
      prev = curr;
      curr = curr.next;
  }
  prev.next = curr.next;

  return dummy.next;
};