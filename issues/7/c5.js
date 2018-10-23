function _blSet ( _p ) {//api5
    if(!_p){_p ={"v":"v0.0.5"};}
    function _setClass ( _o) {
        this.v = "v0.0. 124";
        this.blrSetList= function(b,d){
            if(!d.v){
                 d.v = blo0.blDiv(d,d.id+"v","v" ,blGrey[1]); 
                 blo0.blShowObj2Div(d.v, _o);
                 ;
            }
           _on_off_div(b,d); 		d.style.background = blGrey[5]; 		b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
        }

        this.bll1 = "";

       this.blr_Issue13 = function(b,d){	
         if(!d.v){
             d.vIssue13Cs = blo0.blDiv(d, d.id + "vIssue13Cs", "", blGrey[1]); 
             d.vIssue13 = blo0.blDiv(d, d.id + "vIssue13", "", blGrey[5]); 
             function _loadIssue13 (o) { 
                                   d.vIssue13.innerHTML = o.body;	
             }
            var url = "https://api.github.com/repos/littleflute/JavaScript/issues/13";
             w3.getHttpObject(url, _loadIssue13 );
            function _Issue13Comments(o) {
				var _i = 0; 
				var _v = d.vIssue13Cs;
				for(i in o){
					_i++;
					var a = o[i].body;
					var btnJS = blo0.blBtn(_v, _v.id+"btnJS"+i,_i,blGrey[2]);
					btnJS.onclick = function(_txt){
				               return function(){
                                                              eval( _txt);
                                               }
				        }(a);
				}

			}
			var _src = "https://api.github.com/repos/littleflute/JavaScript/issues/13/comments";
			w3.getHttpObject(_src, _Issue13Comments);	
        }
		_on_off_div(b,d);
		d.style.background = blGrey[5];
		b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
    } //this.blr_Issue13 

       this.bll2= "";

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
