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


======== Approach 2: Divide-and-Conquer =============

========== Data Structures ==========
nums - array of ints
target - int 

left pointer - int 
right pointer - int 
edges - array of 2 ints (leftMost & rightMost matches)

========== Algorithm =========
main function 
  edge case: return NOT_FOUND if empty array 
  create edges array with two undefined vals
  call helper function, pass in pointers and edges array 
  inspect edges
    return NOT_FOUND if edges elements are still undefined
    else return edges 

Helper function 
  Edge cases 
  - if left pointer passes right pointer 
      return 
  - if left pointer val and right pointer val are both greater or both smaller than target 
      return 
  Get midpoint 
  - if mid val is equal to target 
      if smaller than leftMost edge, reassign left 
      if greater than rightMost edge, reassign right 
  - call leftSide, pass array 
  - call rightSide, pass array 


========== Solution ==========

var searchRange = function(nums, target) {
  const NOT_FOUND = [-1, -1];
  
  if (nums.length === 0) return NOT_FOUND;
  
  const edges = [undefined, undefined]
  searchRangeHelper(nums, target, 0, nums.length - 1, edges);
  
  if (edges[0] === undefined) {
      return NOT_FOUND;
  }

  return edges;
}

const searchRangeHelper = function(nums, target, left, right, edges) {
  if (left > right) return;
  if (nums[left] < target && nums[right] < target) return;
  if (nums[left] > target && nums[right] > target) return; 

  const mid = Math.floor(left + (right - left) / 2);
  if (nums[mid] === target) {
      if (!(edges[0] < mid)) {
          edges[0] = mid; 
      }
      if (!(edges[1] > mid)) {
          edges[1] = mid; 
      }
  }
  searchRangeHelper(nums, target, left, mid - 1, edges);
  searchRangeHelper(nums, target, mid + 1, right, edges);
}

Time Complexity: O()
Memory Complexity: O()
