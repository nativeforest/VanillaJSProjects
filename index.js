console.log("Loading from NodeJs...");
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
console.log("Loaded expss ...");
var app = express();
console.log("Loaded app...",app);
var http = require('http'),
    fs = require('fs');



fs.readFile('./index.html', function (err, html) {
app.get('/random.text', function (req, res) {
  res.send('./random.txt');
});
console.log("html-->",html);
console.log("err-->",err);
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});

app.get('/random.text', function (req, res) {
  res.send('./random.txt');
});


console.log('listening on port...');