function odd(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            sum += array[i];
        }

    }
    return sum;
}

var rez = odd([2,3,4,5,6]);
console.log(rez);
