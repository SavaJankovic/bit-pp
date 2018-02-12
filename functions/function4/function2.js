/*Write a program that multiplies 
every positive element of a given array by 2. */
"use strict";

function multi(arr) {
    var newArr = [];
    var counter = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            newArr[counter] = arr[i] * 2;
            counter++;
        } else if (arr[i] <= 0) {
            newArr[counter] = arr[i];
            counter++;
        }
    }
    return newArr;
}
console.log(multi([2, 3, 4.5, -3, 0]));

