var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
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
        weather: weather
      }
    })
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
        forecastData={this.state.forecastData}
        handleClick={this.handleClick} />
    );
  }
});

module.exports = ForecastContainer;
