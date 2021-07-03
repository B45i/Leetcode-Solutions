// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

var letterCombinations = function(d) {
  if (!d) {
    return [];
  }

  const getCombi = (letters, perm) => {
    const result = [];
    letters.forEach(l => {
      perm.forEach(p => {
        result.push(l + p);
      });
    });
    return result;
  };

  const o = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  };

  let result = [''];
  d.split('').forEach(k => {
    result = getCombi(result, o[k]);
  });

  return result;
};
