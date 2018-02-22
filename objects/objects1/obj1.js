// Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]
function dupli(arr) {
    var newArr = [];
    var counter = 0;

    for (var i = 0; i < arr.length; i++) {
        newArr[counter] = arr[i]
        counter++;
        newArr[counter] = arr[i];
        counter++;
    }

    return newArr;
}

console.log(dupli([1, 2, 3, 4, 5]));