/* Write a program that intertwines two arrays. 
You can assume the arrays are of the same length. 

Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9] */

"use strict";

function assume(arrOne, arrTwo) {
    var newArr = [];
    var counter = 0;
    for (var i = 0; i < arrOne.length; i ++) {
        newArr[counter] = arrOne[i];
        counter++;
    }
    for (var j = 0; j < arrTwo.length; j++) {
        newArr[counter] = arrTwo[j];
        counter++;
    };
    return newArr;
}
// not finish
console.log(assume([2, 13, 4, 5], [7, 8, 9, 10]));