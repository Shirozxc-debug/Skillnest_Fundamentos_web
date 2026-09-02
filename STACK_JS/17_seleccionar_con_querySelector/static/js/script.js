console.log("Prueba de conexi+on con JS...")

// Etiqueta
let title = document.querySelector("#title");
console.log(title);

let parrafo = document.querySelector("p");
console.log(parrafo);

let logoImg = document.querySelector(".nav img");
console.log(logoImg);

let texto = document.querySelector(".texto");
console.log(texto.textContent);

// Elemento inexistente

let boton = document.querySelector("#boton-inexistente");
console.log(boton); // null

if (boton !== null) {
    boton.textContent = "Nuevo Texto";
} else {
    console.log("El botón no existe.");
}

// Tarea
/* Crear un botón y aplicar condicion al igual que ejemplo...
- Debe cambiar su texto al momento de hacer click
- Debe activarse un hover js cambiado el color del fondo
*/
const text = document.querySelector("#boton")

text.addEventListener("click", function () {
    if (this.textContent === "Haz click en mi y cambiare") {
        this.textContent = "Ves que es distinto?";
        this.style.backroundColor = "#8A383F";
        this.style.color = "#327CAE";
    } else {
        this.textContent = "El boton no existe";
        this.style.backroundColor = "#FDC305";
        this.style.color = "#31855F";
    }
});