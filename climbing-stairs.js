// https://leetcode.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */

// https://www.youtube.com/watch?v=5o-kdjv7FD0
var climbStairs = function(n) {
  if (n < 2) {
    return 1;
  }

  let f = 1;
  let s = 1;
  for (i = 2; i <= n; i++) {
    let t = f + s;
    f = s;
    s = t;
  }
  return s;
};
