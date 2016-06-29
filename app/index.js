var React = require('react');
var ReactDom = require('react-dom');
// var routes = require('./config/routes.js');

var HelloWorld = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    );
  }
})

ReactDom.render(
  <HelloWorld/>,
  document.getElementById('app')
);
