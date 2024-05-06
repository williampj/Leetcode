17. Letter Combinations of a Phone Number

Given a string containing digits from 2-9 inclusive, 
return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. 
Note that 1 does not map to any letters.

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 

Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].

========== Data Structures ==========
digits - string with integers 

numToChars - hash map (key is num, value is chars array)

output - array of strings

========== Algorithm ==========
Base case 
    if empty string input => return empty array

set output to array with one empty string 
iterate digits 
    flat map output that converts each string to multiple strings with digit char added to the string
return output 

========== Solution ==========
Runtime 49 ms Beats 70.37% of users with JavaScript
Memory 49.20 MB Beats 17.15% of users with JavaScript

Time Complexity: O(N^2)
Memory Complexity: O(N)

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits) return [];
    
    const CONVERTER = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    }

    let output = [''];

    for (let i = 0; i < digits.length; i += 1) {
        const chars = CONVERTER[digits[i]];
        
        output = output.flatMap(str => {
            const strings = [];
            for (let j = 0; j < chars.length; j += 1) {
                strings.push(str + chars[j]);
            }
            return strings;
        })
    }
    
    return output;
};