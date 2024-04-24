77. Combinations

Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

You may return the answer in any order.

Example 1:

Input: n = 4, k = 2
Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
Explanation: There are 4 choose 2 = 6 total combinations.
Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.

Example 2:

Input: n = 1, k = 1
Output: [[1]]
Explanation: There is 1 choose 1 = 1 total combination.
 
Constraints:

1 <= n <= 20
1 <= k <= n

========== Data Structures ==========
n - int (range end)
k - int (combination size)

indx - int (for iteration)
combination - array of ints 

results - array of combinations

========== Algorithm ==========
Main 
- create results 
- call backtrack (1, n, k, [], results)
- return results

Backtrack (indx, rangeEnd, size, combination, results)
- success condition:
  - combination length equal to size 
    - push copy of combination to results 
  - return 

- while loop from indx to rangeEnd
  - push indx to combination 
  - recurse (indx plus one)
  - pop combination 
  - increment indx

========== Solution ==========
Time Complexity: O(2^N)
Memory Complexity: O(2^N)

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

const combine = function(n, k) {
  const results = [];
  backtrack(1, n, k, [], results);
  return results;
};

const backtrack = function(indx, rangeEnd, size, combination, results) {
  if (combination.length === size) {
      results.push([...combination]);
      return;
  };

  while (indx <= rangeEnd) {
      combination.push(indx);
      backtrack(indx + 1, rangeEnd, size, combination, results);
      combination.pop();
      indx += 1;
  };
}

