// https://leetcode.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */

// var singleNumber = function(nums) {
//     const set = new Set();
//     nums.forEach(n => {
//         if(set.has(n)) {
//             set.delete(n)
//         } else {
//             set.add(n)
//         }
//     })
//     return Array.from(set.values())[0]
// };

const singleNumber = nums => nums.reduce((x, y) => x ^ y, 0);
