/* Write a program that calculates the sum of positive 
elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16   */

function positive(arr) {
    var posNum = [];
    var counter = 0;
    var sumPosNum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            posNum[counter] = arr[i];
            counter++;
        }
    }
    for (var j = 0; j < posNum.length; j++) {
        sumPosNum += posNum[j];
    }

    return sumPosNum;
}
console.log(positive([12, -23, 14, -3, 0, 20]));
