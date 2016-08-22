import React, { Component, PropTypes } from 'react';
import Detail from '../components/Detail';

export default class DetailContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <Detail
        weather={this.props.location.state.weather}
        city={this.props.location.state.city} />
    );
  }
}

DetailContainer.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      city: PropTypes.string,
      weather: PropTypes.object,
    }),
  }),
};
