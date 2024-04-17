83. Remove Duplicates from Sorted List

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. 
Return the linked list sorted as well.

Example 1:

Input: head = [1,1,2]
Output: [1,2]

Example 2:

Input: head = [1,1,2,3,3]
Output: [1,2,3]
 

Constraints:

The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.


========== Data Structures ==========
dummy node 
head node 

prev node 
curr node 

========== Algorithm ==========
while current 
  if current val is same as prev value 
    set prev.next to curr.next 
  else 
    set prev to prev.next 
  set current to current next 

return dummy next


========== Solution ==========

var deleteDuplicates = function(head) {
  const dummy = new ListNode(null, head);
  let prev = dummy;
  let curr = head; 

  while (curr) {
      if (curr.val === prev.val) {
          prev.next = curr.next;
      } else {
          prev = prev.next;
      }
      curr = curr.next;
  }
  return dummy.next;
};

Time Complexity: O(N)
Memory Complexity: O(1)