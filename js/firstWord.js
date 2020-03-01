"use strict";

/**
 * You are given a string where you have to find its first word.
 * This is a simplified version of the First Word mission.
 * 
 * Input string consists of only english letters and spaces.
 * There aren’t any spaces at the beginning and the end of the string.
 * 
 * Input: A string.
 * Output: A string.
 * 
 * Example:
 * firstWord("Hello world") == "Hello"
 */
const firstWord = (sequence) => {
    // returns the first word in a given text.
    // your code here
    return sequence.split(' ')[0];
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(firstWord("Hello world"))

    // These "asserts" using for self-checking and not for auto-testing
    assert.equal(firstWord("Hello world"), "Hello")
    assert.equal(firstWord("a word"), "a")
    assert.equal(firstWord("hi"), "hi")
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}