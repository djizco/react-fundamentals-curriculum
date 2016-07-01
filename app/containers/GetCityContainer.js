var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity.js');

var GetCityContainer = React.createClass({
  propTypes: {
    direction: PropTypes.string
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getDefaultProps: function(){
    return {
      direction: 'column'
    };
  },
  getInitialState: function(){
    return {
      city: ''
    };
  },
  handleUpdateCity: function(e){
    this.setState({
      city: e.target.value
    });
  },
  handleSubmitCity: function(e){
    e.preventDefault();

    this.context.router.push({
      pathname: `/forecast/${this.state.city}`
    })
  },
  render: function(){
    return (
      <GetCity
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity}
        city={this.state.city}
        direction={this.props.direction} />
    );
  }
});

module.exports = GetCityContainer;
