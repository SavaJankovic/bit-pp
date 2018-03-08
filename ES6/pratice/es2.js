let arrays = [
    [1, 2, 3],
    [4, 5],
    [6]
];

let arrayFinal = [].concat(...arrays);
console.log(arrayFinal);
let reduceArray = arrays.reduce((a, b) => [...a, ...b], []);
console.log(reduceArray);


