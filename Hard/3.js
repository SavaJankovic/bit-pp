/* In your IDE of choice, create a new JavaScript file named airport.js and make it so that all code written in the file follows JS strict mode.

Create an anonymous immediately-invoking function that will hold the main execution of all program calls. Writing a simple command console.log(“Hi”) inside this function and running the code should output “Hi“ in the console.

Create constructor functions with properties representing the following:
Person - name, surname
Seat - number, category (can be "b" for business or "e" for economy)
Passenger - person (instance of Person), seat (instance of Seat)
Flight - relation, date and list of passengers (initially empty)
Airport - name (should be a hard-coded value "Nikola Tesla"), list of flights

If category is not provided for Seat, assume it’s economy (“e”). 

If seat number is not provided, assign a random number between 10 and 100. 

Add getData method to Flight. It should return a formatted string containing a date and relation.
"Belgrade - Paris", "25.09.2017" -> 25.09.2017 Belgrade - Paris

Add getData method to Person. It should return a formatted string containing the name and surname of the person.
"John", "Snow" -> "John Snow”

Add getData method to Seat. It should return a formatted string containing a seat number and category.
 12, "B" -> "12, B”

Add getData method to Passenger. It should return a formatted string containing a seat number, category letter (always in uppercase), a name and surname. To display seat data, use getData method of the Seat object. The same goes for the person data.
personObj, seatObj -> 12, B, John Snow

Add addPassenger method to Flight. It should receive Passenger and add the passenger to the passenger list of a given flight. 

Add addFlight method to Airport. It should add the flight to the list of flights of the airport.

Inside your immediately-invoking function, add createFlight function that receives a relation (ex. Belgrade - New York) and date as parameters and returns a created Flight.

Inside your immediately-invoking function, add createPassenger function that receives a first name, last name, seat number and category and returns a created Passenger.

In you main program function, create an instance of the Airport object. 

Create two instances of the Flight object using the createFlight function and the following data:
relation: "Belgrade - New York"         date: "Oct 25 2017"
relation: "Barcelona - Belgrade"         date: "Nov 11 2017"

Create four instances of the Passenger object using the createPassenger function with the following data: 
Name: "John"     surname: "Snow"         seat number: 1        category: "b"
Name: "Cersei"     surname: "Lannister"     seat number: 2        category: "b"
Name: "Daenerys"     surname: "Targaryen"     seat number: 14    
Name: "Tyrion"     surname: "Lannister"     

Add the first two passengers to the first flight and the second two to the second flight using the Flight’s addPassenger method.

Add the created flight instances to the airport using Airport’s addFlight method.

Call Airport’s getData method to display the airport data output in the following manner:

Airport: Nikola Tesla, total passengers: 4
    25.10.2017, Belgrade - Paris
        1, B, John Snow
        2, E, Cersei Lannister
    11.11.2017, Barcelona - Belgrade
        3, E, Daenerys Targaryen
        4, E, Tyrion Lannister
 */

(function () {

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    };

    function Seat(number, category) {
        if (typeof number == "undefined") {
            this.number = Math.floor(Math.random() * (100 - 10) + 10);
        } else {
            this.number = number;
        }

        if (typeof category == "b") {
            return "B";
        } else if (typeof category == "e") {
            return "E";
        } else if (typeof category == "undefined") {
            return "E";
        } else {
            return "Wrong category!";
        };

    };

    function Passenger(person, seat) {

    };

    function Flight(relation, date) {

    };


    function Airport(name, list) {

    };


    var marko = new Person("Marko", "Markovic");
    var seat1 = new Seat(10 , "e")
    var seat2 = new Seat()
    console.log(marko.name);
    console.log(marko.surname);
    console.log(seat1.number);
    console.log(seat2.number);
    console.log(seat1.category);
    console.log(seat2.category);
    




})();