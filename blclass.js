// file: blclass.js    by littleflute 
var g_ver_blClass = "blclass_v1.2.41"
function myAjaxCmd(method, url, data, callback){
	var xmlHttpReg = null;
	if (window.XMLHttpRequest){
	  xmlHttpReg = new XMLHttpRequest();
	}else{
	  xmlHttpReg = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlHttpReg.onreadystatechange = function (){
	  callback(xmlHttpReg);
	};
	xmlHttpReg.open(method, url, true);
	if(method == "PATCH" || method == "POST"){
		xmlHttpReg.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xmlHttpReg.send(JSON.stringify(data));
	}else if(method == "GET"){
		xmlHttpReg.setRequestHeader('If-Modified-Since', '0');
		xmlHttpReg.send(null);
	}
}
var _load_plx_btn = function(blo,oBoss,plxName,src, color ){
			var idBtn	= oBoss.id + plxName + "btn";
			var b		=  blo.blBtn(oBoss,idBtn,plxName,color);
			b.onclick = function(btn_){
				var v = null;
				var n = 0; 
				return function(){
					n++; 
					var idWrap	= oBoss.id + plxName + "wrap";
					v = blo.blDiv(oBoss,idWrap,"","green");  
					var srcHTML = "<a target='_blank' href=" + src + " style='color:white;'>" + plxName + "-source</a>";
					var ds	= blo.blDiv(v,oBoss.id + plxName + "src",srcHTML,"gray");

					var id		= "id_div_" + plxName;
					var dPlx = blo.blDiv(v,id,plxName + ":" + n,"gray"); 
					blo0.blScript("id_script_" + plxName,src);
					_on_off_div(btn_,v);
				}
			}(b);
		};
function _move_div(oDiv,dx,dy){
			var l = oDiv.style.left;
			l = parseInt(l);
			oDiv.style.left = l + dx + "px";

			var t = oDiv.style.top;
			t = parseInt(t);
			oDiv.style.top = t + dy + "px";
		}
function bl$(id){	return document.getElementById(id); }
var QueryString = function () 
{
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  } 
  return query_string;
}(); 

var blColor	= ["red","tomato","gold","black","green","blue","lightblue","yellow","brown","pink","gray","white","mediumpurple",
	"cyan"];
var blGrey	= ["Gainsboro","LightGray","Silver","DarkGray",
			   "DimGray","Gray","LightSlateGray","SlateGray","DarkSlateGray","black"];

var blon = function(b,d,c1,c2){
	if(b.b){
		b.b = false;
		b.style.backgroundColor = c1;
		d.style.display="none"; 
	}
	else{
		b.b = true;
		b.style.backgroundColor = c2;
		d.style.display="block";
	}
}
	var _blMove = function(o,x,y){o.style.left = x;o.style.top = y;};
	function _on_off_div(b,d){if(d.style.display=="block"){d.style.display="none"; b.style.backgroundColor="red"; }else{d.style.display="block"; b.style.backgroundColor="green"; }};
	function _on_off_bd_1(b,d){ 
		if(b.bOnOff){
			b.bOnOff = false;
			b.style.backgroundColor="green"; 
		}
		else{
			b.bOnOff = true;
			b.style.backgroundColor="red"; 
		}
		if(d.style.display=="block"){
			d.style.display="none"; 
		}
		else{
			d.style.display="block";
		}
	}
	function _on_off_bd(b,d){  
		if(b.innerHTML=="+"){
			b.innerHTML = "-";
			b.style.backgroundColor="green"; 
		}
		else{
			b.innerHTML = "+";
			b.style.backgroundColor="red"; 
		}
		if(d.style.display=="block"){
			d.style.display="none"; 
		}
		else{
			d.style.display="block";
		}
	}
	function _getXY(){
			
			var scrlY =document.body.scrollTop;
			var scrlX =document.body.scrollLeft;
			var r = {};
			r.x=event.clientX+scrlX;
			r.y=event.clientY+scrlY; 
			return r;
	}

