var alltitle = ["allnew","notice","speech","contest"];
var alldiv = ["div_allnew","div_notice","div_speech","div_contest"];
function change(id)
{
    
    for (var i = 0; i < alltitle.length; i++) {
        var tab = document.getElementById(alltitle[i]);
        var d = document.getElementById(alldiv[i]);
        if(id == alltitle[i])
        {
            tab.style.display = "table";
            d.style.color = "white";
        }
        else
        {
            tab.style.display = "none";
            d.style.color = "black";
        }
    }
}