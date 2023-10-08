import show_result from '../show_result.js';

// frequency pattern === use object to collect values/frequencies of values
// useful for: to avoid nested loops and reduce O(n) operations

// often refers to calculate something or compare 2 things

// write same function
// func that return true if every value in the array has corresponding values squared in the second array
// the frequency must be the same
function isSame(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }

    let frequencyArray1 = {};
    let frequencyArray2 = {};
    for (let i = 0; i < array1.length; i++) {
        const elementArray1 = array1[i];
        const elementArray2 = array2[i];
        frequencyArray1[elementArray1] = ++frequencyArray1[elementArray1] || 1
        frequencyArray2[elementArray2] = (frequencyArray2[elementArray2] || 0) + 1
    }

    for (const [key, value] of Object.entries(frequencyArray1)) {
        let quadraticKey = key * key;
        if (!(quadraticKey in frequencyArray2)) {
            return false;
        }
        if (frequencyArray2[quadraticKey] !== value) {
            return false;
        }
    }
    return true;
}

console.group("Is same array results")
show_result(true, isSame([1 ,2 ,3], [4 ,1, 9]));
show_result(true, isSame([1 ,2 ,3, 2], [9, 1, 4, 4]));
show_result(false, isSame([1 ,2 ,3], [4, 9]));
show_result(false, isSame([1, 2, 1], [4, 4, 1]));
console.groupEnd();

console.log('-----------------------------------------------------------')

// write anagrams function that means that we can create one string fron another
function isAnagrams(string1, string2) {
    if (string1.length !== string2.length) {
        return false;
    }

    if (string1 === string2) {
        return true;
    }

    let frequencyString1 = {};
    for (let letterString1 of string1) {
        frequencyString1[letterString1] ? frequencyString1[letterString1] += 1 : frequencyString1[letterString1] = 1;
    }

    for (const letterString2 of string2) {
        if (!frequencyString1[letterString2]) {
            return false;
        } else {
            frequencyString1[letterString2] -= 1;
        }
    }

    return true;
}

console.group("Is anagram results");
show_result(true, isAnagrams('', ''));
show_result(true, isAnagrams('anagram', 'nagaram'));
show_result(true, isAnagrams('texttwisttime', 'timetwisttext'));
show_result(true, isAnagrams('qwerty', 'qewrty'));
show_result(false, isAnagrams('awesome', 'awesom'));
show_result(false, isAnagrams('aaz', 'zza'));
show_result(false, isAnagrams('rat', 'car'));
console.groupEnd();