/* Write a function that combines two arrays by 
alternatingly taking elements. */

function combines(arr1, arr2) {
    var newArr = arr1.concat(arr2);
    // for (var i = 0, j = 0; i < arr1.length; i++ , j++) {
    //     newArr[i] = arr1[i];
    //     j++;
    //     newArr[i] = arr2[i];
    // }

    return newArr;
    // not finish
}
console.log(combines(['a', 'b', 'c'], [1, 2, 3]));
