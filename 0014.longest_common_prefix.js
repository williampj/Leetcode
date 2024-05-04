14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".


Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 
Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200

strs[i] consists of only lowercase English letters.

2 approaches
1) iterate index starting from zero across all words and build up common substring and break when a mismatch is found 
2) top-down divide and conquer - dividing array in two and recurse, combining into largest common substring 


/**
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = function(strs) {
    let length = 0;
    while (length < strs[0].length) {
        for (let i = 0; i < strs.length; i += 1) {
            if (i !== 0 && strs[i][length] !== strs[i-1][length]) return strs[0].slice(0, length);
        }
        length += 1;
    }

    return strs[0].slice(0, length + 1);
}



========== Algorithm 1 - Iteration ==========
Keep count of the current length
while that length is less than length of first string 
    iterate all strings, break if a char does not match the char at previous element's index position
    increment length counter after each iteration
return the first string element sliced from zero to current length 

========== Solution 1 - Iteration ==========

Runtime 51 ms Beats 79.50% of users with JavaScript
Memory 49.69 MB Beats 48.79% of users with JavaScript

/**
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = function(strs) {
    let length = 0;
    while (length < strs[0].length) {
        for (let i = 0; i < strs.length; i += 1) {
            if (i !== 0 && strs[i][length] !== strs[i-1][length]) return strs[0].slice(0, length);
        }
        length += 1;
    }

    return strs[0].slice(0, length + 1);
}

Time Complexity: O()
Memory Complexity: O()


========== Data Structures 2 - Divide and Conquer ==========
strs - array of strings 

memo - array storing current greatest substring 
mid - pointer (split divide in two)
left - pointer
right - pointer
substr - string 
i - pointer 

output - string 


========== Algorithm 2 - Divide and Conquer ==========
    Main function 
return call helper

    Helper function (strs, left, right, prefix, prefixLength)
Base cases: 
    - prefixLength is zero => return prefix
    - array length is one => return that string  

set substr to empty string 
set mid to right minus left minus one 
recurse left side 
recurse right side 

combine by iterating both with same indexes
- break if mismatch 
- concatenate substr 
- break return prefix string if substr length reaches prefixLength

update prefix string with substr
update prefixLength 

return prefix

========== Solution 2 - Divide and Conquer ==========

Time Complexity: O(N Log N)
Memory Complexity: O(Log N)

// Solution has similar performance to solution 1, but uses more memory
Runtime 48 ms Beats 88.50% of users with JavaScript
Memory 51.96 MB Beats 8.47% of users with JavaScript

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    if (strs.length <= 1) return strs[0];
    
    const memo = ["", Infinity];
    
    longestCommonPrefixHelper(strs, 0, strs.length - 1, memo);
    
    return memo[0];
};

const longestCommonPrefixHelper = function(strs, left, right, memo) {
    if (memo[1] === 0) return ''; 
    if (left === right) {
        return strs[left];
    }

    const mid = Math.floor(left + ((right - left) / 2));
    const leftPrefix = longestCommonPrefixHelper(strs, left, mid, memo);
    const rightPrefix = longestCommonPrefixHelper(strs, mid + 1, right, memo);

    let substr = "";
    for (let i = 0; i < leftPrefix.length; i += 1) {
        if (leftPrefix[i] !== rightPrefix[i]) break; 
        
        substr += leftPrefix[i];
        
        if (substr.length === memo[1]) return substr;
    }

    memo[0] = substr;
    memo[1] = substr.length;

    return memo[0];
}