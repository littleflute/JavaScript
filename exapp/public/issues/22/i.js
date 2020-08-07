//ref: https://littleflute.github.io/blog/docs/2017/04/15/ 
var myV = bl$("id_div_4_i22");
if(!myV.nLoadTime) myV.nLoadTime = 0; 
myV.nLoadTime++;
var s = myV.nLoadTime + "<br>";  
		s += "<a target='_blank' href='https://github.com/littleflute/JavaScript/issues/22'"
		s += " style='color: brown;'";		s +=">";		s += " #22*  ";		s += "</a>"; 
		s += "<a target='_blank' href='https://github.com/littleflute/JavaScript/edit/master/issues/22/i.js'"
		s += " style='color:blue;'";		s +=">";		s += " i.js*  ";		s += "</a>"; 
		s += "<a target='_blank'  href='https://littleflute.github.io/JavaScript/issues/22/i.js'";
		s += " style='color: yellow;'";		s +=">";		s += " i.js ";		s += "</a>"; 

		s += "<a target='_blank' href='https://github.com/littleflute/JavaScript/edit/master/issues/22/c1.js'"
		s += " style='color:blue;'";		s +=">";		s += " c1.js*  ";		s += "</a>"; 
		s += "<a target='_blank'  href='https://littleflute.github.io/JavaScript/issues/22/c1js'";
		s += " style='color: yellow;'";		s +=">";		s += " c1.js ";		s += "</a>"; 


		s += "<a target='_blank' href='https://github.com/littleflute/JavaScript/edit/master/issues/22/c2.js'"
		s += " style='color:blue;'";		s +=">";		s += " c2.js*  ";		s += "</a>"; 
		s += "<a target='_blank'  href='https://littleflute.github.io/JavaScript/issues/22/c2.js'";
		s += " style='color: yellow;'";		s +=">";		s += " c2.js ";		s += "</a>"; 

		s += "<a target='_blank'  href='https://littleflute.github.io/blog/docs/2017/04/15/'";
		s += " style='color: green;'";		s +=">";		s += " ref ";		s += "</a>";  
		s += " <div id='id_div_tb_4_i22'>tb</div>";  
		s += " <div id='id_div_calender_4_i22'>c</div>";  


		myV .innerHTML = s;

  var _toolBar = bl$("id_div_tb_4_i22");
  function _loadCs(o) {
				var _i = 0; 
				var _v = _toolBar ;
				for(i in o){
					_i++;
					var a = o[i].body;
					var btnJS = blo0.blBtn(_v, _v.id+"btnJS"+i,_i,blGrey[2]);
					btnJS.onclick = function(_txt){
				               return function(){
                                                              eval( _txt);
                                               }
				        }(a);
				}
			}
			var _src = "https://api.github.com/repos/littleflute/JavaScript/issues/22/comments";
			w3.getHttpObject(_src, _loadCs);	
