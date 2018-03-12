var _parseFun = function (d,txt){
      var str = "var a =" +  txt;  
     eval(str);
     d.innerHTML = "";
     var s = "<a href='https://github.com/littleflute/JavaScript/issues/9' target='_blank'>#9 <a/> "; 
     blo0.blDiv(d,d.id+"_#9_", s,blGrey[0]);
     blo0.blDiv(d,d.id+"_title_", a.title,blGrey[0]);

     for(i in a.songs){
           var dSong = blo0.blDiv(d,d.id+"_mp3_"+i, a.songs[i].mp3,blColor[i]);
           dSong .onclick = function(_this){ 
                return function(){ 
                   _play (_this);
                }
           }(dSong )
           dSong .onmouseover= function(_this){
                
                return function(){ _this.style.background = "blue";}
           }(dSong )
           dSong .onmouseout= function(_this){ 
                return function(){ _this.style.background = "grey";}
           }(dSong )
      }
  }
