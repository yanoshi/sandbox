var task = function(){
  var net = require('net');
  var fs = require('fs');

  var HOST = '127.0.0.1';
  var PORT = '9001'
  var FILEPATH = './down/output.png';


  var client = new net.Socket()

  client.connect(PORT,HOST,function() {
    console.log("HEY SERVER!");
    client.write('GET\n');
    var writeStream = fs.createWriteStream(FILEPATH);
    client.pipe(writeStream);
  });

  client.on('data', function(data) {

  });

  client.on('error', function(err) {
    console.log(err);
  });
};

module.exports = task;
