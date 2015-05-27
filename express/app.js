//reference
var express = require('express'),
    app = express();

//route, function > request, response
app.get('/', function(req, res){
    res.send("Test");
});

//*any route
app.get('*', function(req, res){
    res.send("ERROR 404", 404);    
});
app.listen(8080);
console.log("Express server test started on port 8080");
