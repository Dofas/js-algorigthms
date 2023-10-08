// Auxiliary space is a space for algorithm
// Booleans numbers undefined null have a constant space
// Arrays Strings have a O(n) space where n is the length of Array or String


// Space complexity is O(1)
function sumNumbers(array) {
    let total = 0; // this is space
    for (let i = 0; i < array.length; i++) { // and i = 0 is a space also
        total += array[i];
    }
    return total;
}

// Space complexity O(n)
function doubleNumbers(array) {
    let result = []; // because we created array and its grows with input
    for (let i = 0; i < array.length; i++) {
        result.push(array[i] * 2);
    }
    return result;
}