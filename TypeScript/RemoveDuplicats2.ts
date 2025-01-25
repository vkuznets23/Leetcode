function removeDuplicates(nums: number[]): number {
    const map = new Map<number, number>();
    let newArr: number[] = [];

    nums.forEach(num => {
        map.set(num, (map.get(num) || 0) + 1);
    })

    map.forEach((value, key) => {
        if (value > 2) {
            map.set(key, 2);
        }
    });

    map.forEach((value, key) => {
        newArr.push(...Array(value).fill(key))
    });

    nums.forEach((_, i) => {
        nums[i] = newArr[i];
    });

    return newArr.length;
};
