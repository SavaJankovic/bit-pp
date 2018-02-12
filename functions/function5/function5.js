/* Write a program that prints a multiplication
 table for numbers up to 12.*/

function table(num) {
    for (var i = 0; i < 12; i++) {
        console.log(num + " x " + (i + 1) + " = " + (num * (i + 1)));
    }
}
console.log(table(10));

