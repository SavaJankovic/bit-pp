/* Write a program that checks if a given array is symmetric.
 An array is symmetric if it can be read the same way both 
 from the left and the right hand side.   

Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.

Input array: [3, 4, 12, 8]
    Output: The array isn’t symmetric. */

function symmetric(arr){
    var sArr = [];
    var counter = 0;
    for(var i=arr.length-1; i >= 0; i-- ){
      sArr[counter] = arr[i];
      counter++;
    }

    return sArr;
}
console.log(symmetric([2,3,4,5,6]));
