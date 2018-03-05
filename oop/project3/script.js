var dataModule = (function () {

    var data = {
        movieList: []
    };

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;
    }


    function addMovieToList(dataMovie) {
        var movie = new Movie(dataMovie.titleMovie, dataMovie.genreMovie, dataMovie.lengthMovie);
        data.movieList.push(movie);
        return movie;
    }


    Movie.prototype.getData = function () {
        return "Title: " + this.title + " Genre: " + this.genre + " Duration: " + this.length + " min";

    };

    return {
        addM: addMovieToList
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
    }

    return {
        movieDataForm: getFormData,
        showMovie: showMovieData
    }


})();


var contrModule = (function (dModule, uiModule) {

    document.querySelector(".createMovie").addEventListener("click", function () {

        var dataMovie = uiModule.movieDataForm();
        var movie = dModule.addM(dataMovie);



        uiModule.showMovie(movie);


        console.log(dataMovie);
    });




})(dataModule, uiModule);