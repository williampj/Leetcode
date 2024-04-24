82. Remove Duplicates from Sorted List II

Given the head of a sorted linked list, delete all nodes that have duplicate numbers, 
leaving only distinct numbers from the original list. Return the linked list sorted as well.

Example 1:
                 p         a r 
Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]

Example 2:

Input: head = [1,1,1,2,3]
Output: [2,3]
 
Constraints:

The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.


========== Data Structures ==========

dum 
prev
curr 
next

========== Algorithm ==========
if head nil or no next => return head 

prev is dummy 
curr is head 
next is head next 

while current
  if next is null => return dummy.next
  if curr is not equal to next
    advance all three 
  else 
    loop - next advances until different value or null 
    (after loop)
    if next is null 
      set prev.next to null 
      return dummy.next 
    else 
      set curr to next 
      set next to next.next 
      set prev.next to curr 

========== Solution ==========

Time Complexity: O(N)
Memory Complexity: O(1)

var deleteDuplicates = function(head) {
  if (!head || !head.next) return head; 
  
  const dummy = new ListNode(null, head);
  let prev = dummy;
  let curr = head;
  let next = curr.next; 

  while (curr) {
      if (!next) return dummy.next; 
      
      if (curr.val !== next.val) {
          prev = curr;
          curr = next;
          next = next.next;
      } 
      else {
          while(next && curr.val === next.val) {
              next = next.next;
          };
          if (!next) {
              prev.next = null;
              return dummy.next;
          } else {
              curr = next;
              next = next.next;
              prev.next = curr;
          }
      }
  }
};