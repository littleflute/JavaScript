//
function blIsseuClass(_d){
    this.v = "v0.0. 31 - ";
    this.blr_src_blIssueClass = function(b,d){	
        if(!d.v){
             d.v = blo0.blDiv(d, d.id + "v", "", blGrey[0]);
             d.v.ta = blo0.blTextarea (d.v, d.v.id + "ta", "ta", blGrey[5]);
             d.v.ta.style.width = "95%";
             d.v.ta.style.height = "200px";
             function _loadIssue11 (o) { 
                                   d.v.ta.value = o.body;	
             }
            var url = "https://api.github.com/repos/littleflute/JavaScript/issues/11";
             w3.getHttpObject(url, _loadIssue11);
        }
		_on_off_div(b,d);
		d.style.background = blGrey[5];
		b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
    } //this.blr_src_blIssueClass
    this.bll1 = "";
    this.blr_about_blIssueClass = function(b,d){		
		var s = "blIssueClass <br>";  

		s += "<a target='_blank' href='https://github.com/littleflute/JavaScript/issues/11'"
		s += " style='color:gold;'";		s +=">";		s += " #11*  ";		s += "</a>"; 
		s += "<a target='_blank' href='https://github.com/littleflute/JavaScript/edit/master/issues/11/i.js'"
		s += " style='color:blue;'";		s +=">";		s += " i.js*  ";		s += "</a>"; 
		s += "<a target='_blank'  href='https://littleflute.github.io/JavaScript/issues/11/i.js'";
		s += " style='color:yellow;'";		s +=">";		s += " i.js ";		s += "</a>"; 
		d.innerHTML = s;
		_on_off_div(b,d);
		d.style.background = blGrey[5];
		b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
	}//this.blr_about_blIssueClass 

    blo0.blShowObj2Div(_d,this);
}
