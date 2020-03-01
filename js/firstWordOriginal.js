"use strict";

/**
 * You are given a string where you have to find its first word.
 * When solving a task pay attention to the following points:
 * There can be dots and commas in a string.
 * 
 * A string can start with a letter or, for example, a dot or space.
 * A word can contain an apostrophe and it's a part of a word.
 * The whole text can be represented with one word and that's it.
 * 
 * Input: A string.
 * Output: A string.
 * 
 * Example:
 * firstWord("Hello world") == "Hello"
 * firstWord("greetings, friends") == "greetings"
 */
function firstWord(sequence) {
    // returns the first word in a given text.
    // your code here
    const length = sequence.length;
    let firstIndex = 0;
    let lastIndex = length;

    for (let i = 0; i < length; i++) {
        if (!sequence[i].match(/[^A-Za-z']+/)) {
            firstIndex = i;
            break;
        }
    }

    for (let i = firstIndex; i < length; i++) {
        if (sequence[i].match(/[^A-Za-z']+/)) {
            lastIndex = i;
            break;
        }
    }

    return sequence.slice(firstIndex, lastIndex);
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(firstWord("Hello world"))

    // These "asserts" using for self-checking and not for auto-testing
    assert.equal(firstWord("Hello world"), "Hello")
    assert.equal(firstWord(" a word "), "a")
    assert.equal(firstWord("don't touch it"), "don't")
    assert.equal(firstWord("greetings, friends"), "greetings")
    assert.equal(firstWord("... and so on ..."), "and")
    assert.equal(firstWord("hi"), "hi")
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}