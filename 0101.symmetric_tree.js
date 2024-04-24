101. Symmetric Tree

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Example 1:

Input: root = [1,2,2,3,4,4,3]
Output: true

Example 2:

Input: root = [1,2,2,null,3,null,3]
Output: false
 

Constraints:

The number of nodes in the tree is in the range [1, 1000].
-100 <= Node.val <= 100

========== Data Structures ==========
leftLeft node 
leftRight node 
rightLeft node 
rightRight node 

========== Algorithm ==========
  Main function:
return true if root is null 
return call helper passing root.left and root.right 

  Helper function:
base case: 
  both null => true 
  one null or different values => false 
  assign the four node variables 
  recurse outer variables 
    store result 
  recurse inner variables 
    store result
  return AND on the two results 

========== Solution ==========

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
 * @return {boolean}
 */

var isSymmetric = function(root) {
  if (!root) return true;
  return isSymmetricHelper(root.left, root.right);
};

const isSymmetricHelper = function(left, right) {
  if (!left && !right) return true;
  if (!left || !right || left.val !== right.val) return false;

  const outerResult = isSymmetricHelper(left.left, right.right);
  const innerResult = isSymmetricHelper(left.right, right.left);

  return outerResult && innerResult;
}
