function clickHeadingFunction (){
    var element = document.getElementById("pageHeading");
    element.firstChild.nodeValue = "New Page Heading";
}

function clickParagraphFunction(){
    element = document.getElementById("paragraph");
    element.firstChild.nodeValue = "This is the modified paragraph";
}

function myLoadFunction(){
    var element = document.getElementById("pageHeading");
    element.addEventListener("click", clickHeadingFunction);

    element = document.getElementById("paragraph");
    element.addEventListener("click", clickParagraphFunction);
}

document.addEventListener("DOMContentLoaded", myLoadFunction);