78. Subsets

Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Example 2:

Input: nums = [0]
Output: [[],[0]]

Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.

========== Data Structures ==========
nums - array of ints 

numIndex - int pointer
subset - array of ints (current subset)
stringifiedSubset - string 
stringResults = array of stringified subsets

results - array of subsets 

========== Algorithm ==========
Backtracking 

Main
- create results and insert empty array 
- create subset array 
- call backtracking with zero (numIndex), nums, subset, results 
- return results

Backtracking function 
- push subset to results 
// - success condition (NOT NECESSARY)
//   - if stringified result is not in stringResults array 
//     - insert subset copy in results 
//     - insert stringified subset in stringResults

- while numIndex is less than nums length 
  // - skip if num is in candidate (failure condition)
  - add num to candidate 
  - recurse candidate (numIndex plus one)
  - pop candidate
  - increment numIndex 

========== Solution 1: Optimized ==========
No duplicate inspection because iteration approach ensures no repeat subset candidates 

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsets = function(nums) {
  const results = []
  backtracking(0, nums, [], results);
  return results;
};

const backtracking = function(indx, nums, subset, results) {
  results.push([...subset]);

  while (indx < nums.length) {
      subset.push(nums[indx]);
      backtracking(indx + 1, nums, subset, results); // indx + 1 => avoids failure condition of 
      subset.pop();                                  //   repeated nums in subset
      indx += 1;
  }
}

 // ========== Data Structures ==========
// nums - array of ints 

// numIndex - int pointer
// subset - array of ints (current subset)
// stringifiedSubset - string 
// stringResults = array of stringified subsets

// results - array of subsets 

========== Solution 2: Non-Optimized ==========
Inspects for duplicates

var subsets = function(nums) {
  const results = []
  const stringResults = [];
  backtracking(0, nums, [], stringResults, results);
  
  return results;
};

const backtracking = function(indx, nums, subset, stringResults, results) {
  const stringSubset = subset.toString();
  if (!stringResults.includes(stringSubset)) {
    stringResults.push(stringSubset);
    results.push([...subset]);
  };

  while (indx < nums.length) {
      subset.push(nums[indx]);
      backtracking(indx+1, nums, subset, stringResults, results);
      subset.pop();
      indx += 1;
  }
}


