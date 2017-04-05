var Country = require('./country');
var apiRequest = require('./apiRequest');

var CountryList = function(){
  var url = 'https://restcountries.eu/rest/v2/all';
  apiRequest(url, function(){
    console.log("request complete");
    if(this.status !==200){ 
      return;
    }
var jsonString = this.responseText; 
var countries = JSON.parse(jsonString);
// console.log(countries);

CountryList.prototype.populateSelector(countries);


  });
};

CountryList.prototype = {

populateSelector: function(countries) {
  var dropDown = document.getElementById("country-picker")

  countries.forEach(function(country) {
    var option = document.createElement("option");
    option.innerText = country.name; 
    dropDown.appendChild(option);
  });
}


};






module.exports = CountryList;
