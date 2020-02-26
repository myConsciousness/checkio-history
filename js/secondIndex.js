"use strict";

/**
 * You are given two strings and you have to find an index
 * of the second occurrence of the second string in the first one.
 * Let's go through the first example where you need to find the second occurrence of "s" in a word "sims".
 * It’s easy to find its first occurrence with a function indexOf which will point out that "s" is the first symbol in a word "sims" and therefore the index of the first occurrence is 0. But we have to find the second "s" which is 4th in a row and that means that the index of the second occurrence (and the answer to a question) is 3.
 * 
 * Input: Two strings.
 * Output: Int or undefined
 * 
 * Example:
 * secondIndex("sims", "s") == 3
 * secondIndex("find the river", "e") == 12
 * secondIndex("hi", " ")  == undefined
 */
function secondIndex(text, symbol) {
    // returns the second index of a symbol in a given text
    // your code here

    let countDuplicate = 0;
    for (let i = 0, length = text.length; i < length; i++) {
        if (text[i] === symbol) {
            countDuplicate++;
        }

        if (countDuplicate === 2) {
            return i;
        }
    }

    return null;
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example')
    console.log(secondIndex("sims", "s"))

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(secondIndex("sims", "s"), 3)
    assert.equal(secondIndex("find the river", "e"), 12)
    assert.equal(secondIndex("hi", " "), undefined)
    assert.equal(secondIndex("hi mayor", " "), undefined)
    assert.equal(secondIndex("hi mr Mayor", " "), 5)
    console.log("You are awesome! All tests are done! Go Check it!");
}