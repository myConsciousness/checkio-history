"use strict";

/**
 * You are given a positive integer.
 * Your function should calculate the product of the digits excluding any zeroes.
 * For example: The number given is 123405.
 * The result will be 1*2*3*4*5=120 (don't forget to exclude zeroes).
 * 
 * Input: A positive integer.
 * Output: The product of the digits as an integer.
 * 
 * Example:
 * digitsMultip(123405) == 120
 * digitsMultip(999) == 729
 * digitsMultip(1000) == 1
 * digitsMultip(1111) == 1
 */
function digitsMultip(data) {
    const stringNumber = String(data);
    let mutiplied = 1;

    for (const sequence of stringNumber) {
        if (sequence !== '0') {
            mutiplied *= Number(sequence);
        }
    }

    return mutiplied;
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    console.log(digitsMultip(123405))

    assert.equal(digitsMultip(123405), 120, "1st");
    assert.equal(digitsMultip(999), 729, "2nd");
    assert.equal(digitsMultip(1000), 1, "3rd");
    assert.equal(digitsMultip(1111), 1, "4th");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}