"use strict";

/**
 * 
 * You are given a string and two markers (the initial and final).
 * You have to find a substring enclosed between these two markers.
 * But there are a few important conditions:
 * 
 * The initial and final markers are always different.
 * If there is no initial marker, 
 * then the first character should be considered the beginning of a string.
 * 
 * If there is no final marker, then the last character should be considered the ending of a string.
 * If the initial and final markers are missing then simply return the whole string.
 * If the final marker comes before the initial marker, then return an empty string.
 * 
 * Input: Three arguments. 
 * All of them are strings.
 * The second and third arguments are the initial and final markers.
 * Output: A string.
 * 
 * Example:
 * betweenMarkers('What is >apple<', '>', '<') == 'apple'
 * betweenMarkers('No[/b] hi', '[b]', '[/b]') == 'No'
 */
const betweenMarkers = (text, begin, end) => {
    // returns substring between two given markers
    // your code here

    let firstIndex = text.indexOf(begin);
    if (firstIndex === -1) {
        firstIndex = 0;
    } else {
        firstIndex += begin.length;
    }

    let lastIndex = text.indexOf(end);
    if (lastIndex === -1) {
        lastIndex = text.length;
    }

    return text.slice(firstIndex, lastIndex);
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    console.log(betweenMarkers('What is >apple<', '>', '<'), 'apple')

    assert.equal(betweenMarkers('What is >apple<', '>', '<'), 'apple')
    assert.equal(betweenMarkers("<head><title>My new site</title></head>",
        "<title>", "</title>"), 'My new site')
    assert.equal(betweenMarkers('No[/b] hi', '[b]', '[/b]'), 'No')
    assert.equal(betweenMarkers('No [b]hi', '[b]', '[/b]'), 'hi')
    assert.equal(betweenMarkers('No hi', '[b]', '[/b]'), 'No hi')
    assert.equal(betweenMarkers('No <hi>', '>', '<'), '')
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}