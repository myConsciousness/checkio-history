"use strict";

/**
 * You are given a string and two markers (the initial one and final).
 * You have to find a substring enclosed between these two markers.
 * But there are a few important conditions.
 * 
 * This is a simplified version of the Between Markers mission.
 * The initial and final markers are always different.
 * The initial and final markers are always 1 char size.
 * The initial and final markers always exist in a string and go one after another.
 * 
 * Input: Three arguments. 
 * All of them are strings. 
 * The second and third arguments are the initial and final markers.
 * Output: A string.
 * 
 * Example:
 * betweenMarkers('What is >apple<', '>', '<') == 'apple'
 */
function betweenMarkers(text, begin, end) {
    // returns substring between two given markers
    // your code here
    return text.slice(text.indexOf(begin) + 1, text.indexOf(end));
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    console.log(betweenMarkers('What is >apple<', '>', '<'), 'apple')

    assert.equal(betweenMarkers('What is >apple<', '>', '<'), 'apple')
    assert.equal(betweenMarkers('What is [apple]', '[', ']'), 'apple')
    assert.equal(betweenMarkers('What is ><', '>', '<'), '')
    assert.equal(betweenMarkers('>apple<', '>', '<'), 'apple')
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}