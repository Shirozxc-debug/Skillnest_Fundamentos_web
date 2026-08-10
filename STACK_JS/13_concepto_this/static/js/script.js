
let boton = document.getElementById("cambiarTexto")

boton.addEventListener("click", function () {
    let textoBoton = boton.textContent;
    if (textoBoton === "Haz clic en mi") {
        this.innerText = "¡Texto cambiado!";
    } else {
        this.innerText = "Haz clic en mi";
    }
});
