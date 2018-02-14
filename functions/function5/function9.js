/* Write a function to find the median element of array. */
"use strict";

function median(arr) {
    var x = arr.sort(function (a, b) {
        return a - b;
    });

    if (x.length % 2 === 1) {
        return x[((x.length - 1) / 2)];
    } else {
       var sum = x[x.length/2] +  x[x.length/2 - 1];
       return sum/2;
    }


}
console.log(median([12, 3, 4, 11, 6, 77, ]));
3,4,6,11,12,77