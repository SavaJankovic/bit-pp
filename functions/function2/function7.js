/* Write a function to convert string into an array.
 Space in a string should be 
 represented as “null” in new array.  */

 "use strict";

function convert(string) {
    var arr = [];
    for (var i = 0; i < string.length; i++) {
        arr[i] = string[i];
        if (arr[i] == ' ') {
            arr[i] = null;
        }
    };

    return arr;
}
console.log(convert(" ds a "));
