22. Generate Parentheses

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses. 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:

Input: n = 1
Output: ["()"]

Example 3:

input: n = 2
OUptut: ["(())", "()()"]

Constraints:

1 <= n <= 8

             (
      ((          ()
  (((   (()    ()(    ())

========== Mental Models ==========
Divide and conquer to generate all positiblities recursively 
- breaking conditions: 
    - count of closers exceeds count of openers
    - count of openers or closers is above n 
    - count of openers AND closers is n 
      - add to output array if well-formed

========== Data Structures ==========
well-formed str (counter never negative and ends on zero)

currentString - str 
openers - int 
closers - int 
output - array of strings 

========== Algorithm ==========
    Main method 
create outputs array 
call helper 
return outputs array 

    Helper method (n, outputs, openers = 0, closers = 0, string = '')
return if ill-formed OR outputs > n OR openers > n 
if outputs and openers are equal to n 
  add to outputs 
  return 

recurse with added opener to string and added opener count 
recurse with added closer to string and added closer count 

return output from main method 

========== Solution ==========
Runtime 53 ms Beats 62.02% of users with JavaScript
Memory 51.12 MB Beats 17.01% of users with JavaScript

Time Complexity: O(2^N)
Memory Complexity: O(2^N)

/**
 * @param {number} n
 * @return {string[]}
 */
const isWellFormed = function(s) {
    let openParens = 0;
    for (let char of s) {
        if (char === '(') {
            openParens += 1;
        } else {
            openParens -= 1;
        }
        if (openParens < 0) return false;
    }

    return openParens === 0;
};

var generateParenthesis = function(n) {
    const outputs = [];
    generateParenthesisHelper(n, outputs);
    
    return outputs;
};

const generateParenthesisHelper = function(n, outputs, openers = 0, closers = 0, str = '') {
    if (closers > openers || closers > n || openers > n) return;
    if (openers === n && closers === n) {
        if (isWellFormed(str)) {
            outputs.push(str);
        };
        return;
    }

    generateParenthesisHelper(n, outputs, openers + 1, closers, str + '(');
    generateParenthesisHelper(n, outputs, openers, closers + 1, str + ')');
};