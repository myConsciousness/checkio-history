"use strict";

/**
 * 正規表現を使用して文字列の大文字判定を行う関数です。
 *  
 * @return {boolean} 引数が大文字の場合は{@code true}、それ以外は{@code false}
 */
String.prototype.isUpperCase = function() {
    return /^[A-Z]+$/g.test(this.valueOf());
}

/**
 * "Where does a wise man hide a leaf? In the forest.
 * But what does he do if there is no forest? ... He grows a forest to hide it in."
 * -- Gilbert Keith Chesterton
 * 
 * Ever tried to send a secret message to someone without using the postal service?
 * You could use newspapers to tell your secret.
 * Even if someone finds your message, it's easy to brush them off as paranoid and as a conspiracy theorist.
 * One of the simplest ways to hide a secret message is to use capital letters. 
 * Let's find some of these secret messages.
 * You are given a chunk of text. Gather all capital letters in one word in the order that they appear in the text.
 * 
 * For example: text = "How are you? Eh, ok. Low or Lower? Ohhh.", if we collect all of the capital letters, we get the message "HELLO".
 * Input: A text as a string (unicode).
 * Output: The secret message as a string or an empty string.
 * 
 * Example:
 * findMessage("How are you? Eh, ok. Low or Lower? Ohhh.") == "HELLO"
 * findMessage("hello world!") == ""
 */
const findMessage = data => {
    let message = '';

    for (let i = 0, length = data.length; i < length; i++) {
        let word = data[i];
        if (word.isUpperCase()) {
            message += word;
        }
    }

    return message;
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(findMessage("How are you? Eh, ok. Low or Lower? Ohhh."))

    assert.equal(findMessage("How are you? Eh, ok. Low or Lower? Ohhh."), "HELLO", "hello");
    assert.equal(findMessage("hello world!"), "", "Nothing");
    assert.equal(findMessage("HELLO WORLD!!!"), "HELLOWORLD", "Capitals");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}