function blClass ()
{ 
    var _id = "id_div_4_blClass";
    this.v = g_ver_blClass;
	function _blhMakeLink(txt,href,style,target){
		var r = "";
		r += "<a href='" + href + "' ";
		r += " style=" + style;
		r += " target=" + target;
		r +=">" + txt; 
		r += "</a>";   
		return r;
	}
    this.blhMakeLink = function (txt,href,style,target) { return _blhMakeLink(txt,href,style,target); } 
    this.blrMax = function (b,d)
    {        
		 d.parentElement.parentElement.style.left = 0+"px";
		 d.parentElement.parentElement.style.top = 0+"px";
		 d.parentElement.parentElement.style.width = "100%";
	}
	this.blrAboutMe= function(b,d){		
		var s = ""; 
		s += _blhMakeLink('blclass.js ','https://littleflute.github.io/JavaScript/blclass.js','color:skyblue;','_blank');
		s += _blhMakeLink(' blclass.js*','https://github.com/littleflute/JavaScript/edit/master/blclass.js','color:skyblue;','_blank');
		d.innerHTML = s;
		_on_off_div(b,d);
	}
	this.blhInitUI		= function(divUI){	
		var divMove		= blo0.blMDiv(document.body,_id,"divShowMe_divMove_blClass",550,150,500,200,blColor[8]);
		var dMe			= blo0.blDiv(divMove,divMove.id + "ShowMe","divShowMe",blColor[6]);
		var dUI			= blo0.blDiv(divUI,divUI.id + "_initUI_blClass" + this.v,this.v,"green");
		var b1			= blo0.blBtn(dUI,"blhInitUI_btn1","[blClass]",blColor[8]);
		b1.onclick		= function(this_){	return function(){ 	blo0.blShowObj2Div(dMe,this_);_on_off_div(this,divMove);}}(this);
		
	};
    this.blCreatePage = function (titleTxt,bodyHtml){
		var r = "";
		r	+= "<HTML><HEAD><TITLE>";
		r	+= titleTxt;
		r	+= "</TITLE></HEAD>";
		r	+= "<body>";
		r	+= bodyHtml;
		r	+= "</body></HTML>";

		return r;
	};
    this.blPageCoor = function (element){
  	var c= { X : 0, Y : 0 }; 
 	 while (element){
    		c.X += element.offsetLeft;
    		c.Y += element.offsetTop;
    		element = element.offsetParent;
  	}
 	return c;
    }
    this.blHandle = function (oBoss,id,x,y,w,h,bkClr){
		var x1 = 0;
		var y1 = 0; 
        var r = document.getElementById(id);
        if(!r){
            r = document.createElement("div");
            r.id = id;
    	    r.innerHTML = ""; 
            r.style.backgroundColor=bkClr?bkClr:"gold";
			r.style.position = "absolute";
			r.style.left		= x+"px";
			r.style.top			= y+"px";
			r.style.width		= w+"px";
			r.style.height		= h+"px";
			r.style.cursor		= "default";
    	    if(oBoss!=null)oBoss.appendChild(r);
		}	
		var divMoveHandle	= this.blDiv(r,id+"divMoveHandle","",bkClr);
		divMoveHandle.style.cursor		= "move"; 
		
		divMoveHandle.style.width		= "100%"; 
		divMoveHandle.style.height		= "100%"; 
		var dm = r;
		divMoveHandle.onmousedown = function(){
			var c = _getXY(); 
			x1 = c.x;
			y1 = c.y;
			return false;
		};
		divMoveHandle.onmousemove = function(){
			var c = _getXY(); 
			if(x1==0 &&y1==0) return false; 
			_move_div(dm,c.x-x1,c.y-y1);
			x1 = c.x;
			y1 = c.y;
			return false;
		};
		divMoveHandle.onmouseup = function(){
			var c = _getXY(); 
			x1 = 0;
			y1 = 0; 
		}; 
		divMoveHandle.onmouseout = function(){
			var c = _getXY(); 
			x1 = 0;
			y1 = 0; 
		};  
        return r;
    }
    this.blMDiv = function (oBoss,id,html,x,y,w,h,bkClr){
		var x1 = 0;
		var y1 = 0; 
        var r = document.getElementById(id);
        if(!r){
            r = document.createElement("div");
            r.id = id;
    	    r.innerHTML = html; 
            r.style.backgroundColor=bkClr?bkClr:"gold";
			r.style.position = "absolute";
			r.style.left		= x+"px";
			r.style.top			= y+"px";
			r.style.width		= w+"px";
			r.style.height		= h+"px";
			r.style.cursor		= "default";
    	    if(oBoss!=null)oBoss.appendChild(r);
		}	
		var divMoveHandle	= this.blDiv(r,id+"divMoveHandle","divMoveHandle","skyblue");r.handle = divMoveHandle;
		divMoveHandle.style.cursor		= "move";
		var main	= this.blDiv(r,id+"main","main","lightblue");r.main = main;
		var dm = r;
		divMoveHandle.onmousedown = function(){
			var c = _getXY();
			main.innerHTML = "down:" + c.x + "," + c.y;
			x1 = c.x;
			y1 = c.y;
			return false;
		};
		divMoveHandle.onmousemove = function(){
			var c = _getXY();
			main.innerHTML = "move:" + c.x + "," + c.y; 
			if(x1==0 &&y1==0) return false;
			_move_div(dm,c.x-x1,c.y-y1); 
			if(dm.followDiv){_move_div(dm.followDiv,c.x-x1,c.y-y1);}
			
			x1 = c.x;
			y1 = c.y;
			return false;
		};
		divMoveHandle.onmouseup = function(){
			var c = _getXY();
			main.innerHTML = "up:" + c.x + "," + c.y; 
			x1 = 0;
			y1 = 0; 
		}; 
		divMoveHandle.onmouseout = function(){
			var c = _getXY();
			main.innerHTML = "out:" + c.x + "," + c.y; 
			x1 = 0;
			y1 = 0; 
		};  
        return r;
    }
    this.blMD = function(id,html,x,y,w,h,bkClr){
	    	var md = this.blDiv(document.body, id, g_ver_blClass + ":" + html,bkClr);  
		if(!md.run){
		    md.run = true; 
			var style ="position: absolute;";
			style += "z-index: 9;";
			style += "background-color: #f1f1f1;";
			style += "text-align: center;";
			style += "border: 1px solid #d3d3d3;";
			style += "left: 400px";
			style += "top: 40px";
			md .style =style;

			var title = blo0.blDiv(md , md.id + "Header", "Header");
			style ="padding: 10px;";
			style += "z-index: 10;";
			style += "cursor: move;";
			style += "text-align: center;";
			style += "border: 1px solid #fff;";
			style += "background-color: #2196F3;";
			title.style =style;

			blo0.blMakeDivMovable(md );
			md.style.left = x+"px";
			md.style.top = y+"px";
			md.style.width = w+"px";			
			md.style.height = h+"px";
		}
	    	return md;
    }
    _blShowObj2Div_all = function (oBoss,obj,l) //blclassdbg 1039
    {	  
        oBoss.innerHTML = "";
        for(i in obj)
		{
			var bOK = i.charAt(0)=="b"&&i.charAt(1)=="l"&&i.charAt(2)=="r"; 
			if(!bOK) continue;

			  var b = document.createElement("button");
			  b.id = b.innerHTML = i;
			  var color = "gray";
			  if(1==l) color = "blue";
			  else if( 2==l) color = "pink";
			  else if( 3==l) color = "red";

			  b.style.backgroundColor = color;
			  if(i.charAt(0)=="b"&&i.charAt(1)=="l") b.style.backgroundColor = "yellow";
			  oBoss.appendChild(b);
			  var d = document.createElement("div");
			  if("object" == typeof obj[i])
			  {
					_blShowObj2Div_all(d,obj[i],l+1);
			  }
			  else{
				d.innerHTML = obj[i];
			  }
			  d.style.border = "blue 1px solid";
			  d.style.backgroundColor = "green";
			  d.style.color = "yellow";
			  oBoss.appendChild(d);

			  
			  if(bOK){
				b.style.backgroundColor = "red";
				d.innerHTML = ""; 
				d.id = b.id + "Div";
				b.onclick = function(i_,b_,v_,o_){
					return function(){
						var go = obj[i_];
						if (typeof go == "function") {
			    			go(b_,v_,o_);
						}
					} 
				}(i,b,d,obj);
			  }
		}		 
	}
    this.blShowObj2Div_all = function (oBoss,obj,l) 
    {	 
        _blShowObj2Div_all(oBoss,obj,l);	 
	}
    this.blShowObj2Div = function (oDivBoss,obj)
    {	 
		_blShowObj2Div(oDivBoss,obj);
		 
	}
    _blShowObj2Div = function (oDivBoss,obj)
    {        
        var oBoss = oDivBoss;
        if(!oBoss) {
           oBoss = document.createElement("div");
           oBoss.id = "divBlShowObj";
           oBoss.style.border = "green 1px solid";
           document.body.appendChild(oBoss);
        } 
        if(!oBoss){
            alert("boss error!");return;
        }
        oBoss.innerHTML = "";
        for(i in obj)
		{
			  var b = document.createElement("button");
			  b.id = b.innerHTML = i;
			  b.style.backgroundColor = "gray";
			  if(i.charAt(0)=="b"&&i.charAt(1)=="l") b.style.backgroundColor = "yellow";
			  oBoss.appendChild(b);
			  var d = document.createElement("div");
			  d.innerHTML = obj[i];
			  d.style.border = "blue 1px solid";
			  d.style.backgroundColor = "green";
			  d.style.color = "yellow";
			  oBoss.appendChild(d);

			  if(i.charAt(0)=="b"&&i.charAt(1)=="l"&&i.charAt(2)=="r"){
				b.style.backgroundColor = "red";
				d.innerHTML = ""; 
				d.id = b.id + "Div";
				b.onclick = function(i_,b_,v_){
					return function(){
						var go = obj[i_];
						if (typeof go == "function") {
			    			go(b_,v_);
						}
					} 
				}(i,b,d);
			  }
			  if(i.charAt(0)=="b"&&i.charAt(1)=="l"&&i.charAt(2)=="l"){ 
					b.style.display = "none";	//v1033	 xdvc6
					d.id			= d.html;	 
			  }
			  if(i.charAt(0)=="b"&&i.charAt(1)=="l"&&i.charAt(2)=="h"){ 
					b.style.display = "none";	//v1034	 xdvc6	
					d.style.display = "none";	//v1034	 xdvc6	
			  }
		}
    }    

	this.blAudio = function (oBoss,id,src)					
 	{  								
   		var s = "";							 
	   	s += "<";						 
	   	s += "audio id=";						
   		s += id;							
	   	s += " controls>";								 
	   	s += "<source src='";
		s += src;
		s += "' type='audio/mpeg'>";		 
		s += "Your browser does not supoort hte audio element"				
	   	s += "</audio>";								 
	   	oBoss.innerHTML = s;						 
	 }	

	this.blScript = function (id,src){
    		var r = document.getElementById(id);
    		if(!r){
        		r = document.createElement("script");
        		r.id = id;
    		}
    		r.src = src; 
    		document.body.appendChild(r);
    		return r;
	}

    this.blAjx = function(worker,href)
    {
        var xmlhttp;
        if (window.XMLHttpRequest)
        {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp=new XMLHttpRequest();
        }
        else
        {// code for IE6, IE5
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange=function()
        {
            if (xmlhttp.readyState==4 && xmlhttp.status==200){
               worker._2do(xmlhttp.responseText);
            }
			else{
              // worker._error("xmlhttp.status:" + xmlhttp.status);
			}
        }
        xmlhttp.open("GET",href,true);
        xmlhttp.send();
    }

    this.blDiv = function (oBoss,id,html,bkClr){
        var r = document.getElementById(id);
        if(!r){
            r = document.createElement("div");
            r.id = id;
    	    r.innerHTML = html; 
            r.style.backgroundColor=bkClr?bkClr:"gray";
    	    if(oBoss!=null)oBoss.appendChild(r);
        }
        return r;
    }
    this.blTextarea = function (oBoss,id,html,bkClr){
        var r = document.getElementById(id);
        if(!r){
            r = document.createElement("Textarea");
            r.id = id;
    	    r.innerHTML = html; 
            r.style.backgroundColor=bkClr?bkClr:"gray";
    	    if(oBoss!=null)oBoss.appendChild(r);
        }
        return r;
    }

    this.blBtn = function (oBoss,id,html,bkClr){
        var r = document.getElementById(id);
        if(!r){
            r = document.createElement("button");
            r.id = id;
    	    r.innerHTML = html; 
            r.style.backgroundColor=bkClr?bkClr:"green";
    	    if(oBoss!=null)oBoss.appendChild(r);
        }
        return r;
    }
    this.blLink = function (oBoss,id,html,href,bkClr){
        var r = document.getElementById(id);
        if(!r){
            r = document.createElement("a");
    	    var t = document.createTextNode(html);
    	    r.setAttribute("href", href);
            r.id = id; 
    	    r.style.backgroundColor = bkClr?bkClr:"blue";
        }
        r.innerHTML = html + " "; 
        oBoss.appendChild(r);
        return r;
    }

    this.blMakeDivMovable = function (elmnt) {
      	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
		var idHeader = document.getElementById(elmnt.id + "Header");
      	if (idHeader) {
        	/* if present, the header is where you move the DIV from:*/
        	idHeader.onmousedown = dragMouseDown;
      	} else {
        	/* otherwise, move the DIV from anywhere inside the DIV:*/
        	elmnt.onmousedown = dragMouseDown;
      	}

      	function dragMouseDown(e) {
        	e = e || window.event;
        	// get the mouse cursor position at startup:
        	pos3 = e.clientX;
        	pos4 = e.clientY;
        	document.onmouseup = closeDragElement;
        	// call a function whenever the cursor moves:
        	document.onmousemove = elementDrag;
		if (idHeader) {
        		idHeader.innerHTML = pos3 + "," + pos4;
      		}	
      	}

      function elementDrag(e) {
        e = e || window.event;
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }

      function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
      }
	}
	this.sXY = function(x,y){
		return " ["+x+","+y+"]";
	}
	
}//END: function blClass ()
 
