// navigation toggle button

const navbtn=document.getElementById("nav-toggle");
const links=document.getElementById("nav-links");
const icons=document.getElementById("nav-icons");

navbtn.addEventListener("click", () => {
    links.classList.toggle("show-links");
});



// end of navigation toggle button

// navigation navbar fixed

const navbar=document.querySelector(".container");

window.addEventListener("scroll", () => {
    if(window.pageYOffset>62){
    navbar.classList.add("fixed");
    }
    else{
    navbar.classList.remove("fixed");
    }
});

//HTML5 Canvas Tag Cloud
$(document).ready(function(){
    if( ! $("#myCanvas").tagcanvas({
        textColour: "#daa520",
        outlineColour: "transparent",
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        weight: true,
        },"tags")){
            $("#myCanvasContainer")
        }
})