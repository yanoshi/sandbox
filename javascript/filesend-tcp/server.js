var task = function(){

  var net = require('net');
  var fs = require('fs');

  var HOST = '127.0.0.1';
  var PORT = '9001'
  var FILEPATH = './lenna.png';


  var server = net.createServer((conObj) => {
    conObj.on("data", (data) => {
      console.log("REQUEST COMMING...");
      if(data == "GET\n"){
        var fileStream = fs.createReadStream(FILEPATH);
        console.log("SEND DATA...");

        fileStream.on("open", () => {
          fileStream.pipe(conObj);
        });
      }
    });

    conObj.on("close", () => {
      console.log("CLOSED");
    });
  }).listen( PORT );

  server.on("error", (err) => {
    console.error(err);
  });

};

module.exports = task;
