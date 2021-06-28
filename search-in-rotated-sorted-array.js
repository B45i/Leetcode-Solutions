// https://leetcode.com/problems/search-in-rotated-sorted-array

// at least one of them should remain sorted ALWAYS

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, t) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    if (nums[mid] === t) {
      return mid;
    }

    if (nums[l] <= nums[mid]) {
      // left side is sorted
      if (nums[l] <= t && t <= nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      // right side is sorted
      if (nums[mid] <= t && t <= nums[r]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return -1;
};
