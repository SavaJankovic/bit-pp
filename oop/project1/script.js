var listOfMovie = [];
var movie;

function Movie(name, genre, length) {
    this.name = name;
    this.genre = genre;
    this.length = parseInt(length);
}

Movie.prototype.getData = function () {
    return this.name + ", " + this.genre + ", " + this.length + "  min";
}

function Program(date) {
    this.date = new Date(date);
    this.movies = [];
    this.numMovies = 0;
    this.programDuration = 0;
}

Program.prototype.getData = function () {

    var datum = this.date.getDate() + "-" + (this.date.getMonth() + 1) + "-" + this.date.getFullYear() + " year";

    return datum + ", " + this.numMovies + " num of movies, " + this.duration + " duration length";
}



var divMovie = document.querySelector("#newMovie");
var ulMovie = document.createElement("ul");
divMovie.appendChild(ulMovie);

function createMovie() {
    var title = document.querySelector("#titleMovie").value;
    var length = document.querySelector("#lengthMovie").value;
    var select = document.querySelector("#genreMovie");
    var genre = select.options[select.selectedIndex].text;

    movie = new Movie(title, genre, length);

    var liMovie = document.createElement("li");
    var textMovie = document.createTextNode(movie.getData());
    liMovie.appendChild(textMovie);
    ulMovie.appendChild(liMovie);

    listOfMovie.push(movie);



    var addingMovie = document.querySelector("#finalMovie");
    var optionMovie = document.createElement("option");
    optionMovie.value = listOfMovie.length - 1;
    addingMovie.appendChild(optionMovie);

    var nameOfMovie = document.createTextNode(movie.getData());

    optionMovie.appendChild(nameOfMovie);

}

document.querySelector(".createMovie").addEventListener("click", function () {

    createMovie();

});


var divProgram = document.querySelector("#newProgram");
var ulProgram = document.createElement("ul");

divProgram.appendChild(ulProgram);

function createProgram() {
    var dateProgram = document.querySelector("#dateProgram").value;

    var program1 = new Program(dateProgram);

    var liProgram = document.createElement("li");
    var dateOfProgram = document.createTextNode(program1.getData());

    liProgram.appendChild(dateOfProgram);
    ulProgram.appendChild(liProgram);


    var dateOfProgram1 = document.createTextNode(program1.getData());
    var addingProgram = document.querySelector("#finalProgram");
    var optionProgram = document.createElement("option");
    optionProgram.value = listOfMovie.length - 1;
    addingProgram.appendChild(optionProgram);

    var dateProgram = document.createTextNode(dateOfProgram1);

    optionProgram.appendChild(dateOfProgram1);

}

document.querySelector(".createProgram").addEventListener("click", function () {
    createProgram();
});