'use strict'

var React = require('react')

var self = null
var slider = null

var MovieFilters = React.createClass({

	displayName: 'MovieFilters',

	componentDidMount: function() {
		$("[name='my-checkbox']").bootstrapSwitch({
			onSwitchChange: this.handleChange,
			size: 'mini'
		})
		slider = $('#ex2').slider().on('slide', this.handleChange)

		self = this
	},

	handleChange: _.debounce(function() {
		console.log("chnaged")
		console.log(self.refs.search)
		var search = React.findDOMNode(self.refs.search).value
		var showAllMovies = $("[name='my-checkbox']").bootstrapSwitch('state')
		var years = slider.slider('getValue')
		console.log("search", search, showAllMovies, years)
		self.props.updateFilters({
			search: search,
			showAllMovies: showAllMovies,
			years: years
		})
	}.bind(this), 500),


	render: function() {
		return (
			<div id="movie-filters">
				<div className="control-group">
				  <label className="control-label">Search</label>
				  <div className="controls">
				    <input ref="search" type="text" placeholder="e.g. san francisco" className=" form-control" onKeyUp={this.handleChange} />
				  </div>
				</div>

				<div className="control-group">
				  <label className="control-label">Show Movies Without Images</label>
				  <div className="controls">
				    <input type="checkbox" name="my-checkbox" checked onChange={this.handleChange} />
				  </div>
				</div>

				<div className="control-group">
				  <label className="control-label">Filter by Year</label>
				  <div className="controls">
				    <input id="ex2" type="text" data-slider-min="1900" data-slider-max="2015" data-slider-step="1" data-slider-value="[1900,2015]" onChange={this.handleChange} />
				  </div>
				</div>
			</div>

        )
	}

})

module.exports = MovieFilters