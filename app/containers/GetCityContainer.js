import React, { Component, PropTypes } from 'react';
import GetCity from '../components/GetCity';

class GetCityContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      city: '',
    };
    this.handleUpdateCity = this.handleUpdateCity.bind(this);
    this.handleSubmitCity = this.handleSubmitCity.bind(this);
  }
  handleUpdateCity(e) {
    this.setState({
      city: e.target.value,
    });
  }
  handleSubmitCity(e) {
    e.preventDefault();

    this.context.router.push({
      pathname: `/forecast/${this.state.city}`,
    });
  }
  render() {
    return (
      <GetCity
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity}
        city={this.state.city}
        direction={this.props.direction} />
    );
  }
}

GetCityContainer.defaultProps = {
  direction: 'column',
};

GetCityContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};

GetCityContainer.propTypes = {
  direction: PropTypes.string,
};

export default GetCityContainer;

