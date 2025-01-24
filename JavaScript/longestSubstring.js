/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let currentMap = new Map();
    let arrayOfMaps = [];
    const arr = s.split('');   

    if (arr.length === 0)
        return 0;
    
    let start = 0;
    let maxLength = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (currentMap.has(arr[i]) && currentMap.get(arr[i]) >= start) {
            start = currentMap.get(arr[i]) + 1;
        }
        currentMap.set(arr[i], i);
        maxLength = Math.max(maxLength, i - start + 1);
    }
    
    return maxLength;
};
