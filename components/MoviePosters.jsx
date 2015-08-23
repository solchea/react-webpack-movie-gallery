'use strict'

var React = require('react')

var MovieDetails = require('./MovieDetails')

var MoviesActions = require('../actions/movies')

var MoviePosters = React.createClass({

	displayName: 'MoviePosters',

	componentDidMount: function() {
	},

	render: function() {
		//console.log(this.props)
		var ctr = 0
		var self = this
		var processedMovies = {}
		var movieList = this.props.moviesStore.movies.splice(0, 10)
		var movies = movieList.map(function(movie) {
			return (<MovieDetails movie={movie} />)
		})
		return (
			<div>{movies}</div>
        )
	}

})

module.exports = MoviePosters