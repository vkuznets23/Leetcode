function isHappy(n: number): boolean {
    const mySet = new Set<number>();
    const numberStr = n.toString().split("");
    let digits = numberStr.map(Number);
    while(true) {
        const sum = digits.reduce((acc, el) => acc + el ** 2, 0)
        if (sum === 1)
            return true;
        if (mySet.has(sum))
            return false;
        mySet.add(sum);
        digits = sum.toString().split("").map(Number)
    }
};
