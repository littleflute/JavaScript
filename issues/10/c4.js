//js4: Timer
function _jobClass( _as ){ 
    this.v="v0.0. 211";
    this.blrTempo = function(b,d){  				 	
        if(!d.v){
           d.v = blo0.blDiv(d,d.id+"v","v",blColor[0]);
           d.v1 = blo0.blDiv(d,d.id+"v1","v1",blColor[4]);
           d.v.b0 = blo0.blBtn(d.v,d.v.id+"b0","b0",blGrey[0]); 
           d.v.b1 = blo0.blBtn(d.v,d.v.id+"b1","b1",blGrey[1]); 
           var t1 = 0, t2 = 0;
           d.v.b0.onclick = function(){ 
                t1 = new Date();d.v1.innerHTML = "";
           }
           d.v.b1.onclick = function(){ 
                t2 = new Date();
                var ms = t2.getTime() - t1.getTime();
                var fpm = 10/ms * 60*1000;
                var s = ms + " :  fpm=" + fpm;
                var vt = blo0.blDiv(d.v1,d.v1.id+t2,s,blColor[4]);
           }
        }        
   }
    this.blrTimer = function(b,d){  				 	
        if(!_as.plx.timer){ 
           _as.plx.timer =setInterval(_TimeFun , 100);        
           
        }		 	
       _as.plx.timverV = d;
       _on_off_div(b,d);       b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];	        
   }
    var _TimeFun = function(){	      
      var a = _as[0];
      if(!a.n) a.n = 0;
      a.n ++;
      _as.plx.timverV.innerHTML = a.n + ": " + a.currentTime + "/" + a.duration;	 ;;	 
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
var j = new _jobClass(m);
blo0.blShowObj2Div(m.plx.v,j);
bl$("blrTimer").click();
bl$("blrAboutPlx4").click();
//_on_off_div(null,m.plx);
