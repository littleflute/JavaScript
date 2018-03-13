function _blVPlayer () {
    function _vplayerClass () {
        this.v = "v0.0. 42";
        this.blrAboutI7C4= function(b,d){		var s = "blrAboutI7C4<br>"; 
		s += "<a target='_blank' href='https://github.com/littleflute/JavaScript/issues/7'"
		s += " style='color:blue;'"; 		s +=">"; 		s += "#7*  "; 		s += "</a>"; 
		s += "<a target='_blank' href='https://github.com/littleflute/JavaScript/edit/master/issues/7/c4.js'";
		s += " style='color:blue;'"; 		s +=">"; 		s += " c4.js*  ";		s += "</a>"; 
		s += "<a target='_blank'  href='https://littleflute.github.io/JavaScript/issues/7/c4.js'";
		s += " style='color:yellow;'"; 		s +=">";		s += " c4.js ";		s += "</a>"; 
		d.innerHTML = s;
		_on_off_div(b,d); 		d.style.background = blGrey[5]; 		b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
	}//this.blrAboutI7C4
    }
var v = document.body;
var d = blo0.blMDiv(v,v.id+"_blVPlayer ","_blVPlayer",151,10,500,400,blGrey[0]);
d.v = blo0.blDiv(d,d.id+"v","v" ,blGrey[1]);

blo0.blShowObj2Div(d.v, new _vplayerClass);
var b = bl$("blrToolBarDivtbbtnLoadb3");
 
_on_off_div(b,d); 
b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
b.innerHTML = "[blVPlayer]";
}
