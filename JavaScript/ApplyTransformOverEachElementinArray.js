/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var map = function(arr, fn) {
    const returnedArray = [];
    for (let i = 0; i < arr.length; i++){
        returnedArray.push(fn(arr[i], i));
    }
    return returnedArray;
    //return arr.map((num, index) => fn(num, index));
};
