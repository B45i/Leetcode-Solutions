// https://leetcode.com/problems/two-sum/

var twoSum = function (nums, tar) {
    let dict = {};
    for (let i = 0; i < nums.length; i++) {
        const x = nums[i];
        if (tar - x in dict) {
            return [dict[tar - x], i];
        } else {
            dict[x] = i;
        }
    }
};