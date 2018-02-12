/* Write a function to count vowels in a provided string.
 If you are  not aware of indexOf function, try to use switch statement. */
"use strict";

function count(arr) {
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "a" || arr[i] == "e" || arr[i] == "i" || arr[i] == "o" || arr[i] == "u") {
            counter++;
        }
    }

    return counter;
}

console.log(count("sava"));
