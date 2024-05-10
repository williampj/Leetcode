58. Length of Last Word

Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
 

Constraints:

1 <= s.length <= 104
s consists of only English letters and spaces ' '.
There will be at least one word in s.


==== SOLUTION ====

Runtime 51 ms Beats 58.63% of users with JavaScript
Memory 48.99 MB Beats 34.42% of users with JavaScript

Time complexity: O(N)
Memory complexity: O(1)

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let i = s.length - 1;
    let counter = 0;

    while (s[i] === ' ') {
        i -= 1; 
    }

    while (s[i] !== ' ' && i >= 0) {
        counter += 1; 
        i -= 1;
    }

    return counter;
};