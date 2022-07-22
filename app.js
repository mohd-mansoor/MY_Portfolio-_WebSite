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
//*********************** */ Contact Functionality

const nameInput =document.querySelector('.name')
const emailInput =document.querySelector('.email')
const subjectInput =document.querySelector('.subject')
const textareaInput =document.querySelector('.textarea')

const contactForm =document.querySelector('.contact-form')

contactForm.addEventListener("submit",(evt) =>{
    evt.preventDefault()
    validateInput()
})

const validateInput=() => {

    let email =emailInput.value
    let textarea= textareaInput.value

    if(!email && !textarea){
        setError(emailInput.parentElement)
        setError(textareaInput.parentElement)
        showMessage("please fill in the required inputs")
    }
    else if(!email && textarea){
        setError(emailInput.parentElement)
        showMessage("Oops Email can't be empty")
    }
    else if(!textarea && email){
        setError(textareaInput.parentElement)
        showMessage("Please provide a message")
    }
    else if(email && textarea){
        emailjs.sendForm("service_awki0jd", "template_48b5lxr", contactForm, "5oJ1dHdAZN3bC7w63");
        setSuccess(emailInput.parentElement)
        setSuccess(textareaInput.parentElement)
        showMessage("Message sent sucessfully", 'green')
        textareaInput.value=''
        emailInput.value=''
        nameInput.value=''
        subjectInput.value=''
    }
}

const setError=(input) =>{
    if(input.classList.contains("success")){
        input.classList.remove("success")
    }
    else{
        input.classList.add("error")
    }
}

const setSuccess=(input) =>{
    if(input.classList.contains("error")){
        input.classList.remove("error")
    }
    else{
        input.classList.add("success")
    }
}

const messageDiv =document.querySelector('.message')
const showMessage = (message , updateColor) =>{
    const divContent =document.createElement('div')
    divContent.textContent =message
    divContent.classList.add("message-content")
    divContent.style.backgroundColor = updateColor
    messageDiv.prepend(divContent)

    messageDiv.style.transform = `translate(${(0,0)}%)`
    setTimeout(() =>{
        divContent.classList.add("hide")

        divContent.addEventListener("transitionend", ()=>{
            divContent.remove()
        })
    },3000)
}