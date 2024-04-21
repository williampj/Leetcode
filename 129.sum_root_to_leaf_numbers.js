129. Sum Root to Leaf Numbers

You are given the root of a binary tree containing digits from 0 to 9 only.

Each root-to-leaf path in the tree represents a number.

For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.

Return the total sum of all root-to-leaf numbers. 
Test cases are generated so that the answer will fit in a 32-bit integer.

A leaf node is a node with no children.

 
Example 1:

Input: root = [1,2,3]
Output: 25
Explanation:
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.
Therefore, sum = 12 + 13 = 25.

Example 2:

Input: root = [4,9,0,5,1]
Output: 1026
Explanation:
The root-to-leaf path 4->9->5 represents the number 495.
The root-to-leaf path 4->9->1 represents the number 491.
The root-to-leaf path 4->0 represents the number 40.
Therefore, sum = 495 + 491 + 40 = 1026.
 

Constraints:

The number of nodes in the tree is in the range [1, 1000].
0 <= Node.val <= 9
The depth of the tree will not exceed 10.

========== Data Structures ==========
root - node 

sum - int 

========== Algorithm ==========
  Main function 
Base case 
- root has no children => return root value 

return call helper function, pass root and zero as args 

  Helper function - node and sum as params 
Base case 
- if node has no children 
  - return sum plus own value 

increment sum with own value 

if left child => recurse left, pass sum*10 arg
  else set left result to zero 
if right child => recurse right, pass sum*10 arg 
  else set right result to zero 

return left result plus right result

========== Solution ==========

Runtime 53 ms Beats 69.07% of users with JavaScript
Memory 49.51 MB Beats 66.25% of users with JavaScript

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
var sumNumbers = function(root) {
  if (!root.left && !root.right) return root.val;

  return sumNumbersHelper(root, 0);
};

const sumNumbersHelper = function(node, sum) {
  sum += node.val;
  if (!node.left && !node.right) return sum;
  
  const leftResult = node.left ? sumNumbersHelper(node.left, sum * 10) : 0;
  const rightResult = node.right ? sumNumbersHelper(node.right, sum * 10) : 0;

  return leftResult + rightResult;
}