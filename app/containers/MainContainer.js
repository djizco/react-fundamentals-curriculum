var React = require('react');

var styles = {
  container: {
    width: '100%',
    height: '92%'
  }
};

var MainContainer = React.createClass({
  render: function(){
    return (
      <div style={styles.container}>
        <h1>Weather App</h1>
        {this.props.children}
      </div>
    );
  }
})

module.exports = MainContainer;
