const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

//Creo un metodo para obtener el ultimo elemento y lo voy a colocar en el slide, 'afterbegin' me va a ayudar a colocar ese ultimo elemento despues de el lugar donde empieza el slider
slider.insertAdjacentElement('afterbegin', sliderSectionLast);

//Creo dos funciones, una para que se mueva a la derecha y otro a la izquierda

function moverDerecha() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];//De los cuatro elementos solamente voy a obtener el primero
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";


    //Voy a quitarle la transicion
    setTimeout(function() {
        slider.style.transition = "none";
        //En el slider antes de que termine, coloco el primer elemento
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);//Coloco el equivalente a mi tiempo de transicion
}

btnRight.addEventListener('click', function(){
    moverDerecha();
})

function moverIzquierda() {
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";


    //Voy a quitarle la transicion
    setTimeout(function() {
        slider.style.transition = "none";
        //En el slider antes de que termine, coloco el primer elemento
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);//Coloco el equivalente a mi tiempo de transicion
}

btnLeft.addEventListener('click', function(){
    moverIzquierda();
})

setInterval(function() {
    moverDerecha();
}, 5000);