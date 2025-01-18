/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    let   array = [];
    array.push(...args);
    const len = array.length;
    return len;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
