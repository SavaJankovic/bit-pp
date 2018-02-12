/* Write a function that says whether a number is perfect. */
"use strict";

function perfectNum(num) {
    var x = 0;
    for (var i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            x += i;
        }
    }

    if(x === num && x !== 0){
        return "Its a perfect number."
    } else{
        return "Its not a perfect number."
    }
}
console.log(perfectNum(1));
