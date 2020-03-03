"use strict";

/**
 * If you have 50 different plug types, 
 * appliances wouldn't be available and would be very expensive.
 * But once an electric outlet becomes standardized,
 * many companies can design appliances, and competition ensues,
 * creating variety and better prices for consumers.
 * -- Bill Gates
 * 
 * You are given a non-empty list of integers (X). For this task, you should return a list
 * consisting of only the non-unique elements in this list. 
 * To do so you will need to remove all unique elements
 * (elements which are contained in a given list only once).
 * When solving this task, do not change the order of the list.
 * Example: [1, 2, 3, 1, 3] 1 and 3 non-unique elements and result will be [1, 3, 1, 3].
 * 
 * non-unique-elements
 * Input: A list of integers.
 * Output: An iterable of integers.
 * 
 * Example:
 * nonUniqueElements([1, 2, 3, 1, 3]) == [1, 3, 1, 3]
 * nonUniqueElements([1, 2, 3, 4, 5]) == []
 * nonUniqueElements([5, 5, 5, 5, 5]) == [5, 5, 5, 5, 5]
 * nonUniqueElements([10, 9, 10, 10, 9, 8]) == [10, 9, 10, 10, 9]
 */
const nonUniqueElements = (data) => {
    let nonUniques = [];

    for (let i = 0, dataLength = data.length; i < dataLength; i++) {
        const baseData = data[i];
        for (let j = 0; j < dataLength; j++) {
            if (i !== j && baseData === data[j]) {
                nonUniques.push(baseData);
                break;
            }
        }
    }

    return nonUniques;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(nonUniqueElements([1, 2, 3, 1, 3]), [1, 3, 1, 3], "1st example");
    assert.deepEqual(nonUniqueElements([1, 2, 3, 4, 5]), [], "2nd example");
    assert.deepEqual(nonUniqueElements([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5], "3rd example");
    assert.deepEqual(nonUniqueElements([10, 9, 10, 10, 9, 8]), [10, 9, 10, 10, 9], "4th example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}