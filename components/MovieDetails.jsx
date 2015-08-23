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
		var posterUrl = this.state.details.Poster || ''
		var posterElement = posterUrl && posterUrl !== 'N/A' ? <img src={posterUrl}/> : ''

		return (
			<div>
				{movie.title}
				{posterElement}
			</div>
        )
	}

})

module.exports = MovieDetails