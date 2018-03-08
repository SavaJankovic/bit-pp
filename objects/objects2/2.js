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

    class Genre {
        constructor(name) {
            this.name = name;
        }


        getData() {
            let firstLetter = this.name.charAt(0);
            let lastLetter = this.name.charAt(this.name.length - 1);
            let firstLast = `${firstLetter}${lastLetter}`;

            return firstLast.toUpperCase();

        }
    }



    class Movie {
        constructor(title, length, genre) {
            this.title = title;
            this.length = length;
            this.genre = genre;
        }

        getData() {
            return `${this.title}, ${this.length} min, ${this.genre.getData()}`;
        }
    }



    class Program {
        constructor(date) {
            this.date = new Date(date);
            this.listMovies = [];

        };
        getNumOfMovies() {
            return this.listMovies.length;
        }


        getData() {
            let dateProgram = `${this.date.getDate()} - ${(this.date.getMonth() + 1)} - ${this.date.getFullYear()}`;
            let programLength = 0;
            let movieList = [];
            this.listMovies.forEach(function (movie) {
                programLength += movie.length;
                movieList += "\n\t\t" + movie.getData();
            });

            return `${dateProgram }, program length of ${this.getNumOfMovies()} movies is ${programLength} min ${movieList}`;
        }

        addMovie(movie) {
            this.listMovies.push(movie);
        }

    }




    class Festival {
        constructor(name) {
            this.name = name;
            this.listOfPrograms = [];
            this.numOfMoviesAll = 0;
        }
        getData() {
            let nameFestival = "";
            let numOFMovies = 0;
            this.listOfPrograms.forEach(function (program) {
                nameFestival += "\n\t" + program.getData();
                numOFMovies += program.getNumOfMovies();
            });

            return `${this.name} festival has ${numOFMovies} movies titles ${nameFestival}`;

        }

        addProgram(program) {
            this.listOfPrograms.push(program);
        }

    }





    const action = new Genre("action");
    const triller = new Genre("triller");
    const scifi = new Genre("science fiction");
    const drama = new Genre("drama");

    function createMovie(movieTitle, movieLength, genre) {
        return new Movie(movieTitle, movieLength, genre);
    }

    const movie1 = new Movie("Gladiator", 123, action);
    const movie2 = new Movie("Mystic River", 103, triller);
    const movie3 = new Movie("Pulp Fiction", 113, triller);
    const movie4 = new Movie("Matrix", 143, scifi);
    const movie5 = createMovie("Reservoir Dogs", 123, drama);

    function createProgram(date) {
        return new Program(date);
    }
    const program1 = new Program("20 Apr 2018");
    const program2 = createProgram("10 Jul 2018");


    const fest1 = new Festival("Palme d'Or");

    program1.addMovie(movie1);
    program1.addMovie(movie2);
    program2.addMovie(movie3);
    program2.addMovie(movie4);
    program2.addMovie(movie5);

    fest1.addProgram(program1);
    fest1.addProgram(program2);

    console.log(fest1.getData());

})();