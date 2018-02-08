function find(word, letter) {
  for (var i = word.length; i > 0; i--) {
      if (word[i] === letter) {
          return i + 1
      }
  }
  return -1;
}

console.log(find("sasrasva", "s"));