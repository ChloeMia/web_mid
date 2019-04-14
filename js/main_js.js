var alltitle = ["allnew","notice","speech","contest"];
var alldiv = ["div_allnew","div_notice","div_speech","div_contest"];
function change(id,x)
{
    for (var i = 0; i < alltitle.length; i++) {
        var tab = document.getElementById(alltitle[i]);
        var d = document.getElementById(alldiv[i]);
        if(id == alltitle[i])
        {
            tab.style.display = "table";
            d.style.backgroundColor = "rgb(56, 187, 248)"
        }
        else{
            tab.style.display = "none";
            d.style.backgroundColor = "rgb(167, 226, 253)"
        }
    }
}