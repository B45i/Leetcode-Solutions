// https://leetcode.com/problems/zigzag-conversion

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1 || numRows > s.length) {
    return s;
  }
  let row = 0;
  let delta = -1;
  let rows = [];
  for (const c of s) {
    if (!rows[row]) rows[row] = [];
    rows[row].push(c);
    if (row === 0 || row === numRows - 1) delta *= -1;
    row += delta;
  }
  return rows.reduce((p, r) => p + r.join(''), '');
};
