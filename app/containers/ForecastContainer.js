var React = require('react');
var PropTypes = React.PropTypes;
var Forecast = require('../components/Forecast.js');
var openWeatherHelpers = require('../utils/openWeatherHelpers.js');

var ForecastContainer = React.createClass({
  contextTypes: {
    router: PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      isLoading: true,
      forecastData: {}
    };
  },
  handleClick: function(weather){
    this.context.router.push({
      pathname: '/detail/' + this.props.routeParams.city,
      state: {
        weather: weather,
        city: this.state.forecastData.city.name
      }
    })
  },
  componentWillMount: function(){
    this.makeRequest(this.props.routeParams.city);
  },
  componentWillReceiveProps: function(nextProps){
    this.makeRequest(nextProps.routeParams.city);
  },
  makeRequest: function(city){
    openWeatherHelpers.getForecast(city)
      .then(function(data){
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
        forecastData={this.state.forecastData}
        handleClick={this.handleClick} />
    );
  }
});

module.exports = ForecastContainer;
