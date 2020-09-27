const tag = "[plx/p1.js_v0.14]";

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
			var dbg = blo0.dbgBtn(tb,"dbg","grey",c,function(cvs){
				blo0.blText(cvs,"storyBoard.dbg",50,80,20,c);
			}); 
			
			var b2 = blo0.blBtn(tb,tb.id+"b2","b2",c);
			b2.style.float="right";
			b2.onclick = function(){
				if(!this.vFrame){
					var vFInf = blo0.blDiv(md.storyBoard,md.storyBoard.id+"vFInf","vFInf",blGrey[3]);
					this.vFrame = blo0.blDiv(md.storyBoard,md.storyBoard.id+"vFrame","",blGrey[1]);
					var vFInf2 = blo0.blDiv(md.storyBoard,md.storyBoard.id+"vFInf2","vFInf2",blGrey[3]);
					var ftb = blo0.blBtn(this.vFrame,"id_ftb","+",blGrey[0]);
					ftb.style.float="left";
					var fls = [];
					ftb.onclick = function(){
						var l = fls.length;
						var fb = blo0.blBtn(this.parentElement,"id_ftb"+l,l,blGrey[0]);
						fb.style.float="left";
						fb.onclick = function(_fb){
							return function(){
								vFInf.innerHTML = _fb.id;
							}
						}(fb);
						fls.push(fb);
					}
				} 
				blon(this,this.vFrame,"grey","green");
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
			var tb = blo0.blDiv(md.server,md.server.id+"sv","sv",blGrey[0]);
			var dbg = blo0.dbgBtn(tb,"dbg","grey",c,
			  function(cvs,_x,_y,_w,_h){
				blo0.blRect(cvs,_x,_y,_w,_h,"lightblue");
				blo0.blText(cvs,"server.dbg",_x,_y,20,c);
				eval(ss);
			  },
			  function(_btn,_x,_y){//mousedown	  				  
				  _btn.setDown(true);
			  },
			  function(_btn,_x,_y){//mouseup	  
				  _btn.setDown(false);
			  },
			  function(_btn,_x,_y){	//mousemove	 
				//  if(_btn.getDown()) _btn.setX(_x,_y);
			  }
			); 
			var b1 = blo0.blBtn(tb,tb.id+"b1","ghiTest",blGrey[1]); b1.style.float = "right";
			 
			b1.onclick = function(){
				
				blo0.blGetGHI("url",function(s){
					var a = s.split("\n");
					var sa = "";
					for(i in a){
						var y = 100 + i*20;
						sa += 'blo0.blText(cvs,"'+a[i] +'",111,'+y+',20,blColor[0]);'; 
					}
					ss = sa;//'blo0.blText(cvs,"'+a[0] +'",111,122,20,blColor[0]);'; 
				});	
			}
		} 
		blon(b,md.server,blGrey[0],c);
	} 
	
	this.run = function(){
		var cs = blGrey;
		md = blo0.blMD("id_md","md4CTest",x,y,w,h,cs[0]);
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