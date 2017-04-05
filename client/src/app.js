var UI = require('./views/ui');
var apiRequest = require('./models/apiRequest');


var app = function(){
  new UI();

var selectButton = document.querySelector('#btn-select-country');
selectButton.onclick = function() {
  // console.log(document.querySelector('#country-picker').value);
var apiURL = "https://restcountries.eu/rest/v2/name/" + document.querySelector('#country-picker').value;
// console.log(apiURL);
apiRequest(apiURL, function(){console.log(JSON.parse(this.responseText))});
  
}

};







window.onload = app;