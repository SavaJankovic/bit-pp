/*  Write a function to count vowels in a provided string. 
If you are  not aware of indexOf function,
 try to use switch statement.*/
 
"use strict";
function vowels(arr) {
    var vowel = 'aeiouAEIOU';
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (vowel.indexOf(arr[i]) !== -1) {
            counter++;
        }
    }
    return counter;
}
console.log(vowels("Dikembe Mutombo"));
