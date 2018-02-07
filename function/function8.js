
function provera(array, num) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === num) {
            sum += array[i];
        }
    }
    return sum/num;
}


var result = provera([1, 3, 5, 3, 9, 15,5, 3], 16)

console.log(result)