'use strict'

var React = require('react')

var jsonp = require('jsonp')

var MovieDetails = React.createClass({

	displayName: 'MovieDetails',

	getInitialState: function() {
		return {
			details: {}
		}
	},

	componentDidMount: function() {
		var title = this.props.movie.title
		var self = this
		jsonp('http://www.omdbapi.com/?type=movie&t=' + title, {
			param: 'callback'
		}, function(err, data) {
			self.setState({
				details: data
			})
		})
	},

	render: function() {
		var movie = this.props.movie
		var posterExists = this.state.details.Poster && this.state.details.Poster !== 'N/A'
		var posterUrl = posterExists ? 'http://sfmovies.buildhack.com/proxy.php?url=' + this.state.details.Poster + '&mimeType=image/jpeg' : 'http://placehold.it/206x309'
		var posterElement = <a href={'http://www.imdb.com/title/' + this.state.details.imdbID} target="_blank"><img src={posterUrl}/></a>
		var plot = this.state.details.Plot ? (<div className="movie-details-plot">{this.state.details.Plot}</div>) : ''
		var year = movie.release_year
		var title = movie.title

		var filters = this.props.filters
		var search = filters && filters.search.toLowerCase()

		var ret = false

		if (!filters ||
				(year >= filters.years[0] && year <= filters.years[1]) &&
				(filters.showAllMovies || posterExists) &&
				(search === '' || title.toLowerCase().indexOf(search) !== -1)
			) {
			ret = (
				<div className="movie-card">
					<div className="img-container">{posterElement}</div>
					<div className="movie-details-container">
						<div className="movie-details-title">{title} ({year})</div>
						{plot}
						<div className="movie-details-director-container">Director: <div className="movie-details-director">{movie.director}</div></div>
					</div>
				</div>
        	)
		}

		return ret
	}

})

module.exports = MovieDetails