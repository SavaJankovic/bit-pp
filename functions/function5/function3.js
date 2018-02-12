/* Write a function that rotates a list by k elements. */

"use strict";

function rotate(arr) {
    var newArr = [];
    var counter = 0;
    for (var i = 2; i < arr.length; i++) {
        newArr[counter] = arr[i];
        counter++;
    
    }
    var finalArr = newArr.concat(arr[0], arr[1]);
    return finalArr;
}

console.log(rotate([11, 12, 33, 4, 5]));
