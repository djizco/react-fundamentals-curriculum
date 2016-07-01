var days = {
  "0":"Sun",
  "1":"Mon",
  "2":"Tues",
  "3":"Wed",
  "4":"Thurs",
  "5":"Fri",
  "6":"Sat"
};

var months = {
  "0":"Jan",
  "1":"Feb",
  "2":"Mar",
  "3":"Apr",
  "4":"May",
  "5":"June",
  "6":"July",
  "7":"Aug",
  "8":"Sept",
  "9":"Oct",
  "10":"Nov",
  "11":"Dec"
};

// Kelvin to Fahrenheit
function convertTemp(kelvin){
  return parseInt(((kelvin - 273.15)* 1.8000 + 32.00), 10);
}

function getDate(timestamp){
  var date = new Date(timestamp * 1000);
  var day = days[date.getDay()];
  var month = `${months[date.getMonth(0)]} ${date.getDate()}`;
  return `${day}, ${month}`;
}

module.exports = {
  getDate: getDate,
  convertTemp: convertTemp
};
