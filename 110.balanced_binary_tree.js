110. Balanced Binary Tree

Given a binary tree, determine if it is height-balanced.
A height-balanced binary tree is a binary tree in which the depth of the two subtrees 
of every node never differs by more than one.

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: true

Example 2:

Input: root = [1,2,2,3,3,null,null,4,4]
Output: false

Example 3:

Input: root = []
Output: true
 
Constraints:

The number of nodes in the tree is in the range [0, 5000].
-104 <= Node.val <= 104

========== Data Structures ==========
counter int 

========== Algorithm ==========
  Main function 
store call helper method with counter set to 0 
if result is -1 
  return false 
else 
  return true 

  Helper function:
Base case:
- if null, return counter

recurse left and pass counter plus one 
recurse right and pass counter plus one 

combine:
if leftResult or rightResult is -1 
  return -1 
if leftResult and rightResult difference is greater than one 
  return -1
else 
  return greatest of leftResult or rightResult (reflects depth of that path)


========== Solution ==========
Time Complexity: O(N)
Memory Complexity: O(H) - H is height of tree 

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
 * @return {boolean}
 */
var isBalanced = function(root) {
  const result = isBalancedHelper(root, 0);
  return result === -1 ? false : true;
};

const isBalancedHelper = function(root, level) {
  if (!root) return level;

  const leftResult = isBalancedHelper(root.left, level + 1);
  const rightResult = isBalancedHelper(root.right, level + 1);

  if ([leftResult, rightResult].includes(-1) || Math.abs(leftResult - rightResult) > 1) return -1;

  return Math.max(leftResult, rightResult);
}


