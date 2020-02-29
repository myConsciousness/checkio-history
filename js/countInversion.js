"use strict";

/**
 * In computer science and discrete mathematics, 
 * an inversion is a pair of places in a sequence where the elements
 * in these places are out of their natural order.
 * So, if we use ascending order for a group of numbers,
 * then an inversion is when larger numbers appear before lower number in a sequence.
 * 
 * Check out this example sequence:
 * (1, 2, 5, 3, 4, 7, 6) and we can see here three inversions
 * 5 and 3;
 * 5 and 4;
 * 7 and 6.
 * 
 * You are given a sequence of unique numbers
 * and you should count the number of inversions in this sequence.
 * Input: A sequence as a tuple of integers.
 * Output: The inversion number as an integer.
 * 
 * Example:
 * countInversion([1, 2, 5, 3, 4, 7, 6]) == 3
 * countInversion([0, 1, 2, 3]) == 0
 */
const countInversion = (sequence) => {
    let inversion = 0;
    const arrayLength = sequence.length;

    for (let i = 0; i < arrayLength - 1; i++) {
        for (let j = i + 1; j < arrayLength; j++) {
            if (sequence[i] > sequence[j]) {
                inversion++;
            }
        }
    }

    return inversion;
}

var assert = require('assert');

if (!global.is_checking) {
    console.log("Example:");
    console.log(countInversion([1, 2, 5, 3, 4, 7, 6]));

    assert.equal(countInversion([1, 2, 5, 3, 4, 7, 6]), 3, "Example");
    assert.equal(countInversion([0, 1, 2, 3]), 0, "Sorted");
    assert.equal(countInversion([99, -99]), 1, "Two numbers");
    assert.equal(countInversion([5, 3, 2, 1, 0]), 10, "Reversed");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}