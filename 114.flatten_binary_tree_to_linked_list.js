114. Flatten Binary Tree to Linked List

Given the root of a binary tree, flatten the tree into a "linked list":

The "linked list" should use the same TreeNode class 
where the right child pointer points to the next node in the list and the left child pointer is always null.

The "linked list" should be in the same order as a pre-order traversal of the binary tree.

Example 1:

Input: root = [1,2,5,3,4,null,6]
Output: [1,null,2,null,3,null,4,null,5,null,6]
      1
   2     5
 3  4       6

Example 2:

Input: root = []
Output: []

Example 3:

Input: root = [0]
Output: [0]
 

Constraints:

The number of nodes in the tree is in the range [0, 2000].
-100 <= Node.val <= 100

========== Data Structures ==========
root - node 

prev - node 
stack - array of nodes 

========== Algorithm ==========
base case:
- root is nill or childless => return 

create stack
set prev to root; 
push root truthy right to stack
push root truthy left to stack

while stack is not empty 
  current = pop stack 
  push right child to stack unless null 
  push left child to stack unless null 
  set prev.right to current; 
  set prev.left to null 
  set prev to current 


========== Solution ==========
Runtime 54 ms Beats 97.72% of users with JavaScript
Memory 52.08 MB Beats 87.69% of users with JavaScript

Time Complexity: O(N)
Memory Complexity: O(H)

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (!root || (!root.left && !root.right)) return;

  const stack = [];
  let current;
  let prev = root; 
  root.right && stack.push(root.right);
  root.left && stack.push(root.left);

  while (stack.length) {
      current = stack.pop();
      current.right && stack.push(current.right);
      current.left && stack.push(current.left);

      prev.right = current;
      prev.left = null;
      prev = current;
  }
};