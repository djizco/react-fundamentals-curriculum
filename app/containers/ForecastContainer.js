var React = require('react');
var Loading = require('../components/Loading.js');
var openWeatherHelpers = require('../utils/openWeatherHelpers.js');

function puke(obj){
  return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
}

var ForecastContainer = React.createClass({
  getInitialState: function(){
    return {
      isLoading: true,
      forcastData: {}
    };
  },
  componentWillMount: function(){
    console.log('params:', this.props.routeParams);

    openWeatherHelpers.getForecast(this.props.routeParams.city)
      .then(function(data){
        console.log('data:', data.body);
        this.setState({
          isLoading: false,
          forecastData: data.body
        });
      }.bind(this))

    // openWeatherHelpers.getForecast(this.state.city)
    //   .then(function(data){
    //     console.log('data 5-day:', data.body);
    //   })
  },
  render: function(){
    return this.state.isLoading
      ? <Loading 
        text='Loading the Weather'
        speed={500} />
      : <div>{puke(this.state.forecastData)}</div>
  }
});

module.exports = ForecastContainer;
