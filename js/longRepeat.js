"use strict";

/**
 * There are four substring missions that were born all in one day
 * and you shouldn’t be needed more than one day to solve them.
 * All of those mission can be simply solved by brute force,
 * but is it always the best way to go?
 * (you might not have access to all of those missions yet,
 * but they are going to be available with more opened islands on the map).
 * 
 * This mission is the first one of the series.
 * Here you should find the length of the longest substring that consists of the same letter.
 * For example, line "aaabbcaaaa" contains four substrings
 * with the same letters "aaa", "bb","c" and "aaaa".
 * 
 * The last substring is the longest one which makes it an answer.
 * 
 * Input: String.
 * Output: Int.
 * 
 * Example:
 * longRepeat('sdsffffse') == 4
 * longRepeat('ddvvrwwwrggg') == 3
 */
const longRepeat = (line) => {
    // length the longest substring that consists of the same char
    // your code here
    let countLongest = 0;

    for (let i = 0, length = line.length; i < length; i++) {
        let count = 0;
        const baseWord = line[i];
        for (let j = i; j < length; j++) {
            if (baseWord === line[j]) {
                count++;

                if (j === length - 1) {
                    if (count > countLongest) {
                        countLongest = count;
                    }
                }
            } else {
                if (count > countLongest) {
                    countLongest = count;
                }

                break;
            }
        }
    }

    return countLongest;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(longRepeat('sdsffffse'), 4, "First")
    assert.equal(longRepeat('ddvvrwwwrggg'), 3, "Second")
    console.log('"Run" is good. How is "Check"?');
}