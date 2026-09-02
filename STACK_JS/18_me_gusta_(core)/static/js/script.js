console.log("Prueba de conexion JS...")


let contador1 = 0;
let contador2 = 0;
let contador3 = 0;

let rei = document.querySelector("#rei");
let asuka = document.querySelector("#asuka");
let shinji = document.querySelector("#shinji");

rei.addEventListener("click", function () {
    if (rei !== null) {
        contador1 = contador1 + 1
        rei.textContent = `${contador1} Like(s)`
    } else {
        console.log("boton inexistente")
    }
})

asuka.addEventListener("click", function () {
    if (asuka !== null) {
        contador2 = contador2 + 1
        asuka.textContent = `${contador2} Like(s)`
    } else {
        console.log("boton inexistente")
    }
})

shinji.addEventListener("click", function () {
    if (shinji !== null) {
        contador3 = contador3 + 1
        shinji.textContent = `${contador3} Like(s)`
    } else {
        console.log("boton inexistente")
    }
})

let happyHappy = document.querySelector("#likeVillage")
let paula = document.querySelector("#likePaula")
let runaway = document.querySelector("#likeRunaway")



// let contador1 = 0;
// let contador2 = 0;
// let contador3 = 0;

// let likeHappy = document.querySelector("#likeVillageTexto");
// let likePaula = document.querySelector("#likePaulaTexto");
// let likeRunaway = document.querySelector("#likeRunawayTexto");

// happyHappy.addEventListener("click", function () {
//     if (happyHappy !== null) {
//         contador1 = contador1 + 1
//         likeHappy.textContent = ${contador1} Like(s)
//     } else {
//         console.log("boton inexistente")
//     }
// })

// paula.addEventListener("click", function () {
//     if (paula !== null) {
//         contador2 = contador2 + 1
//         likePaula.textContent = ${contador2} Like(s)
//     } else {
//         console.log("boton inexistente")
//     }
// })

// runaway.addEventListener("click", function () {
//     if (runaway !== null) {
//         contador3 = contador3 + 1
//         likeRunaway.textContent = ${contador3} Like(s)
//     } else {
//         console.log("boton inexistente")
//     }
// })