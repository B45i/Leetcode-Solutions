// https://leetcode.com/problems/merge-sorted-array

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function(n1, m, n2, n) {
  let pos = n1.length - 1;
  m--;
  n--;
  while (n >= 0) {
    n1[pos--] = n1[m] > n2[n] ? n1[m--] : n2[n--];
  }
  console.log({ pos, n });
};
