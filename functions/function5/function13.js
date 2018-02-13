/*Write a function to find all the numbers greater than the average.*/

"use strict";

function average(arr) {
    var finalArr = [];
    var counter = 0;
    var n = arr.length;
    var sum = 0;
    var ave;
    for (var i = 0; i < n; i++) {
        sum += arr[i];
    }
    ave = sum / n;

    for (var i = 0; i < n; i++) {
        if (arr[i] > ave) {
            finalArr[counter] = arr[i];
            counter++;
        }
    }
    return finalArr;

}
console.log(average([1, 2, 3, 4, 5, 4.4]));