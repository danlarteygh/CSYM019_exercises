
document.addEventListener("DOMContentLoaded",myLoadFunction);

function myLoadFunction(){
    var element = document.getElementById("circle");
    element.addEventListener("click", myClickFunction);
}

function myClickFunction(){

    var element = document.getElementById("circle");
    element.style.backgroundColor = "blue";

}