var blo0 = new blClass;
 
blo0.lsCVS = [];
var mousedownList = [];
var mouseupList = [];
var mousemoveList = [];

function CBtn(_x,_y,_w,_h,_c,callback){ 
	var x = _x, y=_y,w=_w,h=_h,c=_c;
	this.draw=function(cvs){
		blo0.blRect(cvs,x,y,w,h,c); 
	} 
	this.click = function(xx,yy){
		if(blo0.blPiR(xx,yy,x,y,w,h)){
			callback();
		}
	}
}
function CRectBtn(_x,_y,_w,_h,_c1,_c2){ 
	var x = _x, y=_y,w=_w,h=_h,c1=_c1,c2=_c2;
	var c = c1;
	var b = false;
	this.draw=function(cvs){
		blo0.blRect(cvs,x,y,w,h,c); 
	}
	this.click = function(_x,_y){
		if(blo0.blPiR(_x,_y,x,y,w,h)){
			if(!b){
				b=true;		
				c=c2;
			}
			else{
				b=false;
				c=c1;
			}
		}
	}
	this.getStatus = function(){return b;}
	this.setStatus = function(_b){b = _b;c=c1;}
	this.setXY = function(_x,_y){x=_x; y=_y;}
}
function C1Script(_id,_x,_y){
	var id = _id;
	var z = _id;
	var x = _x, y = _y; 
	var w = 15, h = 15;
	var X = x+50+id*100, Y=y+11,W=100,H=100;
	var C = "lightgrey";
	var clickTest = "clickTest:";
	var clickInScreen = "clickInScreen:";
	var m =false;
	var r = new CRectBtn(x,y,w,h,"white","yellow");
	var rc = new CRectBtn(X,Y,w,h,"brown","yellow");

	this.getZ = function(){return z;}
	this.setZ = function(_z){  z=_z;}
	this.getX = function(){return X;}
	this.getY = function(){return Y;}
	this.getW = function(){return W;}
	this.getH = function(){return H;}
	this.setC = function(_c){C = _c;}
	this.inScriptScreen = function(_x,_y){		return blo0.blPiR(_x,_y,X,Y,W,H);	}

	this.draw1Script = function(cvs){   
		r.draw(cvs);
		if(r.getStatus()){
			blo0.blRect(cvs,X,Y,W,H,C);
			blo0.blText(cvs,"id=" + id + " z="+z,X+W/4,Y+H/5,12,"green");
			blo0.blText(cvs,clickInScreen,X+W/12,Y+H/3,12,"brown");
			blo0.blText(cvs,clickTest,X+W/12,Y+H/2,12,"blue");
			rc.draw(cvs);
		}
	} 
	this.click1script = function(_x,_y){    
		r.click(_x,_y);
		if(r.getStatus()){			
			rc.click(_x,_y);	
		}
		if(m){
			X = _x;
			Y = _y;
			m = false;		
			rc.setStatus(false);	
			rc.setXY(_x,_y); 
		}
		if(rc.getStatus()){
			m = true;
		}	 	
		else{
			m = false;
		}

		var d = new Date();
		var n = d.toLocaleTimeString();
		clickTest = n;

		if(blo0.blPiR(_x,_y,X,Y,W,H)){
			clickInScreen = n;
		}
	} 
}
function CScriptMng(){
	const CC = "lightgrey";
	const CC1 = "darkseagreen";
	const CC2 = "lightblue";
	var ls = [];
	var saj = "saj:";
	var clickDbg = "clickDbg:";
	var x = 10;
	var y = 55;
	var w = 20;
	var h = 20;
	var X = 444;
	var Y = 55;
	var W = 200;
	var H = 200;
	var c = CC; 
	var m = false;
	var clickScripts = "clickScripts";
	var clickInClientScripts = "clickInClientScripts";
	var v = "CScriptMng: v0.13";
	var r = new CRectBtn(x,y,w,h,CC,CC2);
	var r1 = new CBtn(x+20,y,w,h,CC1,function(){
		var n = ls.length;
		var s = new C1Script(n,x,y+60+30*n);
		ls.push(s);
	});	
	var rc = new CRectBtn(X,Y,w,h,CC,CC1);
 
	this.clickList = function(_x,_y){ 
		var l = ls.length;
		for(var z = l; z>=0;z--){
			for(i in ls){
				if(ls[i].getZ()==z&&ls[i].inScriptScreen(_x,_y)){					
					clickDbg = "clickDbg:z=" +ls[i].getZ();
					ls[i].setC( "lightblue");	
					for(j in ls){
						if(ls[j].getZ()>ls[i].getZ()){
							ls[j].setZ(ls[j].getZ()-1);
							ls[j].setC( "lightgrey");
						}
					}
					ls[i].setZ(ls.length-1);
					z=-1;
					break;
				}
				else{
					ls[i].setC( "lightgrey");
				}
			}
		}
	} 
	this.drawMng = function(cvs,_w,_h){  
		W = _w/5;
		H = _h/2;
		r.draw(cvs);
		if(r.getStatus()){
			blo0.blRect(cvs,X,Y,W,H,CC2);
			rc.draw(cvs);

			r1.draw(cvs);
			var n = ls.length;

			blo0.blText(cvs,clickDbg,X+W/12,Y+H/1.1,12,"red");
			blo0.blText(cvs,saj,X+W/12,Y+H/6,12,"red");
			blo0.blText(cvs,v+" n="+n,X+W/12,Y+H/2,12,CC1);
			blo0.blText(cvs,clickScripts,X+W/12,Y+H/4,12,"blue");
			blo0.blText(cvs,clickInClientScripts,X+W/12,Y+H/3,12,"brown");

			this.drawList_z_0_n(cvs,X+W/18,Y+H/1.8,"brown"); 
		}
	} 
	this.drawList_z_0_n = function(cvs,_x,_y,_c)
	{
		blo0.blRect(cvs,_x,_y,20,20,_c);
		blo0.blText(cvs,"z-0-n:",_x,_y,_c);
		var n = 0;
		var l = ls.length;
		blo0.blText(cvs,n,_x+n*15+20,_y+22,"blue");
		for(var z = 0;z<=l;z++){
			blo0.blText(cvs,n,_x+n*15+20,_y+22,"green");
			for(i in ls){
				if(z==ls[i].getZ()){
					blo0.blText(cvs,i,_x+n*15+20,_y*33,"blue");
					ls[i].draw1Script(cvs);
				}
			}

			n++;
		}

	}
	this.clickMng = function(_x,_y){  
		var now = new Date();
		var s = now.toLocaleTimeString();
		clickScripts = s;
		if(blo0.blPiR(_x,_y,X,Y,W,H) && !(blo0.blPiR(_x,_y,x,y,w,h))){
			var d = new Date();
			var n = "clickInClientScripts: " + d.toLocaleTimeString();
			clickInClientScripts = n;
		}

		r.click(_x,_y);	
		if(r.getStatus()){
			rc.click(_x,_y);	
			r1.click(_x,_y);	
			for(i in ls){
				ls[i].click1script(_x,_y);
			}	
		}	
		if(m){
			X = _x;
			Y = _y;
			m = false;		
			rc.setStatus(false);	
			rc.setXY(_x,_y); 
		}
		if(rc.getStatus()){
			m = true;
		}	 	
		else{
			m = false;
		}

		this.clickList(_x,_y); 
	}   
}; 

 
blo0.blPiR = function(x,y,x1,y1,w1,h1){
	if(x<x1|| x>x1+w1 || y<y1 || y>y1+h1){
		return false;
	}
	else {
		return true;
	}
}
blo0.regCVS = function(o){
	blo0.lsCVS.push(o);
}
blo0.regMousedown = function(o){
	mousedownList.push(o);
}
blo0.regMouseup = function(o){
	mouseupList.push(o);
}
blo0.regMousemove = function(o){
	mousemoveList.push(o);
}
blo0.initDraw = function(cvs,_x,_y,_c){
	for(i in blColor){blo0.blRect(cvs,_x+i*20,_y+5,10,10,blColor[i]);}
	for(i in blGrey){blo0.blRect(cvs,_x+i*20,_y+25,10,10,blGrey[i]);}
}
blo0.blCanvase = function(d,w,h,color){
	var cvs = document.createElement("canvas");
	cvs.width = w;
	cvs.height = h;
	d.appendChild(cvs);
	cvs.style.float = "left";

	cvs.addEventListener('mousedown', function (e) {
		var x = e.offsetX;
		var y = e.offsetY;
		blo0.scm.clickMng(x,y);

		for(i in mousedownList){
			if(mousedownList[i].onMousedown) mousedownList[i].onMousedown(x,y);
		}
	});

	cvs.addEventListener('mouseup', function (e) {
		var x = e.offsetX;
		var y = e.offsetY; 

		for(i in mouseupList){
			if(mouseupList[i].onCVSMouseup) mouseupList[i].onCVSMouseup(x,y);
		}
	});
	cvs.addEventListener('mousemove', function (e) {
		var x = e.offsetX;
		var y = e.offsetY; 

		for(i in mousemoveList){
			if(mousemoveList[i].onCVSMousemove) mousemoveList[i].onCVSMousemove(x,y);
		}
	});
	
	var fTimer = function(_o,_ls,_cvs){
		blo0.scm = new CScriptMng;
		return function(){
			_o.blRect(_cvs,0,0,_cvs.width,_cvs.height,"grey");	
			_o.initDraw(_cvs,10,10,"brown");

			blo0.scm.drawMng(_cvs,_cvs.width,_cvs.height);
			var n = blo0.lsCVS.length; 
			var s = "[==="+n+"] ";
			for(var i = 0; i < n; i++){
				var r = _ls[i].draw(_cvs);
				s += ":";
				s += r;
			}
			s += Date();
			_o.blText(_cvs,s,60,11,11,"white");
		}
	}(blo0,blo0.lsCVS,cvs);

	var interval = setInterval(fTimer, 20);
	return cvs;
}
blo0.blGetGHI = function(_url,cb){  
	var r = "blo0.blGetGHI： "+ _url + "_" + cb + ":"+ Date();
	var token = "f89b0eccf7"+"4c65a65513"+"60062c3e47"+"98d0df4577";//jp
	var xdToken = "023b4e4f"+"a78cff90"+"8afa75bf"+"072567053"+"3bacc60";
	var url = "https://api.github.com/repos/jeremyjia/Games/issues/comments/526806470?access_token="+xdToken;
	//*
	myAjaxCmd('GET',url, null, readCallBack);

	function readCallBack(resp){
		if(resp.readyState == 4){
		  if(resp.status==200){
			  var msg = JSON.parse(resp.responseText);
			  if(msg.body==null || msg.body==""){
				allMsg ="";
			  }else allMsg=msg.body;
			  cb(allMsg);
		  }else{
			alert("The status code:"+resp.status); 
		  }
		}			 
	 }
	 //*/
	return r;
}
blo0.blRect = function(cvs,x,y,w,h,color){
	var ctx = cvs.getContext("2d");
	ctx.fillStyle = color;
	ctx.fillRect(x,y,w,h);	
}
blo0.blText = function(cvs,txt,x,y,size,color){
	var ctx = cvs.getContext("2d");
	ctx.font = size + "px Arial";
	ctx.fillStyle = color;
	ctx.fillText(txt, x,y);
	return cvs;
}
blo0.dbgBtn = function(tb,txt,c1,c2,cbDraw,cbMousedown,cbMouseup,cbMousemove){
	var x = 110; var y =120; var w = 100; var h = 100;
	var x0 = 0; var y0 =0; var dx = 0; var dy = 0;
	var isDown = false;
	var b = blo0.blBtn(tb,tb.id+txt,txt,c1);	
	b.style.float = "right";
	b.onclick = function(){
		blon(b,null,c1,c2);
	}
	b.draw = function(cvs){
		if(b.b){
			if(cbDraw) cbDraw(cvs,x,y,w,h);
			blo0.blText(cvs,"down="+isDown,x+55,y,20,"yellow");
		}
	}
	b.onMousedown = function(_x,_y){
		if(b.b){ 
			if(blo0.blPiR(_x,_y,x,y,w,h)){
				if(cbMousedown) cbMousedown(b,_x,_y);
			}
			x0 = _x; y0 = _y;
		}
	}
	b.onCVSMouseup = function(_x,_y){
		if(b.b){  
			if(cbMouseup) cbMouseup(b,_x,_y);
			x0 = 0; y0 = 0;
		}
	}
	b.onCVSMousemove = function(_x,_y){
		if(b.b){  
			dx = _x - x0; dy = _y -y0; x0 = _x; y0 = _y;
			if(isDown) b.move(dx,dy);
			if(cbMousemove) cbMousemove(b,_x,_y);
		}
	}
	b.setX = function(_x,_y){
		x = _x; y = _y;
	}
	b.move = function(_dx,_dy){
		x += _dx; y += _dy;
	}
	b.getDown = function(){return isDown;}
	b.setDown = function(_b){ isDown = _b;}
	blo0.regCVS(b);	
	blo0.regMousedown(b);
	blo0.regMouseup(b);
	blo0.regMousemove(b);
	return b;
}