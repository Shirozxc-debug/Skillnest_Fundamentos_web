console.log("Conexion exitosa...")

// Variable a lista

let nombre1 = "Ana";
let nombre2 = "Pedro";
let nombre3 = "María";
let nombre4 = "Carlos";

// Transformar en array y mostrar

let nombre = ["Ana", "Pedro", "María", "Carlos"];

// Mostrar a María en una alerta
let nombres = ["Ana", "Pedro", "María", "Carlos"];
console.log(nombres[2]);


let compras = [5000, 2300, 12000, 4500, 3000];
let alumnos = ["Ana", "Pedro", "María", "José"];
let datos = ["Carlos", 18, true];
let frutas1 = ["Manzana", "Pera", "Kiwi", "Sandía"];

let mensaje1 = `${alumnos[1]} tiene ${datos[1]} años, y compró una ${frutas1[3]} a $${compras[1]}`;
alert(mensaje1);



console.log(`frutas.length`); // 4 --> Conteo de elementos

let frutas2 = ["Manzana", "Pera", "Kiwi", "Sandia"]
let ultimas = frutas2[frutas2.length -1]
// Variable.length -1 siempre trae el último elemento

console.log(ultimas);

// Desafio
// Del arreglo ["hola", "a", "todos", "los", "programadores"]
// Mostrar el penultimo elemento y el ultimo

// let mensaje2 = ["hola", "a", "todos", "los", "programadores"];
// let punultima = mensaje[mensaje.length -1]
// let ultima = mensaje[mensaje.length -1]
// console.log(`${penultima} y ${ultima}`);


// Lista de Tareas
function manipularArreglo() {

let ListaTareas = ["Barrer", "Cocinar", "Realizar compras"];

// Modificar un elemento del arreglo
ListaTareas[1] = "Construir";

// Añadir un elemento al final de la lista
ListaTareas.push("Cocinar")

// ELiminar el último elemento y mostrarlo
let eliminado = ListaTareas.pop();

// Añadir un elemento el inicio de la lista
ListaTareas.unshift(`Boxear`) // unshift elimina el primero

// Mostrar resultado
alert(ListaTareas.join(" - "));
alert(`Elementos eliminados: ${eliminado}`);
}



// Ejercicios

function ejercicio1() {
    let edades = [15,18,20,14,25];
    let cantidad = edades.length
    alert(`La primera edad es: ${edades[0]}`)
    alert(`La penultima edad es: ${edades[4]}`)
    aler(`El arreglo tiene un total de: ${cantidad} elementos`)
}

function ejercicio2() {
    let usuarios = ["Ana", "Pedro", "María", "Carlos"];
    for (let i = 0; i < usuarios.length; i++) {
        alert(`Nombre: ${i + 1} ${nombres[i]}`);
    }
}

function ejercicio3() {
    let notas = [5.0, 6.7, 5.7, 5.9, 4.5];
    let suma = 0;
    for(let i = 0; i < notas.length; i++){
        suma += notas[i]
    }
    let promedio = suma / notas.length
    alert(`${promedio.toFixed(1)}`)
}
