'use strict'

var React = require('react')

var MovieDetails = require('./MovieDetails')

var MoviesActions = require('../actions/movies')
var MovieFilters = require('./MovieFilters')

var MoviePosters = React.createClass({

	displayName: 'MoviePosters',

	getInitialState: function() {
		return {
			filters: false
		}
	},

	componentDidMount: function() {
		setTimeout(function() {
			$('#movie-posters-container').masonry({
	  			// options
	  			itemSelector: '.movie-card',
	  			columnWidth: 190,
	  			gutter: 25,
	  			isFitWidth: true
			});
			$('#movie-posters-container').css('visibility', 'visible')
		}, 5000);
	},

	updateFilters: function(filters) {
		this.setState({
			filters: filters
		})

		setTimeout(function() {
			$('#movie-posters-container').masonry('reloadItems');
			$('#movie-posters-container').masonry({
	  			// options
	  			itemSelector: '.movie-card',
	  			columnWidth: 190,
	  			gutter: 25,
	  			isFitWidth: true
			});
		}, 250);
	},

	render: function() {
		var self = this
		var movieList = this.props.moviesStore.movies.slice(0)
		var movies = movieList.map(function(movie) {
			return (<MovieDetails movie={movie} filters={self.state.filters}/>)
		})
		return (
			<div>
				<MovieFilters updateFilters={this.updateFilters}/>
				<div id="movie-posters-container">{movies}</div>
			</div>
        )
	}

})

module.exports = MoviePosters