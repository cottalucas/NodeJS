
//reference of the library http
var http = require('http');

//what to do when the server receive a request
var server = http.createServer(function (request, response){
    response.writeHead(200, {"Content-Type" : "text/plain"});
    response.end("Hello\n");
    
});

server.listen(8000);

console.log("Server running at http://localhost:8000");
