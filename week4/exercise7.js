document.addEventListener("DOMContentLoaded", myLoadFunction);


function myLoadFunction(){
     var element = document.getElementById("button");
     //alert(element.value);
     element.addEventListener("click", buttonClicked);

}

function buttonClicked(){
     var input = document.getElementById("myInput");
     
     var element = document.getElementById("section");
     element.firstChild.nodeValue = input.value;
}