'use strict'

var React = require('react')

var AltContainer = require('alt/components/AltContainer')

var MoviePosters = require('./MoviePosters')

var MoviesStore = require('../stores/movies')
var MoviesActions = require('../actions/movies')

var MovieGallery = React.createClass({

	displayName: 'MovieGallery',

	componentDidMount: function() {
		MoviesActions.fetchMovies()
	},

	render: function() {
		return (
			<div>
				<AltContainer stores={
          			{
            			moviesStore: MoviesStore
          			}
        		}>
        			<MoviePosters />
        		</AltContainer>
			</div>
        )
	}

})

module.exports = MovieGallery