/* Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********
 */

function square(x) {
    var draw = "";
    var star = "*";
    var newLine = "\n";
    var counter = 0;
    for (var i = 0; i < x.length; i++) {
      for (var j = 0; j < x.length; j++) {
        if (i === 0 || i === x.length - 1) {
          draw += star;
  
        } else if (j == 0 || j === x.length - 1) {
          draw += star;
        } else {
            for(var k = 0; k < x.length; k++){
                draw += x[k];
            
            }
        }
      }
      draw += newLine;
    }
    return draw;
  }
  console.log(square(["Hello", "World", "in", "a", "frame"]));