/* Write a function that concatenates a given string given 
number of times. For example, if “abc” and 4 are given values,
the function prints out abcabcabcabc.  */

function conc(a, b) {
    var sum = "";
    for (var i = 0; i < b; i++) {
        sum += a;

    }

    return sum;

}

console.log(conc("sava", 3));
