/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    const map = new Map();
    
    return function(...args){
        if (map.has(fn))
            return undefined;
        else {
            map.set(fn, ...args);
            return fn(...args);
        }
    }
};
