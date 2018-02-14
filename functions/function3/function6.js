/* Write a function to create a specified number of 
elements with pre-filled numeric value array. */

"use strict";

function preFilled(num1, num2) {
    var arr = [];
    for (var i = 0; i < num1; i++) {
        arr[i] = num2;
    }

    return arr;

}
console.log(preFilled(5, null));
