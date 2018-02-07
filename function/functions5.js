function squ(a){
    var b = "";
 for(var i = 0; i < a; i++){
   b += "*";

        
 }
  b +="\n";
 for(var i = 0; i < 2; i++){
    b += "*" + " ";
    
         
  }
  b +="\n";
 for(var i = 0; i < a; i++){
   b += "*";
   
        
 }

 return b;
}
console.log(squ(5));
