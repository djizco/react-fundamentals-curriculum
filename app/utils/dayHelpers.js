var days = {
  "0":"Sunday",
  "1":"Monday",
  "2":"Tuesday",
  "3":"Wednesday",
  "4":"Thursday",
  "5":"Friday",
  "6":"Saturday"
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

function convertTemp(){

}

function getDate(timestamp){
  var date = new Date(timestamp * 1000);
  var day = days[date.getDay()];
  var month = `${months[date.getMonth(0)]}, ${date.getDate()}`;
  return `${day}, ${month}`;
}

module.exports = {
  getDate: getDate,
  convertTemp: convertTemp
};
