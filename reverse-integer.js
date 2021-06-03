/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const minLimit = -2147483648;
  const maxLimit = 2147483647;
  const m = x < 0 ? -1 : 1;

  let o =
    Number(
      Math.abs(x)
        .toString()
        .split('')
        .reverse()
        .join('')
    ) * m;

  return o < minLimit || o > maxLimit ? 0 : o;
};
