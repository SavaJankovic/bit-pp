var x = 13;

if(x > 9 && x <100 && typeof x === "number"){
    var a = ( x%10 );
    var b = ( x -a ) / 10;
    var z  = a * 10 + b;
    console.log(z);

}else{
    console.log("Erorr!");
};
