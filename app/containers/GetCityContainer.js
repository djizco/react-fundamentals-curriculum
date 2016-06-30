var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity.js');
var openWeatherHelpers = require('../utils/openWeatherHelpers.js');

var GetCityContainer = React.createClass({
  propTypes: {
    direction: PropTypes.string
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getDefaultProps: function(){
    return {
      direction: 'column'
    };
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

    // Go to Forecast Container
    this.context.router.push({
      pathname: `/forecast/${this.state.city}`
    })

    // openWeatherHelpers.getCurrentWeather(this.state.city)
    //   .then(function(data){
    //     console.log('data:', data.body);
    //   })

    // openWeatherHelpers.getForecast(this.state.city)
    //   .then(function(data){
    //     console.log('data 5-day:', data.body);
    //   })

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
