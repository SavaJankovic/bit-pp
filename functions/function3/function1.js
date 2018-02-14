/* Write a program to insert a string within a string at a 
particular position (default is 1, beginning of a string). 

"My random string", "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string"

*/
"use strict";

function putYourWord(put, string, place) {
    var firstChange = "";
    var secondChange = "";
    var final = "";

    for (var i = 0; i < string.length; i++) {
        if (i < place) {
            firstChange += string[i];
        } else if (i >= place) {
            secondChange += string[i];
        }
    }
    final = firstChange + " " + put + " " + secondChange;

    if (place === " " || typeof place === "undefined") {
        final = put + " " + string;
    }

    return final;
}

console.log(putYourWord("Sava", "Just Nba like.", 9));

