/* Write a function to find the maximum element in array
 of numbers. 
Filter out all non-number elements. */
function max(arr) {
    var newArr = [];
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            newArr[counter] = arr[i];
            counter++;
        }
    }

    var largestNum = newArr[0];
    for (var j = 1; j < newArr.length; j++) {
        if (arr[j] > largestNum) {
            largestNum = arr[j];
        }
    }
    return largestNum;
}
console.log(max([1, 2, 3, "a", true]));
