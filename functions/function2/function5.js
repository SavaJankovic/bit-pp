/* Write a function to find the position of the 
first occurrence of a character in a string. 
The result should be in human numeration form. 
If there are no occurrences of the character,
the function should return -1. */

"use strict";

function find(word, letter) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            return i + 1
        }
    }
    return -1;
}

console.log(find("sasrasva", "s"));
