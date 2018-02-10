/* Write a function to find a word within a string. */

function finder(word, find) {
    var a = 0;
    var b = 0;
    for (var i = 0; i < word.length; i++) {
        if (word[i] == find[0]) {
            for (var j = i; j < i + find.length; j++) {
                if (word[j] == find[j - i]) {
                    b++;
                }
                if (b == find.length) {
                    a++;
                }
            }
            b = 0;
        }
    }
    return find + " " + "was found" + " " + a + " " + "times";
}
console.log(finder("bit je jedinica, bit je insitut, moze bit", "bit"));
