const tag = "[index.js_v0.12]";
var express = require("express");
var app = express();
var http = require("http").createServer(app);
var socketIO = require("socket.io")(http);
 
http.listen(3000, function () {
    socketIO.on("connection", function (_socket) {
        _socket.on("new_user", function () {
            console.log(tag+" "+Date());
            _socket.broadcast.emit("new_user");
        });
    });
});