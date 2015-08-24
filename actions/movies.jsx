'use strict'

var alt = require('../alt')
var jsonp = require('jsonp')

var unique = function(arr) {
  var copyOfArr = arr.slice(0)
  var len = copyOfArr.length
  var i = -1

  while (i++ < len) {
    var j = i + 1

    for (; j < copyOfArr.length; ++j) {
      if (copyOfArr[i].title.toLowerCase().trim() === copyOfArr[j].title.toLowerCase().trim()) {
        copyOfArr.splice(j--, 1)
      }
    }
  }

  return copyOfArr
}

class MoviesActions {
  constructor () {
    this.generateActions('moviesLoad', 'movieDetailsLoad')
  }

  fetchMovies(id) {
  	var self = this

    jsonp('https://data.sfgov.org/resource/wwmu-gmzc.json', {
    	param: '$jsonp'
    }, function(err, data) {
      var uniqueMovies = unique(data)
    	self.actions.moviesLoad(uniqueMovies)
    })
  }

}

module.exports = alt.createActions(MoviesActions)
