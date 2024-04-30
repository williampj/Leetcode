4. Median of Two Sorted Arrays

Given two sorted arrays nums1 and nums2 of size m and n respectively, 
return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 
[0,1] 0.5  x 2 = 1
[2,3,4,5,6,7,8] 5 * 7 = 35    35 + 1 = 36 / combined length = 4
= 4 

[1,2,3,4] 2.5 * 4 = 10
[2,3,4,5,6] 4 * 5 = 20   30 / 9 = 3.33 (rounds up to 4)

[0,1,2,3,4] = 2 * 5 = 10 / 6 = 1.67
[0] = 0 
2.5 

Patterns:

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106



========== Algorithm ==========
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// Algorithm;
// base cases:
//  - one array is empty => return median of the other array 

// Using binary search with left-right pointers on the first array and iteration 
// pointers on both arrays, find the median point in the first array such that the element
// at first array pointer is not greater than second array element pointer + 1 and vice versa
// while total element at or before those pointers equal half of the total elements

// approach: 
// keep decrementing right pointer while fewer elements from array one should be chosen
// keep incrementing left pointer while more elements from array one should be chosen
// escape that loop when the end condition has been reached 

// If zero elements from one of the arrays was selected => return median of other array 
// if odd number of total elements, select the highest number of the two array pointers
// if even number of total elements, take the average of the elements the two pointers reference

========== Solution ==========
Time Complexity: O(LogN)
Memory Complexity: O(1)

const getMedianFromArray = (ary) => {
  const midPoint = parseInt(ary.length / 2);
  if (ary.length % 2 === 1) {
      return ary[midPoint];
  } else {
      return (ary[midPoint] + ary[midPoint - 1]) / 2; 
  }
}

var findMedianSortedArrays = function(nums1, nums2) {
  if (!nums1.length) return getMedianFromArray(nums2);
  if (!nums2.length) return getMedianFromArray(nums1);

  const oneLength = nums1.length;
  const twoLength = nums2.length;
  const totalLength = oneLength + twoLength;
  let left = 0;
  let right = nums1.length;
  let median = 0;
  let i = 0;
  let j = 0;
  
  while (left <= right) {
      i = parseInt((left + right) / 2);
      j = parseInt((totalLength + 1) / 2) - i;

      if (i < oneLength && j > 0 && nums2[j - 1] > nums1[i]) {
          left += 1;
      } 
      else if (i > 0 && j < twoLength && nums2[j] < nums1[i - 1]) {
          right -= 1;
      }
      else {
          if (j === 0) {
              median = nums1[i - 1]
          }
          else if (i === 0) {
              median = nums2[j - 1];
          }
          else {
              median = Math.max(nums1[i - 1], nums2[j - 1])
          }

          break;
      }
  }

  if (totalLength % 2 === 1) {
      return median
  } 
  
  if (i === oneLength) {
      return (median + nums2[j]) / 2;
  } else if (j === twoLength) {
      return (median + nums1[i]) / 2;
  } else {
      return (median + Math.min(nums1[i], nums2[j])) / 2;
  }
};

