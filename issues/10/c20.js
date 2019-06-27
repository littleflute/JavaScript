var s= "v0.0. 23 - ";
s += "<a target='_blank' href='https://github.com/littleflute/JavaScript/edit/master/issues/10/c20.js'"
s += " style='color:blue;'";		s +=">"; s += "c20.js* ";
s += "<a target='_blank' href='https://littleflute.github.io/JavaScript/issues/10/c20.js'"
s += " style='color:green;'";		s +=">"; s += "c20.js ";

var d = blo0.blMDiv(document.body,"xd20", s,700,100,500,400, blGrey[5]);  
function Create2DArray(rows) {
  var arr = [];

  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }

  return arr;
}
var arr = Create2DArray(100);
for(var i = 0; i<10;i++){
    var v = blo0.blDiv(d, d.id+ "v" + i, i, blGrey[0]);
    a[i] = new Array(10);
    for(var j = 0; j<10;j++){
        var b = blo0.blBtn(v, v.id + "b" + j, j, blGrey[3]);
        arr[i][j] = b;
        b.onclick = function(_i,_j){
            return function(){
                 arr[_i][_j].style.background = "red";
            }
        }(i,j);
    }
}

var v = blo0.blDiv(d, d.id+ "tb" , "tb", blColor[0]);

_on_off_div(this,d);
