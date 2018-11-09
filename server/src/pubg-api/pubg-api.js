const request = require('request')
const fs = require('fs')
const gunzip = require('gunzip-file')

var getData = function (options, cb) {
    request(options, callback).pipe(fs.createWriteStream('test.gzip').on('close', () => {
        console.log("created test.gzip...")
        gunzip('test.gzip', 'test.txt', () => {
            console.log("gunzip done, created test.txt file");
            cb();
        });
    }));
}

function callback(error, response, body) {
    if(error) {
        console.log(error);
        return;
    }
    else if (response.statusCode == 200) {
        
        /* dont need below i think
        fs.writeFile("test.txt", JSON.stringify(body), (writeError, writeResponse) => {
            if(writeError) {
                console.log("writeError: ", writeError);
                return;
            }
            console.log("finished writing file to disk");
            //console.log("JSON.stringify(body): ", JSON.stringify(body));
            //console.log("response: ", response);
        });
        */
        

        
    }
}

//var largeTelmenteryFile = fs.readFileSync('test.txt');
//largeTelmenteryFile = JSON.parse(largeTelmenteryFile);

module.exports = getData;