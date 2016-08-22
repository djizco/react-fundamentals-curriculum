import React, { Component, PropTypes } from 'react';

const styles = {
  container: {
    position: 'fixed',
    width: '100%',
    fontSize: '55px',
    fontWeight: 100,
  },
  content: {
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    marginTop: '30px',
  },
};

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.originalText = this.props.text;
    this.state = {
      text: this.originalText,
    };
  }
  componentWillMount() {
    const stopper = `${this.originalText}...`;
    this.interval = setInterval(() => {
      if (this.state.text === stopper) {
        this.setState({
          text: this.originalText,
        });
      } else {
        this.setState({
          text: `${this.state.text}.`,
        });
      }
    }, this.props.speed);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div style={styles.container}>
        <p style={styles.content}>{this.state.text}</p>
      </div>
    );
  }
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 300,
};

Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number,
};
