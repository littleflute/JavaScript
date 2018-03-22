//
function blIsseuClass(_d){
    this.v = "v0.0. 13 - ";
    this.blr_about_blIssueClass = function(b,d){		
		var s = "blIssueClass <br>";  

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
