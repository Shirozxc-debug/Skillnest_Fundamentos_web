console.log("Prueba de conexión...")

//  ejercicio 1
function filtrarJuegos() {
    let videojuegos = [
        { nombre: "Minecraft", edadRecomendada: 7 },
        { nombre: "FIFA 23", edadRecomendada: 3 },
        { nombre: "Call of Duty", edadRecomendada: 18 },
        { nombre: "Fortnite", edadRecomendada: 12 }
    ];
    let edadMinima = 12;
    let recomendados = [];
    for (let i = 0; i < videojuegos.length; i++) {
        if (videojuegos[i].edadRecomendada <= edadMinima) {
            recomendados.push(videojuegos[i].nombre);
        }
    }
    alert(`Juegos recomendados: ${recomendados.join(' - ')}`);
}

// Ejercicio 2
function contarCanciones() {
    let historialReproduccion = [
        "Shallow",
        "Blinding Lights",
        "Shallow",
        "Anti-Hero",
        "Shallow",
        "Bad Habits",
    ];
    let cancionBuscada = "Shallow";
    let contador = 0;
    for (let i = 0; i < historialReproduccion.length; i++) {
        if (historialReproduccion[i] === cancionBuscada) {
            contador++;
        }
    }
    alert(`La canción "${cancionBuscada}" se reprodujo ${contador} veces`);
}

// Ejercicio 3
function organizarTorneo() {
    let jugadores = [
        "Luis",
        "Andrea",
        "Carlos",
        "Sofía",
        "Pedro",
        "Martina",
        "Javier",
        "Valentina"
    ];
    let tamanoGrupo = 3;
    let grupos = [];
    let grupoActual = [];
    for (let i = 0; i < jugadores.length; i++) {
        grupoActual.push(jugadores[i]);
        if (grupoActual.length === tamanoGrupo || i === jugadores.length - 1) {
            grupos.push(grupoActual);
            grupoActual = [];
        }
    }
    alert(`${jugadores.join(' - ')}`)
    // alert(`Grupos formados: ${grupos.join(' - ')}`);

}

// EJercicio 4
function filaClientes() {
let filaClientes = [
    "María",
    "José",
    "Fernanda",
    "Diego",
    "Valeria",
    "Samuel"
];
let cantidadAtendidos = 3;
let atendidos = [];
for (let i = 0; i < cantidadAtendidos; i++) {
    atendidos.push(filaClientes[i]);
}
filaClientes = filaClientes.slice(cantidadAtendidos);
alert(`Clientes atendidos: ${atendidos.join(' - ')}`);
alert(`Clientes en espera: ${filaClientes.join(' - ')}`);  
}
