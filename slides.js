let sideButton= document.getElementsByClassName("sidebutton")[0]
let closeButton = document.getElementsByClassName("close")[0]
let navbar= document.getElementsByClassName("navbar")[0]



sideButton.onclick=function(){
navbar.style.width="300px";
}

closeButton.onclick=function(){
    navbar.style.width="0px";

}