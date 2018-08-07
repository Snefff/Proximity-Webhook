// dependencies
'use strict';
const express = require('express');
const bodyParser = require('body-parser');
var unirest = require("unirest");

var port = process.env.PORT || 8080;


// create server and configure it.
const server = express();
server.use(bodyParser.json());


// entry point
server.post('/example', function (request, response) {
    var param = request.body.intent.inputs;
    console.log("List of your entities : ")
    Object.keys(param).forEach(element => { console.log(param + " - " + param[element])});
    response.setHeader('Content-Type', 'application/json');
    response.send(JSON.stringify({
        "speech": "Hello from /example :)",
        "posts": []
    }));
})


server.listen(port, function () {
    console.log("Server is up and running...");
});