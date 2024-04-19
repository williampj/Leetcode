64. Minimum Path Sum

Given a m x n grid filled with non-negative numbers, 
find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example 1:

Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.

Example 2:

Input: grid = [[1,2,3],[4,5,6]]
Output: 12
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 200
0 <= grid[i][j] <= 200


========== Data Structures ==========
grid - nested array 

endRow - int 
endColumn - int 
Memo - nested array m x n 
row - int 
column - int 

========== Algorithm ==========
Main function 
  create memo 
  call helper function 
  return memo[0][0]

Helper function
  Edge cases 
    inspect memo => return if visited 
    // out of bounds 
  
  recurse right unless out of bounds (set to positiveInfinity) 
  recurse down unless out of bounds (set to positiveInfinity)

  Set current memo spot to current value + smallest of right or down result 
  
  return memo current spot 


========== Solution ==========

Time Complexity: O()
Memory Complexity: O()

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const endRow = grid.length - 1;
  const endColumn = grid[0].length - 1;
  const memo = new Array(grid.length).fill([]).map(subary => new Array(grid[0].length));

  minPathSumHelper(grid, 0, 0, endRow, endColumn, memo);

  return memo[0][0];
};

const minPathSumHelper = function(grid, row, column, endRow, endColumn, memo) {
  if (memo[row][column]) return memo[row][column];

  if (column === endColumn && row === endRow) {
      memo[row][column] = grid[row][column];
  } 
  else if (column === endColumn) {
      memo[row][column] = grid[row][column] + minPathSumHelper(grid, row+1, column, endRow, endColumn, memo);
  }
  else if (row === endRow) {
      memo[row][column] = grid[row][column] + minPathSumHelper(grid, row, column+1, endRow, endColumn, memo);
  } 
  else {
      memo[row][column+1] = memo[row][column+1] || minPathSumHelper(grid, row, column+1, endRow, endColumn, memo);
      memo[row+1][column] = memo[row+1][column] || minPathSumHelper(grid, row+1, column, endRow, endColumn, memo);
      memo[row][column] = grid[row][column] + Math.min(memo[row+1][column], memo[row][column+1]);
  }

  return memo[row][column];
}
