10. Regular Expression Matching

Given an input string s and a pattern p, implement regular expression matching 
with support for '.' and '*' where:

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).
 
Example 1:

Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".

Example 2:

Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".

Example 3:

Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
 

Constraints:

1 <= s.length <= 20
1 <= p.length <= 20
s contains only lowercase English letters.
p contains only lowercase English letters, '.', and '*'.
It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.

========== Data Structures ==========
s - string 
p - string (pattern)

regex - RegExp
regexString - string (accumulating regex)
capturing group - string 
i - int (string iteration)

output - bool 

========== Algorithm ==========
set up variables

iterate through pattern 
- if next char is * 
    add current capturing group to regexString 
    set capturing group to char
- if char is 
- if next char is *
  add char to current capturing group



========== Solution ==========

Time Complexity: O()
Memory Complexity: O()

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let validPattern = '';
  // removing repeating stars
  for (let i = 0; i < p.length; i += 1) {
      if (p[i] !== '*' || p[i - 1] !== '*') {
          validPattern += p[i];
      }
  }

  let regex = new RegExp(`^${validPattern}$`);
  
  return regex.test(s);
};