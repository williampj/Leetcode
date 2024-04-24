46. Permutations

Given an array nums of distinct integers, return all the possible permutations. 
You can return the answer in any order.
 
Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:

Input: nums = [1]
Output: [[1]]
 

Constraints:

1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.

// APPROACH 1: NON-OPTIMIZED

========== Data Structures ==========
nums - array of ints 

candidate - array of ints 
results - array of successfull candidates

========== Algorithm ==========
  Main function:
create candidate 
create results 
call helper (candidate & results)
return results 

  Backtrack function
End of path condition - candidate length equal to nums length
  success: all candidate digits unique
    create copy 
    create sorted copy 
    if no duplicates in sorted copy 
      push copy to results 
    return 

backtrack 
  iterate numbers 
    add number to candidate array 
    recurse 
    pop candidate

========== Solution ==========
Time Complexity: O(2^N)
Memory Complexity: O()

const permute = function(nums) {
  const results = [];
  const candidate = [];
  backtrack(nums, candidate, results)
  
  return results;
}

const backtrack = function(nums, candidate, results) {
  if (candidate.length === nums.length) {
    const copy = JSON.parse(JSON.stringify(candidate));
    const copySorted = JSON.parse(JSON.stringify(candidate)).sort((a,b) => a - b);
    if (copySorted.every((el,indx,ary) => el !== ary[indx - 1])) {
      results.push(copy);
    };
    return;
  }
  
  for (let num of nums) {
    candidate.push(num);
    backtrack(nums, candidate, results);
    candidate.pop();
  }
}

// APPROACH 2: OPTIMIZED - avoiding repetitions in the candidate
// - from 671 to 290 steps for 3-element array input 

========== Solution ==========

const permute = function(nums) {
  const results = [];
  const candidate = [];
  backtrack(nums, candidate, results)
  
  return results;
}

const backtrack = function(nums, candidate, results) {
  if (candidate.length === nums.length) {
    const copy = JSON.parse(JSON.stringify(candidate));
    const copySorted = JSON.parse(JSON.stringify(candidate)).sort((a,b) => a - b);
    if (copySorted.every((el,indx,ary) => el !== ary[indx - 1])) {
      results.push(copy);
    };
    return;
  }
  
  for (let num of nums) {
    if (candidate.includes(nums)) continue;
    
    candidate.push(num);
    backtrack(nums, candidate, results);
    candidate.pop();
  }
}