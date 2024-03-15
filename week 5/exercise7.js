document.addEventListener("DOMContentLoaded", myLoadFunction);

function myLoadFunction(){
    document.addEventListener("click", moveLeft);
}

function moveLeft(){
    var element = document.getElementById("circle");
    var positionLeft = element.offsetLeft;
    element.style.left = parseInt(positionLeft) - 10 + "px" ;

}