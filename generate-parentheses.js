// https://leetcode.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const result = [];
  const dfs = (l, r, str) => {
    if (l > r) {
      // unbalanced parans
      return;
    }

    if (l === 0 && r === 0) {
      // balanced parns
      result.push(str);
    }

    if (l > 0) {
      // we have remining open beances, lets add it
      dfs(l - 1, r, str + '(');
    }

    if (r > 0) {
      // we have remining closing beances, lets add it
      dfs(l, r - 1, str + ')');
    }
  };

  dfs(n, n, '');
  return result;
};
