/* Write a function that rotates a list by k elements. */

function rotate(arr) {
    var newArr = [];
    var counter = 0;

    for (var i = arr.length - 1; i > 0; i--) {
        newArr += arr[i];
     counter++;
    }

    return newArr;

    // not finish
}
console.log(rotate[1, 2, 3, 4, 5]);
