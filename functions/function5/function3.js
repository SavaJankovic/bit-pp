/* Write a function that rotates a list by k elements. */

<<<<<<< HEAD
function rotate(arr) {
    var newArr = [];
    var counter = 0;

    for (var i = arr.length - 1; i > 0; i--) {
        newArr += arr[i];
     counter++;
    }

    return newArr;

    // not finish
}
console.log(rotate[1, 2, 3, 4, 5]);
=======
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
>>>>>>> 4ebb17a4c776b30671ff35bc8640aab6dde86643
