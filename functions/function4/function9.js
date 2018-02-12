/* Write a program that deletes a given 
element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]
 */
"use strict";

function delet(arr, e) {
    var newArr = [];
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === e) {
            delete arr[i];
        } else {
            newArr[counter] = arr[i];
            counter++;
        }
    }

    return newArr;
}
console.log(delet([1, 2, 3, 4, 5, 2], 2));
