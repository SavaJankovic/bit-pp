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

        this.getData = function () {
            return this.name + " " + this.surname;
        };
    }

    function Seat(category) {
        this.number = Math.floor(Math.random(100 - 10) * 100);
        this.category = category || "e";

        this.getData = function () {
            return this.number + ", " + this.category;
        };
    }

    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;
        this.getData = function () {
            return this.seat.getData() + ", " + this.person.getData();
        };
    }

    function Flight(destination, date) {

        this.destination = destination;
        this.date = new Date(date);
        this.listPass = [];
        this.returnDate = function () {
            return this.date.getDate() + ". " + this.date.getMonth() + ". " + this.date.getFullYear();
        };

        this.getData = function () {
            var x = "";
            for (var i = 0; i < this.listPass.length; i++) {
                var lp = this.listPass[i];
                x += "\n\t\t" + lp.getData();
            
            }
            return this.returnDate() + " " + this.destination + x;
        };

        this.addPassenger = function (pass) {
            this.listPass.push(pass);
        };
    }

    function Airport() {
        this.name = "Nikola Tesla";
        this.listOfFlights = [];
        this.addFlight = function (flight) {
            this.listOfFlights.push(flight);
        };

        this.getData = function () {
            var airportF = "";
            var total = 0;

            for (var i = 0; i < this.listOfFlights.length; i++) {
                var flight = this.listOfFlights[i];
                total += flight.listPass.length;
                airportF += "\n\t" + flight.getData();
            }



            return "Airport : " + this.name + ", " + " total passenger : " + total + " " + airportF;
        };



    }





    function createFlight(dest, date) {
        return new Flight(dest, date);
    }

    function createPassenger(name1, seat1) {
        return new Passenger(name1, seat1);
    }





    var name1 = new Person("Sava", "Jankovic");
    var name2 = new Person("Nikola", "Radovic");
    var name3 = new Person("Marko", "Madovic");
    var name4 = new Person("Dikola", "Sadovic");

    var seat1 = new Seat();
    var seat2 = new Seat("b");
    var seat3 = new Seat("b");
    var seat4 = new Seat();

    var pass1 = createPassenger(name1, seat1);
    var pass2 = createPassenger(name2, seat2);
    var pass3 = createPassenger(name3, seat3);
    var pass4 = createPassenger(name4, seat4);

    var flight1 = createFlight("Belgrade - Paris", "2018-05-10");
    var flight2 = createFlight("Rim - New York", "2018-12-10");

    flight1.addPassenger(pass1);
    flight1.addPassenger(pass2);
    flight2.addPassenger(pass3);
    flight2.addPassenger(pass4);

    var air1 = new Airport();

    air1.addFlight(flight1);
    air1.addFlight(flight2);


    console.log(air1.getData());




})();
    
