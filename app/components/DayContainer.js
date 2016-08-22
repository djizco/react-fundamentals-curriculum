import React, { PropTypes } from 'react';
import dayHelpers from '../utils/dayHelpers';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  subheader: {
    fontSize: '30px',
    color: '#333',
    textAlign: 'center',
    fontWeight: 100,
  },
  weather: {
    height: 130,
  },
};

function DayContainer(props) {
  const date = dayHelpers.getDate(props.day.dt);
  const icon = props.day.weather[0].icon;

  return (
    <div style={styles.container}>
      <img style={styles.weather} src={`./app/images/weather-icons/${icon}.svg`} alt="Weather" />
      <h2 style={styles.subheader}>{date}</h2>
    </div>
  );
}

DayContainer.PropTypes = {
  key: PropTypes.number,
  day: PropTypes.object.isRequired,
};

module.exports = DayContainer;
