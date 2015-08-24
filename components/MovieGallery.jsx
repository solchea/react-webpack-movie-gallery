'use strict'

var React = require('react')

var AltContainer = require('alt/components/AltContainer')

var MoviePosters = require('./MoviePosters')

var MoviesStore = require('../stores/movies')
var MoviesActions = require('../actions/movies')

var styles = require("./MovieGallery.less");

var MovieGallery = React.createClass({

	displayName: 'MovieGallery',

	componentDidMount: function() {
		MoviesActions.fetchMovies()
	},

	render: function() {
		return (
			<div className="row">
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