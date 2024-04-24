543. Diameter of Binary Tree

Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. 
This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

Example 1:

Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
        1
     2      3
   4   5
 3       3
1      2

Example 2:

Input: root = [1,2]
Output: 1
 
Constraints:

The number of nodes in the tree is in the range [1, 104].
-100 <= Node.val <= 100

========== Data Structures ==========
root - node 

current - int 
max = [int];

========== Algorithm ==========
Main method 
  base case:
  - root is childless => return 1 

  set max to [0]
  set current to 1; 
  call helper method (pass root, current, max)
  return max[0]

Helper method: 
  base case:
  - root is childless => return current

  leftResult = recurse left if truthy (left, current plus one, max) or zero 
  rightResult = recurse right if truthy (right, current plus one, max) or zero 

  leftLength = zero OR leftResult minus current 
  rightLength = zero OR rightResult minus current

  if leftLength plus rightLength plus one is greater than max 
    assign that to max 

  return one plus greater of left and right length 
  
         1
     2      3
   4   5
 3        3
1      2

========== Solution ==========
Runtime 54 ms Beats 92.11% of users with JavaScript
Memory 56.74 MB Beats 33.66% of users with JavaScript

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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    if (!root.left && !root.right) return 0; 

    const max = [0];
    diameterOfBinaryTreeHelper(root, max);

    return max[0];
};

const diameterOfBinaryTreeHelper = function(node, max) {
    if (!node.left && !node.right) return 1;

    const leftDiameter = node.left ? diameterOfBinaryTreeHelper(node.left, max) : 0;
    const rightDiameter = node.right ? diameterOfBinaryTreeHelper(node.right, max) : 0;

    const diameter = leftDiameter + rightDiameter;
    if (diameter > max[0]) {
        max[0] = diameter;
    }

    return Math.max(leftDiameter, rightDiameter) + 1; 
}