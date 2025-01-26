function rotate(nums: number[], k: number): void {
    k = k % nums.length;
    if (k === 0)
        return ;
    const newArr = nums.slice(-k);
    const newArr2 = nums.slice(0, nums.length - k);
    const rotated = [...newArr, ...newArr2];
    rotated.forEach((value, index) => {
        nums[index] = value;
    });
};
