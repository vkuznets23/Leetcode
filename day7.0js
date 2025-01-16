/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cash = new Map();
    return function(...args) {
        const key = args.join();
        if (cash.has(key)) {
            return cash.get(key);
        } else {
            const result = fn(...args);
            cash.set(key, result);
            return (result);
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
