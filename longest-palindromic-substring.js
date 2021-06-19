// https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const expand = (l, r) => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l -= 1;
      r += 1;
    }
    return s.slice(l + 1, r) || '';
  };

  return [...s].reduce((p, _, i) => {
    let x = expand(i, i + 1);
    let y = expand(i, i);
    let b = x.length > y.length ? x : y;
    return p.length > b.length ? p : b;
  }, '');
};
