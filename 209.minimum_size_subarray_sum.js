209. Minimum Size Subarray Sum

Given an array of positive integers nums and a positive integer target, 
return the minimal length of a subarray whose sum is greater than or equal to target. 
If there is no such subarray, return 0 instead.


Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1

Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
 

Constraints:

1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 104

[2,3,1,2,4,3]
[5, 4, 3, 6, 7] - 2s 
[6, 6, 7, 9] - 3s 
.. length of array 

Approach 1: Two pointers O(N)
Mental model: anchor-runner

========== Data Structures ==========
nums - array of ints 
target - int 

sum int 
counter int 
anchor int 
runner int 

ouput - int 


========== Algorithm ==========

set sum to first number 
set counter to 1 
set anchor to zero
set runner to zero
set output to zero

while loop 
- while sum < target and runner within bounds 
  - increment runner
  - increment sum by new runner value 
  - increment counter  
- if runner out of bounds => return output
- set output to smallest of output or counter 

- while sum >= target and anchor within bounds 
  - decrement sum by current anchor value 
  - increment anchor
  - decrement counter 
  - if sum >= target 
    - set output to smallest of output or counter
- if anchor out of bounds => return output 


========== Solution ==========

Time Complexity: O(N)
Memory Complexity: O(1)

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

var minSubArrayLen = function(target, nums) {
  let sum = nums[0];
  let counter = 1;
  let anchor = 0; 
  let runner = 0; 
  let output = 0; 

  while (true) {
      while (sum < target && runner < nums.length) {
          runner += 1;
          sum += nums[runner];
          counter += 1;
      }
      if (runner >= nums.length) return output; 
      if (output === 0 || counter < output) {
          output = counter; 
      } 

      while (sum >= target && anchor < nums.length) {
          sum -= nums[anchor];
          anchor += 1;
          counter -= 1;
          if (sum >= target) {
              output = output <= counter ? output : counter; 
          }
      }
      if (anchor >= nums.length) {
          return output; 
      }
  }  
};





Approach 2: Slow O(N^2) Approach 

========== Data Structures ==========
nums - array of ints 
target - int 

sumArray - array of ints 
outer runner - int 
inner runner - int 

output - int (subarray size)

========== Algorithm ==========
outer loop i (slice length)
  set temp array to empty 
  inner loop j (slicing)
    slice nums in i sizes + reduce to sum => push sum to temp array 
    iterate tempArray to see if it has a value equal to or greater than target 
      if yes => return i + 1; 
return 0


========== Solution ==========

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 
var minSubArrayLen = function(target, nums) {
  let temp = [];
  for (let i = 0; i < nums.length; i += 1) { // slice length
      temp = [];
      for (let j = 0; j < nums.length - i; j += 1) { // slicer 
          temp.push(nums.slice(j, j + i + 1).reduce((acc, memo) => acc + memo));
      }
      for (let k = 0; k < temp.length; k += 1) { // inspect if target met
          if (temp[k] >= target) return i + 1; 
      }
  }
  return 0; 
};


Time Complexity: O(N^2)
Memory Complexity: O(N)