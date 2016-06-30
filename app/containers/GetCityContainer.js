var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity.js');

var GetCityContainer = React.createClass({
  getDefaultProps: function(){
    return {
      direction: 'column'
    };
  },
  propTypes: {
    direction: PropTypes.string
  },
  getInitialState: function(){
    return {
      city: ''
    };
  },
  handleUpdateCity: function(e){
    this.setState({
      city: e.target.value
    });
  },
  handleSubmitCity: function(e){
    e.preventDefault();

    console.log('city: ', this.state.city);
    // make api call
  },
  render: function(){
    return (
      <GetCity
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity}
        city={this.state.city}
        direction={this.props.direction} />
    );
  }
});

module.exports = GetCityContainer;
