var dataModule = (function () {

    var data = {
        movieList: [],
        programList: []
    };

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = parseInt(length);
    }


    function addMovieToList(dataMovie) {
        var movie = new Movie(dataMovie.titleMovie, dataMovie.genreMovie, dataMovie.lengthMovie);
        data.movieList.push(movie);
        return movie;
    }

    function calculateMovieLength() {
        var duration = data.movieList;
        var count = 0;

        duration.forEach(function (element) {
            count += element.length;
        });

        return count;
    }


    Movie.prototype.getData = function () {
        return "Title: " + this.title + ", Genre: " + this.genre + ", Duration: " + this.length + " min";

    };

    function Program(date) {
        this.date = new Date(date);
        this.movies = [];
        this.numMovies = 0;
        this.programDuration = 0;
    }

    Program.prototype.getData = function () {
        var datum = this.date.getDate() + "/" + (this.date.getMonth() + 1) + "/" + this.date.getFullYear();
        var totalDuration = 0;

        this.movies.forEach(function (elem) {
            totalDuration += elem.length;
        })


        return datum + ", movies length : " + this.movies.length + ", duration of movies:  " + totalDuration + " min";
    }

    // Program.prototype.getNumOfMovies = function () {
    //     return this.movies.length;
    // }

    // Program.prototype.getMoviesDuration = function () {
    //     var totalDuration = 0;
    //     this.movies.forEach(function (elem) {
    //         totalDuration += elem.length;
    //     })
    //     return totalDuration;
    // }

    function addProgramToList(programD) {
        var program = new Program(programD.dateP);
        data.programList.push(program);
        return program;

    }



    return {
        addM: addMovieToList,
        calcDuration: calculateMovieLength,
        addP: addProgramToList
    }

})();

var uiModule = (function () {

    function getFormData() {
        var title = document.querySelector("#titleMovie").value;
        var length = document.querySelector("#lengthMovie").value;
        var select = document.querySelector("#genreMovie");
        var genre = select.options[select.selectedIndex].text;




        return {
            titleMovie: title,
            lengthMovie: length,
            genreMovie: genre
        }



    };


    function showMovieData(movie) {
        var divMovie = document.querySelector("#newMovie");
        var ulMovie = document.createElement("ul");
        divMovie.appendChild(ulMovie);
        var liMovie = document.createElement("li");
        var textMovie = document.createTextNode(movie.getData());
        liMovie.appendChild(textMovie);
        ulMovie.appendChild(liMovie);

        // DA LI TREBA OVAKO
        var addingMovie = document.querySelector("#finalMovie");
        var optionMovie = document.createElement("option");
        // optionMovie.value = data.movieList.length - 1;
        addingMovie.appendChild(optionMovie);

        var nameOfMovie = document.createTextNode(movie.getData());

        optionMovie.appendChild(nameOfMovie);

    }


    function showMovieDuration(calcDur) {
        var divMovie = document.querySelector("#newDuration");
        var ulMovie = document.createElement("ul");
        divMovie.appendChild(ulMovie);
        var liMovie = document.createElement("li");
        var textMovie = document.createTextNode("Movies length: " + calcDur + " min.");
        liMovie.appendChild(textMovie);
        ulMovie.appendChild(liMovie);


    }


    function getProgramData() {
        var dateProgram = document.querySelector("#dateProgram").value;

        return {
            dateP: dateProgram
        }

    }

    function showProgramData(proDate) {
        var divMovie = document.querySelector("#newProgram");
        var ulMovie = document.createElement("ul");
        divMovie.appendChild(ulMovie);
        var liMovie = document.createElement("li");
        var textMovie = document.createTextNode(proDate.getData());
        liMovie.appendChild(textMovie);
        ulMovie.appendChild(liMovie);


        //   DA LI TREBA OVAKO?

        var addingProgram = document.querySelector("#finalProgram");
        var optionProgram = document.createElement("option");
        // optionProgram.value = listOfMovie.length - 1;
        addingProgram.appendChild(optionProgram);
        var dateOfProgram1 = document.createTextNode(proDate.getData());
        var dateProgram = document.createTextNode(dateOfProgram1);

        optionProgram.appendChild(dateOfProgram1);
    }


    return {
        movieDataForm: getFormData,
        showMovie: showMovieData,
        showDuration: showMovieDuration,
        datum: getProgramData,
        showProgram: showProgramData
    }


})();


var contrModule = (function (dModule, uiModule) {

    document.querySelector(".createMovie").addEventListener("click", function () {

        var dataMovie = uiModule.movieDataForm();
        var movie = dModule.addM(dataMovie);

        var calcDur = dataModule.calcDuration();
        uiModule.showDuration(calcDur);

        uiModule.showMovie(movie);




    });

    document.querySelector(".createProgram").addEventListener("click", function () {
        var programD = uiModule.datum();
        var proDate = dModule.addP(programD);
        uiModule.showProgram(proDate);

        console.log(proDate);
    });




})(dataModule, uiModule);