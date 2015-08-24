'use strict'

var React = require('react')

var MovieDetails = require('./MovieDetails')

var MoviesActions = require('../actions/movies')

var MoviePosters = React.createClass({

	displayName: 'MoviePosters',

	render: function() {
		var self = this
		var movieList = this.props.moviesStore.movies.slice(0, 20)
		var movies = movieList.map(function(movie) {
			return (<MovieDetails movie={movie}/>)
		})
		return (
			<div id="movie-posters-container">{movies}</div>
        )
	}

})

module.exports = MoviePosters