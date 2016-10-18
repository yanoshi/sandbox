var Debug = function(){

  var net = require("net");

  var server = net.createServer(function(con){
    console.log("start server...");

    con.on("data", function(data){
      console.log("server receive: " + data + " from " + con.remoteAddress + ":" + con.remotePort);
      con.write("server send!!");
    });

    con.on("close", function(){
      console.log("server close...good bey!");
    });
  }).listen(3000);



  var client = new net.Socket();
  client.setEncoding("utf8");

  setTimeout(function(){
    client.connect('3000', 'localhost', function(){
      console.log('client connecting...');
      client.write('Hey, server!?');
    });

    process.stdin.resume();

    client.on('data', function(data){
      console.log('client receive:  ' + data);
    });

    client.on('close', function(){
      console.log('client close...good bey!');
    });

  }, 2000);
};

module.exports = Debug;
