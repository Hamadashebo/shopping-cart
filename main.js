//login page 
let loginpage=document.querySelector(".login");
let Registerspan=document.getElementById("Registerspan");
let loginbutton =document.getElementById("loginbutton")
Registerspan.addEventListener('click' ,(e)=>{
    document.querySelector(".login").style.display="none";
    document.querySelector(".register").style.display="block";
    
})

loginbutton.addEventListener('click',(e)=>{
    
    document.querySelector(".section").style.display="none";
    document.querySelector(".section1").style.display="block";
    
    
})


let show=document.querySelector("#show");
show.addEventListener('click', (e)=>{
    document.querySelector(".addtocart").style.display="grid";
    document.getElementById("cards").style.marginRight="100px";
    document.getElementById("show").style.marginRight="350px";
})

let close =document.querySelector(".close");
close.addEventListener('click',(e)=>{
    document.querySelector(".addtocart").style.display="none";
    document.getElementById("cards").style.marginRight="0px";
    document.getElementById("show").style.marginRight="0px";
})

