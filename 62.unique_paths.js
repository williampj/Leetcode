62. Unique Paths

There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). 
The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). 
The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot
can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.
 

Example 1:

Input: m = 3, n = 7
Output: 28

Example 2:

Input: m = 3, n = 2
Output: 3

Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down
 
Constraints:

1 <= m, n <= 100


========== Data Structures ==========
memo = nested array of same size as input 

========== Algorithm ==========
Main function: 
  create memo of m x n 
  call helper 
  return memo[m][n]

Helper 
  edge cases: 
    - if we're on an edge (row is m - 1 or column is n - 1)
      return 1 
    - if in the memo 
      return memo value 
  
  set memo equal to recursion next row and recursion next column 

  return that memo value 
  

========== Solution ==========

Time Complexity: O(M * N)
Memory Complexity: O(N) - O(N) for recursive call stack and O(N) for memo => 2N => N

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const memo = new Array(m).fill([]).map(el => new Array(n))
  
  uniquePathsHelper(0, 0, m, n, memo);

  return memo[0][0];
};

const uniquePathsHelper = function(row, column, m, n, memo) {
  if (memo[row][column]) return memo[row][column];

  if ((row === m - 1) || (column === n - 1)) {
      memo[row][column] = 1; 
      return memo[row][column];
  }

  memo[row][column + 1] = memo[row][column + 1] || uniquePathsHelper(row, column + 1, m, n, memo);
  memo[row + 1][column] = memo[row + 1][column] || uniquePathsHelper(row + 1, column, m, n, memo);

  memo[row][column] = memo[row][column + 1] + memo[row + 1][column]; 

  return memo[row][column];
}