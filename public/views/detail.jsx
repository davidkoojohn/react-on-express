'use strict';

var React = require('react');

module.exports = React.createClass({
  displayName: 'Detail',

  render: function render() {
    var movieId = this.props.params.id;
    var movie = this.props.movies.filter(function(_movie) {
      return _movie.id === movieId;
    })[0];

    return (
      <div id='detail'>
        <h1>{movie.title}</h1>
        <img src={movie.image} alt={movie.title} />
        <a href={movie.url} target='_blank'>more info</a>
      </div>
    );
  }
});
