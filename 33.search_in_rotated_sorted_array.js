33. Search in Rotated Sorted Array

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) 
such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 
For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, 
return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Example 3:

Input: nums = [1], target = 0
Output: -1
 

Constraints:

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-104 <= target <= 104



========== Data Structures ==========
nums - array of ints
target - int 

left int 
right int 
mid int 

output - int (index)

========== Algorithm ==========

if Left is smaller than or equal to mid 
[4,5,6,7,0,1,2], if target is greater than left and smaller than mid => go left, else go right 
[2,4,5,6,7,0,1]  (if target is smaller than mid => go right)
[1,2,4,5,6,7,0]  (if target is greater than both => go right)
[0,1,2,4,5,6,7]  
  

else (Left is greater than mid)
[7,0,1,2,4,5,6] (if target is smaller than both => go left)
[6,7,0,1,2,4,5] if target is greater than mid but smaller than left => go right, else go left  
[5,6,7,0,1,2,4] (if target is greater than both => go left)

========== Solution ==========

Time Complexity: O(LogN)
Memory Complexity: O(1)

var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1; 
  let mid;

  while (left <= right) {
      mid = left + Math.floor((right - left) / 2);
      
      if (nums[mid] === target) return mid; 

      if (nums[left] <= nums[mid]) {
          if (target >= nums[left] && target < nums[mid]) {
              right = mid - 1;
          } else {
              left = mid + 1;
          }
      } else {
          if (target > nums[mid] && target < nums[left]) {
              left = mid + 1;
          } else {
              right = mid - 1; 
          }
      }
  }
  return -1; 
};

Time Complexity: O(LogN)
Memory Complexity: O(1)








