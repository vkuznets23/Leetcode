function lengthOfLastWord(s: string): number {
    const wordsArray = s.trimEnd().split(" ");
    const length = wordsArray.length;
    return wordsArray[length - 1].split('').length;
}
