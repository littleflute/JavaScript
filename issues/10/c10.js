//c10:    blo0.blAjx(worker,url);  unit Test
var s = "_c10:"; var id = "id_c10";
var d = blo0.blMD(id,s,300,100,500,400, blGrey[5]); 
d.tb = blo0.blDiv(d,d.id+"tb", "tb",blGrey[1]);
d.v1 = blo0.blDiv(d,d.id+"v1", "v1", blGrey[0]);
d.tb.b1 = blo0.blBtn(d.tb,d.tb.id+"b1","b1",blGrey[2]);

var w = {};
w._2do = function(txt){
    d.v1.innerHTML = txt;
}
var urlLrc = "https://littleflute.github.io/english/NewConceptEnglish/Book2/1.lrc"
d.tb.b1.onclick = function(){
  blo0.blAjx(w,urlLrc);
}
_on_off_div(null,d);
