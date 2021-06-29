// https://leetcode.com/problems/excel-sheet-column-number

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(t) {
  let s = 0;
  t.split('')
    .reverse()
    .forEach((c, i) => {
      let r = c.charCodeAt(0) - 64;
      s += r * Math.pow(26, i);
    });
  return s;
};
