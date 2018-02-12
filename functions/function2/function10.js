/* Write a function to get the first n characters 
and add “...” at the
 end of newly created string. */

// this is last n characters
"use strict";

function cuter(word, n) {
    var points = "...";
    var newWord = "";
    var finalWord = "";
    for (var i = 0; i < word.length - n; i++) {
        newWord += word[i]
    }
    finalWord = newWord + points;
    return finalWord;
}

console.log(cuter('pobedili smo sve', 4));

// this is for first n characters

// function cuter(word, n) {
//     var points = "...";
//     var newWord = "";
//     var finalWord = "";
//     for (var i = 0; i <  n; i++) {
//         newWord += word[i]
//     }
//     finalWord = newWord + points;
//     return finalWord;
// }

// console.log(cuter('pobedili smo sve', 4));