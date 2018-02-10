/* Write a function that reverses a number. 
The result must be a number. */ 

function reverse(arr){
    var reverseArr = [];
    for(var i= arr.length -1 ; i > -1; i--){
      reverseArr += arr[i];
    }

    return reverseArr;
}

console.log(reverse([1,2,3,4,5,6,7]));
