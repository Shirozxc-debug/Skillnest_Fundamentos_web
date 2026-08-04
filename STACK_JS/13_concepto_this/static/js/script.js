
let boton = document.getElementById("cambiarTexto");
boton.addEventListener("click", function () {
    if (this.innerText === "Click me") {
        this.innerText = "Label Changed!";
    } else {
        this.innerText = "Click me";
    }
});
