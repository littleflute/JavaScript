const tag = "[plx/p1.js_v0.114]";
const p1Btn = bl$("id_p1_btn"); 
var md = null;
 
var vBreakNews = null;
var vPlayers = null;
var vGames = null;

let clientId = null;
let gameId = null;
let playerColor = null;

 
const txtGameId = document.getElementById("txtGameId"); 
const divBoard = document.getElementById("divBoard");    

var wso = null;

  
p1Btn.onclick = function(){    
    if(!md){
        md = blo0.blMD("id_md_4_plx1",tag,555,50,444,400,blGrey[0]);
        
        var tb = blo0.blDiv(md,md.id+"tb","tb",blGrey[1]);
        vBreakNews = blo0.blDiv(md,md.id+"BreakNews","news","lightblue");
        vPlayers = blo0.blDiv(md,md.id+"players","players",blGrey[2]);
        vGames = blo0.blDiv(md,md.id+"games","games",blGrey[2]);
        var connect = blo0.blBtn(tb,tb.id+"connect","=>connect",blGrey[3]);
        connect.onclick = function(){
            wso = _setSvr("ws://localhost:9090");  
            wso.add1Game(tb);
        }       
        
        vGames.addGame = function(_vgs){
            _vgs.ls = [];
            return function(id){
                var l = _vgs.ls.length;
                var g = blo0.blDiv(_vgs,_vgs.id+l,"g"+l+":id="+id,blGrey[3]);
                g.onclick = function(_g,_id){
                    return function(){
                        txtGameId.value = _id;
 
                    }
                }(g,id);
                _vgs.ls.push(g);
            }
        }(vGames);

        vPlayers.addPlayer = function(_vpl){
            _vpl.ls = [];
            return function(myID,loopID,clr){
                var l = _vpl.ls.length;
                var s = "player"+l+":id="+loopID;
                if(myID==loopID) s+= "[*]";
                var p = blo0.blDiv(_vpl,_vpl.id+l,s,clr);
                _vpl.ls.push(p);
            }
        }(vPlayers);


    }
    blon(this,md,"grey","green");
}
function _setSvr(wsurl){
    var o = new WebSocket(wsurl);
    o.add1Game = function(_o){
        return function(tb){
            tb.innerHTML = "";
            var newGame = blo0.blBtn(tb,tb.id+"newGame","+Game",blGrey[3]);
            newGame.onclick = function(){
                const payLoad = {
                    "method": "create",
                    "clientId": clientId
                }

                _o.send(JSON.stringify(payLoad));
            }

            var playGame = blo0.blBtn(tb,tb.id+"playGame","->playGame",blGrey[3]);
            playGame.onclick = function(){ 
                if (gameId === null)
                    gameId = txtGameId.value;
                
                const payLoad = {
                    "method": "join",
                    "clientId": clientId,
                    "gameId": gameId
                }

                wso.send(JSON.stringify(payLoad));
            }
        }
    }(o);
    o.onmessage = message => {
        //message.data
        const response = JSON.parse(message.data);
        //connect
        if (response.method === "connect"){
            clientId = response.clientId;  
        }
    
        //create
        if (response.method === "create"){
            gameId = response.game.id; 
            vGames.addGame(gameId);
            console.log("game successfully created with id " + response.game.id + " with " + response.game.balls + " balls")  
        }
     
        if (response.method === "mBreakNews"){
            vBreakNews.innerHTML = response.news;
            var n = 0;
            for(i in response.clients){
                var cs = blo0.blDiv(vBreakNews,vBreakNews.id+"clients" +i,response.clients[i],blColor[n]);
                n++;
            }
            
        }
    
    
        //update
        if (response.method === "update"){
            //{1: "red", 1}
            if (!response.game.state) return;
            for(const b of Object.keys(response.game.state))
            {
                const color = response.game.state[b];
                const ballObject = document.getElementById("ball" + b);
                ballObject.style.backgroundColor = color
            }    
        }
    
        //join
        if (response.method === "join"){
            const game = response.game;
         
            vPlayers.innerHTML = Date();

            game.clients.forEach (c => {
    
                const d = document.createElement("div");
                d.style.width = "200px";
                d.style.background = c.color
                d.textContent = c.clientId;
                
                vPlayers.addPlayer(clientId,c.clientId,c.color);
    
                if (c.clientId === clientId) playerColor = c.color;
            })
    
    
            while(divBoard.firstChild)
            divBoard.removeChild (divBoard.firstChild)
    
            for (let i = 0; i < game.balls; i++){
    
                const b = document.createElement("button");
                b.id = "ball" + (i +1);
                b.tag = i+1
                b.textContent = i+1
                b.style.width = "150px"
                b.style.height = "150px"
                b.addEventListener("click", e => {
                    b.style.background = playerColor
                    const payLoad = {
                        "method": "play",
                        "clientId": clientId,
                        "gameId": gameId,
                        "ballId": b.tag,
                        "color": playerColor
                    }
                    wso.send(JSON.stringify(payLoad))
                })
                divBoard.appendChild(b);
            }
        }
    }
    
    return o;
}

p1Btn.onclick();