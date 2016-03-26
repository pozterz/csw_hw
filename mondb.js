var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var con = "mongodb://127.0.0.1:27017/test";
MongoClient.connect(con,function(err,db){
	if(err){ console.log(err); }
	findres(db,function(){
		db.close();
	});

});

var insertdoc = function(db,callback){
	db.collection('test').insertOne({
		 "address" : {
         "street" : "2456 Avenue",
         "zipcode" : "990075",
         "building" : "144580",
         "coord" : [ -73.9557413, 40.7720266 ]
      },
      "borough" : "Phuket",
      "cuisine" : "Thailand",
      "grades" : [
         {
            "date" : new Date("2016-10-01T00:00:00Z"),
            "grade" : "A",
            "score" : 115
         },
         {
            "date" : new Date("2016-01-16T00:00:00Z"),
            "grade" : "B",
            "score" : 147
         }
      ],
      "name" : "PSU",
      "restaurant_id" : "4561235"
   
	},function(err,result){
		assert.equal(err,null);
		console.log("Inserted");
		callback();
	});
};

var findres = function(db,callback){
	var cursor = db.collection('test').find().sort();
	cursor.each(function(err, doc) {
		assert.equal(err,null);
		if(doc != null){
			console.log(doc);
		}else{
			callback();
		}
	});
};

var updateres = function(db,callback){
	db.collection('test').updateOne(
		{ "name" : "PSU"},
		{
			$set: {"cuisine": "American (New)"},
			$currentDate: { "lastModified": true }
		},function(err,result){
			console.log(result);
			callback();
	});
};