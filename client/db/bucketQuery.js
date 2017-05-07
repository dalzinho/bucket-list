var MongoClient = require('mongodb').MongoClient;

var BucketQuery = function(){
  this.url = 'mongodb://localhost:27017/bucketlist';
};

BucketQuery.prototype = {
  addCountry: function(countryToAdd, onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection = db.collection('bucketlist');
        collection.insert(countryToAdd);
        var a_variable = collection.find().toArray();
        onQueryFinished(a_variable);
        // function(err, docs){
        //   onQueryFinished(docs);
        // };
      } else {
        console.log('FALSE! WAT')
      }
    });
  }
};

module.exports = BucketQuery;