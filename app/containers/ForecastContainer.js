import React, { PropTypes, Component } from 'react';
import Forecast from '../components/Forecast';
import openWeatherHelpers from '../utils/openWeatherHelpers';


class ForecastContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      isLoading: true,
      forecastData: {},
    };
    this.makeRequest = this.makeRequest.bind(this);
  }
  componentWillMount() {
    this.makeRequest(this.props.routeParams.city);
  }
  componentWillReceiveProps(nextProps) {
    this.makeRequest(nextProps.routeParams.city);
  }
  handleClick(weather) {
    this.context.router.push({
      pathname: `/detail/${this.props.routeParams.city}`,
      state: {
        weather,
        city: this.state.forecastData.city.name,
      },
    });
  }
  makeRequest(city) {
    openWeatherHelpers.getForecast(city)
      .then(data => {
        this.setState({
          isLoading: false,
          forecastData: data.body,
        });
      });
  }
  render() {
    return (
      <Forecast
        isLoading={this.state.isLoading}
        forecastData={this.state.forecastData}
        handleClick={this.handleClick} />
    );
  }
}

ForecastContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};

ForecastContainer.propTypes = {
  routeParams: PropTypes.shape({
    city: PropTypes.string,
  }),
};

export default ForecastContainer;
