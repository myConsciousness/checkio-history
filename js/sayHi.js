"use strict";

// 1. on CheckiO your solution should be a function
// 2. the function should return the right answer, not print it.

/**
 * In this mission you should write a function
 * that introduces a person with the given parameter's attributes.
 * 
 * Input: Two arguments. String and positive integer.
 * Output: String.
 * 
 * Example:
 * sayHi("Alex", 32) == "Hi. My name is Alex and I'm 32 years old"
 * sayHi("Frank", 68) == "Hi. My name is Frank and I'm 68 years old"
 */
function sayHi(name, age) {
    // your code here
    return `Hi. My name is ${name} and I'm ${age} years old`;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(sayHi("Alex", 32), "Hi. My name is Alex and I'm 32 years old")
    assert.equal(sayHi("Frank", 68), "Hi. My name is Frank and I'm 68 years old")
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}