/* Write a function that converts an array of strings
 into an array of numbers. Filter out all non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> 
[1, 21, 42, 1000]   */

function convertArrToSrt(arr) {
    var newArr = [];
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === "string") {
            newArr[counter] = parseInt(arr[i]);
            counter++;
        }
    }

    return newArr;

}

console.log(convertArrToSrt(["21", "2", undefined, NaN, Infinity, "1e+3"]));