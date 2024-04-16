A phrase is a palindrome if, after converting all uppercase letters into lowercase letters 
and removing all non-alphanumeric characters, it reads the same forward and backward. 
Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.


Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.

========== Data Structures ==========
input string 
alphanumeric regex 
leftPointer int 
rightPointer int 
output boolean

========== Algorithm ==========
An outer loop and two inner loops 
Outer loop = while left is less than or equal to right (haven't crossed each other)
  inner loop:
    increment left until hits alphanumeric or undefined
  inner loop: 
    decrement right until hits alphanumeric or undefined 
  if both are undefined => return true (they have crossed each other out of bounds)
  if only one of them is undefined => return false 
  if they are not equal when uppercased => return false 
  increment left 
  decrement right 
Return true if loop exit condition is met 

========== Solution ==========
/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
    const isAlphaNumeric = char => /^([a-z0-9])$/i.test(char)
    left = 0; 
    right = s.length - 1; 

    while (left <= right) {
        while (s[left] !== undefined && !isAlphaNumeric(s[left])) {
            left += 1;
       }
        while (s[right] !== undefined && !isAlphaNumeric(s[right])) {
            right -= 1;
        }
  
        if (s[left] === undefined && s[right] === undefined) return true;
        if (s[left] === undefined || s[right] === undefined) return false; 
        if (s[left].toUpperCase() !== s[right].toUpperCase()) return false;
        left += 1;
        right -= 1;
    } 

    return true 
};

Time Complexity: O(N)
Memory Complexity: O(1)