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
        return {
            movie: movie,
            index: data.movieList.length - 1
        };
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

    Program.prototype.addMovie = function (movie) {
        this.movies.push(movie);

        return {
            movie: movie,
            index: this.movies.length - 1
        }
    }


    function addProgramToList(programD) {
        var program = new Program(programD.dateP);
        data.programList.push(program);
        return {
            program: program,
            index: data.programList.length - 1
        };

    }

    var findById = {
        program: function (index) {
            return data.programList[index];
        },

        movie: function (index) {
            return data.movieList[index];
        }
    }

    return {
        addMovie: addMovieToList,
        calcDuration: calculateMovieLength,
        addProgram: addProgramToList,
        findById: findById
    }

})();

var uiModule = (function () {

    function getFormData() {
        var movieTitle = document.querySelector("#titleMovie");
        var movieLength = document.querySelector("#lengthMovie");
        var movieGenre = document.querySelector("#genreMovie");

        var title = movieTitle.value;
        var length = movieLength.value;
        var genre = movieGenre.options[movieGenre.selectedIndex].text;

        return {
            titleMovie: title,
            lengthMovie: length,
            genreMovie: genre
        }

    };

    function showMovieData(movieObj) {
        var movie = movieObj.movie;
        var index = movieObj.index;

        var divMovie = document.querySelector("#newMovie");
        var ulMovie = document.querySelector("#ulMovie");
        var liMovie = document.querySelector("#liMovie");

        liMovie.textContent = movie.getData();

        var addingMovie = document.querySelector("#finalMovie");
        var optionMovie = document.createElement("option");
        optionMovie.value = index;
        addingMovie.appendChild(optionMovie);

        var nameOfMovie = document.createTextNode(movie.getData());

        optionMovie.appendChild(nameOfMovie);

    }


    function clearInput() {
        var movieTitle = document.querySelector("#titleMovie");
        var movieLength = document.querySelector("#lengthMovie");
        var movieGenre = document.querySelector("#genreMovie");

        movieTitle.value = "";
        movieLength.value = "";
        movieGenre.selectedIndex = 0;

    }

    function showMovieDuration(calcDur) {
        var divMovie = document.querySelector("#newDuration");
        var ulMovie = document.querySelector("#movieDuration");
        var liMovie = document.querySelector("#movieDuration1");
        liMovie.textContent = "Movies length: " + calcDur + " min.";

    }


    function getProgramData() {
        var dateProgram = document.querySelector("#dateProgram").value;

        return {
            dateP: dateProgram
        }

    }

    function showProgramData(programObj) {
        var program = programObj.program;
        var index = programObj.index;
        var divMovie = document.querySelector("#newProgram");
        var ulMovie = document.querySelector("#ulProgram");
        var liMovie = document.querySelector("#liProgram");

        liMovie.textContent = program.getData();



        var addingProgram = document.querySelector("#finalProgram");
        var optionProgram = document.createElement("option");
        optionProgram.value = index;
        addingProgram.appendChild(optionProgram);
        var dateOfProgram1 = document.createTextNode(program.getData());
        var dateProgram = document.createTextNode(dateOfProgram1);

        optionProgram.appendChild(dateOfProgram1);
    }



    function getValueMovie() {
        var valMovie = document.querySelector("#finalMovie");
        return valMovie.selectedIndex - 1;

    }

    function getProgramValue() {
        var programValue = document.querySelector("#finalProgram");
        return programValue.selectedIndex - 1;
    }

    return {
        movieDataForm: getFormData,
        showMovie: showMovieData,
        showDuration: showMovieDuration,
        datum: getProgramData,
        showProgram: showProgramData,
        clInput: clearInput,
        valueInputMovie: getValueMovie,
        getProgramValue: getProgramValue
    }


})();


var contrModule = (function (dModule, uiModule) {

    document.querySelector(".createMovie").addEventListener("click", function () {

        var dataMovie = uiModule.movieDataForm();
        var movieObj = dModule.addMovie(dataMovie);

        var calcDur = dataModule.calcDuration();
        uiModule.showDuration(calcDur);

        uiModule.showMovie(movieObj);
        uiModule.clInput();

    });

    document.querySelector(".createProgram").addEventListener("click", function () {
        var programD = uiModule.datum();
        var programObj = dModule.addProgram(programD);
        uiModule.showProgram(programObj);

    });

    document.querySelector(".finalBtn").addEventListener("click", function () {
        var selectedMovie = uiModule.valueInputMovie();
        var selectedProgram = uiModule.getProgramValue();
        var movie = dataModule.findById.movie(selectedMovie);
        var program = dataModule.findById.program(selectedProgram);
        program.addMovie(movie);

        console.log(program);

    });




})(dataModule, uiModule);