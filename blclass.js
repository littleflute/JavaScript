function blClass() {
    this.v = "0.0.1";
    this.by = "littleflute";
}
blClass.prototype.eDiv = function(boss,id) { 
    var r = document.getElementById(id);
    if(!r) {
    	r 		= document.createElement("div");
        r.id 	= id;
        r.blObj = this;
        boss.appendChild(r); 
    }
    return r; 
};

blClass.prototype.eBtn = function(boss,id,html,f) { 
    var r = document.getElementById(id);
    if(!r) {
    	r 		= document.createElement("button");
        r.id 	= id;
        r.blObj = this;
        boss.appendChild(r); 
    } 
    r.innerHTML = html; 
    r.onclick = f;
    return r; 
};

blClass.prototype.fShowObj2Div = function(o,idDiv) { 
    var r = document.getElementById(idDiv);
    if(!r) {
    	r 		= document.createElement("div");
        r.id 	= idDiv;
        r.blObj = this;
        boss.appendChild(r); 
    } 
    var n = 0;
    for(i in o)
    {
    	n++;
        var idShow = "s_"+n;
        var b = this.eBtn(r,idShow,i,null);
    }
    return r; 
};

blClass.prototype.fTest = function() { 
    var blc1 = this;
    var d1 = blc1.eDiv(document.body,"d1");
	d1.innerHTML = "blClass test";
	d1.style.border = "1px red solid";
 

	var d2 = blc1.eDiv(d1,"d2");

	d2.style.border = "1px green solid";
	function f(){
   		this.blObj.fShowObj2Div(this.blObj,"d3");
	}
	var b1 = blc1.eBtn(d2,"b1","test",f);
	var d3 = blc1.eDiv(d1,"d3");
	d3.style.border = "1px blue solid";

};
