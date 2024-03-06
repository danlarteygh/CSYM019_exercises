document.addEventListener("DOMContentLoaded", myLoadFunction);


function myLoadFunction(){
     var element = document.getElementById("button");
     //alert(element.value);
     element.addEventListener("click", buttonClicked);

}

function buttonClicked(){
     var element = document.getElementById("myInput");
     alert(element.value);
}