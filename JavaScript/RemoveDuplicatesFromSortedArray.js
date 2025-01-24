function removeDuplicates(nums) {
    if (nums.length === 0) {
        return 0;
    }
    let j = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[j]) {
            j++;
            nums[j] = nums[i];
        }
    }
    return j + 1;
};

//tests
const nums = [1, 1, 2, 4, 2, 3, 3, 5];
//const nums = [];
const k = removeDuplicates(nums);
console.log(k);
