const tag = "[i/49/index.js_v0.31]";
const app = require("express")();
var PORT = 8080;

app.get("/", (req,res)=> res.sendFile(__dirname + "/index.html"));
app.get("/plx/gameBoard.js", (req,res)=> res.sendFile(__dirname + "/plx/gameBoard.js"));
app.get("/plx/p1.js", (req,res)=> res.sendFile(__dirname + "/plx/p1.js"));


app.listen(PORT, ()=>console.log(tag + " Listening on http port " + PORT));

const wsSvr = require("./ws/server.js");
wsSvr.wsRun(9090);