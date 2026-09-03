// console.log("Prueba de concexion...");

const imagen = document.getElementById("image");

imagen.addEventListener("mouseover", function () {
    imagen.src = "static/images/noche-estrellada-sobre-el-ródano.png";
});

imagen.addEventListener("mouseout", function () {
    imagen.src = "static/images/campo-de-trigo-con-cipreses.png";
});

const desc = document.getElementById("desc")
imagen.addEventListener("mouseover", function () {
this.src = imagenNueva;
desc.textContent = "La noche estrellada, Vincent Van Gogh (1889)"
});