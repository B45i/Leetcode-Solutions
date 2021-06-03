// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  let r = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  for (c of s) {
    if (c in r) {
      stack.push(c);
    } else if (r[stack.pop()] !== c) {
      return false;
    }
  }
  return stack.length ? false : true;
};
