"use strict";

/**
 * You are given a text, which contains different english letters and punctuation symbols.
 * You should find the most frequent letter in the text.
 * The letter returned must be in lower case.
 * 
 * While checking for the most wanted letter, casing does not matter,
 * so for the purpose of your search, "A" == "a".
 * Make sure you do not count punctuation symbols, digits and whitespaces, only letters.
 * 
 * If you have two or more letters with the same frequency,
 * then return the letter which comes first in the latin alphabet.
 * For example -- "one" contains "o", "n", "e" only once for each, thus we choose "e".
 * 
 * Input: A text for analysis as a string.
 * Output: The most frequent letter in lower case as a string.
 * 
 * Example:
 * mostWanted("Hello World!") == "l"
 * mostWanted("How do you do?") == "o"
 * mostWanted("One") == "e"
 * mostWanted("Oops!") == "o"
 * mostWanted("AAaooo!!!!") == "a"
 * mostWanted("abe") == "a" 
 */
const mostWanted = (data) => {
    let countMap = {};

    for (let i = 0, length = data.length; i < length; i++) {
        const word = data[i].toLowerCase();
        if (word.match(/^([a-z]+)$/)) {
            if (countMap[word]) {
                countMap[word] = countMap[word] + 1;
            } else {
                countMap[word] = 1;
            }
        }
    }

    return getBiggestKey(countMap);
}

const getBiggestKey = (targetMap) => {
    let biggestKeys = [];
    let biggestValue = 0;

    for (let key in targetMap) {
        const value = targetMap[key];
        if (value >= biggestValue) {
            if (value === biggestValue) {
                biggestKeys.push(key);
            } else {
                biggestKeys = [key];
            }
            biggestValue = value;
        }
    }

    if (biggestKeys.length > 1) {
        return biggestKeys.sort()[0];
    }

    return biggestKeys[0];
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(mostWanted("Hello World!"), "l", "1st example");
    assert.equal(mostWanted("How do you do?"), "o", "2nd example");
    assert.equal(mostWanted("One"), "e", "3rd example");
    assert.equal(mostWanted("Oops!"), "o", "4th example");
    assert.equal(mostWanted("AAaooo!!!!"), "a", "Letters");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}