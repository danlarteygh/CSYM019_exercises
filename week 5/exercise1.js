
document.addEventListener("DOMContentLoaded",myLoadFunction);

function myLoadFunction(){
    var element = document.getElementById("circle");
    element.addEventListener("click", myClickFunction);
}

function myClickFunction(){
    alert("The button was pressed");
}