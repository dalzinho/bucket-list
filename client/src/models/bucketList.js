var Country = require('./country');
var apiRequest = require('./apiRequest');

var BucketList = function(){
  var url = 'https://restcountries.eu/rest/v2/all';

apiRequest(url, function(){
    console.log("request complete");
    if(this.status !==200){ 
      return;
    }
var jsonString = this.responseText; 
countries = JSON.parse(jsonString);
return countries; 
  });
};



module.exports = BucketList;
