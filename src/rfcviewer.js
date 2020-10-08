
document.body.style.margin = "0";
document.body.style.fontSize = "25px";
//document.body.style.border = "5px solid black";

const content = document.querySelector("div.content");
content.style.margin = "auto";

var h2 = document.querySelectorAll("h2");
for (var i = 0; i < h2.length; ++i) {
    h2[i].style.fontSize = "32px";
    //h2[i].style.color = "red";  
}
