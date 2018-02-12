/* Write a function that takes a number and 
returns array of its digits. */

"use strict";
function retArr(num) {
    var newArr = [];
    var counter = 0;

    for (var i = 0; i < num; i++) {
        newArr[counter] = i;
        counter++;
    }
    return newArr;
}
console.log(retArr(15));
