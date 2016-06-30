var request = require('superagent');
var apiKey = '5af480929651e367a19a2eff4f787333';

function getCurrentWeather(city){
  return request.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&type=accurate&APPID=${apiKey}`);
}

function getFiveDayForecast(city){
  return request.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&type=accurate&${apiKey}&cnt=5`);
}

module.exports = {
  getCurrentWeather: getCurrentWeather
};
