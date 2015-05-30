//reference
var express = require('express'),
    app = express();
    cons = require('consolidate');

// assign the swig engine to .html files
app.engine('html', cons.swig);

//loading the template
app.set('view engine','html');

//setting the path
app.set('views',__dirname + "/views");

//route, function > request, response
app.get('/', function(req, res){
    res.render('test', { 'name' : 'Lucas' })
});

//*any route
app.get('*', function(req, res){
    res.send("ERROR 404", 404);    
});
app.listen(8080);
console.log("Express server test started on port 8080");
