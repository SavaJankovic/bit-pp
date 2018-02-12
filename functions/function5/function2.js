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
