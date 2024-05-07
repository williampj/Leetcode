20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

Input: s = "([)]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

========== Mental Models ==========
a stack of characters

========== Data Structures ==========
s - string 

- stack 

- output - boolean

========== Algorithm ==========
iterate string 
    if opener found => push to stack 
    if closer found => pop stack and return false if popped char not proper opener
return true if stack is empty  

========== Solution ==========
Runtime 48 ms Beats 93.71% of users with JavaScript
Memory 50.04 MB Beats 60.52% of users with JavaScript

Time Complexity: O(N)
Memory Complexity: O(N)

var isValid = function(s) {
    const pairing = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    const stack = [];
    let char;

    for (let i = 0; i < s.length; i += 1) {
        char = s[i];
        if (pairing[char]) {
            stack.push(char);
        } else {
            if (pairing[stack.pop()] !== char) return false;
        }
    }

    return !stack.length;
};