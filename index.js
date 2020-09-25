console.log("Loading from NodeJs...");
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
console.log("Loaded expss ...");

var http = require('http'),
    fs = require('fs');


fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});

console.log('listening on port...');