6. Zigzag Conversion

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
(you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 
Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"

Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I

Example 3:

Input: s = "A", numRows = 1
Output: "A"
 
Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000


========== Data Structures ==========
s - string 
numRows - int 

downDirection - bool 
row - int 
char - char 
rows - array of strings

output - str 

========== Algorithm ==========
base case: 
  - if numRows is 1 => return s 

set downDirection to true 
set row to 1; 
create rows array with numRows empty strings 

iterate s 
  add char to row string  

  if row is 1
    set downDirection to true 
  else if row is equal to numRows 
    set downDirection to false 
  
  if downDirection 
    increment row 
  else 
    decrement row 

reduce rows to output string 
  
========== Solution ==========

Runtime 84 ms Beats 76.39% of users with JavaScript
Memory 53.09 MB Beats 95.44% of users with JavaScript

Time Complexity: O(N) - linear iteration through string 
Memory Complexity: O(N) - copies the input string to substrings

var convert = function(s, numRows) {
  if (numRows === 1) return s;

  let down = true;
  let row = 0; 
  const rows = new Array(numRows).fill("");

  for (let i = 0; i < s.length; i += 1) {
      rows[row] += s[i];

      if (row === 0) {
          down = true;
      } else if (row === numRows - 1) {
          down = false;
      }

      row = down ? row + 1 : row - 1; 
  }

  return rows.reduce((acc, cv) => acc + cv, "");
};