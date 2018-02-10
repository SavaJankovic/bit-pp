/* Write a function to humanize a number 
(formats a number to a human-readable string) 
with the correct suffix such as 1st, 2nd, 3rd or 4th. 
1 -> 1st
11 -> 11th
*/

function grammar(num) {
    if (num % 100 >= 11 && num <= 13) {
        correct = num + "th";
    }

    switch (num % 10) {
        case 1: return num + "st";
        case 2: return num + "nd";
        case 3: return num + "rd";
    }

    return num + "th";
}
console.log(grammar(3));

