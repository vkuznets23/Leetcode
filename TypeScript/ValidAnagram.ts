/*
 Given two strings s and t, return true if t is an
anagram
 of s, and false otherwise.



Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false



Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.*/

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
