window-addEventListener(`scroll`,function(){
    const animacion = this.document.getElementById(`transition`);
    const posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1)

    let tamañodePantallamovil = window.innerHeight/1.3;

    if(posicionObj1 < tamañodePantallamovil){
        animacion.style.animation = `translate 1.5s ease-out`
    }
})
// Tercer Main
window-addEventListener(`scroll`,function(){
    const animacion1 = this.document.getElementById(`transition-1`);
    const posicionObj1 = animacion1.getBoundingClientRect().top;
    console.log(posicionObj1)

    let tamañodePantallamovil = window.innerHeight/1.3;

    if(posicionObj1 < tamañodePantallamovil){
        animacion1.style.animation = `translate-1 1.5s ease-out`
    }
})
// Cuarto main
window-addEventListener(`scroll`,function(){
    const animacion2 = this.document.getElementById(`transition-2`);
    const posicionObj1 = animacion2.getBoundingClientRect().top;
    console.log(posicionObj1)

    let tamañodePantallamovil = window.innerHeight/1.3;

    if(posicionObj1 < tamañodePantallamovil){
        animacion2.style.animation = `translate 1.5s ease-out`
    }
})

// Quinto main
window-addEventListener(`scroll`,function(){
    const animacion3 = this.document.getElementById(`transition-3`);
    const posicionObj1 = animacion3.getBoundingClientRect().top;
    console.log(posicionObj1)

    let tamañodePantallamovil = window.innerHeight/1.3;

    if(posicionObj1 < tamañodePantallamovil){
        animacion3.style.animation = `translate 1.5s ease-out`
    }
})
// Sexto main
window-addEventListener(`scroll`,function(){
    const animacion4 = this.document.getElementById(`transition-4`);
    const posicionObj1 = animacion4.getBoundingClientRect().top;
    console.log(posicionObj1)

    let tamañodePantallamovil = window.innerHeight/1.3;

    if(posicionObj1 < tamañodePantallamovil){
        animacion4.style.animation = `translate 1.5s ease-out`
    }
})
// Septimo main 
window-addEventListener(`scroll`,function(){
    const animacion5 = this.document.getElementById(`transition-5`);
    const posicionObj1 = animacion5.getBoundingClientRect().top;
    console.log(posicionObj1)

    let tamañodePantallamovil = window.innerHeight/1.3;

    if(posicionObj1 < tamañodePantallamovil){
        animacion5.style.animation = `translate 1.5s ease-out`
    }
})
window-addEventListener(`scroll`,function(){
    const animacion6 = this.document.getElementById(`transition-6`);
    const posicionObj1 = animacion6.getBoundingClientRect().top;
    console.log(posicionObj1)

    let tamañodePantallamovil = window.innerHeight/1.3;

    if(posicionObj1 < tamañodePantallamovil){
        animacion6.style.animation = `translate-1 1.5s ease-out`
    }
})

// ONE CLICK
const clickme = document.getElementById(`active`)


clickme.addEventListener(`click`,(e)=>{
    if(e.target.classList=="active-bg"){
        e.target.classList.replace(`active-bg`,`gren`)
    }
    else
        e.target.classList.replace(`gren`,`active-bg`)   
})


// MENU DESPEGABLE
const menuclick = document.querySelector(`.menu-open`)
const menuactive = document.querySelector(`.nav-list`)
const menuactive2 =document.querySelector(`.menu-2-open`)
const texttranslate1 = document.querySelector(`.text-translate-1`)
const texttranslate2= document.querySelector(`.text-translate-2`)
const texttranslate3= document.querySelector(`.text-translate-3`)

menuclick.addEventListener(`click`,()=>{
    menuactive.classList.toggle(`nav-list-active`)
    menuclick.classList.toggle(`menu-open-desactive`)
    menuactive2.classList.add(`menu-2-open-active`)
    texttranslate1.classList.add(`translate`)
    texttranslate2.classList.add(`translate`)
    texttranslate3.classList.add(`translate`)

})

menuactive2.addEventListener(`click`,()=>{
    menuactive.classList.toggle(`nav-list-active`)
    menuactive2.classList.remove(`menu-2-open-active`)
    menuclick.classList.remove(`menu-open-desactive`)
    texttranslate1.classList.remove(`translate`)
    texttranslate2.classList.remove(`translate`)
    texttranslate3.classList.remove(`translate`)
})

