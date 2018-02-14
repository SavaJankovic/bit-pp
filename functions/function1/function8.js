/*  Write a function that calculates a number of appearances
 of a given number in a given array.  */

 "use strict";

function provera(array, num) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === num) {
            sum += array[i];
        }
    }
    return sum / num;
}


var result = provera([1, 3, 5, 3, 9, 15, 1, 3], 1)

console.log(result)