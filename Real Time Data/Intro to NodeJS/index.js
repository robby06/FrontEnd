var http = require('http');
//reading a file with the fs module
var fs = require('fs');
//using custom module
var extract = require('./extract');

//error handling
var handleError = function (err, res) {
    res.writeHead(404);
    res.end();
    };

var server = http.createServer(function (req, res) {
console.log('Responding to a request.');
var filePath = extract(req.url);
fs.readFile(filePath, function(err,data){
    if (err) {
        handleError(err, res);
        return;
        } else {
        res.end(data);
        }
});
});
server.listen(3000);