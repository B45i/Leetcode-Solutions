// https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(ss) {
  let com = '';
  let i = 0;
  let f = true;
  let c = ss[0][0];
  while (f) {
    f = ss.every(s => s[i] && s[i] === c);
    com += f ? c : '';
    c = ss[0][++i];
  }
  return com;
};
