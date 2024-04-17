203. Remove Linked List Elements

Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
 
Example 1:

Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]

Example 2:

Input: head = [], val = 1
Output: []

Example 3:

Input: head = [7,7,7,7], val = 7
Output: [] 

Constraints:

The number of nodes in the list is in the range [0, 104].
1 <= Node.val <= 50
0 <= val <= 50


========== Data Structures ==========
dummy - node pointing to head 
head - LL node 
val - int (target)

prev = node 
curr = node 

headPointer - LL reference (to return at end)

========== Algorithm ==========
create dummy node with no value and next as head 
set prev to dummy 
sur curr to head 

while current
  if current value is target 
    set previous.next to current.next 
  else 
    set previous to previous next 
  set current to current next 
  

return dummy next 


========== Solution ==========

Time Complexity: O(N)
Memory Complexity: O(1)

var removeElements = function(head, val) {
  const dummy = new ListNode(null, head);
  let prev = dummy; 
  let curr = head; 

  while (curr) {
      if (curr.val === val) {
          prev.next = curr.next;
      } else {
          prev = prev.next;
      }
      curr = curr.next;
  }
  return dummy.next;
};


