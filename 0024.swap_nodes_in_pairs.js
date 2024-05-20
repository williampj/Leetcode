24. Swap Nodes in Pairs

Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
 
Example 1:

Input: head = [1,2,3,4]
Output: [2,1,4,3]

Example 2:

Input: head = []
Output: []

Example 3:

Input: head = [1]
Output: [1]
 
Constraints:

The number of nodes in the list is in the range [0, 100].
0 <= Node.val <= 100

========== Mental Models ==========
3 pointers: previous, current, next 
linear iteration

========== Data Structures ==========
head ListNode 

prev LN 
curr LN 
nextt LN

output head 

========== Algorithm ==========
while current has a next 
    set current's pointer to next's pointer 
    set next's pointer to current
    set previous's pointe to next

    advance previous two times 
    advance current once (it's already been swapped one spot ahead)
    advance next three times (it's been swapped one spot back)

return dummy next 

========== Solution ==========
Runtime 36 ms Beats 99.72% of users with JavaScript
Memory 49.06 MB Beats 42.35% of users with JavaScript

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
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head || !head.next) return head;
    
    const dummy = new ListNode(null, head);
    let prev = dummy;
    let curr = head; 
    let nextt = head.next;

    while (nextt) {
        curr.next = nextt.next; 
        nextt.next = curr; 
        prev.next = nextt;

        prev = prev.next.next; 
        curr = curr.next;
        nextt = curr?.next;
    }

    return dummy.next;
};