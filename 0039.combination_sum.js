39. Combination Sum

Given an array of distinct integers candidates and a target integer target, 
return a list of all unique combinations of candidates where the chosen numbers sum to target. 
You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. 
Two combinations are unique if the frequency of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations 
that sum up to target is less than 150 combinations for the given input.
 

Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.

Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]

Example 3:

Input: candidates = [2], target = 1
Output: []
 
Constraints:

1 <= candidates.length <= 30
2 <= candidates[i] <= 40
All elements of candidates are distinct.
1 <= target <= 40

========== Data Structures ==========
candidates - array of ints 
target - int 

cache - object of ordered, added combinations
sum - int
combination - array of ints (sum equal to target)
results - array of combinations 

========== Algorithm ==========
Main 
- create combination 
- create results 
- create sum and set to zero 
- create cache 
- call backtracking (caches, sum, candidates, target, combination, results)
- return results

Backtrack (sum, candidates, target, combination, results)
- Success condition: sum is equal to target 
  - create ordered string copy of combination 
    - if already in cache  
      - return 
    - else 
      - add string copy to cache 
      - push copy of combination to results 
      - return 
- Failure condition: sum is greater than target  
  - return 

- iterate candidates (for loop)
  - push candidate to combination 
  - recurse 
  - pop combination 






========== Solution ==========

NON-OPTIMIZED (191 MS)

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum = function(candidates, target) {
  const combination = [];
  const results = [];
  let sum = 0;
  const cache = {};
  backtrack(cache, sum, candidates, target, combination, results);
  
  return results;
};

const backtrack = function(cache, sum, candidates, target, combination, results) {
  if (sum > target) return;
  if (sum === target) {
      const copy = [...combination].sort((a,b) => a - b);
      const stringCopy = copy.toString();
      if (cache[stringCopy]) return; 

      cache[stringCopy] = true;
      results.push(copy);
      return;
  }
}


// OPTIMIZED SOLUTION (81 MS)

var combinationSum = function(candidates, target) {
  const combination = [];
  const results = [];
  let sum = 0;
  const cache = {};
  backtrack(cache, sum, candidates, target, combination, results);
  
  return results;
};

const backtrack = function(cache, sum, candidates, target, combination, results) {
  if (sum > target) return;
  if (sum === target) {
      const copy = [...combination].sort((a,b) => a - b);
      const stringCopy = copy.toString();
      if (cache[stringCopy]) return; 

      cache[stringCopy] = true;
      results.push(copy);
      return;
  }

  for (let i = 0; i < candidates.length; i += 1) {
    combination.push(candidates[i]);
    sum += candidates[i];
    backtrack(cache, sum, candidates.slice(i), target, combination, results); // OPTIMIZATION: reducing candidates array before recursion
    sum -= candidates[i]; 
    combination.pop();
  }
}



Time Complexity: O()
Memory Complexity: O()