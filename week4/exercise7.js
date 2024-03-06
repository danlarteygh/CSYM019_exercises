document.addEventListener("DOMContentLoaded", myLoadFunction);


function myLoadFunction(){
     var element = document.getElementById("myInput");
     element.addEventListener("keyup", updateText);
}

function updateText(){
     var input = document.getElementById("myInput");
     
     var element = document.getElementById("section");
     element.firstChild.nodeValue = input.value;
}