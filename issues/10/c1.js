//js1: _loadIssue11 
var s= "v0.0.11 ";
s += "<a target='_blank' href='https://github.com/littleflute/JavaScript/edit/master/issues/10/c1.js'"
s += " style='color:blue;'";		s +=">"; s += "c1.js* ";
var d = blo0.blMDiv(document.body,"id_mdiv_loadIssue11", s,
            300,100,500,400,blColor[1]);
if(!d.v){
 d.v = blo0.blDiv(d,d.id+"v","v",blGrey[0]);   
 
  function _loadIssue11 (o) { 
    d.v.innerHTML = o.body; 				
  }
  var url = "https://api.github.com/repos/littleflute/JavaScript/issues/11";
  w3.getHttpObject(url, _loadIssue11);
}
_on_off_div(null,d);
