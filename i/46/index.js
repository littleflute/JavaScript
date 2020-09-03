var express = require("express");
var app = express();
var http = require("http").createServer(app);
var socketIO = require("socket.io")(http);
 
http.listen(3000, function () {
    socketIO.on("connection", function (socket) {
        socket.on("new_user", function () {
            socket.broadcast.emit("new_user");
        });
    });
});