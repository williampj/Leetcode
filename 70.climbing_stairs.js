70. Climbing Stairs

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 

Constraints:

1 <= n <= 45


========== Data Structures ==========
input int 

memo array 

========== Algorithm ==========
Main function 
  create memo: [0, 1, 2]
  call helper 
  return memo's input index

Helper function 
  if input in memo 
    return memo val
  set memo of that input to recursive minus one + recursive minus two 


========== Solution ==========
Time Complexity: O(N)
Memory Complexity: O(N)

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const memo = [0, 1, 2, 3];
  
  return climbStairsHelper(n, memo);
};

const climbStairsHelper = function(n, memo) {
  if (memo[n]) return memo[n];

  const firstPath = climbStairsHelper(n-1, memo);
  const secondPath = climbStairsHelper(n-2, memo);

  memo[n] = firstPath + secondPath;

  return memo[n];
}

