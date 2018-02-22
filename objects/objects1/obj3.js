// Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true
 
function cek(arr) {
    if (arr.length % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}

console.log(cek([2,4,5,4,7]));