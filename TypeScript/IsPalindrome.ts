function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length)
        return false;

    // Create frequency maps for both strings
    const countMapS: { [key: string]: number } = {};
    const countMapT: { [key: string]: number } = {};

    // Count frequency of characters in string s
    for (const char of s) {
        countMapS[char] = (countMapS[char] || 0) + 1;
    }

    // Count frequency of characters in string t
    for (const char of t) {
        countMapT[char] = (countMapT[char] || 0) + 1;
    }

    for (const char in countMapS) {
        if (countMapS[char] !== countMapT[char]) {
            return false;
        }
    }

    return true;
};
