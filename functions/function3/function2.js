/* Write a program to join all elements of the 
array into a string skipping elements that are undefined, 
null, NaN or Infinity.
[NaN, 0, 15, false, -22, '', undefined, 47, null]
*/
function join(arr) {
    var string = "";
    for (var i = 0; i < arr.length; i++) {
        if (isFinite(arr[i]) === false || arr[i] === undefined || arr[i] === null) {
            continue;
        } else {
            string += arr[i];
        }
    }

    return string;
}
console.log(join([NaN, 0, 15, false, -22, '', undefined, 47, null]));
