var React = require('react');
var PropTypes = React.PropTypes;
var dayHelpers = require('../utils/dayHelpers.js');

var styles = {
  container: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  subheader: {
    fontSize: '30px',
    color: '#333',
    textAlign: 'center',
    fontWeight: 100
  },
  weather: {
    height: 130
  }
};

function DayContainer(props){
  console.log("props in DayContainer", props);
  var date = dayHelpers.getDate(props.day.dt);
  var icon = props.day.weather[0].icon;

  return (
    <div style={styles.container}>
      <img style={styles.weather} src={`./app/images/weather-icons/${icon}.svg`} alt='Weather' />
      <h2 style={styles.subheader}>{date}</h2>
    </div>
  );
}

DayContainer.PropTypes = {
  key: PropTypes.number,
  day: PropTypes.object.isRequired
}

module.exports = DayContainer;
