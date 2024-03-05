function clickHeadingFunction (){
    var element = document.getElementById("pageHeading");
    element.firstChild.nodeValue = "New Page Heading";
}

function clickParagraphFunction(){
    element = document.getElementById("paragraph");
    element.firstChild.nodeValue = "This is the modified paragraph";
}

function mouseEnterHeadingFunction(){
    var element = document.getElementById("pageHeading");
    element.firstChild.nodeValue = "mouse hovering";
}

function mouseLeaveHeadingFunction(){
    var element = document.getElementById("pageHeading");
    element.firstChild.nodeValue = "mouse gone";
}

function myLoadFunction(){
    var element = document.getElementById("pageHeading");
    element.addEventListener("click", clickHeadingFunction);
    element.addEventListener("mouseenter", mouseEnterHeadingFunction);
    element.addEventListener("mouseleave", mouseLeaveHeadingFunction);


    element = document.getElementById("paragraph");
    element.addEventListener("click", clickParagraphFunction);
}

document.addEventListener("DOMContentLoaded", myLoadFunction);