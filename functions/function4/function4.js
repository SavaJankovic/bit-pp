/* Write a program that finds the second largest number 
and prints out its value.   */
"use strict";

function secLar(arr) {
    var largestNum = arr[0];
    var indexLarNum;
    var secondLarNum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            largestNum = arr[i];
            indexLarNum = i;
        }
    }
    arr[indexLarNum] = 0;
    for (var j = 1; j < arr.length; j++) {
        if (arr[j] > secondLarNum) {
            secondLarNum = arr[j];
        }
    }

    return secondLarNum;
}

console.log(secLar([2, 33, 34, 35, 26, 47]));


