//js4:
function _jobClass(a){
    var _nTime = 0; _vTimer = null;var _t = null;  
    this.v="v0.0. 43";
    this.blrJS4Go = function(b,d){	 				 	
       if(!d.v){d.v = blo0.blDiv(d,d.id+"v","v","grey"); }
       _on_off_div(b,d);
       b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];	 
   }
    this.blrTimer = function(b,d){  				 	
        if(!_t){_vTimer = d;_nTime =0; _t=setInterval(_TimeFun , 100);
          b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
        }		 	
        //else{clearInterval(_t);_t=null;}
   }
    var _TimeFun = function(){	  
      _nTime ++;
     if(_vTimer ) _vTimer.innerHTML = _nTime + ": " + a.currentTime + "/" + a.duration;	 ;;	 
   }
    
this.blrAboutPlx4= function(b,d){		
		var s = "blrAboutPlx4<br>";  

		s += "<a target='_blank' href='https://github.com/littleflute/JavaScript/edit/master/issues/10/c4.js'"
		s += " style='color:blue;'";		s +=">";		s += " c4.js*  ";		s += "</a>"; 
		s += "<a target='_blank'  href='https://littleflute.github.io/JavaScript/issues/10/c4.js'";
		s += " style='color:yellow;'";		s +=">";		s += " c4.js ";		s += "</a>"; 
		d.innerHTML = s;
		_on_off_div(b,d);
		d.style.background = blGrey[5];
		b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
	}//this.blrAboutPlx4
}
var m = document.getElementsByTagName("audio");
if(!m.plx){
    m.plx = blo0.blMDiv(document.body,"id_mdiv_auio1_plx","plx4Audio:"+m.length,300,100,300,200,blGrey[0]);
    m.plx.v = blo0.blDiv(m.plx,m.plx.id+"v","v",blGrey[1]);
    
}
var j = new _jobClass(m[m.length-1]);
blo0.blShowObj2Div(m.plx.v,j);
bl$("blrJS4Go").click();bl$("blrTimer").click();
//_on_off_div(null,m.plx);
