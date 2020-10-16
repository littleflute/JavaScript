const tag = "[i/49/util.js_v0.13]"; 
var N = 0;
l(tag + " to load ...");

exports.l = function (s){
    l(s);
};

exports.GUID = function (){    return guid();};

function l(_msg){
    var o = {};
    o.n = N++;
    o.msg = _msg;
    console.log(o);
}



function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
}
 
// then to call it, plus stitch in '4' in the third group
const guid = () => (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();

