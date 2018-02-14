/* Write a program to filter out falsy values from the array. */
"use strict";

function falsy(arr) {
    var newArray = [];
    var num = -1;
    for (var i = 0; i < arr.length; i++) {
        if (!!arr[i] === false) {
            continue;
        } else {
            num++;
            newArray[num] = arr[i];
        }

    }
    return newArray;
}

console.log(falsy([NaN, 0, 15, false, -22, '', undefined, 47, null]));
