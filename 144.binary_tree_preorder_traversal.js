144. Binary Tree Preorder Traversal

Given the root of a binary tree, return the preorder traversal of its nodes' values.

Example 1:

Input: root = [1,null,2,3]
Output: [1,2,3]

Example 2:

Input: root = []
Output: []

Example 3:

Input: root = [1]
Output: [1]

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100

========== Data Structures ==========
root - node 

stack = array of nodes 
output - array of ints 

========== Algorithm ==========
add root to the stack 

while the stack is not empty 
  pop the stack and add val to output 
  if there's a right
    push right to stack 
  if there's a left 
    push left to stack 

========== Solution ==========

Time Complexity: O(N)
Memory Complexity: O(N)

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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  if (!root) return [];
  
  const stack = [root];
  const output = [];

  while (stack.length) {
      const node = stack.pop();
      output.push(node.val);
      
      node.right && stack.push(node.right);
      node.left && stack.push(node.left);
  }

  return output;
};


