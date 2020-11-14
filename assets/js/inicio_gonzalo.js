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
    
