var allbutton = ["button1","button2"];
var alltext = ["button1_t","button2_t"];
var hoverBefore = "rgb(234, 246, 247)";
var hoverAfter = "rgb(131, 231, 240)";
var clickAfter = "rgb(66, 211, 224)";

function changeColorClick(id,id2)
{
    for (var i = 0; i < allbutton.length; i++) {
        var b = document.getElementById(allbutton[i]);
        var t = document.getElementById(alltext[i]);
        b.style.backgroundColor = hoverBefore;
        t.style.display = "none";
    }
    var x = document.getElementById(id);
    var y = document.getElementById(id2);
    x.style.backgroundColor = clickAfter;
    y.style.display = "block";
}

function changeColorOver(id)
{   
    var d = document.getElementById(id);
    if(d.style.backgroundColor != clickAfter)
        d.style.backgroundColor = hoverAfter;

    /*for (var i = 0; i < allbutton.length; i++) {
        var d = document.getElementById(allbutton[i]);
        if(d.style.backgroundColor != clickAfter)
            d.style.backgroundColor = hoverBefore;
    }
    var x = document.getElementById(id);
    if(x.style.backgroundColor != clickAfter)
    {
        x.style.backgroundColor = hoverAfter;
    }*/
}
function changeColorOut(id)
{
    for (var i = 0; i < allbutton.length; i++) {
        var d = document.getElementById(allbutton[i]);
        if(d.style.backgroundColor == hoverAfter)
            d.style.backgroundColor = hoverBefore;
    }
}
function liclick(node)
{
    localStorage["arm"] = node.id;
}
function init()
{
	if(localStorage["arm"] == "-1")
	{
        return;
    }
    if(localStorage["arm"] == null)
	{
        localStorage["arm"] = "0";
    }
    changeColorClick(allbutton[localStorage["arm"]],alltext[localStorage["arm"]]);
	localStorage.removeItem("arm");
}
init();
