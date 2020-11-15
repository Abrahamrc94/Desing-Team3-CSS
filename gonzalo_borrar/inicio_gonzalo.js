const openbtn = document.getElementById("openbtn");
const closebtn = document.getElementById("closebtn")


openbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    document.getElementById("menu").style.width= "250px";
})

closebtn.addEventListener('click',(e)=>{
    e.preventDefault();
    document.getElementById("menu").style.width= "0";
})
    

let prev = document.getElementById("prev");
let next = document.getElementById("next");
let bola1 = document.getElementById("bola1");
let bola2 = document.getElementById("bola2");
let bola3 = document.getElementById("bola3"); 

prev.addEventListener('click', ()=>{
    slideIndex = slideIndex-1;
    showSlides(slideIndex);
})

next.addEventListener('click', () =>{
    slideIndex = slideIndex+1;
    showSlides(slideIndex);
})

bola1.addEventListener('click',()=>{
    slideIndex = 1;
    showSlides(slideIndex);
})

bola2.addEventListener('click',()=>{
    slideIndex = 2;
    showSlides(slideIndex);
})

bola3.addEventListener('click',()=>{
    slideIndex = 3;
    showSlides(slideIndex);
})

const showSlides=(n)=>{
    let i;
    let slides = document.getElementsByClassName("myslides");
    let bolas = document.getElementsByClassName("bola");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < bolas.length; i++) {
        bolas[i].className = bolas[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    bolas[slideIndex-1].className += " active";
}

let slideIndex = 1;
showSlides(slideIndex);