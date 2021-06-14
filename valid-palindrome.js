/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const s1 = s.toLowerCase().match(/[A-Za-z0-9]/gi);
  if (!s1) return true;
  return s1.join('') === s1.reverse().join('');
};
