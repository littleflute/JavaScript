//c18
var s= "v0.0. 24 ";
s += "<a target='_blank' href='https://github.com/littleflute/JavaScript/edit/master/issues/10/c18.js'"
s += " style='color:blue;'";		s +=">"; s += "c18.js* ";
s += "<a target='_blank' href='https://littleflute.github.io/JavaScript/issues/10/c18.js'"
s += " style='color:green;'";		s +=">"; s += "c18.js ";

var md = blo0.blDiv(document.body, "idMD", s ,blGrey[0]);  
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

	var title = blo0.blDiv(md ,"moveDivHeader","header");
	style ="padding: 10px;";
	style += "z-index: 10;";
	style += "cursor: move;";
	style += "text-align: center;";
	style += "border: 1px solid #fff;";
	style += "background-color: #2196F3;";
	title.style =style;
        blo0.blMakeDivMovable(md );
}
_on_off_div(this,md);
