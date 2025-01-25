enum Roman {
    I = 1,
    V = 5,
    X = 10,
    L = 50,
    C = 100,
    D = 500,
    M = 1000
}

function romanToInt(s: string): number {
    return s.split("").reduce((acc, cur, index, arr) => {
        const currentValue = Roman[cur as keyof typeof Roman];
        const nextVal = Roman[arr[index + 1] as keyof typeof Roman] || 0;

        if (currentValue < nextVal)
            return acc - currentValue;
        else
            return acc + currentValue;
    }, 0);
}
