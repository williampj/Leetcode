========== Data Structures ==========
nums - array of int 
target - int 

closest - int (output)
distance - int (difference between closest and target)
outer pointer 
left pointer 
right pointer 

========== Algorithm ==========
sort nums
set closest to infinity
set distance to infinity   
iterate outer loop 
    set left to outer plus one 
    set right to length minus one 
    while left is smaller than righ t
        if distance of sum of three pointers to target is smaller than current distance 
            replace closest with three pointer sum 
            replace distance with current distance 
        increment left is sum is smaller or equal to target 
            else decrement right 
return closest 

========== Solution ==========

Runtime 71 ms Beats 56.15% of users with JavaScript
Memory 50.79 MB Beats 64.41% of users with JavaScript

Time Complexity: O(N^2) - N log N sort followed by a nested loop 
Memory Complexity: O(N) - because of the sort function 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let closest = Infinity;
    let distance = Infinity;
    let left, right, sum, currentDistance; 
    nums.sort((a,b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i += 1) {
        left = i + 1;
        right = nums.length -1;
        while (left < right) {
            sum = nums[i] + nums[left] + nums[right];
            currentDistance = Math.abs(target - sum);
            if (currentDistance < distance) {
                closest = sum; 
                distance = currentDistance;
            }; 
            if (sum <= target) {
                left += 1;
            } else {
                right -= 1; 
            }
        }
    }

    return closest;
};