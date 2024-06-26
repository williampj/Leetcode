162. Find Peak Element

A peak element is an element that is strictly greater than its neighbors.

Given a 0-indexed integer array nums, find a peak element, and return its index. 
If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞. 
In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

You must write an algorithm that runs in O(log n) time.

 

Example 1:

Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
Example 2:

Input: nums = [1,2,1,3,5,6,4]
Output: 5
Explanation: Your function can return either index number 1 where the peak element is 2, 
or index number 5 where the peak element is 6.
 

Constraints:

1 <= nums.length <= 1000
-231 <= nums[i] <= 231 - 1
nums[i] != nums[i + 1] for all valid i.


========== Data Structures ==========
nums - array of ints 

left int 
right int 
mid int 
prev int 
next int 

output - int (index of peak)

========== Algorithm ==========
binary search 
  if mid is a peak (prev and next are smaller or undefined)
    return mid 
  if left is greater, go left 
  else go right 

========== Solution ==========

Time Complexity: O(LogN)
Memory Complexity: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  let prev;
  let next;

  while (left <= right) {
      mid = left + Math.floor((right - left) / 2);
      prev = nums[mid - 1];
      next = nums[mid + 1];

      if ( (prev === undefined || prev < nums[mid]) && (next === undefined || (nums[mid] > next)) ) {
          return mid;
      }

      if (prev > nums[mid]) {
          right = mid - 1; 
      } else {
          left = mid + 1;
      }
  }
};

// APPROACH 2: Divide and Conquer 


========== Data Structures ==========
nums - array of ints 

peak int 
left int 
right int 
mid int 

output - int (index of peak)

========== Algorithm ==========
main function 
  return call helper function with pointers 

helper function 
  edge cases: 
    if left passed right 
      return false 
    if left is equal to right 
      return left if peak, otherwise false 
  
  inspect mid => return mid if it's a peak 
  
  leftResult = call left side 
  rightResult = call right side 

  return leftResult OR rightResult


========== Solution ==========


Time Complexity: O()
Memory Complexity: O()