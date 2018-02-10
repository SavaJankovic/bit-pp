/* Write a function to get the last element of an array. 
Passing a parameter 'n' will return the last 'n' elements
 of the array. */

function lastElement(arr, n) {
    var newArr = [];
    var minus = -1;
    if (typeof n === "undefined") {
        for (var i = arr.length - 1; i >= 0; i--)
            return arr[i];
    } else {
        for (var i = arr.length - n; i < arr.length; i++) {
            minus++;
            newArr[minus] = arr[i];
        }
    }

    return newArr;

}
console.log(lastElement([1, 2, 3, 4, "s"], 3));
