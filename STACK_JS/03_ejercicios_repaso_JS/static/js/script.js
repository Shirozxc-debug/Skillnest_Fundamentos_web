console.log("Conexiòn exitosa con JS...")
// # Tarea: Práctica de Condicionales en JavaScript (Parte 2)

// ## Objetivo de Aprendizaje

// Desarrollar programas utilizando estructuras condicionales en JavaScript para resolver distintos problemas mediante el uso de:

// - if
// - else if
// - else
// - operadores de comparación
// - operadores lógicos
// - variables
// - funciones
// - prompt()
// - alert()

// ---

// # Instrucciones Generales

// Crear una página web utilizando:

// - HTML
// - CSS
// - JavaScript

// Cada ejercicio debe:

// - Tener su propio botón con `onclick`
// - Tener una función independiente en `script.js`
// - Solicitar datos mediante `prompt()`
// - Mostrar resultados utilizando `alert()`
// - Utilizar estructuras condicionales correctamente
// - Aplicar operadores de comparación y operadores lógicos cuando corresponda

// ---

// # Estructura del Proyecto

// ```
// condicionales_js_parte2
// │
// ├── index.html
// ├── README.md
// ├── static
// │   ├── css
// │   │   └── style.css
// │   └── js
// │       └── script.js
// ```

// ---

// # Ejercicio 1: Calculadora de Envío

// ## Enunciado

// Una empresa de despacho cobra el envío dependiendo del peso del paquete.

// Solicitar:

// - Nombre del cliente
// - Peso del paquete (kg)

// Condiciones:

// - Hasta 2 kg
// - Más de 2 kg y hasta 5 kg
// - Más de 5 kg y hasta 10 kg
// - Más de 10 kg

// El programa debe indicar:

// - Nombre del cliente
// - Categoría del envío
// - Valor correspondiente al despacho

function ejercicio1() {
    let Nombre = prompt("Ingrese el nombre del cliente: ");
    let Peso = parseInt(prompt("Ingrese el peso del paquete: "));
    let ValorDespacho = 2000;
    let TotalDespacho = 0;
    let mensaje = "";
    if (Peso > 0 && Peso <= 2) {
        TotalDespacho = Peso * ValorDespacho;
    } else if (Peso > 2 && Peso >= 5) {
        TotalDespacho = Peso * ValorDespacho;
    } else if (Peso > 10 && Peso < 50) {
        TotalDespacho = Peso * ValorDespacho;
    } else {
        alert("Ingrese valores válidos!!");
    }
    alert(`Nombre Cliente: ${Nombre}
    \nEl paquete pesa: ${Peso}kg
    \nValor de despacho: $${ValorDespacho * Peso}`);
}

// # Ejercicio 2: Acceso a Biblioteca

// ## Enunciado

// Una biblioteca posee dos tipos de usuarios:

// - Estudiante
// - Profesor

// Solicitar:

// - Tipo de usuario
// - Cantidad de libros solicitados

// Condiciones:

// Cada tipo de usuario posee un límite distinto de préstamos.

// El programa debe indicar:

// - Si el préstamo está permitido.
// - Si supera el límite permitido.
// - Mostrar un mensaje diferente según el tipo de usuario.

// Utilizar operadores lógicos para realizar las validaciones.

function ejercicio2() {
    let Usuario = prompt("Usuario: Estudiante/Profesor");
    let PrestamoEstudiante = 10;
    let PrestamoProfesor = 20;
    let Libros = parseInt(prompt("Cantidad de libros solicitados"));
    let mensaje = "";
    if (Usuario === "Estudiante" && Libros <= PrestamoEstudiante) {
        mensaje = `Bienvenido Estudiante
        \nPrestamo de libros concedido`
    } else if (Libros > PrestamoEstudiante) {
        mensaje = `La cantidad de libros supera el préstamo designado 
        \nPrestamo denegado`
    } else if (Usuario === "Profesor" && Libros <= PrestamoProfesor) {
        mensaje = `Bienvenido Profesor
        \nPréstamo de libros concedido`
    } else if (Libros >= PrestamoProfesor) {
        mensaje = `La cantidad de libros supera el préstamo designado 
        \nPrestamo denegado`
    } else {
        mensaje = `Ingrese un usuario válido`
    }
    alert(mensaje);
}
// # Ejercicio 3: Clasificación Deportiva

