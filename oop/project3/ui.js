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

    function showFinalProgram(program) {
        var finalProgram = document.querySelector("#liFinal");

        finalProgram.textContent = program.getData();
    }

    return {
        movieDataForm: getFormData,
        showMovie: showMovieData,
        showDuration: showMovieDuration,
        datum: getProgramData,
        showProgram: showProgramData,
        clInput: clearInput,
        valueInputMovie: getValueMovie,
        getProgramValue: getProgramValue,
        showFinalProgramList: showFinalProgram
    }


})();