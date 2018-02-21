// Write a function that finds all the elements in a given array that start with the “pro” substring. 
// The function should be case insensitive. 
// Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
// Output: [’Programming’, ‘product’]
"use strict";
function finds(arr) {
    var newArr = [];
    for (var i = 0, j = 0; i < arr.length; i++) {
        if (arr[i].substring(0, 3).toLowerCase() === 'pro') {
            newArr[j] = arr[i];
            j++;

        }
    }
    return newArr;

}
console.log(finds(['JavaScript', 'Programming', 'fun', 'product']));