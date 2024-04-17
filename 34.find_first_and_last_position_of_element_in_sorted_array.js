34. Find First and Last Position of Element in Sorted Array

Given an array of integers nums sorted in non-decreasing order, 
find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.
 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
 
Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109

Mental Model:

- 2 binary searches 
  - one keeps going futher right 
    - return [-1,-1] if none found 
  - one keeps going further left
    - return furthers left and furthest right in array 

========== Data Structures ==========
nums - array of ints 
target - int 

rightMost = int 
leftMost = int 

output = array 

========== Algorithm ==========
set output to [-1, -1]

rightMost binary search 
  - if mid hits target 
    - set as rightMost if greater than rightmost or rightmost is undefined 
    - set left to mid + 1 

if rightMost is undefined after loop
- return output 

reset left and right pointers 

leftMost binary search 
  - if mid hits target 
    - set as leftMost if smaller than leftmost or leftmost is undefinded 
    - set right to mid - 1

return [leftMost, rightMost]


========== Solution ==========

Time Complexity: O(LogN)
Memory Complexity: O(1)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var searchRange = function(nums, target) {
  const output = [-1, -1];
  let rightMost;
  let leftMost; 
  let left = 0;
  let right = nums.length - 1; 

   while (left <= right) {
       mid = left + Math.floor((right - left) / 2); 
       if (nums[mid] === target) {
           rightMost = (!rightMost || mid > rightMost) ? mid : rightMost;
           left = mid + 1;
       }
       else if (nums[mid] < target) {
           left = mid + 1;
       } 
       else {
           right = mid - 1; 
       }
   }

   if (rightMost === undefined) return output; 
   
   left = 0; 
   right = nums.length - 1;

   while (left <= right) {
       mid = left + Math.floor((right - left) / 2); 
       if (nums[mid] === target) {
           leftMost = (leftMost === undefined || mid < leftMost) ? mid : leftMost;
           right = mid - 1;
       }
       else if (nums[mid] < target) {
           left = mid + 1;
       } 
       else {
           right = mid - 1; 
       }
   }

   return [leftMost, rightMost];
};
