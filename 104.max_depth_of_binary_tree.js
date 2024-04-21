104. Maximum Depth of Binary Tree

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node 
down to the farthest leaf node.

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:

Input: root = [1,null,2]
Output: 2 

Constraints:

The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100

========== Data Structures ==========
counter int 

========== Algorithm ==========
Main function 
  call helper with root and counter set to 0 

Helper:

Base case:
  - return counter if node is null 

recurse left (pass counter plus one) and store 
recurse right (pass counter plus one) and store 

return largest of left & right 




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
 * @return {number}
 */
var maxDepth = function(root) {
  return maxDepthHelper(root, 0)
};

const maxDepthHelper = function(root, counter) {
  if (!root) return counter;

  const leftResult = maxDepthHelper(root.left, counter + 1);
  const rightResult = maxDepthHelper(root.right, counter + 1);

  return Math.max(leftResult, rightResult);
}
