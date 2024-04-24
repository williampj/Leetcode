367. Valid Perfect Square

Given a positive integer num, return true if num is a perfect square or false otherwise.

A perfect square is an integer that is the square of an integer. 
In other words, it is the product of some integer with itself.

You must not use any built-in library function, such as sqrt.

Example 1:

Input: num = 16
Output: true
Explanation: We return true because 4 * 4 = 16 and 4 is an integer.

Example 2:

Input: num = 14
Output: false
Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.
 
Constraints:

1 <= num <= 231 - 1

========== Data Structures ==========
num - int 

left int 
right int 
mid int 
midVal int 

output - boolean 


========== Algorithm ==========
binary search 
  if mid squared equals num 
    return true 
  if mid squared is greater than num 
    go left 
  if mid squared is smaller than sum 
    go right 
return false 

========== Solution ==========
Time Complexity: O(LogN)
Memory Complexity: O(1)


/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let left = 1;
  let right = num; 
  let mid;
  let midVal; 
  
  while (left <= right) {
      mid = left + Math.floor((right - left) / 2);
      midVal = mid**2
      if (midVal === num) return true; 
      if (midVal > num) {
          right = mid - 1;
      } else {
          left = mid + 1
      }
  }
  
  return false;
};


