47. Permutations II

Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

Example 1:

Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]

Example 2:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 
Constraints:

1 <= nums.length <= 8
-10 <= nums[i] <= 10

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    
};

========== Data Structures ==========
nums - array of ints 

permutation - array of ints 
results - array of permutations 

========== Algorithm ==========
Main 
- create permutation 
- create results 
- call backtrack (nums, permutation, results)
- return results 

Backtrack 
- Success condition 
  - permutation length is equal to nums length
    - push copy of permutation to results 
    - return 

Iterate nums 
  - add num to permutation
  - recurse(nums with current num spliced out, candidate, results)
  - pop permutation 

========== Solution ==========

Time Complexity: O(2^N)
Memory Complexity: O()

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const results = [];
  backtrack(nums, nums.length, results);
  
  return results;
};

const backtrack = function(nums, size, results, permutation = [], cache = {}) {
  if (permutation.length === size) {
      const stringPermutation = permutation.toString();
      if (!cache[stringPermutation]) {
          results.push([...permutation]);
          cache[stringPermutation] = true;
      };
      return;
  }

  for (let i = 0; i < nums.length; i += 1) {
      permutation.push(nums[i]);
      backtrack(nums.toSpliced(i, 1), size, results, permutation, cache);
      permutation.pop();
  }
}