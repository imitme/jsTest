var http = require('http');
var server = http.createServer();
var port = 3000;
server.listen(port, 
    function(){
        console.log("Start Server");
    }
);

server.on('connection',function(socket) {
    var addr = socket.address();
    console.log("누군가 접속함");
});

server.on('request',function(req, res){
    console.log("d가 요청함");

    res.writeHead(200, {"Content-type" : "text/html ; charset=utf-8"});
    res.write("반가워 : ");
    res.end();
});
