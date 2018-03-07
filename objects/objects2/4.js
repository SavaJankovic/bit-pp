(function () {

    const continents = {
        asia: "AS",
        europe: "EU",
        africa: "AF",
        northamerica: "NA",
        southamerica: "SA",
        australia: "AU"
    }

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

    }

    Person.prototype.getData = function () {
        let today = new Date();

        let personAge = today.getFullYear() - this.dateOfBirth.getFullYear();

        return this.name + " " + this.surname + ", " + personAge + " years";
    }


    function Player(country, betAmount, person) {
        this.betAmount = betAmount;
        this.country = country.slice(0, 2).toUpperCase();
        this.person = person;
    }


    Player.prototype.getData = function () {
        return this.country + ", " + this.betAmount.toFixed(2) + " eur" + ", " + this.person.getData();
    }


    function Address(street, number, postalCode, city, country) {
        this.country = country.slice(0, 2).toUpperCase();
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.number = number;
        let codeCity = this.postalCode + " " + this.city;
    }

    Address.prototype.getData = function () {
        return this.streetAndNum + ", " + codeCity + ", " + this.country;

    }


    function BettingPlace(address) {
        this.address = address;
        this.listOfPlayers = [];
    }



    BettingPlace.prototype.addPlayers = function (player) {
        this.listOfPlayers.push(player);
    }

    BettingPlace.prototype.sumAllBets = function () {
        let counter = 0;
        for (let i = 0; i < this.listOfPlayers.length; i++) {
            let x = this.listOfPlayers[i];
            counter += x.betAmount;
        }

        return counter;
    }

    BettingPlace.prototype.getData = function () {
        return this.address.street + ", " + this.address.postalCode + " " + this.address.city + ", sum of all bets: " + this.sumAllBets() + "eur";
    }



    function BettingHouse(competition) {
        this.competition = competition;
        this.listOfBettingPlaces = [];

    }

    BettingHouse.prototype.nameOfCompetition = function () {
        return this.competition;
    }


    BettingHouse.prototype.addBettingPlaces = function (bettingPlace) {
        this.listOfBettingPlaces.push(bettingPlace)
    }


    BettingHouse.prototype.displayAll = function () {
        let display = "";
        let count = 0;
        let output = "";
        let zemlja = 0;
        for (let i = 0; i < this.listOfBettingPlaces.length; i++) {
            const x = this.listOfBettingPlaces[i];
            count += x.listOfPlayers.length;
            display += x.getData() + "\n\t";

            for (let j = 0; j < x.listOfPlayers.length; j++) {
                const y = x.listOfPlayers[j];
                // display +="\t\t" + y.getData() + "\n\t";
                display += `    ${y.getData()}
    `;
            }
        }

        // let firstDisplay = this.competition + ", " + this.listOfBettingPlaces.length + " betting places, " + count + " bets";
        let firstDisplay = `${this.competition}, ${this.listOfBettingPlaces.length} betting places, ${count} bets`;
        // return firstDisplay + "\n\t" + display + "\nThere are 1 bets from Serbia";
        let finalResult =
            `${firstDisplay}
    ${display}
    There are 1 bets from Serbia`;

        return finalResult;
    }



    function cretePlayer(country, betAmount, person) {
        return new Player(country, betAmount, person)
    }

    function createBettingPlace(address) {
        return new BettingPlace(address);
    }

    const person1 = new Person("Sava", "Jankovic", "2 feb 1992");
    const person2 = new Person("Ivana ", "Zivanovic", "4 mart 1990");
    const person3 = new Person("Ilija ", "Djukic", "7 jul 1992");
    const person4 = new Person("Darko ", "Lukovic", "2 dec 1992");

    const address1 = new Address("Nemanjina", 4, "11000", "Beograd", "Srbija");
    const address2 = new Address("Milosa Obilica", 14, "36210", "Vrnjacka Banja", "Srbija");

    const player1 = cretePlayer("nemacka", 750, person1);
    const player2 = cretePlayer("francuska", 1000, person2);
    const player3 = cretePlayer("italija", 2000, person3);
    const player4 = cretePlayer("srbija", 1250, person4);

    const bettingPlace1 = createBettingPlace(address1);
    const bettingPlace2 = createBettingPlace(address2);

    const bettingHouse1 = new BettingHouse("Basketball World Cup");


    bettingPlace1.addPlayers(player1);
    bettingPlace1.addPlayers(player2);
    bettingPlace2.addPlayers(player3);
    bettingPlace2.addPlayers(player4);

    bettingHouse1.addBettingPlaces(bettingPlace1);
    bettingHouse1.addBettingPlaces(bettingPlace2);

    console.log(bettingHouse1.displayAll());
})();