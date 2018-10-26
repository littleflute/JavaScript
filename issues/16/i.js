var v = bl$("id_div_4_Plx");
var _btn = bl$("id_btn_Load_Plx");

var d1 = blo0.blDiv(v, v.id + "_d1",  "d1", blGrey[0]); 
var s = '<div class="XDheader"><div class="XDheader-right" id="XDid_div_title">';
 s += '<a href= "https://github.com/littleflute/JavaScript/issues/16" target="_blank">#16_v0.0. 33</a> ';
s += "<a class='xd' target='_blank' href='https://github.com/littleflute/JavaScript/edit/master/issues/16/i.js'"
s +=">";		s += " i16.js*  ";		s += "</a> "; 
	s += "  <a class='xd'  target='_blank' href='https://littleflute.github.io/JavaScript/issues/16/i.js'";
 
		s +=">";
		s += " i16.js ";
		s += "</a>"; 
 s += '</div></div>';
d1.innerHTML = s;

_on_off_div(_btn , v);
var b = _btn; b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
_btn.CallTimes = 0;
_btn .plxFn = function(ctx){
			ctx.moveTo(0,0);
			ctx.lineTo(200,100);
			ctx.font="20px Georgia";
                       _btn.CallTimes++;
			ctx.fillText("vextab plx: v0.0.1 call: " + _btn.CallTimes,10,50);
			ctx.stroke(); 
} 

 function _Cs(o) {
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
w3.getHttpObject("https://api.github.com/repos/littleflute/JavaScript/issues/16/comments", _Cs);	
