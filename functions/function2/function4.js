/* Write a function to count the number of 
  letter occurrences in a string. */

function provera(word, letter) {
    var sum = "";

    for (var i = 0; i < word.length; i++) {
        if (word[i] === letter)
            sum++;
    }

    return sum;

};

console.log(provera("sdafasa", "s"));
