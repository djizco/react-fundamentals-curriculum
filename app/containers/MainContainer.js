var React = require('react');
var GetCityContainer = require('./GetCityContainer.js');

var styles = {
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
    padding: 5
  },
  noMargin: {
    margin: 0
  }
};

var MainContainer = React.createClass({
  render: function(){
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.noMargin}>Weather App</h2>
          <GetCityContainer direction='row' />
        </div>
        {this.props.children}
      </div>
    );
  }
})

module.exports = MainContainer;
