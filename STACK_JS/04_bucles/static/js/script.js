console.log("Prueba de Conexión js...")

/* Ejemplo bucle for*/

function ContarHasta2() {
    for (let i = 1; i <= 4000000;) {
        alert(i);
    }
}

function RecorrerLista() {
    // Lista es un tipo de dato (array/Lista)
    // [] = ["nombre", 4, True, [2,4]]
    /*
    let nombre = "Carlos";
    alert (nombre); 
                        0       1
    let nombres = "["Carlos", "Maria", "Cesar", "Matias", "Benjamín"] --> la lista es un tipo de dato
    alert(nombres[0]) --> Imprime Carlos
    alert(nombres[1]) --> Imprime María
    alert(nombre.length); --> 6 (largo [])
    alert(nombres.lenght); --> 2 (largo nombres)
    // .length --> cantidad de elementos que tiene un objeto
    */
    let usuarios = ["Ana", "Luis", "María", "Matias", "Benjamín"];

    for (let i = 0; i < usuarios.length; i++) {
        alert("Bienvenido, " + usuarios[i]);
    }
}

function CuentaRegresiva() {
    for (let i = 10; i > 0; i--) {
        alert(i);
    }
}

/* Ejemplo bucle while*/

function reproducirCancion() {
    let reproduciendo = true;

    while (reproduciendo) {
        alert("La canción sigue sonando...");
        // Simulación de una acción que detendría la reproducción
        reproduciendo = false;
    }
}

function cargarDatos() {
    let datosPendientes = 5;

    while (datosPendientes > 0) {
        alert(`Cargando datos... ${datosPendientes} de 5`);
        datosPendientes--;
    }
}

function validarContrasena() {
    let contrasenaCorrecta = false;
    // !Variables = variable es distinto a verdadero - dentro de condición
    while (!contrasenaCorrecta) {
        let intento = prompt("Ingresa tu contraseña:");
        if (intento === "1234") {
            contrasenaCorrecta = true;
            alert("Acceso concedido.");
            break; // Rompe el bucle
            alert("No se ejecuta")
        } else {
            alert("Contraseña incorrecta, intenta de nuevo.");
        }
    }
}

