// https://leetcode.com/problems/pascals-triangle

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 1) return [[1]];
  let r = [[1]];
  for (let i = 1; i < numRows; i++) {
    let temp = [1];
    for (let j = 0; j < r.length - 1; j++) {
      temp.push(r[i - 1][j] + r[i - 1][j + 1]);
    }
    temp.push(1);
    r.push(temp);
  }
  return r;
};
