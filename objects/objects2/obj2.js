// Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13] 
function rem(arr) {

    var sortArr = arr.sort(function compareNumbers(a, b) {
        return a - b;
    });
    var newArr = [];
    var count = 0;
    for (var i = 0, j = 1; i < sortArr.length; i++, j++) {
        if (sortArr[i] !== sortArr[j]) {
            newArr[count] = sortArr[i];
            count++;
        }
    }
    return newArr;
}
console.log(rem([1, 2,4, 13, 14, 2, 23, 5, 6, 1]));