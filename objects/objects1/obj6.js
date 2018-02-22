// Write a list (array) of products you usually buy in the supermarket. 
// Write a price and name for each product. For example,
// 	[
// {name: ‘apples’, price: 100}, 
// {name: ‘milk’, price: 80}, 
// {name:’bananas’, price: 150}
// ]

// function total (){
//     var name = ["banana", "apples", "milk", "cigaret"];
//     var price = [120, 60, 100, 250];
//     var total = 0;
//     for(var i =0; i<price.length; i++){
//       total += price[i];
//     }

//      return (total/price.length);

// }
// console.log(total());

function total() {
    var name = ["banana", "apples", "milk", "cigaret"];
    var price = [120, 600, 100, 250];
    var mostE = price[0];
    var indexMostE;
    for (var i = 1, j = 0; i < price.length; i++) {
        if (price[i] > mostE) {
            mostE = price[i];
            indexMostE = i;
        }
    }

    return name[indexMostE];



}
console.log(total());