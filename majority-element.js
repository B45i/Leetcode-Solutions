// https://leetcode.com/problems/majority-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let h = {};
  let m;
  nums.forEach(n => {
    if (n in h) {
      h[n]++;
    } else {
      h[n] = 1;
    }
    if (m === undefined || h[n] > h[m]) {
      m = n;
    }
  });
  return m;
};
