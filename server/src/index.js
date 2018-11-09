const express = require('express')
const request = require('request')
const fs = require('fs')
//const assert = require('assert').strict;

//var yauzl = require('yauzl');
//const apiRoute = require('./routes/index')
const pubgApi = require('./pubg-api/pubg-api');

const app = express()
const port = 3000

var apiKey = 'Bearer ' + process.env.PUBG_API_KEY;
var options = {
    url: 'https://telemetry-cdn.playbattlegrounds.com/bluehole-pubg/pc-na/2018/11/04/04/13/00dc10e4-dfe8-11e8-bc41-0a5864701cb2-telemetry.json',
    headers: {
      'Authorization': apiKey,
      'Accept': 'application/vnd.api+json',
      'Accept-Encoding' : 'gzip'

    }
};

pubgApi(options, () => {
    var largeTelmenteryFile = fs.readFileSync('test.txt');
    largeTelmenteryFile = JSON.parse(largeTelmenteryFile);
    printObjects(largeTelmenteryFile, "CoobyBooby");
});

function printObjects(largeTelmenteryFile, nameToCheck) {
    var counter = 0;
    for(var object of largeTelmenteryFile) {
        if(object.character && object.character.name && object.character.name == nameToCheck) {
            if(object._T)
                console.log(object._T);
            counter+=1;
        }
    }
    console.log("counter: ", counter)
}

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))