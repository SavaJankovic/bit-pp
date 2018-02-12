/* Write a function that replaces spaces in a string with 
provided separator. If separator is not provided, 
use “-” (dash) as the default separator. */

"use strict";

function convert(string, char) {
    var arr = [];
    for (var i = 0; i < string.length; i++) {
        arr[i] = string[i];
        if (arr[i] == ' ' && typeof char === "undefined") {
            arr[i] = "-";
        } else if (arr[i] === ' ') {
            arr[i] = char;
        }
    };

    return arr;
}
console.log(convert(" ds a ", "$"));