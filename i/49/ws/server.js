const tag = "[i/49/ws/server.js_v0.113]"; 
const http = require("http");
const bc = require("./broadcast.js");
const u = require("../util.js");
u.l(tag + " to load ...");
  
const clientList = {};
const gameList = {};


const websocketServer = require("websocket").server
const httpServer = http.createServer();

const wsServer = new websocketServer({
    "httpServer": httpServer
})
wsServer.on("request", request => {
    //connect
    const connection = request.accept(null, request.origin);
    connection.on("open", () => {
        console.log("opened!");
    });

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
            const gameId = u.GUID();
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
    });
 
    const clientId = u.GUID();
    clientList[clientId] = {"connection":  connection    }; 

    const payLoad = {
        "method": "connect",
        "clientId": clientId
    }
    
    connection.send(JSON.stringify(payLoad));     
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


exports.wsRun = function(port){
    httpServer.listen(port, () => console.log( tag + " " + Date() + " websocket listening.. on " + port));
    bc.setupBrodcastStation(clientList);
} 