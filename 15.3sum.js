15. 3Sum 

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105

APPROACH 1: HASH TABLE 

========== Data Structures ==========
nums - array of ints 

cache - hash map of every number and its index
match - string of 3-element array match 
matchesAdded - hash map with added matches set to true 
target - int of difference between 0 and sum of anchor and runner 
anchor - int (outer loop)
runner - int (inner loop)

output - nested array of ints  

========== Algorithm ==========

iterate nums and insert each into the cache (key = num, index = value)
  - make cache value an array of indexes with that number (to avoid hash collision)
outer loop 
  inner loop 
  - set target equal to zero minus (inner + outer value)
  - if cache has target and an index that is neither inner or outer index 
    - set match to outer num, target number, inner num, sorted and converted to string 
    - if matchesAdded doesn't include this match
      - push the 3-element array match to output 
      - add string match to matchesAdded hash to avoid duplication in output 
return output 

========== Solution ==========

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const cache = {};
  const matchesAdded = {};
  let target; 
  const output = []
  
  for (let i = 0; i < nums.length; i += 1) {
    if (!cache[nums[i]]) {
      cache[nums[i]] = [i]
    } else {
      cache[nums[i]].push(i)
    }
  }
  
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      target = 0 - (nums[i] + nums[j]); 
      if (cache[target]) {
        for (let t = 0; t < cache[target].length; t += 1) {
          if (![i, j].includes(cache[target][t])) {
            const match = [nums[i], target, nums[j]].sort().toString();
            if (!matchesAdded[match]) {
                output.push([nums[i], target, nums[j]]);
                matchesAdded[match] = true; 
            } 
          }
        }
      }
    }
  }
return output;
};

Time Complexity: O(N^2) - the cache pushes it from naive O(N^3) to O(N^2)
Memory Complexity: O(N) - O(3N) for two hashes and output array => O(N)



APPROACH 2: 3 POINTERS 

========== Data Structures ==========
[nums - nested array 

sortedNums - sorted nums 
outer loop pointer - int 
leftPointer - int 
rightPointer - int 

output - nested array 

========== Algorithm ==========
sort input array 
Outer loop - iterate and skip duplicates 
  - advance outer loop if duplicate and not first element 
  - set left pointer to one plus outer loop 
  - set right pointer to array length 
  - inner loop 
    - while left is less than right (not crossed over)
      - if the three indexes add up to zero 
        - add them to output 
      - else if they are less than zero 
        - advance left pointer until not a duplicate 
      - else if they are greater than zero 
        - decrement right pointer 
return output ]

========== Solution ==========
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const sortedNums = nums.sort(); 
    let left;
    let right; 
    const output = [];

    for (let i = 0; i < nums.length; i += 1) {
        while (i !== 0 && sortedNums[i] === sortedNums[i - 1]) {
            i += 1; 
        }
        left = i + 1;
        right = nums.length - 1;
        while (left < right) {
            sum = sortedNums[i] + sortedNums[left] + sortedNums[right];
            if (sum === 0) {
                output.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
                left += 1; 
                while (left < right && sortedNums[left] === sortedNums[left - 1]) {
                    left += 1; 
                }
            } else if (sum < 0) {
                left += 1;
            } else { // sum > 0 
                right -= 1;
            }
        }
    }

    return output;
}

Time Complexity: O(N^2)
Memory Complexity: O(1)





