28. Find the index of the first occurrence in a string 

Given two strings needle and haystack, 
return the index of the first occurrence of needle in haystack, 
or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.


====== Data Structures: ====== 

needle string 
haystack string 
needleLength int
runner int 
output int 


====== Algorithm: ====== 

iterate from 0 to haystackLength minus needleLength 
  if i is equal to first letter in needle 
    return i if haystack[i..needleLength] is equal to needle 
return -1 


====== Solution: ====== 

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
  needleLength = needle.length;
  for (let i = 0; i <= haystack.length - needleLength; i += 1) {
      if (haystack[i] === needle[0]) {
          if (haystack.slice(i, i + needleLength) === needle) return i;
      }
  }
  
  return -1;
};

Time Complexity: O(N)
Memory Complexity: O(1)

