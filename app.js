
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