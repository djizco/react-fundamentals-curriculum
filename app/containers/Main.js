var React = require('react');

var Main = React.createClass({
  render: function(){
    return (
      <div>
        <h1 className='text-center'>Weather App</h1>
        {this.props.children}
      </div>
    );
  }
})

module.exports = Main
