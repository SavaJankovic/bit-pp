/*Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. 
If number of elements is even, return just the first and the last.
 In other cases, input array should be returned.*/

"use strict"

function lastMidFirstEl(arr) {
    if (arr.length === 0) {
        return arr;
    }

    var a = arr.length;

    if (a % 2 === 1) {
        return arr[0] + " is first element " + arr[(a / 2) - 0.5] + " is middle element " + arr[a - 1] + " is last element";
    } else if (a % 2 === 0) {
        return arr[0] + " is first element " + arr[a - 1] + " is last element";
    }

}
console.log(lastMidFirstEl([1, 2, 3, 4, 5, 6]));