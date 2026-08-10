console.log("Prueba de conexión con js...");

let boton = document.getElementById("cambiarSesion");

boton.addEventListener("click", function () {
  let textoBoton = boton.textContent;
  if (textoBoton === "Iniciar sesión") {
    this.innerText = "Cerrar sesión";
  } else {
    this.innerText = "Iniciar sesión";
  }
});

// Alerta para el botón Ver perfil
function mostrarAlerta() {
  alert("Cargando el perfil del usuario...");
}

// Incrementar likes al hacer clic
function aumentarLike(elemento) {
  let cantidadLikes = parseInt(elemento.innerText);
  cantidadLikes++;
  elemento.innerText = cantidadLikes + " Me gusta";
}
