/*  Write a function to find the position of the last 
occurrence of a character in a string. 
The result should be in human numeration form. 
If there are no occurrences of the character,
function should return -1. */

"use strict";

function find(word, letter) {
    for (var i = word.length; i > 0; i--) {
        if (word[i] === letter) {
            return i + 1
        }
    }
    return -1;
}

console.log(find("sasrasva", "s"));