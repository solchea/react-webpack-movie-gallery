'use strict'

var alt = require('../alt')
var moviesActions = require('../actions/movies')

class MoviesStore {
  constructor () {
    this.bindActions(moviesActions)

    this.movies = []
    this.movieDetails = {}
  }

  onMoviesLoad(movies) {
    this.movies = movies
  }

  onMovieDetailsLoad(resp) {
    console.log("resp", resp)
  	this.movieDetails[resp.title] = resp.data
  }

}

module.exports = alt.createStore(MoviesStore, 'MoviesStore')
