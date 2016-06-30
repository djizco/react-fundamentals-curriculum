var React = require('react');
var Forecast = require('../components/Forecast.js');
var openWeatherHelpers = require('../utils/openWeatherHelpers.js');

var ForecastContainer = React.createClass({
  getInitialState: function(){
    return {
      isLoading: true,
      forecastData: {}
    };
  },
  componentWillMount: function(){
    openWeatherHelpers.getForecast(this.props.routeParams.city)
      .then(function(data){
        console.log("data:", data.body);
        this.setState({
          isLoading: false,
          forecastData: data.body
        });
      }.bind(this));
  },
  render: function(){
    return (
      <Forecast 
        isLoading={this.state.isLoading}
        forecastData={this.state.forecastData} />
    );
  }
});

module.exports = ForecastContainer;
