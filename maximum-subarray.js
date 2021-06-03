// https://leetcode.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let r = nums[0];
  let sum = 0;
  nums.forEach(n => {
    sum += n;
    if (r < sum) r = sum;
    if (sum < 0) sum = 0;
  });
  return r;
};
