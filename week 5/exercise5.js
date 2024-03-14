
document.addEventListener("DOMContentLoaded",myLoadFunction);

function myLoadFunction(){
    var element = document.getElementById("circle");
    element.style.opacity = 0.5;
    element.addEventListener("click", clickFunction);

}

function clickFunction(){
    var element = document.getElementById("circle");
    var circleOpacity = parseFloat(element.style.opacity);
    element.style.opacity = circleOpacity + 0.1;
}