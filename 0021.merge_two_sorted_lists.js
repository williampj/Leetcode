21. Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

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

========== Mental Model ==========
3 while loops 
- the first is when both are truthy 
- second when one is out of bounds 
- the last to clean up the remaining 

========== Data Structures ==========
list1 - LL 
list2 - LL 

dummy - LL 
prev - LL 

output - LL 

========== Algorithm ==========
set dummy 
set prev to dummy 

while both are truthy 
- if the first is less than second 
    - set prev next that node 
    - set prev to prev next 
    - advance chosen node 

while one is truthy 
- set prev next that node 
- set prev to prev next 
- advance chosen node 

return dummy next 


========== Solution ==========

Time Complexity: O(N)
Memory Complexity: O(N) - NB: An slight optimization could be made that mutates a list in place and returns it 

Runtime 53 ms Beats 92.31% of users with JavaScript
Memory 51.20 MB Beats 83.39% of users with JavaScript

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
    const dummy = new ListNode();
    let prev = dummy; 

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            prev.next = list1;
            list1 = list1.next;
        } else {
            prev.next = list2;
            list2 = list2.next;

        }
        prev = prev.next;
    }
    
    while (list1) {
            prev.next = list1;
            prev = prev.next;
            list1 = list1.next;
    }

    while (list2) {
            prev.next = list2;
            prev = prev.next;
            list2 = list2.next;
    }

    return dummy.next;
};