var map = function(arr, fn) {
    // Step 1: Create a new empty array
    const result = [];

    // Step 2: Loop through the input array
    for (let i = 0; i < arr.length; i++) {
        // Step 3: Apply the transformation function and push the result
        result.push(fn(arr[i], i));
    }

    return result;
};
