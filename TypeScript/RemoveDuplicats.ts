function removeDuplicates(nums: number[]): number {
    let duplicats: Map<number, number> = new Map();
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (!duplicats.has(nums[i])) {
            duplicats.set(nums[i], i);
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};
