5. Longest Palindromic Substring

Given a string s, return the longest palindromic substring in s.

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:

Input: s = "cbbd"
Output: "bb" 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.

========== Solution 1 - decrementing slice lengths ==========

Iterate length slices O(N^3) and O(1) space
- first inspect if entire string is palindrome 
- decrement slice slices and iterate until palindrome found 

Time Complexity: O(N^3)
Memory Complexity: O(1)

const isPalindrome = function(s, left, right) {
  while (left < right) {
      if (s[left] !== s[right]) return false;
      left += 1;
      right -= 1;
  }

  return true;
}

var longestPalindrome = function(s) {
  for (let size = s.length - 1; size > 0; size -= 1) {
      for (let j = 0; j + size < s.length; j += 1) {
          if (s[j] === s[j + size]) {
              if (isPalindrome(s, j, j + size)) return s.slice(j, j + size + 1);
          };
      };
  };

  return s[0];
};

========== Solution 2 - iterate and expand from each char ==========
Time Complexity: O(N^2)
Memory Complexity: O(1)

- keep track of start index and length of result 
- iterate string 
  - find longest odd length palindrome expanding from i => update start and end if greater length found
  - find longest even length palindrom expanding from i => update start and end if greater length found

  const startAndLongestSubstring = function(s, left, right, longest, start) {
    for (let i = 0; i < s.length; i += 1) {
        while (s[left] && s[right] && s[left] === s[right]) {
            const currentLength = right - left + 1;
            if (currentLength > longest) {
                start = left; 
                longest = currentLength;
            };
            left -= 1;
            right += 1; 
        }
    }

    return [longest, start];
}

const longestPalindrome = function(s) {
    let longest = 1;
    let start = 0; 

    for (let i = 0; i < s.length; i += 1) {
        // searching even length substrings
        let left = i;
        let right = i + 1;
        [longest, start] = startAndLongestSubstring(s, left, right, longest, start)

        // searching odd length substrings
        left = i - 1;
        right = i + 1;
        [longest, start] = startAndLongestSubstring(s, left, right, longest, start)
    }

    return s.slice(start, start + longest);
}
