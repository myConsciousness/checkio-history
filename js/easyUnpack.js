"use strict";

/**
 * Your mission here is to create a function
 * that gets an array and returns a tuple with 3 elements
 * - the first, third and second to the last for the given array.
 * 
 * Input: A tuple, at least 3 elements long.
 * Output: A tuple.
 * 
 * Example:
 * easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]) == [1, 3, 7]
 * easyUnpack([1, 1, 1, 1]) == [1, 1, 1]
 * easyUnpack([6, 3, 7]) == [6, 7, 3]
 */
const easyUnpack = (elements) => {
    // returns a tuple with 3 elements - first, third and second to the last
    // your code here
    return [elements[0], elements[2], elements[elements.length - 2]];
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Examples:')
    console.log(easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]))

    assert.deepEqual(easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]), [1, 3, 7])
    assert.deepEqual(easyUnpack([1, 1, 1, 1]), [1, 1, 1])
    assert.deepEqual(easyUnpack([6, 3, 7]), [6, 7, 3])
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}