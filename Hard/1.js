// In your IDE of choice, create a new JavaScript file named shopping.js and make it so that all code written in the file follows strict mode.

// Create an anonymous immediately-invoking function that will hold the main execution of all program calls. Writing a simple command console.log(“Hi”) inside this function and running the code should output “Hi“ in the console.

// Create constructor functions with properties representing the following “things”:
// Product - product id (random number of 5 digits generated on every product creation), name, price (with 2 decimal places), expiration date
// ShoppingBag - a list of products (initially empty; function constructor does not have any input parameters)

// Add getInfo method to Product. It should return a formatted string containing product code (the first and last letter of the name together with the product id), name and expiration date
// "Banana" -> BA32784, Banana, 129.31

// Add a method to ShoppingBag that calculates the average product price of products in your product list and prints out this value with the precision of three decimals. 

// Add a method getMostExpensive that finds the most expensive product and prints out its info.

// Add addProduct method to ShoppingBag. It should receive a Product and add it to the product list. You can add a product to the list only if it has a valid expiration date.  

// Write a function that calculates the total price of products in your shopping bag list. 

// Create constructor functions with properties representing the following:

// PaymentCard - account balance (number with 2 decimal places), active or inactive status, valid until date

// Create function checkoutAndBuy which receives shopping bag and payment card and prints if the purchase is successful or not. Purchase is successful only if the amount on the card is greater or equal to the total price of products in the shopping bag. If there is not enough money, print out the amount that is missing to complete the purchase.
"use strict";

(function () {

    function Product(name, price, expirationDate) {
        this.productID = (function () {
            var min = Math.ceil(10000);
            var max = Math.floor(99999);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        })();

        this.name = name;
        this.price = parseFloat(price.toFixed(2));
        this.expirationDate = new Date(expirationDate);

        this.getInfo = function () {
            var firstLetter = this.name.charAt(0).toUpperCase();
            var lastLetter = this.name.charAt(this.name.length - 1).toUpperCase();
            var final = firstLetter + lastLetter + this.productID;
            var finalDate = this.expirationDate.getDate() + "-" + (this.expirationDate.getMonth() + 1) + "-" + this.expirationDate.getFullYear();

            return final + ", " + this.name + ", " + this.price;

        };

    };

    function ShoppingBag() {
        this.list = [];

        this.addProduct = function (product) {
            var currentDate = new Date();

            if (product.expirationDate.getTime() > currentDate.getTime()) {
                this.list.push(product);
            }

        };

        this.averagePrice = function (price) {
            var totalPrice = 0;

            for (let i = 0; i < this.list.length; i++) {
                totalPrice += this.list[i].price;

            }
            var averagePrice = totalPrice / this.list.length;
            return parseFloat(averagePrice.toFixed(2));
        };
        this.getMostExpensive = function () {
            var mostExpensive = 0;
            var indexMost;
            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i].price > mostExpensive) {
                    mostExpensive = this.list[i].price;
                    indexMost = i;
                }

            }
            return this.list[indexMost];
        };
        this.calculateTotalPrice = function () {
            var totalPrice = 0;

            for (let i = 0; i < this.list.length; i++) {
                totalPrice += this.list[i].price;
            }
            return totalPrice;
        }

    }

    function PaymentCard(accountBalance) {
        this.accountBalance = parseFloat(accountBalance.toFixed(2));
    }


    function checkoutAndBuy(bag1, card) {
        if (card.accountBalance >= bag1.calculateTotalPrice()) {
            return "Purchase successful!";
        } else {
            return "Insufficient price!"
        }
    };

    var product1 = new Product("Banana", 124.45565, "2018-6-12");
    var product2 = new Product("Jabuka", 60, "2018-6-12");
    var product3 = new Product("Mango", 500.42, "2018-6-12");

    var bag1 = new ShoppingBag();

    var card = new PaymentCard(1000)

    bag1.addProduct(product1);
    bag1.addProduct(product2);
    bag1.addProduct(product3);

    console.log();
    console.log(checkoutAndBuy(bag1, card));






})();