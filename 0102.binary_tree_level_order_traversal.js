102. Binary Tree Level Order Traversal

Given the root of a binary tree, return the level order traversal of its nodes' values.
(i.e., from left to right, level by level).

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Example 2:

Input: root = [1]
Output: [[1]]

Example 3:

Input: root = []
Output: [] 

Constraints:

The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000

========== Data Structures ==========
2 queues
  - current level 
  - next level 
output - array of int 

========== Algorithm ==========
Base case: 
  - return null if root is null 
place root in current level 

while current level is not empty 
  iterate current level 
    place children in next level 
    reassign itself to its value in current level 
  push current level to output array 
  set current level to next level 
  set next level to empty array 

========== Solution ==========
Runtime 64 ms Beats 97.18% of users with JavaScript
Memory 53.65 MB Beats 96.14% of users with JavaScript

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) { return [] };
  
  let currentLevel = [root];
  let nextLevel = [];
  const output = [];

  while(currentLevel.length) {
      for (let i = 0; i < currentLevel.length; i += 1) {
          currentLevel[i].left && nextLevel.push(currentLevel[i].left);
          currentLevel[i].right && nextLevel.push(currentLevel[i].right);
          currentLevel[i] = currentLevel[i].val;
      };
      output.push(currentLevel);
      currentLevel = nextLevel; 
      nextLevel = [];
  }

  return output;
};