var React = require('react');
var PropTypes = React.PropTypes;
var dayHelpers = require('../utils/dayHelpers.js');

var styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35
  },
  weather: {
    height: 130
  }
};

function DayContainer(props){
  console.log('props in DayContainer', props);
  var date = dayHelpers.getDate(props.day.dt);
  var weatherIcon = props.day.weather[0].icon;
  return (
    <div style={styles.container}>{date}</div>
  );
}

DayContainer.PropTypes = {
  key: PropTypes.number.isRequired,
  day: PropTypes.object.isRequired
}

module.exports = DayContainer;
