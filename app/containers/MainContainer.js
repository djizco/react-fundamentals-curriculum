var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
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
  logo: {
    margin: 0,
  },
  link: {
    textDecoration: 'none',
    color: 'white'
  }
};

var MainContainer = React.createClass({
  render: function(){
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <Link to='/' activeStyle={styles.link}>
            <h2 style={styles.logo}>Weather App</h2>
          </Link>
          <GetCityContainer direction='row' />
        </div>
        {this.props.children}
      </div>
    );
  }
})

module.exports = MainContainer;
