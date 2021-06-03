// https://leetcode.com/problems/length-of-last-word/submissions/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let a = s.split(' ').filter(Boolean);
  return a[a.length - 1] ? a[a.length - 1].length : 0;
};
