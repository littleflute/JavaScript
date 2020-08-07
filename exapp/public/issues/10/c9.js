//c9:
var p = bl$("id_div_4_api2_v"); p.title = "";
if(!p.v1){ 
     var b = blo0.blBtn(p, p.id + "_btn_4_v1", "v1_v0.0. 15", blColor[1]);
     var s = "#10-C9:";  
		s += "<a target='_blank' href='https://github.com/littleflute/JavaScript/edit/master/issues/10/c9.js'"
		s += " style='color:blue;'";		s +=">";		s += " c9.js*  ";		s += "</a>"; 
		s += "<a target='_blank'  href='https://littleflute.github.io/JavaScript/issues/10/c9.js'";
		s += " style='color:yellow;'";		s +=">";		s += " c9.js ";		s += "</a>"; 

     p.v1 = blo0.blDiv(p,p.id+"v1",s, blColor[4]);
     p.v2 = blo0.blDiv(p,p.id+"v2",s, blGrey[4]);
     p.v1.bs = []; 
     b.onclick = function(_this){ return function(){
          _on_off_div(_this,p.v1);
          _this.style.background = _this.style.background=="red"?blGrey[5]:blColor[4];    
    }
     }(b);
     b.click();
}
var n = p.v1.bs.length;
var b = blo0.blBtn(p.v1, p.v1.id + "_btn_" + n, n, blColor[n]);
b.onclick = function(_this,_v){
    return function(){  _v.innerHTML = _this.id;  }
}(b,p.v2);
p.v1.bs.push(b);