// ## Enunciado

// Solicitar:

// - Nombre del participante
// - Edad

// Clasificar al participante según su edad.

// Debe existir al menos cuatro categorías distintas.

// Finalmente mostrar:

// - Nombre
// - Edad
// - Categoría asignada

function ejercicio3() {
    let nombre = prompt("Ingrese su nombre: ");
    let edad = parseInt(prompt("Ingrese su edad: "));
    if (edad <= 10 && edad > 0) {
        alert(`Nombre: ${nombre} 
            \nEdad: ${edad}
            \nCategoria: niño`)
    } else if (edad >= 11 && edad <= 17) {
        alert(`Nombre: ${nombre} 
            \nEdad: ${edad}
            \nCategoria: Adolescente`)
    } else if (edad >= 18 && edad <= 60) {
        alert(`Nombre: ${nombre} 
            \nEdad: ${edad}
            \nCategoria: adulto`)
    } else if (edad > 60 && edad < 100) {
        alert(`Nombre: ${nombre} 
            \nEdad: ${edad}
            \nCategoria: adulto mayor`)
    } else {
        alert("Ingrese una edad válida")
    }
}


// # Ejercicio 4: Sistema de Bonificación

// ## Enunciado

// Una empresa entrega bonos según los años trabajados.

// Solicitar:

// - Nombre del trabajador
// - Años de servicio

// Clasificar según distintos rangos de antigüedad.

// Mostrar:

// - Nombre
// - Nivel de antigüedad
// - Mensaje indicando si recibe o no bonificación.

function ejercicio4() {
    let trabajador = prompt("Ingresar nombre del trabajador");
    let año = parseInt(prompt("Ingresar años de servicio"));
    let mensaje = "";
    if (año < 0) {
        mensaje = "Por favor ingresa una cantidad de años válida.";
    } else if (año <= 5) {
        mensaje = `Nombre: ${trabajador}
        Nivel de antiguedad: Novato
        No recibe bonificación por tener 5 años o menos de lo necesario.`;
    } else if (año <= 10) {
        mensaje = `Nombre: ${trabajador}
        Nivel de antiguedad: Intermedio
        mensaje: ¡Felicidades! Recibe bonificación estándar.`;
    } else {
        mensaje = `Nombre: ${trabajador}
        Nivel de antiguedad: Veterano
        mensaje: ¡Felicidades! Bonificación máxima por su gran lealtad a la empresa.`;
    }
    alert(mensaje)
}

// # Ejercicio 5: Evaluación de Velocidad

// ## Enunciado

// Solicitar:

// - Nombre del conductor
// - Velocidad registrada

// Condiciones:

// Clasificar la velocidad en distintos rangos.

// Además:

// Si supera un determinado límite, mostrar un mensaje indicando que ha excedido la velocidad permitida.

// Mostrar:

// - Nombre del conductor
// - Velocidad
// - Clasificación obtenida

function ejercicio5() {
    let NombreConductor = prompt("Nombre del conductor: ");
    let Velocidad = parseInt(prompt("Velocidad del conductor:"));
    let LimiteVelocidad = "90";
    let mensaje = "";
    if (LimiteVelocidad <= Velocidad && Velocidad >= 65) {
        mensaje = `Velocidad límite`
    } else if (LimiteVelocidad <= 65 && Velocidad > 30) {
        mensaje = `Velocidad alta, baja un poco la velocidad`
    } else if (Velocidad <= 60 && Velocidad > 30) {
        mensaje = `Velocidad adecuada`
    } else {
        mensaje = `Velocidad lenta`
    } 
    alert(mensaje)
}
// # Requisitos Técnicos

// Cada ejercicio debe cumplir con:

// - Una función independiente.
// - Uso de prompt().
// - Uso de alert().
// - Uso de variables.
// - Uso de if.
// - Uso de else if.
// - Uso de else.
// - Uso de operadores de comparación.
// - Uso de operadores lógicos cuando corresponda.

// ---

// # Desafío Extra

// Agregar una o más de las siguientes mejoras:

// - Validación de campos vacíos.
// - Validación de datos numéricos.
// - Mostrar mensajes utilizando emojis.
// - Mostrar resultados dentro del HTML utilizando `innerHTML`.
// - Cambiar colores o estilos mediante JavaScript según el resultado obtenido.