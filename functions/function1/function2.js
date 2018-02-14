// Write a function that checks if a given number is odd.
"use strict";

function check(a) {
    if (a % 2 === 0) {
        return false;
    } else {
        return true;
    }
}

var x = check(5);
console.log(x);
