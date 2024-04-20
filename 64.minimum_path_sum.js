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


==============================================================
========= Approach one: Top-down Dynamic Programming =========
==============================================================


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
  
  recurse right unless out of bounds 
  recurse down unless out of bounds 

  Set current memo spot to current value + smallest of right or down result 
  
  return memo current spot 


========== Solution ==========

Time Complexity: O(N^2)
Memory Complexity: O(N)

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

==============================================================
========= Approach two: Bottom-up Dynamic Programming ========
==============================================================
// Slightly slower than top-down DP, same memory usage

========== Data Structures ==========
grid - matrix

memo - matrix (grid min paths at each square)
row - int 
column - int 
lastRow - int 
lastColumn - int 
currentSquareVal - int (value in grid)

========== Algorithm ==========
Base case: 
  if one row => reduce the column to its sum and return 
  if one column => reduce the one-element rows to their sum and return 

create memo, assigning goal value 
iterate downwards 
  for each row 
    for each column 
      if on last row & last column => skip 
      if on last row => sum of own value + higher column 
      if on law column => sum of own value + higher row 
      else => sum of own value and lowest of higher row or higher column 
return memo[0,0]

========== Solution ==========

Time Complexity: O(N^2)
Memory Complexity: O(N)

/**
 * @param {number[][]} grid
 * @return {number}
 */

// BOTTOM-UP DP
const minPathSum = function(grid) {
  const lastRow = grid.length - 1;
  const lastColumn = grid[0].length - 1;
  
  if (grid.length === 1) {
      return grid[0].reduce((acc, cv) => acc + cv);
  }
  if (grid[0].length === 1) {
      return grid.reduce((acc, cv) => acc + cv[0], 0);
  }

  const memo = new Array(grid.length).fill([]);
  memo[lastRow][lastColumn] = grid[lastRow][lastColumn]

  for (let row = lastRow; row >= 0; row -= 1) {
      for (let column = lastColumn; column >= 0; column -= 1) {
          if (row === lastRow && column === lastColumn) continue;
          
          const currentSquare = grid[row][column];

          if (row === lastRow) {
              memo[row][column] = currentSquare + memo[row][column+1]
          }
          else if (column === lastColumn) {
              memo[row][column] = currentSquare + memo[row+1][column]
          }
          else {
              memo[row][column] = currentSquare + Math.min(memo[row+1][column], memo[row][column+1])
          }
      }
  }
  
  return memo[0][0];
}
