55. Jump Game

You are given an integer array nums. 
You are initially positioned at the array's first index, 
and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.
 
Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, 
which makes it impossible to reach the last index.
 

Constraints:

1 <= nums.length <= 104
0 <= nums[i] <= 105


========== Data Structures ==========

memo - array of booleans for each index 

========== Algorithm ==========
main function 
  - if first num is 0 => return false; 
  - create memo 
  - return call helper with end pointers and memo 

Helper function 
  Params: nums, index, memo 
  
  Edge cases 
    - if index is 0 => return true 

  iterate from first element to index
    - if that element can reach final outer element 
      - if it's in the memo as false
        - skip it 
      - else 
        - recurse that index 
        - store result
          - if false, place in memo and return as false 
          - if true, return true 
  
  return false (no path found)


========== Solution ==========


Time Complexity: O(N^2)
Memory Complexity: O()

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if (nums.length === 1) return true;
  if (nums[0] === 0) return false;

  const memo = [true];

  return canJumpHelper(nums, nums.length - 1, memo);
};

const canJumpHelper = function(nums, indx, memo) {
  if (indx <= 1) return true; 

  for (let i = 0; i < indx; i += 1) {
      if (nums[i] >= indx - i) {
          if (memo[i] === false) continue;
          
          if (memo[i] || canJumpHelper(nums, i, memo)) {
              memo[indx] = true;
              return memo[indx];
          } else {
              memo[i] = false;
          }
      
      }
  }
 
  memo[indx] = false;
  return memo[indx];
}


// FASTER, ITERATIVE APPROACH 

var canJump = function(nums) {
  const tabs = new Array(nums.length);
  tabs[0] = true;
  
  for (let i = 0; i < nums.length; i += 1) {
    if(!tabs[i]) return false;
    if (nums[i-1] > nums[i]) continue;
    
    const num = nums[i];
    for (let j = 1; j <= num; j += 1) {
      tabs[i+j] = true;
      if (i+j === nums.length - 1) return true;  
    }
  }
  
  return tabs[tabs.length - 1]
};