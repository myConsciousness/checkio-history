"use strict";

/**
 * You have a sequence of strings,
 * and you’d like to determine the most frequently occurring string in the sequence.
 * It can be only one.
 * 
 * Input: non empty Array of strings.
 * Output: a string.
 * 
 * Example:
 * mostFrequent([
 * 'a', 'b', 'c', 
 * 'a', 'b',
 * 'a'
 * ]) == 'a'
 * 
 * mostFrequent(['a', 'a', 'bi', 'bi', 'bi']) == 'bi'
 */
const mostFrequent = (data) => {
    // returns the most frequenly occuring string in the given array
    // your code here

    return getMaxKey(getFrequency(data));
}

const getFrequency = (data) => {
    let frequency = {};

    for (let i = 0, arrayLength = data.length; i < arrayLength; i++) {
        const key = data[i];
        if (frequency[key]) {
            frequency[key] += 1;
        } else {
            frequency[key] = 1;
        }
    }

    return frequency;
}

const getMaxKey = (dict) => {
    let maxKey = '';

    for (let key in dict) {
        if (maxKey === '' || dict[key] > dict[maxKey]) {
            maxKey = key;
        }
    }

    return maxKey;
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    console.log(mostFrequent([
        'a', 'b', 'c',
        'a', 'b',
        'a'
    ]))

    assert.equal(mostFrequent([
        'a', 'b', 'c',
        'a', 'b',
        'a'
    ]), 'a')
    assert.equal(mostFrequent(['a', 'a', 'bi', 'bi', 'bi']), 'bi')
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}