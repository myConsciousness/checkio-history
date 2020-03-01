"use strict";

/**
 * Do you remember the radix and Numeral systems from math class? Let's practice with it.
 * You are given a positive number as a string along with the radix for it.
 * Your function should convert it into decimal form.
 * The radix is less than 37 and greater than 1.
 * The task uses digits and the letters A-Z for the strings.
 * 
 * Watch out for cases when the number cannot be converted.
 * For example: "1A" cannot be converted with radix 9.
 * For these cases your function should return -1.
 * 
 * Input: Two arguments. A number as string and a radix as an integer.
 * Output: The converted number as an integer.
 * 
 * Example:
 * numberRadix("AF", 16) == 175
 * numberRadix("101", 2) == 5
 * numberRadix("101", 5) == 26
 * numberRadix("Z", 36) == 35
 * numberRadix("AB", 10) == -1
 */
function numberRadix(strNumber, radix) {
    let a = parseInt(str_number, radix);
    let b = a.toString(radix);
    return b == str_number.toLowerCase() ? a : -1
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(numberRadix("AF", 16), 175, "Hex");
    assert.equal(numberRadix("101", 2), 5, "Bin");
    assert.equal(numberRadix("101", 5), 26, "5 base");
    assert.equal(numberRadix("Z", 36), 35, "Z base");
    assert.equal(numberRadix("AB", 10), -1, "B > A > 10");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}