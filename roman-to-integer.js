// https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const d = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
  let n = 0;

  for (let i = 0; i < s.length; i++) {
    n += d[s[i]] < d[s[i + 1]] ? -d[s[i]] : d[s[i]];
  }
  return n;
};
