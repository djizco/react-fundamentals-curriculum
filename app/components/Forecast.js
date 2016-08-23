import React, { PropTypes } from 'react';
import Loading from './Loading';
import DayContainer from './DayContainer';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto',
  },
  header: {
    fontSize: '65px',
    color: '#333',
    textAlign: 'center',
    fontWeight: 100,
  },
  subheader: {
    fontSize: '30px',
    color: '#333',
    textAlign: 'center',
    fontWeight: 100,
  },
  day: {
    cursor: 'pointer',
    margin: 5,
    padding: 15,
    border: '2px solid #CCC',
    borderRadius: 10,
  },
};

function ForecastUI(props) {
  return (
    <div>
      <h1 style={styles.header}>{props.forecastData.city.name}</h1>
      <div style={styles.subheader}>Select a day</div>
      <div style={styles.container}>
        {props.forecastData.list.map(listItem => {
          return (
            <div onClick={props.handleClick.bind(null, listItem)} key={listItem.dt} style={styles.day}>
              <DayContainer
                key={listItem.dt}
                day={listItem} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Forecast(props) {
  return props.isLoading
    ? <Loading
      text="Loading Weather"
      speed={100} />
    : <ForecastUI
      forecastData={props.forecastData}
      handleClick={props.handleClick} />;
}

Forecast.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  forecastData: PropTypes.object.isRequired,
};
