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
            return this.country + ", " + this.betAmount.toFixed(2) + " eur" + ", " + this.person.getData();
        }
    }

    function Address(street, number, postalCode, city, country) {
        this.country = country.slice(0, 2).toUpperCase();
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.number = number;
        var codeCity = this.postalCode + " " + this.city;

        this.getData = function () {
            return this.streetAndNum + ", " + codeCity + ", " + this.country;

        }
    }

    function BettingPlace(address) {
        this.address = address;
        this.listOfPlayers = [];


        this.addPlayers = function (player) {
            this.listOfPlayers.push(player);
        };

        this.sumAllBets = function () {
            var counter = 0;
            for (var i = 0; i < this.listOfPlayers.length; i++) {
                var x = this.listOfPlayers[i];
                counter += x.betAmount;
            }

            return counter;
        }

        this.getData = function () {
            return this.address.street + ", " + this.address.postalCode + " " + this.address.city + ", sum of all bets: " + this.sumAllBets() + "eur";
        };
    }

    function BettingHouse(competition) {
        this.competition = competition;
        this.listOfBettingPlaces = [];


        this.nameOfCompetition = function () {
            return this.competition;
        }
        this.addBettingPlaces = function (bettingPlace) {
            this.listOfBettingPlaces.push(bettingPlace)
        }



        this.displayAll = function () {
            var display = "";
            var count = 0;
            var output = "";
            var zemlja = 0;
            for (var i = 0; i < this.listOfBettingPlaces.length; i++) {
                var x = this.listOfBettingPlaces[i];
                count += x.listOfPlayers.length;
                display += x.getData() + "\n\t";

                for (var  j = 0; j < x.listOfPlayers.length; j++) {
                    var y = x.listOfPlayers[j];
                    display += "\t\t" + y.getData() + "\n\t";
                }
            }


            var firstDisplay = this.competition + ", " + this.listOfBettingPlaces.length + " betting places, " + count + " bets";
            return firstDisplay + "\n\t" + display + "\nThere are 1 bets from Serbia";
        }
    }

    function cretePlayer(country, betAmount, person) {
        return new Player(country, betAmount, person)
    };

    function createBettingPlace(address) {
        return new BettingPlace(address);
    }

    var person1 = new Person("Sava", "Jankovic", "2 feb 1992");
    var person2 = new Person("Ivana ", "Zivanovic", "4 mart 1990");
    var person3 = new Person("Ilija ", "Djukic", "7 jul 1992");
    var person4 = new Person("Darko ", "Lukovic", "2 dec 1992");

    var address1 = new Address("Nemanjina", 4, "11000", "Beograd", "Srbija");
    var address2 = new Address("Milosa Obilica", 14, "36210", "Vrnjacka Banja", "Srbija");

    var player1 = cretePlayer("nemacka", 750, person1);
    var player2 = cretePlayer("francuska", 1000, person2);
    var player3 = cretePlayer("italija", 2000, person3);
    var player4 = cretePlayer("srbija", 1250, person4);

    var bettingPlace1 = createBettingPlace(address1);
    var bettingPlace2 = createBettingPlace(address2);

    var bettingHouse1 = new BettingHouse("Basketball World Cup");


    bettingPlace1.addPlayers(player1);
    bettingPlace1.addPlayers(player2);
    bettingPlace2.addPlayers(player3);
    bettingPlace2.addPlayers(player4);

    bettingHouse1.addBettingPlaces(bettingPlace1);
    bettingHouse1.addBettingPlaces(bettingPlace2);

    console.log(bettingHouse1.displayAll());

})();