var React = require('react');
var DayContainer = require('./DayContainer.js');
var PropTypes = React.PropTypes;
var dayHelpers = require('../utils/dayHelpers.js');

var styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 25
  },
  descriptionContainer: {
    fontSize: 34,
    fontWeight: 100,
    maxWidth: 400,
    margin: '0 auto',
    marginTop: '30px',
    textAlign: 'center',
  }
};

function Detail(props){
  console.log('props in detail:', props);
  return (
    <div style={styles.container}>
      <DayContainer day={props.weather} />
      <div style={styles.descriptionContainer}>
        <p>{props.city}</p>
        <p>{props.weather.weather[0].description}</p>
        <p>min temp: {dayHelpers.convertTemp(props.weather.temp.min)} degrees</p>
        <p>max temp: {dayHelpers.convertTemp(props.weather.temp.max)} degrees</p>
        <p>Humidity: {props.weather.humidity}</p>
      </div>
    </div>
  );
}

Detail.PropTypes = {
  weather: PropTypes.object.isRequied,
  city: PropTypes.string.isRequied
}

module.exports = Detail;
