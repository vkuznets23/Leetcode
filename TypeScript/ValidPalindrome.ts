function isPalindrome(s: string): boolean {
    const str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversed = str.split('').reverse().join('');
    let i = 0;
    while(i < str.length && str[i] === reversed[i]) {
        i++;
    }
    if (i == str.length)
        return true;
    return false;
};
