document.addEventListener('DOMContentLoaded', myLoadEvent);

var timer;

function myLoadEvent() {
    document.addEventListener("keydown", myKeyDown);
}


function myKeyDown(event) {
    //console.log(event.keyCode);
    clearInterval(timer);
    var key = event.keyCode;

    if (key == 37) { timer = setInterval(leftKey, 10); }
    else if (key == 39) { timer = setInterval(rightKey, 10); }
    else if (key == 38) { timer = setInterval(upKey, 10); }
    else if (key == 40) { timer = setInterval(downKey, 10); }
    else if (key == 32) { timer = setInterval(spacebar, 10); }
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
function spacebar() { clearInterval(timer); }