const boton = document.getElementById("miBoton");

boton.addEventListener("mouseover", function () {
  console.log("El ratón está sobre el botón");
});

boton.addEventListener("mouseout", function () {
  console.log("El ratón ha salido del botón");
  boton.style.backgroundColor = "blue";
});

/*
Crear dos botones con evento omouseover y omouseout

- Cambiar el texto de un boton
- Cambiar el color de fondo y color de un texto del segundo botón.
*/


boton2.addEventListener("mouseover", function () {
  console.log("El ratón esta sobre el botón");
  boton2.style.backgroundColor = "";
  elemento.style.backgroundColor = "blue";
  boton.style.color = "red";
});

boton2.addEventListener("mouseout", function () {

})