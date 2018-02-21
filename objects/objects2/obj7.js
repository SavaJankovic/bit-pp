// Write a function that checks if a given string is written in all capitals.
// Write a function that checks if a given string contains any digits.
// Write a function that checks if a given string is a valid hexadecimal color.
// Write a function that checks if a given number belongs to the interval from 1900 to 2018. 
// Write a function named validator that returns an object with properties stringValidator,
//  passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).

// function check(string){
//     var capitals = string.toUpperCase();


//     if(string === capitals){
//         return true;
//     } else{
//         return false;
//     }
// }

// console.log(check("UROS"));

// b

// function check(string) {
//     for (var i = 0; i < string.length; i++) {
//         var element = parseInt(string[i]);
//         var isNumber = typeof element === "number" && !isNaN(element);
//         if (isNumber) {
//             return true;
//         }
//     }

//     return false;
// }

// console.log(check("s1sa"));

// function check(string) {
//     if (string.length == 3 || string.length == 6) {
//         for (var i = 0; i < string.length; i++) {
//             if ((string[i] < 10 && string[i] > 0) || str[i] == "a" || str[i] == "b" || string[i] == "c" || string[i] == "e" || sting[i] == "f") {
                   
//             }
//         }



//     }

function check (string){
    if(typeof parseInt(string.toString(), 16) === "number" && !isNaN(string)){
        return true;
    } else{
        return false;
    }
}

console.log(check("1f1f"));

