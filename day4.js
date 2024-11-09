/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let currentValue = init; 

    let increment = () => {
        currentValue++;
        return currentValue;
    }
    let decrement = () => {
        currentValue--;
        return currentValue;
    }
    let reset = () => {
        currentValue = init;
        return currentValue;
    }

    let newObject = {
        increment: increment,
        decrement: decrement,
        reset: reset,
    }
    return (newObject)
};

// Example 1
const counter1 = createCounter(5);
console.log(counter1.increment()); // 6
console.log(counter1.reset());    // 5
console.log(counter1.decrement()); // 4

// Example 2
const counter2 = createCounter(0);
console.log(counter2.increment()); // 1
console.log(counter2.increment()); // 2
console.log(counter2.decrement()); // 1
console.log(counter2.reset());     // 0
console.log(counter2.reset());     // 0
