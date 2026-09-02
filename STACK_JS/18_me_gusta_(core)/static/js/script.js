console.log("prueba de conexion JS")
//Seleccion de span

let rei = document.querySelector("#rei")
let asuka = document.querySelector("#asuka")
let shinji = document.querySelector("#shinji")

// seccion contador
let contador1 = 0;
let contador2 = 0;
let contador3 = 0;
//Seleccion de botones
let like = document.querySelector("#btn-rei");
let like1 = document.querySelector("#btn-asuka");
let like2 = document.querySelector("#btn-shinji");

like.addEventListener("click", function () {
    if (like !== null) {
        contador1 = contador1 + 1
        rei.textContent = `${contador1} Like(s)`
    } else {
        console.log("boton inexistente")
    }
})

like1.addEventListener("click", function () {
    if (asuka !== null) {
        contador2 = contador2 + 1
        asuka.textContent =`${contador2} Like(s)`
    } else {
        console.log("boton inexistente")
    }
})

like2.addEventListener("click", function () {
    if (shinji !== null) {
        contador3 = contador3 + 1
        shinji.textContent = `${contador3} Like(s)`
    } else {
        console.log("boton inexistente")
    }
})
