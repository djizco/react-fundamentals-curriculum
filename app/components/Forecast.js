var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('./Loading.js');
var DayContainer = require('./DayContainer');

var styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  },
  header: {
    fontSize: '65px',
    color: '#333',
    textAlign: 'center',
    fontWeight: 100
  },
  subheader: {
    fontSize: '30px',
    color: '#333',
    textAlign: 'center',
    fontWeight: 100
  }
};

function ForecastUI(props){
  return (
    <div>
      <h1 style={styles.header}>{props.forecastData.city.name}</h1>
      <div style={styles.subheader}>Select a day</div>
      <div style={styles.container}>
        {props.forecastData.list.map(function(listItem){
          return (
            <DayContainer
              key={listItem.dt}
              day={listItem} />
          );
        })}
      </div>
    </div>
  );
}

function Forecast(props){
  return props.isLoading
    ? <Loading
      text='Loading Weather'
      speed={100} />
    : <ForecastUI
      forecastData={props.forecastData} />
}

Forecast.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  forecastData: PropTypes.object.isRequired
}

module.exports = Forecast;
