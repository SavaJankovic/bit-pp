/* Write a program that checks if a given array is symmetric.
 An array is symmetric if it can be read the same way both 
 from the left and the right hand side.   

Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.

Input array: [3, 4, 12, 8]
    Output: The array isn’t symmetric. */
    "use strict";

function symmetric(arr) {
    var sArr = [];
    var counter = 0;
    for (var i = arr.length - 1; i >= 0; i--) {
        sArr[counter] = arr[i];
        counter++;
    }
    if (sArr[0] == arr[0] && sArr[1] === arr[1] && sArr[2] == arr[2]) {
        return true;
    } else {
        return false;
    }
}
console.log(symmetric([2, 3, 4, 5, 6, 4, 4, 3, 2]));
