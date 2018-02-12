/* Write a function that draws a square of a given size.
 For example,  if the size of square is 5 the function 
 should draw: 
                  *****
                  *    *
                  *    *
                  *    *
                  *****                 */
"use strict";


function square(num) {
  var draw = "";
  var star = "*";
  var newLine = "\n";
  for (var i = 0; i < num; i++) {
    for (var j = 0; j < num; j++) {
      if (i === 0 || i === num - 1) {
        draw += star;

      } else if (j == 0 || j === num - 1) {
        draw += star;
      } else {
        draw += " ";
      }
    }
    draw += newLine;
  }
  return draw;
}
console.log(square(5));
