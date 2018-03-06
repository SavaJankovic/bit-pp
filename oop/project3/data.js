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