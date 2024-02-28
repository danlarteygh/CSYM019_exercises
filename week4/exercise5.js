function myClickFunction (){
    var element = document.getElementById("pageHeading");
    element.firstChild.nodeValue = "New Page Heading";

    element = document.getElementById("paragraph");
    element.firstChild.nodeValue = "This is the modified paragraph";

}

document.addEventListener("click", myClickFunction);