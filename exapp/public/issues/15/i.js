var plx = bl$("id_div_4_i13_plx");
plx.innerHTML = "i15";

var v = bl$("id_div_4_i13_plx");
var d1 = blo0.blDiv(v, v.id + "_d1",  "d1", blGrey[0]); 
var s = '<div class="XDheader"><div class="XDheader-right" id="XDid_div_title">';
 s += '<a href= "https://github.com/littleflute/JavaScript/issues/15" target="_blank">#15_v0.1. 12</a> ';
s += "<a class='xd' target='_blank' href='https://github.com/littleflute/JavaScript/edit/master/issues/15/i.js'"
s +=">";		s += " i15.js*  ";		s += "</a> "; 
		s += "  <a class='xd'    target='_blank'  href='https://littleflute.github.io/JavaScript/issues/15/i.js'";
 
		s +=">";
		s += " i15.js ";
		s += "</a>"; 
 s += '</div></div>';
d1.innerHTML = s;

 function _comments(o) {
         var d = blo0.blDiv( d1, d1.id + "_v",  "v", blGrey[0]); 	
        d.v = blo0.blDiv(d,d.id+"v","v",blGrey[2]);
        d.v1 = blo0.blDiv(d,d.id+"v1","v1",blGrey[3]);
	 for(i in o){ //o[i].body
                    var _b = blo0.blBtn(d.v , d.v.id + "_btn_" + i, i, blColor[i]);    _b.v = d.v1;
                    _b.onclick = function(_this, _txt){
                         return function(){ _this.v.innerHTML = _txt; eval(_txt);}
                     }(_b, o[i].body);  
        }
}
w3.getHttpObject("https://api.github.com/repos/littleflute/JavaScript/issues/15/comments", _comments);	
