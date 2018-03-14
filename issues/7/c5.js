function _blSet ( _p ) {//api5
    if(!_p){_p ={"v":"v0.0.1"};}
    function _setClass ( _o) {
        this.v = "v0.0. 121";
        this.blrSetList= function(b,d){
            if(!d.v){
                 d.v = blo0.blDiv(d,d.id+"v","v" ,blGrey[1]); 
                 blo0.blShowObj2Div(d.v, _o);
                 ;
            }
           _on_off_div(b,d); 		d.style.background = blGrey[5]; 		b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
        }
        this.blrAboutI7C5= function(b,d){		var s = "blrAboutI7C5<br>";  
		s += "<a target='_blank' href='https://github.com/littleflute/JavaScript/edit/master/issues/7/c5.js'";
		s += " style='color:blue;'"; 		s +=">"; 		s += " c5.js*  ";		s += "</a>"; 
		s += "<a target='_blank'  href='https://littleflute.github.io/JavaScript/issues/7/c5.js'";
		s += " style='color:yellow;'"; 		s +=">";		s += " c5.js ";		s += "</a>"; 
		d.innerHTML = s;
		_on_off_div(b,d); 		d.style.background = blGrey[5]; 		b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
	}//this.blrAboutI7C5
    }
var v = document.body;
var d = blo0.blMDiv(v,v.id+"_blSet","_blSet",351,10,500,400,blGrey[0]);
 
d.v = blo0.blDiv(d,d.id+"v","v" ,blGrey[1]);
blo0.blShowObj2Div(d.v, new _setClass ( _p ) ); 
if(bl$("blrAboutI7C5")){bl$("blrAboutI7C5").click();}
if(bl$("blrSetList")){bl$("blrSetList").click();}

var b = bl$("blrToolBarDivtbbtnLoadb4");_on_off_div(b,d); 
b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
b.innerHTML = "[blSet]";
}
