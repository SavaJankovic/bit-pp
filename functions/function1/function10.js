/* Write a function that calculates the number of appearances
 of a letter a in a given string. Modify the function so
 it calculates the number of both letters a and A.  */

function slova(array, l, uL) {
    var brojSlova = "";
    for (var i = 0; i < array.length; i++) {
        if (array[i] === l || array[i] === uL) {
            brojSlova += array[i];
        }
    }
    return brojSlova.length;
}
console.log(slova("SavA", "a", "A"));
