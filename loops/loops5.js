"use strict";

var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];
var sum = 0;
for (var i in a) {
    for(var j in a[i]){
      
        sum = sum + a[i][j];
    }
}
console.log(sum);

