(function () {

    var continents = {
        asia: "AS",
        europe: "EU",
        africa: "AF",
        northamerica: "NA",
        southamerica: "SA",
        australia: "AU"
    };

    Object.freeze(continents);

    function Country(name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    }

    function Person(name, surname, dateOfBirth) {
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = new Date(dateOfBirth);



        this.getData = function () {
            var today = new Date();

            var personAge = today.getFullYear() - this.dateOfBirth.getFullYear();

            return this.name + " " + this.surname + ", " + personAge + " years";
        }

    }

    function Player(country, betAmount, person) {
        this.betAmount = betAmount;
        this.country = country.slice(0, 2).toUpperCase();
        this.person = person;
        this.getData = function () {
            return this.country + ", " + this.betAmount.toFixed(2) +  ", " + this.person.getData();
        }
    }

    function Address(streetAndNum, postalCode, city, country) {
        this.country = country.slice(0, 2).toUpperCase();
        this.city = city;
        this.postalCode = postalCode;
        this.streetAndNum = streetAndNum;
        var codeCity = this.postalCode + " " + this.city;

        this.getData = function () {
            return this.streetAndNum + ", " + codeCity + ", " + this.country;

        }
    }

    function BettingPlace(address, listOfPlayers) {
        this.address = address;
        this.listOfPlayers = [];
    }

    function BettingHouse(competition, listOfBettingPlaces, numOfPlayers) {
        this.competition = competition;
        this.listOfBettingPlaces = [];
        this.numOfPlayers = numOfPlayers;
    }

    var person1 = new Person("Sava", "Jankovic", "2 feb 1992");
    var person2 = new Person("Ivana ", "Ziv, ", "2018-05-10");

    var address1 = new Address("Nemanjina 4", "11000", "Beograd", "Srbija");

    var player1 = new Player("nemacka", 102.3232, person1);

    console.log(player1.getData());
    

    // console.log(person1.getData());

    // console.log(address1.getData());




})();