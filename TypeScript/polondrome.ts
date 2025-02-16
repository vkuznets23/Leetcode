function isPalindrome(x: number): boolean {
    const str:string = x.toString();
    if (str === str.split("").reverse().join(""))
        return true;
    return false;
};
