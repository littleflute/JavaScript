const tag = "[i/49/ws/index.js_v0.112]"; 
const http = require("http");
console.log(tag);
  
var gBroadcast = null;
const clientList = {};
const gameList = {};

function CBroadcast(_cl){
    var n = 0;
    var timeFun = function(){
        n++;
        var l = 0;
        var cs = [];
        for(i in _cl){
            if(_cl[i].connection.connected){
                cs.push(i);
            }   
        }
        for(i in _cl){
            l++;
            const breakNewsPayLoad = {
                "method": "mBreakNews",
                "news" : tag + " News. " + n + " " + Date() ,
                "clients": cs
            }
            _cl[i].connection.send(JSON.stringify(breakNewsPayLoad))
        } 
        setTimeout(timeFun, 1111);
    }
    this.bcRun = function(){        timeFun();    }
}
const websocketServer = require("websocket").server
const httpServer = http.createServer();

const wsServer = new websocketServer({
    "httpServer": httpServer
})
wsServer.on("request", request => {
    //connect
    const connection = request.accept(null, request.origin);
    connection.on("open", () => console.log("opened!"))
    connection.on("close", () => {
        console.log("closed! connection="   + " : " + Date());
    });

    connection.on("message", message => {
        const result = JSON.parse(message.utf8Data)
        
        console.log(result);

        //I have received a message from the client
        //a user want to create a new game
        if (result.method === "create") {
            const clientId = result.clientId;
            const gameId = guid();
            gameList[gameId] = {
                "id": gameId,
                "balls": 20,
                "clients": []
            }

            const payLoad = {
                "method": "create",
                "game" : gameList[gameId]
            }

            const con = clientList[clientId].connection;
            con.send(JSON.stringify(payLoad));
        }

        if (result.method === "cppTest") {
            console.log("cppTest---------------------------" +Date()); 
        }
        
        if (result.method === "html5Test") {
            console.log("html5Test---------------------------" +JSON.stringify(result)); 
        }

        //a client want to join
        if (result.method === "join") { 

            const clientId = result.clientId;
            const gameId = result.gameId;
            const game = gameList[gameId];
            if (game.clients.length >= 3) 
            {
                //sorry max players reach
                return;
            }
            const color =  {"0": "Red", "1": "Green", "2": "Blue"}[game.clients.length]
            game.clients.push({
                "clientId": clientId,
                "color": color
            })
            //start the game
            if (game.clients.length === 3) updateGameState();

            const payLoad = {
                "method": "join",
                "game": game
            }
            
            game.clients.forEach(c => {
                clientList[c.clientId].connection.send(JSON.stringify(payLoad))
            })
        }
        //a user plays
        if (result.method === "play") {            
            console.log("xddbg: play " + Date());
            const gameId = result.gameId;
            const ballId = result.ballId;
            const color = result.color;
            let state = gameList[gameId].state;
            if (!state)
                state = {}
            
            state[ballId] = color;
            gameList[gameId].state = state;            
        }

    })

    //generate a new clientId
    const clientId = guid();
    clientList[clientId] = {"connection":  connection    };
    console.log("clientId=" + clientId +" : "+ Date());


    const payLoad = {
        "method": "connect",
        "clientId": clientId
    }
    
    connection.send(JSON.stringify(payLoad)); 

    if(!gBroadcast){
        gBroadcast = new CBroadcast(clientList);
        gBroadcast.bcRun();
    }
})


function updateGameState(){
    console.log("xddbg: updateGameState  " + Date());
    //{"gameid", fasdfsf}
    for (const g of Object.keys(gameList)) {
        const game = gameList[g]
        const payLoad = {
            "method": "update",
            "game": game
        }

        game.clients.forEach(c=> {
            clientList[c.clientId].connection.send(JSON.stringify(payLoad))
        })
    }

    setTimeout(updateGameState, 500);
}



function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
}
 
// then to call it, plus stitch in '4' in the third group
const guid = () => (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();


exports.wsRun = function(port){
    httpServer.listen(port, () => console.log( Date() + " websocket listening.. on " + port));
} 