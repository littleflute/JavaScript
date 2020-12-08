const tag = "[i/49/index.js_v0.34]";
const u = require("./util.js");
const app = require("express")();
var PORT = 3000;
u.l(tag);

app.get("/", (req,res)=> res.sendFile(__dirname + "/index.html"));
app.get("/plx/gameBoard.js", (req,res)=> res.sendFile(__dirname + "/plx/gameBoard.js"));
app.get("/plx/p1.js", (req,res)=> res.sendFile(__dirname + "/plx/p1.js"));

app.get("/voanews", (req,res)=> {
    res.end("voanews ...");
};

app.listen(PORT, ()=>console.log(tag + " Listening on http port " + PORT));

const wsSvr = require("./ws/server.js");
wsSvr.wsRun(9090);