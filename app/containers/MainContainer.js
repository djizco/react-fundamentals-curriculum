import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import GetCityContainer from './GetCityContainer';

const styles = {
  container: {
    width: '100%',
    height: '92%',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(252,90,44,0.89)',
    color: 'white',
    padding: 5,
  },
  logo: {
    margin: 0,
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
};

export default class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <Link to="/" activeStyle={styles.link}>
            <h2 style={styles.logo}>Weather App</h2>
          </Link>
          <GetCityContainer direction="row" />
        </div>
        {this.props.children}
      </div>
    );
  }
}

MainContainer.propTypes = {
  children: PropTypes.object,
};
