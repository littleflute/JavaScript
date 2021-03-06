const _plxTitle = "[plx/p1.js_v0.34]";

var b = bl$("id_plx1_btn");
b.onclick = function(){
	if(!b.v){
		b.v = new CTest();
		b.v.run();
	}  
	blon(b,bl$("id_md"),"grey","green");
}


function CTest(){
	var md = null;
	var x = screen.width*0.19;
	var y = screen.height*0.15;
	var w =  screen.width*0.5;
	var h = screen.height*0.15;
	var to = {};
	to.playground = function(b,v){
		var c = "white";
		if(!md.playground)
		{
			md.playground = blo0.blDiv(md,md.id+"playground","",c); 

			var v = blo0.blDiv(md.playground,md.playground.id+"v","",blGrey[3]);

			var cvs = blo0.blCanvase(v,w,444,"grey");      
			blo0.blText(cvs,"test",55,55,30,"green");          
			b.b = false;                
		} 
		blon(b,md.playground,blGrey[0],c); 
	}
  
	to.storyBoard = function(b,v){
		var c = "skyblue"; 
		if(!md.storyBoard)
		{
			md.storyBoard = blo0.blDiv(md.v,md.v.id+"storyBoard","storyBoard",c);
			b.b = false;      

			var tb = blo0.blDiv(md.storyBoard,md.storyBoard.id+"sb","::",blGrey[0]); 
			var btnPlayerTest = blo0.blBtn(tb,tb.id+"btnPlayerTest","btnPlayerTest",c);
			btnPlayerTest.b = false;
			btnPlayerTest.onclick = function(){
				if(!this.dp){
					this.dP = blo0.blPlayer("id_4_blPlayer","titlePlayer",888,10,444,100,"red");	 
				} 
				blon(this,bl$("id_4_blPlayer"),"grey","green");
			}	 
		} 
		blon(b,md.storyBoard,blGrey[0],c);
	}
	to.server = function(b,v){
		var c = "lightgreen"; 
		if(!md.server)
		{
			md.server = blo0.blDiv(md.v,md.v.id+"server","server",c);
			b.b = false;   
			var ss = "1";    
			var sVOANews = 'blo0.blText(cvs,"voaNews",22,120,blColor[2]);';    
			var tb = blo0.blDiv(md.server,md.server.id+"sv","sv",blGrey[0]);
			var _wso = null;
			var cs = {};
			var ls = [2,3,4,5,6,7,8,9,10,"J","Q","K","A",2,3,4,5,6,7,8,9,10,"J","Q","K","A",2,3,4,5,6,7,8,9,10,"J","Q","K","A",2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
			var cards = [];
			var sT = "st..."; 
			cs.init = function(_btn,_x,_y){  
				for(i in ls){   	
					var c = blo0.blCard(0,0,_x+i*41,_y, 40,60,"red"); 
					cards.push(c);
				}
			}
			cs.draw = function(cvs,_x,_y){
				var di = 0, dj = 0;
				for(i in ls){   					 
					cards[i].setXY(_x + di*41 + 120,_y+120 + dj*61);  
					di++;
					if(di>12){
						dj++;
						di=0;
					}
				}
			}

			var dbg = blo0.dbgBtn(tb,"dbg","grey",c,
			  function(cvs,_x,_y,_w,_h){//cbDraw
				blo0.blRect(cvs,_x,_y,_w,_h,"lightblue");
				blo0.blText(cvs,"server.dbg",_x,_y,20,c);
				cs.draw(cvs,_x,_y);
				eval(ss);
				eval(sVOANews);
			  },
			  function(_btn){//init	  				  
				_wso = new WebSocket("ws://localhost:9090");
				_wso.onmessage = msg => {				
					const da = JSON.parse(msg.data);
					var s = "";
					if (da.method === "mBreakNews"){
						_btn.setS(da.news); 
					}	
					if (da.method === "M_i_201"){
						sT=da.data;
					}										
				}
				
				cs.init(_btn,222,222);

				var r = _btn.addRect(100 + 25,300,20,20,"green");
				r.setFun(function(_o,_x,_y){ 
					var c = _o.getColor();
					if(c=="green") c = "brown";
					else c = "green";
					_o.setColor(c);

					const payLoad = {
						"method": "html5Test",
						"msg": "msg...",
						"x": _x,
						"y": _y						
					}	
					_wso.send(JSON.stringify(payLoad));
				});
			  },
			  function(_btn,_x,_y){//mousedown	  				  
				  _btn.setDown(true);
			  },
			  function(_btn,_x,_y){//mouseup	  
				  _btn.setDown(false);
			  },
			  function(_btn,_x,_y){	//mousemove	 
				  if(_btn.getDown()){
					  
				  } 
			  }
			); 
			var btnGHITest = blo0.blBtn(tb,tb.id+"btnGHITest","ghiTest",blGrey[1]); btnGHITest.style.float = "right";
			 
			btnGHITest.onclick = function(){
				
				blo0.blGetGHI("url",function(s){
					var a = s.split("\n");
					var sa = "";
					for(i in a){
						var y = 100 + i*20;
						sa += 'blo0.blText(cvs,"'+a[i] +'",11,'+y+',20,blColor[1]);'; 
					}
					ss = sa;//'blo0.blText(cvs,"'+a[0] +'",111,122,20,blColor[0]);'; 
				});	
			}

			 
			var btnWS = blo0.blBtn(tb,tb.id+"btnWS","btnWS",blGrey[1]); btnWS.style.float = "right";
			btnWS.onclick = function(){ 
				var i = 0;
				var f = function(_o,_x,_y){
					var c = _o.getColor();
					if(c=="yellow") c = "brown";
					else c = "yellow";
					_o.setColor(c);

					const payLoad = {
						"method": "M_i_201",
						"msg": "msg...",
						"x": _x,
						"y": _y						
					}
	
					_wso.send(JSON.stringify(payLoad));
				}
				return function(){
					var r = dbg.addRect(100 + i*25,100,20,20,"blue");
					r.setFun(f);
					i++;
				}
			}();

			var btnVOANews1 = blo0.blBtn(tb,tb.id+"btnVOANews1","btnVOANews1",blGrey[1]); btnVOANews1.style.float = "right";
			btnVOANews1.onclick = function(_this){  
				var f = function(){
					blo0.blParseURL("http://localhost:8080",function(p1)
						{
							var s = 'blo0.blText(cvs,';
							
							s += '"';
							s += p1 ;
							s += '"';

							s += ",";
							s += "_x";
							s += ",";
							s += "120";
							s += ",";
							s += '"skyblue"';
							s += ");";  
							sVOANews = s;
						} 
					);
				}
				return function(){	f(); }
			}(btnVOANews1);
		} 
		blon(b,md.server,blGrey[0],c);
	} 
	
	this.run = function(){
		var cs = blGrey;
		md = blo0.blMD("id_md",_plxTitle,x,y,w,h,cs[0]);
		md.tb = blo0.blDiv(md,md.id+"tb","md.tb",cs[1]); 
		md.v = blo0.blDiv(md,md.id+"v","md.v",cs[2]); 
		var n = 0;
		for(i in to){
			var b = blo0.blBtn(md.tb,md.tb.id+"_btn_"+ i, i,cs[n]);
			b.style.float = "left";
			b.onclick = function(_this,_v,_i){
				return function(){
					to[_i](_this,_v);
				}
			}(b,md.v,i);
			n++;
		} 
	} 
}

