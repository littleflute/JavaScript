function api3() {
  function _api3JobClass(){
   var _nTime = 0;
   var _vTimer = null;
    this.v = "v0.0. 231";  
var _play = function(d){
  var p = bl$("id_mp3Player"); 	
 p.src = d.innerHTML;
p.play();
}
  var _makeMp3List2Div = function(d,txt){
      var _f = function (o){
        alert(o.body);
      }
      w3.getHttpObject("https://api.github.com/repos/littleflute/JavaScript/issues/9", _f);	
  }
   var _TimeFun = function(){	 				 	
       var p = bl$("id_mp3Player"); 	
      _nTime ++;
     if(_vTimer ) _vTimer.innerHTML = _nTime +  ": " + p.currentTime + "/" + p.duration;	 ;	 
   }	 
    this.blrMp3Player = function(b,d){
        if(!d.v){
            d.v = blo0.blDiv(d,d.id+"v","v",blColor[0]);
           _vTimer  = blo0.blDiv(d,d.id+"_vTimer ","_vTimer ",blColor[4]);

             var _f = "https://littleflute.github.io/bat/mp3/MereChristianity/cd1/00_Preface.mp3";
            blo0.blAudio (d.v,"id_mp3Player",_f);
            b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
        }
    }//this.blrMp3Player

    this.blrMp3List = function(b,d){ 
            if(!d.v){
                 d.v = blo0.blDiv(d,d.id+"v","v",blColor[0]); 

                 d.v4List = blo0.blDiv(d,d.id+"v4List ","v4List ",blColor[4]);
                 function _loadIssue9Comments(o) {
				for(i in o){ 
					 var btn = blo0.blBtn(d.v,d.v.id + "_btn_"+i, i+1,blColor[i]);
					 btn.txt = o[i].body; 
					 btn.onclick = function(_this){
					        return function (){_makeMp3List2Div(d.v4List,_this.txt);};
					 }(btn);
				}
			}
			w3.getHttpObject("https://api.github.com/repos/littleflute/JavaScript/issues/9/comments", _loadIssue9Comments);	
             }

		_on_off_div(b,d);		
		b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
    }//this.blrMp3List 
this.blrAboutI7C3= function(b,d){		
		var s = "blrAboutI7C3<br>"; 

		s += "<a target='_blank' href='https://github.com/littleflute/JavaScript/issues/7'"
		s += " style='color:blue;'";
		s +=">";
		s += "#7*  ";
		s += "</a>"; 

		s += "<a target='_blank' href='https://github.com/littleflute/JavaScript/edit/master/issues/7/c3.js'"
		s += " style='color:blue;'";
		s +=">";
		s += " c3.js*  ";
		s += "</a>"; 
		s += "<a target='_blank'  href='https://littleflute.github.io/JavaScript/issues/7/c3.js'";
		s += " style='color:yellow;'";
		s +=">";
		s += " c3.js ";
		s += "</a>"; 
		d.innerHTML = s;
		_on_off_div(b,d);
		d.style.background = blGrey[5];
		b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
	}//this.blrAboutI7C3

     setInterval(_TimeFun , 100);	
  }//_api3JobClass

var v = document.body;//this.parentElement;
var d = blo0.blMDiv(v,v.id+"api3","api3",101,10,500,400,blGrey[6]);
if(!d.v){
  d.v = blo0.blDiv(d,d.id+"v","v",blColor[0]);
  blo0.blShowObj2Div(d.v, new _api3JobClass); 
  if(bl$("blrMp3Player")){bl$("blrMp3Player").click();}
  if(bl$("blrMp3List")){bl$("blrMp3List").click();}
  if(bl$("blrAboutI7C3")){bl$("blrAboutI7C3").click();bl$("blrAboutI7C3").click();}
}
_on_off_div(this,d);
var b = this;
b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
}
