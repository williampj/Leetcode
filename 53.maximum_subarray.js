53. Maximum Subarray

Given an integer array nums, find the subarray with the largest sum, and return its sum.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.

Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104

========== Algorithm ==========

Edge case 
  if 1-element array => return that element 
Call helper 

Helper:
  divide: split in left and right half 
  conquer:
    recurse left half and store greatest left sum 
    recurse right half and store greatest right sum 
  crossingMiddle max 
    accumulate from mid and left 
    accumulate from mid and right 
    return highest of leftSum, rightSum, or combination 

  Combine 
    return largest of leftSum, rightSum and crossingMiddle max 

========== Solution ==========
SOLUTION 1: Linear iteration 

var maxSubArray = function(nums) {
  let maxSoFar = -Infinity;
  let maxHere = 0;
  
  for (let i = 0; i < nums.length; i += 1) {
      maxHere += nums[i];
      maxSoFar = Math.max(maxHere, maxSoFar);
      if (maxHere < 0) maxHere = 0; 
  }
  return maxSoFar;
}


SOLUTION 2: Divide and Conquer

Time Complexity: O(LogN)
Memory Complexity: O(1)
 
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (nums.length === 1) return nums[0];

  return maxSubArrayHelper(nums, 0, nums.length - 1)
};

const maxCrossingSum = function(nums, left, mid, right) {
  let leftSum = -Infinity;
  let sum = 0;
  for (let i = mid; i >= left; i -= 1) {
      sum += nums[i];
      leftSum = leftSum >= sum ? leftSum : sum; 
  }

  let rightSum = -Infinity;
  sum = 0; 
  for (let i = mid; i <= right; i += 1) {
      sum += nums[i];
      rightSum = rightSum >= sum ? rightSum : sum;
  }

  let combined = leftSum + rightSum - nums[mid];

  return Math.max(leftSum, rightSum, combined);
}

const maxSubArrayHelper = function(nums, left, right) {
  if (left > right) return -Infinity;
  if (left === right) return nums[left];

  let mid = Math.floor((left + (right - left) / 2));
  let leftSum = maxSubArrayHelper(nums, left, mid - 1);
  let rightSum = maxSubArrayHelper(nums, mid + 1, right);
  let crossingMid = maxCrossingSum(nums, left, mid, right)

  return Math.max(leftSum, rightSum, crossingMid)
}

