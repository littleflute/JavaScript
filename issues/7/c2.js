function api2() {
    function _api2JobClass(){
        this.v = "v0.0. 23";
this.blrIssue8C = function(b,d){
		if(!d.v){
			d.v = blo0.blDiv(d,d.id+"v","v",blGrey[5]);
			d.v.innerHTML = "blrIssue8C <br>"; 
			function _loadIssue8Comments(o) {
				for(i in o){
					var a = o[i].body;
					var b = a.split("~~~html");
					var c = b[1].split("~~~"); 
					d.v.innerHTML += c[0]; 
					d.v.innerHTML += "<br>";
				}

			}
			w3.getHttpObject("https://api.github.com/repos/littleflute/JavaScript/issues/8/comments", _loadIssue8Comments);		
		}
		_on_off_div(b,d);
		
		b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
	} 
    }
var v = this.parentElement;
var d = blo0.blMDiv(v,v.id+"api2","api2",101,10,500,400,blGrey[5]);
if(!d.v){
    d.v = blo0.blDiv(d,d.id+"v","v",blColor[0]);
    blo0.blShowObj2Div(d.v, new _api2JobClass);
   if(bl$("blrIssue8C")){bl$("blrIssue8C").click();}
}
_on_off_div(this,d);
var b = this;
b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
 
}
