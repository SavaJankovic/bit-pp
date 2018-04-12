/*Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.*/

"use strict";

function average(arr) {

    var n = arr.length;
    var sum = 0;
    var ave;
    for (var i = 0; i < n; i++) {
        sum += arr[i];
    }
    return ave = sum / n;

}
console.log(average([1, 2, 3, 4, 5, 4.4]));