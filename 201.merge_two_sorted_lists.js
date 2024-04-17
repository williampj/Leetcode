21. Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. 
The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:

Input: list1 = [], list2 = []
Output: []

Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 
Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.


========== Data Structures ==========
list1 node 
list2 node 

dummy node 
curr node 

========== Algorithm ==========
// edge cases: 
//   - if list1 is null => return list2 
//   - if list2 is null => return list1 

// create head node pointing to smallest of list1 or list2 head
// create empty curr node

// while list1 & list2 
//   if list1 is smaller
//     point curr.next to list1 
//     set curr to curr.next
//     set list1 to list1.next 
//   else 
//     point curr.next to list1 
//     set curr to curr.next 
//     set list2 to list2 next 
//   set curr to curr.next 

// if (list1)
//   point curr.next to list1 
// else 
//   point curr.next to list2 

// return dummy.next 

========== Solution ==========

var mergeTwoLists = function(list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  const head = list1.val <= list2.val ? list1 : list2;
  let curr = new ListNode();
  
  while (list1 && list2) {
      if (list1.val <= list2.val) {
          curr.next = list1;
          curr = curr.next;
          list1 = list1.next
      } else {
          curr.next = list2;
          curr = curr.next;
          list2 = list2.next
      }
  }

  if (list1) {
      curr.next = list1
  } else {
      curr.next = list2
  }

  return head
};

Time Complexity: O()
Memory Complexity: O()