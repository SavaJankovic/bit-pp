var num = [1,3,4,5,6,7,8];

var sum = 0;
var prod = 1;

for (var i = 0; i < num.length; i++ ){
  sum = sum + num[i];
  prod = prod * num[i];
}
console.log(sum);
console.log(prod);
