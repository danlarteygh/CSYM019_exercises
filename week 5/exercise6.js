
document.addEventListener("DOMContentLoaded",myLoadFunction);

function myLoadFunction(){
    var element = document.getElementById("circle");
    element.style.opacity = 1;
    element.addEventListener("click", clickFunction);

}

function clickFunction(){
    setInterval(reduceOpacity, 10);
    
}

function reduceOpacity(){
    var element = document.getElementById("circle");
    var circleOpacity = parseFloat(element.style.opacity);
    element.style.opacity = circleOpacity - 0.01;

}