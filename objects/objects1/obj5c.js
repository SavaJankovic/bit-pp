// Write a function that expects an array and a callback function that 
// filters out some of the elements. Use functions defined in a) or b) to test it. 

function filter(x) {
    return x.substring(0, 3).toLowerCase() === 'pro';
}


function finds(arr, secondF) {
    var newArr = [];
    for (var i = 0, j = 0; i < arr.length; i++) {
        if (secondF(arr[i])) {
            newArr[j] = arr[i];
            j++;
        }
    }
    return newArr;
}

console.log(finds(['JavaScript', 'Programming', 'fun', 'product'], filter));