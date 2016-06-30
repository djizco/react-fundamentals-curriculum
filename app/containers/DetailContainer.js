var React = require('react');
var PropTypes = React.PropTypes;
var DayContainer = require('../components/DayContainer.js');

var styles = {
  container: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 25
  },
};

var DetailContainer = React.createClass({
  render: function(){
    return (
      <div style={styles.container}>
        <DayContainer
          day={this.props.location.state.weather} />
      </div>
    );
  }
});

DetailContainer.PropTypes = {
  weather: PropTypes.object.isRequied
}

module.exports = DetailContainer;
