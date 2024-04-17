35. Search Insert Position

Given a sorted array of distinct integers and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
 
Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104


========== Data Structures ==========
nums - array of ints 
target - int 

left - int 
right - int 

output - int (index of target or where it should be)

========== Algorithm ==========

while left is smaller than right 
  set mid to left plus a flooring of (right minus left divided by two)
  if mid is equal to target => return mid 
  if mid is greater than target => set right to mid minus one 
  if mid is smaller than target => set left to mid plus one 

if mid is greater than target 
  return mid (current left shifts to the right)
else 
  return mid plus one  

========== Solution ==========

Time Complexity: O(LogN)
Memory Complexity: O(1)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;

  while (left <= right) {
      mid = left + Math.floor((right - left) / 2);
      if (nums[mid] === target) {
          return mid;
      }
      if (nums[mid] < target) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }

  return nums[mid] > target ? mid : mid + 1;
};

Time Complexity: O(LogN)
Memory Complexity: O(1)