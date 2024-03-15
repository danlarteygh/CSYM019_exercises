document.addEventListener("keydown", myKeyDown);

function myKeyDown(event){
    //console.log(event.keyCode);
    var element = document.getElementById("circle");
    var positionLeft = element.offsetLeft;
    var key = event.keyCode;
    if(key == 37){element.style.left = parseInt(positionLeft) - 10 + "px" ;}

}
