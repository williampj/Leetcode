9. Palindrome Number

Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 
Constraints:

-231 <= x <= 231 - 1
 
Follow up: Could you solve it without converting the integer to a string?


========== Data Structures ==========
numer - int 

digits - array
left - int pointer 
right - int pointer  

output - bool 

========== Algorithm ==========
base cases 
  if negative => false 

push all digits into an array 
iterate array from both sides and return false if there's a mismatch 
return true if loop exit condition met 

========== Solution ==========

Time Complexity: O(N) - two iterations, first to fill out digits Array, then iterate digits array
Memory Complexity: O(N) - copying input into digits array 

Runtime 136 ms Beats 52.41% of users with JavaScript
Memory 57.00 MB Beats 72.76% of users with JavaScript

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    if (x < 0) return false; 

    const digits = [];
    while (x) {
        const digit = x % 10;
        digits.push(digit)
        x = Math.floor(x / 10); 
    }

    let left = 0;
    let right = digits.length - 1;

    while (left <= right) {
        if (digits[left] !== digits[right]) return false;
        left += 1;
        right -= 1;
    };

    return true;
}
