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
        uiModule.showFinalProgramList(program);

    });



})(dataModule, uiModule);