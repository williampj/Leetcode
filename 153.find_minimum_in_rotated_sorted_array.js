153. Find Minimum in Rotated Sorted Array

Hint
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. 
For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time 
results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.


Example 1:

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.

Example 2:

Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

Example 3:

Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 


Constraints:

n == nums.length
1 <= n <= 5000
-5000 <= nums[i] <= 5000
All the integers of nums are unique.
nums is sorted and rotated between 1 and n times.


========== Data Structures ==========
nums - array of ints 

left - int 
right - int 
mid - int 

========== Algorithm ==========
set left to zero 
set right to end 

binary search 
  if mid is not greater than left side AND mid is not greater than right side => return mid value 

  else if mid is smaller than right side 
    go left 
  else  
    else => go right 

========== Solution ==========
Time Complexity: O(LogN)
Memory Complexity: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */

var findMin = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  let middle;
  while (left <= right) {
    middle = left + Math.floor((right - left) / 2);
    // not greater than left neighbor and not greater than right neighbor
    // this covers cases of single element arrays and middle being at the ends
    if (!(nums[middle] > nums[middle - 1]) && !(nums[middle] > nums[middle + 1])) return nums[middle];
    
    if (nums[middle] < nums[right]) {
        right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
};


====== Most performant solution ==========

var findMin = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  let middle;

  while (left <= right) {
    middle = left + Math.floor((right - left) / 2);
    
    if (middle === 0) {
      if (right === 0) return nums[middle];
      if (right === 1) return nums[middle] < nums[right] ? nums[middle] : nums[right]
    }

    if (nums[middle] < nums[middle-1]) return nums[middle];
    
    if (nums[middle] < nums[right]) {
        right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
};

