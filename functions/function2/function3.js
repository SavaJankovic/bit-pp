/*  Write a function that concatenates a 
given string n times (default is 1).  */

function concat(array, num) {
    var sum = "";
    for (var i = 0; i < num; i++) {
        sum += array;
    }
    return sum;
}
console.log(concat("sava", 3));
