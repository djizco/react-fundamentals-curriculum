var React                  = require('react');
var ReactRouter            = require('react-router');

var Router                 = ReactRouter.Router;
var Route                  = ReactRouter.Route;
var IndexRoute             = ReactRouter.IndexRoute;
var HashHistory            = ReactRouter.hashHistory;

var MainContainer          = require('../containers/MainContainer.js');
var HomeContainer          = require('../containers/HomeContainer.js');
var ForecastContainer      = require('../containers/ForecastContainer.js');
var DetailContainer        = require('../containers/DetailContainer.js');

var routes = (
  <Router history={HashHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute component={HomeContainer} />
      <Route path='forecast/:city' component={ForecastContainer} />
      <Route path='detail/:city' component={DetailContainer} />
    </Route>
  </Router>
);

module.exports = routes;
