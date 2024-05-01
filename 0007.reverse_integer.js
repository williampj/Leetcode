7. Reverse Integer

Given a signed 32-bit integer x, return x with its digits reversed. 
If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 
Example 1:

Input: x = 123
Output: 321

Example 2:

Input: x = -123
Output: -321

Example 3:

Input: x = 120
Output: 21
 

Constraints:

-231 <= x <= 231 - 1


========== Data Structures ==========
input - int 

positive - bool 
nextDigit - int 

output - int 

========== Algorithm ==========
base case: 
- if less than -231 or greater than 230 => return zero 

set positive 
convert input to absolute value 
set output to zero 

while input is greater than zero 
  take nextDigit as input modulo ten          0  2  1
  set input to self divided by ten floored   12  1  0
  set output to itself times ten              0  0  20
  add nextDigit to output                     0  2  1

if positive, then return output, otherwise return output times negative one 


========== Solution ==========

Runtime 64 ms Beats 91.49% of users with JavaScript
Memory 52.68 MB Beats 63.43% of users with JavaScript

Time Complexity: O(N) - where N is number of digits in input number 
Memory Complexity: O(N) - copying input digits into output in reverse order

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const sign = x >= 0 ? 1 : -1;
  let num = Math.abs(x);
  let output = 0;
  let nextDigit;

  while (num > 0) {
      nextDigit = num % 10;
      num = Math.floor(num / 10);
      output *= 10;
      output += nextDigit;
  }

  output *= sign;

  if (output < -2147483648 || output > 2147483647) return 0; 

  return output;
};