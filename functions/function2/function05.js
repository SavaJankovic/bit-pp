function find(word, letter) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            return i + 1
        }
    }
    return -1;
}

console.log(find("sasrasva", "s"));
