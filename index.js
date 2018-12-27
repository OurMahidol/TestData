var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

/*MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").drop(function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Collection deleted");
    db.close();
  });
});*/ 

var mark= "Company lnb";

/*MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");

  var myobj = { name: mark, address: 32 };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  });
  dbo.collection("customers").find({address:1}).toArray (function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
}); */
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");

  var myobj = { name: mark, address: 32 };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  });
  dbo.collection("customers").find({address:1}).toArray (function(err, result) {
    if (err) throw err;
    console.log({name:result});
    db.close();
  });
}); 