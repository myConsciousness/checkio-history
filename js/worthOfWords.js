const VALUES = {
    'e': 1,
    'a': 1,
    'i': 1,
    'o': 1,
    'n': 1,
    'r': 1,
    't': 1,
    'l': 1,
    's': 1,
    'u': 1,
    'd': 2,
    'g': 2,
    'b': 3,
    'c': 3,
    'm': 3,
    'p': 3,
    'f': 4,
    'h': 4,
    'v': 4,
    'w': 4,
    'y': 4,
    'k': 5,
    'j': 8,
    'x': 8,
    'q': 10,
    'z': 10
};

/**
 * Hey, are you ready for a Scrabble game party?
 * You have a list of words and you have to find only one that is the most valuable among them.
 * 
 * Rules:
 * The worth of each word is equivalent to the sum of letters which it consists of.
 * The values of the letters are as follow:
 * e, a, i, o, n, r, t, l, s, u = 1
 * d, g = 2
 * b, c, m, p = 3
 * f, h, v, w, y = 4
 * k = 5
 * j, x = 8
 * q, z = 10
 * 
 * For example, the worth of the word 'dog' is 5,
 * because 'd' = 2, 'o' = 1 and 'g' = 2.
 * 
 * Input: A list of words.
 * Output: The most valuable word.
 * 
 * Example:
 * worthOfWords(['hi', 'quiz', 'bomb', 'president']) == 'quiz'
 * worthOfWords(['zero', 'one', 'two', 'three', 'four', 'five']) == 'zero'
 */
const worthOfWords = (words) => {
    // your code here
    let biggestWord = '';
    let biggestValue = 0;

    for (let i = 0, arrayLength = words.length; i < arrayLength; i++) {
        const word = words[i];
        let count = 0;
        for (let j = 0, wordLength = word.length; j < wordLength; j++) {
            count += VALUES[word[j]];
        }

        if (count > biggestValue) {
            biggestWord = word;
            biggestValue = count;
        }
    }

    return biggestWord;
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(worthOfWords(['hi', 'quiz', 'bomb', 'president']))

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(worthOfWords(['hi', 'quiz', 'bomb', 'president']), 'quiz')
    assert.equal(worthOfWords(['zero', 'one', 'two', 'three', 'four', 'five']), 'zero')
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}