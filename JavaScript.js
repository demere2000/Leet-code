/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Create a Map to store numbers and their indices.
  const numMap = new Map();

  // Iterate through the array 'nums'.
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement (the value needed to reach the target).
    const complement = target - nums[i];

    // Check if the complement exists in the 'numMap'.
    if (numMap.has(complement)) {
      // If found, return the indices of the two numbers.
      return [numMap.get(complement), i];
    }

    // If the complement is not found, add the current number and its index to 'numMap'.
    numMap.set(nums[i], i);
  }

  // If no two numbers sum up to the target, return an empty array.
  return [];
};
