// https://leetcode.com/problems/minimum-add-to-make-parentheses-valid

/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
  stack = [];
  for (const c of s) {
    if (c === ')' && stack[stack.length - 1] === '(') {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack.length;
};
