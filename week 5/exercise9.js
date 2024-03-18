document.addEventListener('DOMContentLoaded', myLoadEvent);

function myLoadEvent() {
    document.addEventListener("keydown", myKeyDown);
}


function myKeyDown(event) {
    //console.log(event.keyCode);


    var key = event.keyCode;

    if (key == 37) { setInterval(leftKey, 10); }
    else if (key == 39) { setInterval(rightKey, 10); }
    else if (key == 38) { setInterval(upKey, 10); }
    else if (key == 40) { setInterval(downKey, 10); }
}

function leftKey() {
    var element = document.getElementById("circle");
    var positionLeft = element.offsetLeft;
    var positionTop = element.offsetTop;
    element.style.left = parseInt(positionLeft) - 1 + "px";
}
function rightKey() {
    var element = document.getElementById("circle");
    var positionLeft = element.offsetLeft;
    var positionTop = element.offsetTop;
    element.style.left = parseInt(positionLeft) + 1 + "px";
}
function upKey() {
    var element = document.getElementById("circle");
    var positionLeft = element.offsetLeft;
    var positionTop = element.offsetTop;
    element.style.top = parseInt(positionTop) - 1 + "px";
}
function downKey() {
    var element = document.getElementById("circle");
    var positionLeft = element.offsetLeft;
    var positionTop = element.offsetTop;
    element.style.top = parseInt(positionTop) + 1 + "px";
}