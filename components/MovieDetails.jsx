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
		var posterUrl = this.state.details.Poster && this.state.details.Poster !== 'N/A' ? this.state.details.Poster : 'http://placehold.it/206x309'
		var posterElement = <a href={'http://www.imdb.com/title/' + this.state.details.imdbID} target="_blank"><img src={posterUrl}/></a>
		var plot = this.state.details.Plot ? (<div className="movie-details-plot">{this.state.details.Plot}</div>) : ''

		return (
			<div className="movie-card">
				<div className="img-container">{posterElement}</div>
				<div className="movie-details-container">
					<div className="movie-details-title">{movie.title} ({movie.release_year})</div>
					{plot}
					<div className="movie-details-director-container">Director: <div className="movie-details-director">{movie.director}</div></div>
				</div>
			</div>
        )
	}

})

module.exports = MovieDetails