/* In your IDE of choice, create a new JavaScript file named festival.js and make it so that all code written in the file follows strict mode.

Create an anonymous immediately-invoking function that will hold the main execution of all program calls. Writing a simple command console.log(“Hi”) inside this function and running code should output “Hi“ in the console.

Create constructor functions with properties representing the following:
Genre - name
Movie - title, genre (instance of Genre), length
Program - date, list of movies (initially empty) and total number of movies 
Festival - name, list of programs (initially empty), and number of movies in all programs

Add method getData to Genre which returns formatted string as first and last letter of genre name
"Action" -> AN
"Drama" -> DA
"Comedy" -> CY

Add getData method to Movie. It should return a formatted string consisting of the movie title, length and genre acronym.
The Shawshank Redemption, 130min, AN

Add addMovie method to Program. It should receive a Movie and add the movie to the movie list of a given program. 

Add addProgram method to Festival. It should receive a Program and add the program to the list of the given festival’s programs. 

Add getData method to Program. It should return a formatted string of all data related to the program. The string should contain date, program length (calculated from length of all movies in a list) and data about movies in a list (see the example below). To display movie data, use Movie’s getData method.

Date, program length from all movies
     First movie title, length and genre
     Second movie title, length and genre
     Third movie title, length and genre
     Fourth movie name and length and genre


Add method getData to Festival which return formatted string like festival name, number of movies in all programs and all programs listed. Use Programs getData method to list all programs. (example output is shown below)

Weekend festival has 4 movie titles
    28.10.2017, program duration 368min
        Spider-Man: Homecoming, 133min, AN
        War for the Planet of the Apes, 140min, DA
        The Dark Tower, 95min, WN
    29.10.2017, program duration 108min
        Deadpool, 108min, CY

Inside your immediately-invoking function, add createMovie function that receives a movie title, movie length and genre (as a string) as parameters and returns a created Movie.

Inside your immediately-invoking function, add createProgram function that receives a date and returns a created Program.

Start creating your movie festival.

In your main program function, create an instance of the Festival object. 

Create two instances of Program using createProgram function.

Create four instances of Movie object using createMovie function. Add all created movies to both programs using the addMovie method.

Add the created program instances to the created festival instance using festival’s addProgram method.

Display festival’s data using getData method.
 */


"use strict";
(function () {

    function Genre(name) {
        this.name = name;

        this.getData = function () {
            var firstLetter = this.name.charAt(0);
            var lastLetter = this.name.charAt(name.length - 1);
            var firstLast = firstLetter + lastLetter;

            return firstLast.toUpperCase();

        };
    };

    function Movie(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;
        this.getData = function () {
            return this.title + ", " + this.length + " min, " + this.genre.getData();
        }; 
    };

    function Program(date) {
        this.date = new Date(date);
        this.listMovies = [];

        this.getNumOfMovies = function () {
            return this.listMovies.length;
        };


        this.addMovie = function (movie) {
            this.listMovies.push(movie);
        };


        this.getData = function () {
            var dateProgram = this.date.getDate() + " - " + (this.date.getMonth() + 1) + " - " + this.date.getFullYear();
            var programLength = 0;
            var movieList = [];
            for (var i = 0; i < this.listMovies.length; i++) {
                programLength += this.listMovies[i].length;
                movieList += "\n\t\t" + this.listMovies[i].getData();
            }

            return dateProgram + ", " + "program length of " + this.getNumOfMovies() + " movies is " + programLength + " min" + movieList;
        };

    };

    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
        this.numOfMoviesAll = 0;

        this.addProgram = function (program) {
            this.listOfPrograms.push(program);
        };

        this.getData = function () {
            var nameFestival = "";

            for (var i = 0; i < this.listOfPrograms.length; i++) {
                nameFestival += "\n\t" + this.listOfPrograms[i].getData();
                this.numOfMoviesAll += this.listOfPrograms[i].getNumOfMovies();
            }

            return this.name + " festival has " + this.numOfMoviesAll + " moves titles" + nameFestival;


        };

    };

    var action = new Genre("action");
    var triller = new Genre("triller");
    var scifi = new Genre("science fiction");
    var drama = new Genre("drama");

    function createMovie(movieTitle, movieLength, genre) {
        return new Movie(movieTitle, movieLength, genre);
    }

    var movie1 = new Movie("Gladiator", 123, action);
    var movie2 = new Movie("Mystic River", 103, triller);
    var movie3 = new Movie("Pulp Fiction", 113, triller);
    var movie4 = new Movie("Matrix", 143, scifi);
    var movie5 = createMovie("Reservoir Dogs", 123, drama);

    function createProgram(date) {
        return new Program(date);
    }
    var program1 = new Program("20 Apr 2018");
    var program2 = createProgram("10 Jul 2018");


    var fest1 = new Festival("Palme d'Or");

    program1.addMovie(movie1);
    program1.addMovie(movie2);
    program2.addMovie(movie3);
    program2.addMovie(movie4);
    program2.addMovie(movie5);

    fest1.addProgram(program1);
    fest1.addProgram(program2);

    console.log(fest1.getData());

})();