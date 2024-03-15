document.addEventListener("keydown", myKeyDown);

function myKeyDown(event){
    //console.log(event.keyCode);
    var element = document.getElementById("circle");
    var positionLeft = element.offsetLeft;
    var positionTop = element.offsetTop;
    var key = event.keyCode;

    if(key == 37){element.style.left = parseInt(positionLeft) - 10 + "px";}
    else if (key == 39){element.style.left = parseInt(positionLeft) + 10 + "px";}
    else if (key == 38){element.style.top = parseInt(positionTop) - 10 + "px";}
    else if (key == 40){element.style.top = parseInt(positionTop) + 10 + "px";}


}
