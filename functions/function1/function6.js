/* Write a function that draws a horizontal 
chart representing three given values. 
For example, if values are 5, 3, and 7, 
the function should draw:
* * * * *
* * *
* * * * * * *     */

function stars(num1, num2, num3) {
    var draw = "";
    var star = "*";
    var newLine = "\n";
    for (var i = 0; i < num1; i++) {
        draw += star;
    }
    draw += newLine;
    for (var ј = 0; ј < num2; ј++) {
        draw += star;
    }
    draw += newLine;
    for (var x = 0; x < num3; x++) {
        draw += star;
    }

    return draw;
}
console.log(stars(2, 5, 10));
