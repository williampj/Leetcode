18. 4Sum

Given an array nums of n integers, return an array of all the unique quadruplets 
[nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target

You may return the answer in any order. 

Example 1:

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

Example 2:

Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]
 

Constraints:

1 <= nums.length <= 200
-109 <= nums[i] <= 109
-109 <= target <= 109

========== Approach ==========
Naive solution O(N^4), O(1) memory 
    - 4 nested loops 

Improvement O(N^3), O(N) memory 
- 3 nested loop to build up hash map, then final loop to find target 

Best approach: O(N^3), O(1) memory 
- 4 pointers


========== Data Structures ==========
nums - array of ints 
target - int 

left - pointer 
second - pointer 
third - pointer 
right - pointer 
sum - int 

output - nested array of 4-element int subarrays 

========== Algorithm ==========
sort nums 
iterate from zero to end minus three (first)
    iterate from left plus one until zero minus two (second)
        set left to second plus one 
        set right to last 
        while left is smaller than right 
            set sum to sum of four pointers 
            if sum is smaller than target 
                increment left 
            else  
                if sum equals target => push four ints to output 
                decrement right 

========== Solution ==========
Runtime 851 ms Beats 5.02% of users with JavaScript
Memory 57.58 MB Beats 16.88% of users with JavaScript

Time Complexity: O(N^3)
Memory Complexity: O(N)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const cache = {}
    nums.sort((a,b) => a - b);
    const output = []

    let left, right, sum, combination, key;
    for (let i = 0; i < nums.length - 3; i += 1) {
        for (let j = i + 1; j < nums.length - 2; j += 1) {
            left = j + 1;
            right = nums.length - 1;
            while (left < right) {
                sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum < target) {
                    left += 1;
                    continue;
                } 
                
                combination = [nums[i], nums[j], nums[left], nums[right]];
                key = combination.toString();

                if (sum === target && !cache[key]) {
                    output.push(combination)
                    cache[key] = true;
                }
                right -= 1;
            }
        }
    }
    
    return output;
};