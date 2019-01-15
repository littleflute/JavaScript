var c = bl$("id_div_calender_4_i22");
var f1 = function (){
 /*
 -1-
<style type="text/css">

.Calendar {
    font-family:Verdana;
    font-size:12px;
    background-color:#e0ecf9;
    text-align:center;
    width:200px;
    height:160px;
    padding:10px;
    line-height:1.5em;
}
.Calendar a{
    color:#1e5494;
}

.Calendar table{
width:100%;
border:0;
}

.Calendar table thead{color:#acacac;}

.Calendar table td {
    font-size: 11px;
    padding:1px;
}
#idCalendarPre{
    cursor:pointer;
    float:left;
    padding-right:5px;
}
#idCalendarNext{
    cursor:pointer;
    float:right;
    padding-right:5px;
}
#idCalendar td.onToday {
    font-weight:bold;
    color:#C60;
}
#idCalendar td.onSelect {
    font-weight:bold;
}
</style>
<div class="Calendar">
  <div id="idCalendarPre">&lt;&lt;</div>
  <div id="idCalendarNext">&gt;&gt;</div>
  <span id="idCalendarYear">2008</span>年 <span id="idCalendarMonth">8</span>月
  <table cellspacing="0">
    <thead>
      <tr>
        <td>日</td>
        <td>一</td>
        <td>二</td>
        <td>三</td>
        <td>四</td>
        <td>五</td>
        <td>六</td>
      </tr>
    </thead>
    <tbody id="idCalendar">
    </tbody>
  </table>
</div>
-2-
*/
}
c.innerHTML = f1;

//-2-----------------------
var c = bl$("id_div_calender_4_i22");
var a = c.innerHTML;
var b = a.split("-1-");
a = b[1].split("-2-");
c.innerHTML = a[0];
