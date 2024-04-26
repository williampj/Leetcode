3. Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 
Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.


========== Data Structures ==========
input - string 

cutoff - int 
maxCount - int 
counter - int 
cache - hash 
substr - string 

output - int (length of substring)

========== Algorithm ==========
create cache 
set counter to zero 
set substr to empty string 

iterate input 
  if char not in cache OR in cache with index value smaller than cutoff 
    add char to cache with char as key and indx as value
    increment counter
  else 
    set max counter to greatest of max or counter 
    set counter to current index - cache value index 
    overwrite char in cache with newest index value
    set cutoff to index  
set max counter to greatest of max or counter 
return max counter 

========== Solution ==========

Time Complexity: O()
Memory Complexity: O()

var lengthOfLongestSubstring = function(s) {
  let maxCount = 0;
  let counter = 0;
  const cache = {};

  for (let i = 0; i < s.length; i += 1) {
      const char = s[i];
      if (cache[char] === undefined || (i - cache[char] > counter)) { 
          cache[char] = i;                                            
          counter += 1;
      } else {
          maxCount = Math.max(maxCount, counter);
          counter = i - cache[char];
          cache[char] = i;
      }
    
  };
  maxCount = Math.max(maxCount, counter);

  return maxCount;
};

