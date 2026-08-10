
let boton = document.getElementById("cambiarTexto")

boton.addEventListener("click", function () {
    let textoBoton = boton.textContent;
    if (textoBoton === "Haz clic en mi") {
        this.innerText = "¡Texto cambiado!";
    } else {
        this.innerText = "Haz clic en mi";
    }
});

// Seleccionamos todas las imágenes con la clase 'imagenEliminar'
let imagenes = document.querySelectorAll(".imagenEliminar");

// Agregamos un evento 'click' a cada imagen
imagenes.forEach(function (imagen) {
    imagen.addEventListener("click", function () {
       // Eliminamos la imagen al hacer clic
        this.remove();
    });
});