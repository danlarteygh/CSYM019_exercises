function myLoadFunction(){
    var element = document.getElementById('pageHeading');
    element.firstChild.nodeValue = 'New Heading';

    element = document.getElementById("paragraph");
    element.firstChild.nodeValue = "This is the modified paragraph";
}

document.addEventListener("DOMContentLoaded", myLoadFunction);