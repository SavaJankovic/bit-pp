// // Write a function that counts the number of elements less than the middle element. 
// If the given array has an even number of elements, print out an error message. 
// // Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

function middle(arr) {
    if (arr.length % 2 !== 0) {

        var count = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < arr[(arr.length - 1) / 2]) {
                count++;
            }
        }
        return count;

    } else {
        return 'error message';
    }
}
console.log(middle([-1, 8.1, 3, 6, 2.3, 44, 2.11]));