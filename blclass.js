function blClass() { 
    var _v 	= "v0.0.7";
    var _by = "xd";
    var _UI = function()
    {       	
    		var r = document.getElementById("d1");
    		if(!r) {
    			r 			= document.createElement("div"); 
                var html 	=  "blClass UI：";
                html		+= _v;
                html		+= " by " + _by;
        		r.innerHTML = html;
                r.style.border = "1px red solid";
        		document.body.appendChild(r); 
    		} 
            return r;
    }
    _eDiv = function(boss,id,html) { 
    	var r = document.getElementById(id);
    	if(!r) {
    		r 			= document.createElement("div");
        	r.id 		= id; 
            r.innerHTML = html;
        	boss.appendChild(r); 
    	}
    	return r; 
	}
    _ShowObj2Div = function(o2Show,idDiv) {  
    	var oBoss = document.getElementById(idDiv);
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
        var obj = o2Show;
    	for(i in obj)
    	{
      		var b = document.createElement("button");
      		b.id = b.innerHTML = i;
      		if(i[0]=="b"&&i[1]=="l") b.style.backgroundColor = "yellow";
      		oBoss.appendChild(b);
      		var d = document.createElement("div");
      		d.innerHTML = obj[i];
      		d.style.border = "blue 1px solid";
      		d.style.backgroundColor = "green";
      		d.style.color = "yellow";
      		oBoss.appendChild(d);
    	}
    }
    this.blVerl = "0.0.1";
    this.run = function()
    { 
        var m = _UI();
        var xd1 = _eDiv(m,"xd1","xd1"); 
        var d1 = _eDiv(m,"d1","d1HTML"); 
        d1.style.border = "1px blue solid";
        _ShowObj2Div(this,"xd1");
        _ShowObj2Div(document,"d1");
    }
} 
