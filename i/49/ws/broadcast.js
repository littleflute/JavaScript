const tag = "[i/49/ws/broadcast.js_v0.12]"; 
const u = require("../util.js");
u.l(tag + " to load ...");

exports.setupBrodcastStation = function(_clientList){
    if(!gBroadcast){
        gBroadcast = new CBroadcastStation(_clientList);
        gBroadcast.bcRun();
    } 
    return gBroadcast;
} 

var gBroadcast = null;
function CBroadcastStation(_cl){
    var n = 0;
    var timeFun = function(){
        n++; 
        var cs = [];
        for(i in _cl){
            if(_cl[i].connection.connected){
                cs.push(i);
            }   
        }
        for(i in _cl){
            if(_cl[i].connection.connected){
                const breakNewsPayLoad = {
                    "method": "mBreakNews",
                    "news" :  " News. " + n + " " + Date() ,
                    "clients": cs
                }
                _cl[i].connection.send(JSON.stringify(breakNewsPayLoad));
            }
        } 
        
        u.l(tag + "  timer: n = " + n + ", l = " +cs.length);
        setTimeout(timeFun, 1111);
    }
    this.bcRun = function(){        timeFun();    }
}