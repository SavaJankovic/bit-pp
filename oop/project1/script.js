let listOfMovie = [];
let listOfProgram = [];

function Movie(name, genre, length) {
    this.name = name;
    this.genre = genre;
    this.length = parseInt(length);
}

Movie.prototype.getData = function () {
    return `${this.name}, ${this.genre}, ${this.length} min`;
}

function Program(date = new Date()) {
    this.date = new Date(date);
    this.movies = [];
    this.numMovies = 0;
    this.programDuration = 0;
}

Program.prototype.getData = function () {

    let datum = `${this.date.getDate()} / ${(this.date.getMonth() + 1)} / ${this.date.getFullYear()}`;

    // return datum + ", " + this.numMovies + " num of movies, " + this.programDuration + " duration length";
    return datum;
}

Program.prototype.getNumOfMovies = function () {
    return this.movies.length;
}

Program.prototype.getMoviesDuration = function () {
    let totalDuration = 0;
    this.movies.forEach(function (movie) {
        totalDuration += movie.length;
    })
    return totalDuration;
}


let divMovie = document.querySelector("#newMovie");
let ulMovie = document.createElement("ul");
divMovie.appendChild(ulMovie);

function createMovie() {
    let title = document.querySelector("#titleMovie").value;
    let length = document.querySelector("#lengthMovie").value;
    let select = document.querySelector("#genreMovie");
    let genre = select.options[select.selectedIndex].text;

    let movie = new Movie(title, genre, length);


    // if (title === "Sava" || length === "999" || genre === "hardcore") {
    //     if (title === "Sava") {
    //         errorMsg = "Please enter movie title!";
    //         return;
    //     } else if (length === "999") {
    //         errorMsg = "Please enter movie length!";
    //         return;
    //     } else if (genre === "hardcore") {
    //         errorMsg = "Please enter movie genre!";
    //         return;
    //     }
    //     document.querySelector(".error").textContent = errorMsg;
    // }

    let liMovie = document.createElement("li");
    let textMovie = document.createTextNode(movie.getData());
    liMovie.appendChild(textMovie);
    ulMovie.appendChild(liMovie);

    listOfMovie.push(movie);



    let addingMovie = document.querySelector("#finalMovie");
    let optionMovie = document.createElement("option");
    optionMovie.value = listOfMovie.length - 1;
    addingMovie.appendChild(optionMovie);

    let nameOfMovie = document.createTextNode(movie.getData());

    optionMovie.appendChild(nameOfMovie);

}

document.querySelector(".createMovie").addEventListener("click", function () {

    createMovie();

});


const divProgram = document.querySelector("#newProgram");
let ulProgram = document.createElement("ul");

divProgram.appendChild(ulProgram);

function createProgram() {
    var dateProgram = document.querySelector("#dateProgram").value;

    var program1 = new Program(dateProgram);

    var liProgram = document.createElement("li");
    var dateOfProgram = document.createTextNode(program1.getData());

    liProgram.appendChild(dateOfProgram);
    ulProgram.appendChild(liProgram);

    listOfProgram.push(program1);

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




function addMovieToProgram() {
    var selectedIndex = document.querySelector("#finalMovie").value;
    var selectMovie = listOfMovie[selectedIndex];


    var selectedIndexProgram = document.querySelector("#finalProgram").value;
    var selectProgram = listOfProgram[selectedIndexProgram];

    selectProgram.movies.push(selectMovie);


    var addMP = document.querySelector("#final");
    var addUl = document.createElement("ul");

    addMP.appendChild(addUl);

    var addList = document.createElement("li");

    addUl.appendChild(addList);
    addList.textContent = selectProgram.getData() + ",  " + selectProgram.getNumOfMovies() + " num of movies, " + selectProgram.getMoviesDuration() + " duration of movies.";

}
document.querySelector(".finalBtn").addEventListener("click", function () {
    addMovieToProgram();
});