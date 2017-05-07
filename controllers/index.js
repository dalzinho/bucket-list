var express = require('express');
var router = express.Router();
var path = require('path');
var BucketQuery = require('../client/db/bucketQuery');
bucketQuery = new BucketQuery();

router.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

router.post('/', function(req, res){
  bucketQuery.addCountry(req, function(){
    console.log('saved!');
  });
})

module.exports = router;