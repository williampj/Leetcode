90. Subsets II

Given an integer array nums that may contain duplicates, return all possible subsets
(the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:

Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

Example 2:

Input: nums = [0]
Output: [[],[0]] 

Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10

========== Data Structures ==========
nums - array of ints 

subset - array of ints 

results - array of subsets 

========== Algorithm ==========
Main 
- create results 
- call backtracking (nums, results)
- return results 

Backtracking (nums, results, subset to empty, index to zero, cache to empty)
- success condition:
  - stringified subset is not in cache 
    - add copy of subset to results
    - add stringified subset to cache 

- iterate nums (while indx is less than nums length)
  - add num to subset 
  - recurse (indx plus one)
  - pop num from subset 
  - increment indx

========== Solution ==========
Runtime 69 ms Beats 57.55% of users with JavaScript
Memory 53.02 MB Beats 93.57% of users with JavaScript

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsetsWithDup = function(nums) {
  const results = [];
  backtrack(nums.sort((a,b) => a - b), results);
  
  return results;
};

const backtrack = function(nums, results, subset = [], indx = 0, cache = {}) {
  const string = subset.toString();
  if (!cache[string]) {
      results.push([...subset]);
      cache[string] = true;
  }

  while (indx < nums.length) {
      const num = nums[indx];
      subset.push(num);
      backtrack(nums, results, subset, indx + 1, cache);
      subset.pop();
      indx += 1; 
  }
}

Time Complexity: O()
Memory Complexity: O()