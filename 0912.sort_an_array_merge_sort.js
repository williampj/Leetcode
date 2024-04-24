912. Sort an Array

Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) 
time complexity and with the smallest space complexity possible.

Example 1:

Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), 
while the positions of other numbers are changed (for example, 1 and 5).

Example 2:

Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessairly unique.
 
Constraints:

1 <= nums.length <= 5 * 104
-5 * 104 <= nums[i] <= 5 * 104

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortArray = function(nums) {
  if (nums.length <= 1) return nums; 

  sortArrayHelper(nums, 0, nums.length - 1)

  return nums; 
};

var sortArrayHelper = function(nums, left, right) {
  if (left === right) return; 

  let mid = Math.floor(left + (right - left) / 2);  
  sortArrayHelper(nums, left, mid);
  sortArrayHelper(nums, mid+1, right);

  merge(nums, left, mid, right);
}

const merge = function(nums, left, mid, right) {
  let lp = left;
  let rp = mid + 1;
  const temp = []

  while (lp <= mid && rp <= right) {
      if (nums[lp] <= nums[rp]) {
          temp.push(nums[lp]);
          lp += 1;
      } else {
          temp.push(nums[rp]);
          rp += 1;
      }
  }

  while (lp <= mid) {
      temp.push(nums[lp]);
      lp += 1;
  };

  while (rp <= right) {
      temp.push(nums[rp]);
      rp += 1;
  };
  
  for (let i = left; i <= right; i += 1) {
      nums[i] = temp[i - left];
  }
}