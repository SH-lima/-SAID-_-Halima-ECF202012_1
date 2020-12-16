
// selectionner le menu 
const burgerElement = document.querySelector("nav")
// selectionner le burgerBar 
const burgerBar = document.querySelector("#burgerBar")
// afficher le menu de navigation en cliquant sur burger bar 
burgerBar.addEventListener("click", ()=>{
    burgerElement.classList.toggle("hide")
})
// cacher  le menu en cliquant hors la zone de menu 
burgerBar.addEventListener("blur", ()=>{
    burgerElement.classList.add("hide")
})


// selectionner le footer
const brande = document.querySelector("#brand")
// fixer le footer en arrivant en bas de page 
window.addEventListener("scroll", ()=>{
    if(window.scrollY >= 213){
       brande.classList.remove("fixedPosition") 
    }else{
       brande.classList.add("fixedPosition")
    }
    
})


// darkmode 
// selectionner tous les elements qui doivent changer la couleur ou bien le fond 
const boutonDarkmode =document.querySelectorAll(".bouton")
const menu =document.querySelector("nav ul")
const navItems=document.querySelectorAll("nav li")
const navBar=document.querySelector(".navBar")
const brand=document.querySelector("#brand")
const logo=document.querySelectorAll(".logo a")
const contactItems=document.querySelectorAll(" i")
const footer=document.querySelector("footer")

// pour tous les bouton de Dark mode 
boutonDarkmode.forEach((bouton)=>{
    // changer les couleurs de body, textes, titres, en cliquant sur la bouton 
    bouton.addEventListener("click", ()=>{
        bouton.classList.toggle("left")
        document.body.classList.toggle("color")
        document.body.classList.toggle("background")
        navBar.classList.toggle("transparent")
        brand.classList.toggle("brandStyle")
        logo.forEach((i)=>{
            i.classList.toggle("pink")
        })
        footer.classList.toggle("brandStyle")
        contactItems.forEach((i)=>{
            i.classList.toggle("pink")
        })
        navItems.forEach((i)=>{
            i.classList.toggle("menuStyle")
        })
        menu.classList.toggle("brandStyle")
    })   
})
