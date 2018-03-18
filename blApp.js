 var _g_ver_blApp = "v0.2. 123";

function _myJobClass()
{
	this.blrToolBar = function(b,d){
		if(!d.tb){
			var tb = blo0.blDiv(d,d.id + "tb","",blGrey[3]);
			d.tb = tb;
			tb.innerHTML = "<a target='_blank' href='https://github.com/littleflute/JavaScript/issues/7'>#7</a>";
			tb.load = blo0.blBtn(tb,tb.id + "btnLoad","loadAPI",blGrey[5]);
			tb.load.onclick = function(){
			  w3.getHttpObject("https://api.github.com/repos/littleflute/JavaScript/issues/7/comments", tb.load.loadApiOK);
				tb.load.style.display = "none";
			}
			tb.load.loadApiOK = function (o) {

			  for(i in o){			     
			      tb.load.b1 = blo0.blBtn(tb,tb.load.id + "b" + i,"b" + i,blGrey[5]); 
			      tb.load.b1.onclick = function(_js){
				      return function(){
					      var a = "var f = " + _js;
					      eval(a); 
					      f();
				      }
			      }(o[i].body);
			  }
			}
			tb.load.click();
		}		
		_on_off_div(b,d);		
		b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
	}	
		
		
	this.blrIssue6C = function(b,d){
		if(!d.v){
			d.v = blo0.blDiv(d,d.id+"v","v",blGrey[5]);
			d.v.innerHTML = "blrIssue6C <br>"; 
			function _loadIssue6Comments(o) {
				for(i in o){
					var a = o[i].body;
					var b = a.split("~~~html");
					var c = b[1].split("~~~"); 
					d.v.innerHTML += c[0]; 
					d.v.innerHTML += "<br>";
				}

			}
			w3.getHttpObject("https://api.github.com/repos/littleflute/JavaScript/issues/6/comments", _loadIssue6Comments);		
		}
		_on_off_div(b,d);
		
		b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
	}
	this.blrAbout= function(b,d){		
		var s = "blrAboutMe<br>"; 
		s += "<a target='_blank' href='https://github.com/littleflute/JavaScript/edit/master/blApp.js'"
		s += " style='color:blue;'";
		s +=">";
		s += " blApp.js*  ";
		s += "</a>"; 
		s += "<a target='_blank'  href='https://littleflute.github.io/JavaScript/blApp.js'";
		s += " style='color:yellow;'";
		s +=">";
		s += " blApp.js ";
		s += "</a><br>"; 
		s += "<a target='_blank'  href='http://www.beautifullover.org'";
		s += " style='color:yellow;'";
		s +=">";
		s += " beautifullover ";
		s += "</a>"; 
		
		s += "<a target='_blank'  href='https://www.w3schools.com/lib/w3.js'";
		s += " style='color:yellow;'";
		s +=">";
		s += " w3.js ";
		s += "</a>"; 
		
		d.innerHTML = s;
		_on_off_div(b,d);
		d.style.background = blGrey[5];
		b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
	}
	
}
function CBlAppClass()
{
	var mfUI = null;
	var _btnApp = bl$("id_btn_4_blApp");
	if(_btnApp){
	    _btnApp.onclick = function(){
		    var d = _btnApp.parentElement;
		    mfUI = blo0.blMDiv(d, d.id + "_v_4_blApp" , "blApp: " + _g_ver_blApp, 0,0,150,50, blColor[3]);   
		    return function(){
			    _on_off_div(this,mfUI);
		    }
	    }
	}
	else{
	      mfUI = blo0.blMDiv(document.body, "id_div_CXdMainFrame" , "blApp: " + _g_ver_blApp , 0,0,150,50, blColor[2]);  
	}
			
	mfUI.style.position = "fixed"; 
	mfUI.b1 = blo0.blBtn(mfUI,mfUI.id+"b1","+",this.v,blGrey[0]);
	mfUI.v 	= blo0.blDiv(mfUI,mfUI.id + "v" , "mfUI.v" ,0,150,190,20,blColor[1]);   
	
	blo0.blShowObj2Div(mfUI.v,new _myJobClass);	

	mfUI.b1.onclick = function(){
		_on_off_div(this,mfUI.v);
		var b = this;
		b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
	}
 	mfUI.b1.click();   
	bl$("blrToolBar").click();	 
	bl$("blrIssue6C").click();	bl$("blrIssue6C").click();
	bl$("blrAbout").click();	bl$("blrAbout").click();
}
 
var f = new CBlAppClass;    

