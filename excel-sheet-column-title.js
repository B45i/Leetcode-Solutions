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

// var convertToTitle = function(n) {
//   const digits = [];
//   while (n > 0) {
//     digits.unshift((n - 1) % 26);
//     n = Math.trunc((n - 1) / 26);
//   }
//   return String.fromCharCode(...digits.map(d => d + 65));
// };
