var UI = require('./views/ui');
var apiRequest = require('./models/apiRequest');
var BucketQuery = require('../db/bucketQuery');


var app = function(){
  new UI();
  var bucketQuery = new BucketQuery();

  var selectButton = document.querySelector('#btn-select-country');
  selectButton.onclick = function() {
      // console.log(document.querySelector('#country-picker').value);
      var apiURL = "https://restcountries.eu/rest/v2/name/" + document.querySelector('#country-picker').value;
      // console.log(apiURL);

      apiRequest(apiURL, function(){
        var response = JSON.parse(this.responseText);
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("POST", localhost, false);
        xmlHttp.send(response);
      });
    };
  }
  




  window.onload = app;