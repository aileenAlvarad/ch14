console.log("se nota que todavia me extrañas ");

setInterval(cambiarSaludo, 2000);

function cambiarSaludo() {
    let elementoh2 =document.getElementsByTagName("h2")[0];
    let ganando = "Ganando como siempre!"
    let moda = "Impongo moda para las niñas";

    let frase = elementoh2.innerHTML
    console.log(frase);
    if (elementoh2.innerHTML == ganando) {
        elementoh2.innerHTML = moda;
    } else {
        elementoh2.innerHTML =  ganando;
    }
    console.log("frase " + frase);
}