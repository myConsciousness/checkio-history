"use strict";

/**
 * This is an intro mission, the purpose of which is to explain how to solve missions on CheckiO
 * and how to get the most out of solving them. 
 * When the mission is solved, one more station become available for you, 
 * containing more complex missions.
 * 
 * So this mission is the easiest one. 
 * Write a function that will receive 2 numbers as input
 * and it should return the multiplication of these 2 numbers.
 * 
 * Input: Two arguments. Both are int
 * Output: Int.
 * 
 * Example:
 * multTwo(2, 3) == 6
 * multTwo(1, 0) == 0
 */
function multTwo(a, b) {
    // your code here
    return a * b;
}

var assert = require("assert");
if (!global.is_checking) {
    console.log("Example:");
    console.log(multTwo(3, 2));

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(multTwo(3, 2), 6);
    assert.equal(multTwo(1, 0), 0);
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}