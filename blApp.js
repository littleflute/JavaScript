  
function _myJobClass()
{
	this.v = "v0.0.42";
	this.blrIssue3C = function(b,d){
		if(!d.v){
			d.v = blo0.blDiv(d,d.id+"v","v",blColor[0]);
			d.v.innerHTML = "_loadIssue3Comments <br>"; 
			function _loadIssue3Comments(o) {
				for(i in o){
					var a = o[i].body;
					var b = a.split("~~~html");
					var c = b[1].split("~~~"); 
					d.v.innerHTML += c[0]; 
					d.v.innerHTML += "<br>";
				}

			}
			w3.getHttpObject("https://api.github.com/repos/littleflute/JavaScript/issues/3/comments", _loadIssue3Comments);		
		}
		_on_off_div(b,d);
	}
	this.blrAbout= function(b,d){		
		var s = "blrAboutMe<br>"; 
		s += "<a target='_blank' href='https://github.com/littleflute/JavaScript/edit/master/blApp.js'"
		s += " style='color:blue;'";
		s +=">";
		s += " blApp.js*  ";
		s += "</a>"; 
		s += "<a target='_blank'  href='blApp.js'";
		s += " style='color:yellow;'";
		s +=">";
		s += " blApp.js ";
		s += "</a>"; 
		d.innerHTML = s;
		_on_off_div(b,d);d.style.background = d.style.background=="red"?blGrey[5]:blColor[4];
	}
}
function CBlAppClass()
{
	var mfUI = blo0.blMDiv(document.body, "id_div_CXdMainFrame" , "blApp: v0.1. 223 " , 0,0,150,50, blColor[2]);  
	mfUI.style.position = "fixed"; 
	mfUI.b1 = blo0.blBtn(mfUI,mfUI.id+"b1","+",this.v,blGrey[0]);
	mfUI.v 	= blo0.blDiv(mfUI,mfUI.id + "v" , "mfUI.v" ,0,150,190,20,blColor[1]);   
	
	blo0.blShowObj2Div(mfUI.v,new _myJobClass);	

	mfUI.b1.onclick = function(){
		_on_off_div(this,mfUI.v);
	}
 	mfUI.b1.click();  	mfUI.b1.click(); 
}
 
var f = new CBlAppClass;    
