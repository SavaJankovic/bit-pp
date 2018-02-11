/* Write a program that inserts a given element e on the 
given position p in the array a. If the value of the
 position is greater than the array length, print 
 the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8] */

function elemet(arr, pos, elem) {
    var newArr = [];
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (i === pos) {
            arr[i] = elem;
        }

        newArr[counter] = arr[i];
        counter++;
    }
    return newArr;
}
console.log(elemet([1, 2, 3, 4, 5, 6], 1, 5));
