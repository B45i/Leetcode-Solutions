// leetcode.com/problems/excel-sheet-column-title

/**
 * @param {number} columnNumber
 * @return {string}
 */
https: var convertToTitle = function(col) {
  r = '';
  while (col) {
    let c = col % 26;
    let d = (col / 26) | 0;
    if (c === 0) {
      c = 26;
      d--;
    }
    r = String.fromCharCode(c + 64) + r;
    col = d;
  }
  return r;
};
