// Write a function that finds all the elements in a given array less than a given element. 
// 	Input: [2, 3, 8, -2, 11, 4], 6 
// 	Output: [2, 3, -2, 4]
function finds(arr, num){
    var newArr = [];
    var count = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i] < num){
            newArr[count] = arr[i];
            count++;
        }
    }

    return newArr;
}

console.log(finds([2, 3, 8, -2, 11, 4], 6 ));
