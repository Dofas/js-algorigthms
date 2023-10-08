import show_result from '../show_result.js';

// multiple pointers === create a pointer or values that correspond to an index or position
// and move towards the beginning, end or middle based on a certain position
// useful for: solving problems with minimal space complexity

// often refers to sorted things

// write a func that accepts a SORTED array
// and returns a first pair that gives 0 in sum
function sumZero(array) {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        let sum = array[left] + array[right];
        if (sum === 0) {
            return [array[left], array[right]];
        } else if (sum > 0 ) {
            right --;
        } else {
            left ++;
        }
    }
    return 'No such pair exists'
}

console.group("Sum zero results:");
show_result('[-3, 3]', sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]));
show_result('No such pair exists', sumZero([]));
show_result('No such pair exists', sumZero([-10, 5, 6, 7]));
console.groupEnd();

//write a function that accept a SORTED array and
// returns number of unique values
function countUniqueValues(arr) {
    if (arr.length < 2) {
        return arr.length;
    }

    let first = 0;

    // let second = 1;
    // while (second < arr.length) {
    //     if (arr[first] === arr[second]) {
    //         second++;
    //     } else {
    //         ++first;
    //         arr[first] = arr[second];
    //     }
    // }
    let compared = arr[0];
    for (let second = 1; second < arr.length; second++) {
        if (compared !== arr[second]) {
            first++;
            compared = arr[second];
        }
    }
    return ++first;
}

console.group("Count unique results results:");
show_result('0', countUniqueValues([]));
show_result('1', countUniqueValues([1]));
show_result('1', countUniqueValues([1, 1]));
show_result('2', countUniqueValues([1, 2]));
show_result('4', countUniqueValues([1, 1, 1, 2, 3, 3, 4]));
show_result('7', countUniqueValues([1, 1, 1, 2, 3, 3, 4, 4, 4, 5, 5, 11, 13]));
console.groupEnd();
