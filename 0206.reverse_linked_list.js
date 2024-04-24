206. Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list.
 
Example 1:

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:

Input: head = [1,2]
Output: [2,1]

Example 3:

Input: head = []
Output: []
 
Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
 

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?


========== Data Structures ==========
head node 

dummy node 
prev, curr, next node 

========== Algorithm ==========
edge cases: 
  - return null if no head 
  - return head if head has no next 

set previous to null 
set current to head 
set next to head next 

while there is a current
  set current.next to previous 
  set previous to current 
  set current to next 
  if next
    set next to next.next 

return prev 

========== Solution ==========

var reverseList = function(head) {
  if (!head || !head.next) return head; 

  let prev = null;
  let curr = head;
  let next = head.next; 

  while (curr) {
      curr.next = prev;
      prev = curr;
      curr = next; 
      if (next) {
          next = next.next; 
      }
  }

  return prev; 
};


Time Complexity: O(N)
Memory Complexity: O(1)