// Write a function that finds the smallest element of a given array. 
// The function should return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output:  { minValue: -2, minLastIndex: 6 }

function small(arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    var pos = arr.lastIndexOf(min);

    var output = {
        smallNum: min,
        posNum: pos
    };





    return output;
}

console.log(small([1, 4, -2, 11, 8, 1, -2, 3]));