"use strict";

var arr = [80, 77, 88, 95, 68]
var avrg = 0;

for (var i = 0; i < arr.length; i++) {
    avrg = (avrg + arr[i] / 5);

}

if(avrg < 60){
    console.log("F");
  } else if (avrg < 70){
      console.log("D");
  } else if (avrg < 80){
      console.log("C");
  }else if (avrg < 90){
      console.log("B");
  }else if (avrg < 100){
      console.log("A");
}
