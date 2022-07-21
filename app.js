//*********************** */ navigation toggle button

const navbtn=document.getElementById("nav-toggle");
const links=document.getElementById("nav-links");
const icons=document.getElementById("nav-icons");

navbtn.addEventListener("click", () => {
    links.classList.toggle("show-links");
});



//******************* */ end of navigation toggle button

//*********************** */ navigation navbar fixed

const navbar=document.querySelector(".container");

window.addEventListener("scroll", () => {
    if(window.pageYOffset>62){
    navbar.classList.add("fixed");
    }
    else{
    navbar.classList.remove("fixed");
    }
});
//********************************smooth scroll
const scrollLinks= document.querySelectorAll(".scroll-link");

scrollLinks.forEach(link=>{
    link.addEventListener("click",(e)=>{
    e.preventDefault();

    links.classList.remove("show-links");
    const id= e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    // position
    let position;
    if(navbar.classList.contains("fixed")){
        position=element.offsetTop-76;
    }
    else{
        position=element.offsetTop-152;
    }
    if(window.innerWidth== 992){
        if(navbar.classList.contains("fixed")){
            position=element.offsetTop-76;
        }
        else{
        position= element.offsetTop - 331 - 76;
    }}
    // window scrollTo
    window.scrollTo({
        left:0,
        top:position,
        behavior:"smooth"
    });
    });
});




//*********************** */ Canvas Tag Cloud
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