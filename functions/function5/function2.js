<<<<<<< HEAD
/* Write a function that combines two arrays by alternatingly taking elements. */

function combine(arr1, arr2) {
    var newArr = [];
    for (var i = 0, j = 0; i < arr1.length; i++ , j++) {
        newArr[j] = arr1[i];
        j++;
        newArr[j] = arr2[i]
    }

    return newArr;
}
console.log(combine(['a','b','c'], [1,2,3] ));
=======
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
>>>>>>> 4ebb17a4c776b30671ff35bc8640aab6dde86643
