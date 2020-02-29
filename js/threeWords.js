"use strict";

/**
 * Let's teach the Robots to distinguish words and numbers.
 * You are given a string with words and numbers separated by whitespaces (one space).
 * The words contains only letters.
 * You should check if the string contains three words in succession.
 * For example, the string "start 5 one two three 7 end" contains three words in succession.
 * 
 * Input: A string with words.
 * Output: The answer as a boolean.
 * 
 * Example:
 * threeWords("Hello World hello") == True
 * threeWords("He is 123 man") == False
 * threeWords("1 2 3 4") == False
 * threeWords("bla bla bla bla") == True
 * threeWords("Hi") == False
 */
const threeWords = (data) => {
    const dataArray = data.split(' ');
    if (dataArray < 3) {
        return false;
    }

    let count = 0;
    for (let i = 0, arrayLength = dataArray.length; i < arrayLength; i++) {
        if (isNaN(dataArray[i])) {
            count++;
            if (count === 3) {
                return true;
            }
        } else {
            count = 0;
        }
    }

    return false;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(threeWords("Hello World hello"), true, "1st example");
    assert.equal(threeWords("He is 123 man"), false, "2nd example");
    assert.equal(threeWords("1 2 3 4"), false, "3rd example");
    assert.equal(threeWords("bla bla bla bla"), true, "4th example");
    assert.equal(threeWords("Hi"), false, "Letters");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}