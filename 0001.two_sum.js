// 1. Two Sum

// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Time complexity: O(2N) => O(N)
// Space complexity: O(N)

========== Data Structures ==========
nums array 
target int 
cache hash map 
runner int 
output array of two indexes

========== Algorithm ==========
iterate through nums 
- if cache contains difference between target and current num 
  - return current index and cache value
- else 
  - add current num to cache as key, and its index as the value 

========== Solution ==========

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const cache = {}

  for (let i = 0; i < nums.length; i += 1) {
      const num = nums[i];
      if (cache[target - num] !== undefined) {
          return [cache[target - num], i]
      }
      cache[num] = i;
  }
};


Time Complexity: O(N)
Memory Complexity: O(N)