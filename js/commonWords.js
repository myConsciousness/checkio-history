"use strict";

/**
 * Let's continue examining words.
 * You are given two string with words separated by commas.
 * Try to find what is common between these strings.
 * The words are not repeated in the same string.
 * 
 * Your function should find all of the words that appear in both strings.
 * The result must be represented as a string of words separated by commas in alphabetic order.
 * 
 * Input: Two arguments as strings.
 * Output: The common words as a string.
 * 
 * Example:
 * commonWords("hello,world", "hello,earth") == "hello"
 * commonWords("one,two,three", "four,five,six") == ""
 * commonWords("one,two,three", "four,five,one,two,six,three") == "one,three,two"
 */
const commonWords = (first, second) => {
    const firstArray = first.split(',');
    const secondArray = second.split(',');

    let result = [];
    for (let i = 0, firstLength = firstArray.length; i < firstLength; i++) {
        for (let j = 0, secondLength = secondArray.length; j < secondLength; j++) {
            if (firstArray[i] === secondArray[j]) {
                result.push(firstArray[i]);
            }
        }
    }

    return result.sort().join();
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(commonWords("hello,world", "hello,earth"), "hello", "Hello");
    assert.equal(commonWords("one,two,three", "four,five,six"), "", "Too different");
    assert.equal(commonWords("one,two,three", "four,five,one,two,six,three"), "one,three,two", "1 2 3");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}