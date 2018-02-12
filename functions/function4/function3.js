/*Write a program that finds the minimum of a 
given array and prints out its value and index */
"use strict";

function min(arr) {
    var minNum = arr[0];
    var indexMinNum;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < minNum) {
            minNum = arr[i];
            indexMinNum = i;
        }
    }

    return minNum + " > his index is " + indexMinNum;
}
console.log(min([2, 3, 4, -2, 5, 6, -7]));
