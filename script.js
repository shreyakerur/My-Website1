var light = document.getElementById("light");
var dark = document.getElementById("dark")
var bigdiv = document.getElementById("bigdiv")

function darkMode(){
    bigdiv.style.backgroundColor = "#101214";
    light.style.display = "block";
     dark.style.display = "none";
}

function lightMode(){
    bigdiv.style.backgroundColor = "white";
    light.style.display = "none";
    dark.style.display = "block"
   
}