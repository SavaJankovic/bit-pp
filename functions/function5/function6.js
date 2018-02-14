/* Write a function to input temperature in Centigrade and 
convert to Fahrenheit. */

function convert(celsius) {
    var fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit + " Fahrenheit  ";
}
console.log(convert(12));
