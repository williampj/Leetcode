2. Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]


Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.

========== Data Structures ==========
l1 - reversed ll
l2 - reversed ll 

carryover - int 
dummy - ll pointing to output head
output - reversed ll of sum 

========== Algorithm ==========
reverse both linked lists 
create output LL
set carryover to zero 
iterate the reversed linked lists together (while at least one of them is not null)
  if one ll is null, set that to zero 
  add digit of sum and carryover to output LL as head 
  update carryover
  advance both LLs 
add carryover to output ll as head if greater than zero 
return dummy next (output head)

========== Solution ==========
Runtime 100 ms Beats 85.62% of users with JavaScript
Memory 55.48 MB Beats 70.96% of users with JavaScript

Time Complexity: O(N)
Memory Complexity: O(N)

var addTwoNumbers = function(ll1, ll2) {
  let carryover = 0;
  const dummy = new ListNode(null, null);
  let prev = dummy; 

  while (ll1 || ll2) {
      const num1 = (ll1 && ll1.val) || 0;
      const num2 = (ll2 && ll2.val) || 0; 

      const sum = num1 + num2 + carryover;
      const digit = sum % 10; 
      const node = new ListNode(digit);
      prev.next = node; 

      prev = node; 
      carryover = sum >= 10 ? 1 : 0;
      ll1 = (ll1 && ll1.next) || null;
      ll2 = (ll2 && ll2.next) || null;
  };

  if (carryover) {
      prev.next = new ListNode(carryover);
  };

  return dummy.next;
};