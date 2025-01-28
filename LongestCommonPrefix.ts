function longestCommonPrefix(strs: string[]): string {
    strs.sort();
    const start = strs[0];
    const end = strs[strs.length - 1];
    let i = 0;

    while(i < start.length && i < end.length && start[i] === end[i]) {
        i++;
    }

    return start.slice(0, i);
};
