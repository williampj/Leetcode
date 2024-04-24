283. Move Zeroes

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
 
Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1


========== Data Structures ==========
input - array of ints 
anchor - int 
runner - int 

========== Algorithm ==========
iterate runner 
  - if meets a non-zero 
    - swap runner and anchor value 
    - iterate anchor 
return nums 


========== Solution ==========

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let anchor = 0; 
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== 0) {
      [nums[i], nums[anchor]] = [nums[anchor], nums[i]];
      anchor += 1;
    }
  }    
  return nums; 
};

Time Complexity: O(N)
Memory Complexity: O(1)

