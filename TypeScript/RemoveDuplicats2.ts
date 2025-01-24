function removeDuplicates(nums: number[]): number {
    const map = new Map<number, number>();

    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (const [key, value] of map) {
        if (value > 2) {
            map.set(key, 2);
        }
    }
    let newArr: number[] = [];
    for (const [key, value] of map) {
        for (let i = 0; i < value; i++) {
            newArr.push(key);
        }
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = newArr[i];
    }

    return newArr.length;
};
