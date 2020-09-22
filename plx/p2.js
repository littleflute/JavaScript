const tag2 = "[plx/p2.js_v0.12]";
var b2 = bl$("id_plx2_btn");
b2.onclick = function(){
    var b = b2;
    if(!b.v){
        b.v = blo0.blMD("id_md4_plx2","md4plx2",444,10,333,100,"skyblue");  
        var s = '<div id="editor" contenteditable="true"></div>'
        var v1= blo0.blDiv(b.v,b.v.id+"v1",s, blGrey[1]);
        f();
        v1.onclick = function(){
            alert(v1.innerHTML);
        }
	}  
	blon(b,b.v,"grey","green");
}
function f(){
    
    // ref: https://stackoverflow.com/questions/37139076/change-color-of-specific-words-in-textarea/37160584
    // SQL keywords
    var keywords = ["SELECT","FROM","WHERE","LIKE","BETWEEN","NOT LIKE","FALSE","NULL","FROM","TRUE","NOT IN"];
    // Keyup event
    $("#editor").on("keyup", function(e){
    // Space key pressed
    if (e.keyCode == 32){
        var newHTML = "";
        // Loop through words
        $(this).text().replace(/[\s]+/g, " ").trim().split(" ").forEach(function(val){
        // If word is statement
        if (keywords.indexOf(val.trim().toUpperCase()) > -1)
            newHTML += "<span class='statement'>" + val + "&nbsp;</span>";
        else
            newHTML += "<span class='other'>" + val + "&nbsp;</span>"; 
        });
        $(this).html(newHTML);

        // Set cursor position to end of text
        var child = $(this).children();
        var range = document.createRange();
        var sel = window.getSelection();
        range.setStart(child[child.length-1], 1);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
        this.focus();
    }
    });

}