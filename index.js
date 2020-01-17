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
    var intent = request.body.intent.name
    var param = request.body.intent.inputs;
    console.log("Intent found: "+intent);
    console.log("List of your entities : ")
    Object.keys(param).forEach(element => { console.log(element + " - " + param[element])});
    response.setHeader('Content-Type', 'application/json');
    response.send(JSON.stringify({
        "speech": "Hello from /example :)",
        "posts": [{
        "type": "card",
        "title": "Le titre",
        "image": "Url de l'image" ,
        "text": "Le texte",
        "buttons": [{
                       "openInPanel": false,
                       "type": "link", //type peut être "lien", ou "button"
                       "text": "Texte du lien",
                       "value": "Url du lien" // ou message envoyé au bot dans le cas d'un bouton
                    }]
    }]
    }));
})


server.listen(port, function () {
    console.log("Server is up and running...");
});
