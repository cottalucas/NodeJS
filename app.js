/**
    var express = require('express'),
    cons = require('consolidate'),
    mongod = require('mongod');
**/

//Object interacting with the driver
var MongoClient = require('mongodb').MongoClient;

//Open connection
//function(err, db) > if err, else connect db
MongoClient.connect('mongodb://localhost/test', function(err, db) {
    if(err) throw err;

    //Find one document
    //function(err, db) > if err, else connect collection
    db.collection('coll').findOne({}, function(err,doc) {

        if(err) throw err;

        //Close connection
        db.close();
    });
    console.dir("Called");
});
