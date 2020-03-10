"use strict";

/**
 * Determine whether the sequence of elements items is ascending
 * so that its each element is strictly larger than (and not merely equal to)
 * the element that precedes it.
 * 
 * Input: Iterable with ints.
 * Output: Bool.
 * 
 * Example:
 * isAscending([-5, 10, 99, 123456]) == true
 * isAscending([99]) == true
 * isAscending([4, 5, 6, 7, 3, 7, 9]) == false
 * isAscending([]) == true
 * isAscending([1, 1, 1, 1]) == false
 * 
 * The mission was taken from Python CCPS 109 Fall 2018.
 * It is taught for Ryerson Chang School of Continuing Education
 * by Ilkka Kokkarinen
 */
const isAscending = items => {
    // your code here
    const itemLength = items.length;
    if (!itemLength || itemLength === 1) {
        return true;
    }

    let previousValue = items[0];
    for (let i = 1; i < itemLength; i++) {
        const value = items[i];
        if (previousValue >= value) {
            return false;
        }

        previousValue = value;
    }

    return true;
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(isAscending([-5, 10, 99, 123456]))

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(isAscending([-5, 10, 99, 123456]), true)
    assert.equal(isAscending([99]), true)
    assert.equal(isAscending([4, 5, 6, 7, 3, 7, 9]), false)
    assert.equal(isAscending([]), true)
    assert.equal(isAscending([1, 1, 1, 1]), false)
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}