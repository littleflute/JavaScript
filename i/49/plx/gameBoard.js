const tag = "plx/gameBoard.js_v0.13";

function CGameBoard (_btn,_wso){    
    
    this.click = function(){
        if(!md) md = _f();// blo0.blMD("id_md_4_gameBoard",tag,333,151,444,400,blGrey[0]);
        blon(_btn,md,"grey","green");
    }
    this.f1 = function(){
        alert("f1");
    }
    var _f = function(){
        var d = blo0.blMD("id_md_4_gameBoard",tag,333,151,444,400,blGrey[0]);
        d.tb = blo0.blDiv(d,d.id+"tb","tb",blGrey[1]);
        d.tb.b1 = blo0.dbgBtn(d.tb,"dbg","grey","green",
            function(c,_x,_y,_w,_h){
                blo0.blRect (c,_x,_y,_w,_h,"lightblue");
                blo0.blText(c,"test.dbg",_x,_y,20,"red");            
            },
            function(_btn){//init	  
                ;
            },
            function(_btn,_x,_y){ 
                _btn.setDown(true);
            },
            function(_btn,_x,_y){ 
                _btn.setDown(false);
            },
            function(_btn,_x,_y){ 
            }
        ); 
        d.v = blo0.blDiv(d,d.id+"v","v",blGrey[1]);
        blo0.blCanvase (d.v,411,311,"red");
        return d;
    }
    var md = null;
}