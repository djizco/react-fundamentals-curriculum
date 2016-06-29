var React = require('react');
var ReactDom = require('react-dom');
var routes = require('./config/routes.js');



ReactDom.render(
  routes,
  document.getElementById('app')
);
