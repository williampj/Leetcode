// Given an m x n matrix, return all elements of the matrix in spiral order.

//  Algorithm:
//  - 4 directions, inspect if breaking condition reached before each iteration
//  - iterate right 
//     - from firstColumn to lastColumn of firstRow subarray, push to output
//     - iterate firstRow
// - iterate down 
//     - from firstRow to lastRow of lastColumn, push to output
// - iterate left
//     - from lastColumn to firstColumn of lastRow, push to output
// - iterate up
//     - from lastRow to firstRow of firstColumn, push to output 

// - return output

const spiralOrder = function(matrix) {
  let firstRow = 0;
  let lastRow = matrix.length - 1;
  let firstColumn = 0;
  let lastColumn = matrix[0].length - 1;
  const output = [];

  while (true) {
    // iterate right 
    // from firstColumn to lastColumn of firstRow subarray, push to output
    if (firstColumn > lastColumn) return output; 
    for (let i = firstColumn; i <= lastColumn; i += 1) {
      output.push(matrix[firstRow][i])  
    }
    firstRow += 1;

    // iterate down
    // from firstRow to lastRow of lastColumn, push to output
    if (firstRow > lastRow) return output; 
    for (let i = firstRow; i <= lastRow; i += 1) {
      output.push(matrix[i][lastColumn])
    }
    lastColumn -= 1; 
    
    // iterate left
    // from lastColumn to firstColumn of lastRow, push to output
    if (firstColumn > lastColumn) return output; 
    for (let i = lastColumn; i >= firstColumn; i -= 1) {
      output.push(matrix[lastRow][i])
    }
    lastRow -= 1;

    // iterate up 
    // from lastRow to firstRow of firstColumn, push to output 
    if (firstRow > lastRow) return output; 
    for (let i = lastRow; i >= firstRow; i -= 1) {
      output.push(matrix[i][firstColumn])
    }
    firstColumn += 1;
  }
};
