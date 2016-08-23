import React, { PropTypes } from 'react';
import DayContainer from './DayContainer';
import dayHelpers from '../utils/dayHelpers';

const styles = {
  header: {
    fontSize: 64,
    fontWeight: 100,
    maxWidth: 400,
    textAlign: 'center',
    margin: 20,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 25,
  },
  descriptionContainer: {
    fontSize: 36,
    fontWeight: 100,
    maxWidth: 400,
    margin: '0 auto',
    marginTop: '30px',
    textAlign: 'center',
  },
};

export default function Detail(props) {
  return (
    <div style={styles.container}>
      <div style={styles.header}>{props.city}</div>
      <DayContainer day={props.weather} />
      <div style={styles.descriptionContainer}>
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
  city: PropTypes.string.isRequied,
};
