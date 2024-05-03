11. Container With Most Water

You are given an integer array height of length n. 
There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:

Input: height = [1,1]
Output: 1
 
Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104

========== Data Structures ==========
input - array of ints 

maxArea - int  
left - int pointer 
right - int pointer 
leftHeight - int 
rightHeight - int

output - int (product of height and length)

========== Algorithm ==========
set variables 
until left and right cross each other
  move the smallest height pointer in the direction of the other 
  update maxArea if current area is greater 
return maxArea

========== Solution ==========

Runtime 56 ms Beats 95.31% of users with JavaScript
Memory 56.88 MB Beats 73.34% of users with JavaScript

Time Complexity: O(N)
Memory Complexity: O(1)

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;
  let leftHeight, rightHeight, area;

  while (left < right) {
    leftHeight = height[left];
    rightHeight = height[right];
    area = (right - left) * Math.min(leftHeight, rightHeight);
    maxArea = Math.max(maxArea, area);
    leftHeight < rightHeight ? left += 1 : right -= 1; 
  }

  return maxArea;
};
