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

function compraDeFrutas() {
let compras = [5000, 2300, 12000, 4500, 3000];
let alumnos = ["Ana", "Pedro", "María", "José"];
let datos = ["Carlos", 18, true];
let frutas1 = ["Manzana", "Pera", "Kiwi", "Sandía"];
let mensaje1 = `${alumnos[1]} tiene ${datos[1]} años, y compró una ${frutas1[3]} a $${compras[1]}`;
alert(mensaje1);
}

console.log(`frutas`); // 4 --> Conteo de elementos

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

// Recorrer un arreglo
function recorrerArreglo() {
    let notas = [6.2,5.8,4.1,7.0];
    for(let i=0;i<notas.length;i++){
        alert(`Mostrando Nota ${i + 1} de ${notas.length} ${notas[i]}`);
    }
}

// Sumar elementos dentro de un bucle
function sumarElementos() {
    let ventas = [10000,5000,12000,8000];
    let total = 0;
        for(let i=0;i<ventas.length;i++){
        total += ventas[i];  // += acumula
    }
    alert(`El resultado final es: ${total}`);
}

// Calcular un promedio
function calcularPromedio() {
    let notas = [5.8,6.2,4.9,6.5];
    let suma = 0;
        for(let i=0;i<notas.length;i++){
        suma += notas[i];
    }
    alert(`La suma acumulada es: ${suma}`);
    let promedio = suma / notas.length;
    alert(`El promedio de las notas: ${notas.join(' - ')}\nPromedio: ${promedio}`)
}
// Condiciones dentro de bucle
function buscarMayoresEdad() {
    let edades = [12,15,18,20,25,30,10,21,7];
    let mayores = [];
    for(let i=0;i<edades.length;i++){
        // Condicion para buscar mayores de 18
        if(edades[i] >= 18){
            mayores.push(edades[i]); // Añade la posición que cumple la condición
        }
    }
    alert(`De la lista de edades: ${edades.join(' / ')}\nLos mayores son: ${mayores.join(' / ')}`)
}

// Encontrar el menor y el mayor
function buscarMayorMenor() {
    let numeros = [10, 35, 7, 90, 22, 90, 2];
    let menor = numeros[0];
    let mayor = numeros[0];
    for(let i = 1; i < numeros.length; i++){
    if(numeros[i] < mayor){
        menor = numeros[i];
    } else if (numeros[i] > mayor ) {
        mayor = numeros[i];
    } else {
        console.log(`Valor que no afecta: ${numeros[i]}`);
    }
}
alert(`De los números ${numeros.join(' / ')}
El menor es: ${menor}
El mayor es: ${mayor}`);
}


// Ejemplo completo
// Tarea: Unir los console.log en una alerta
// Eliminar el último valor y mostrarlo.
// Añadir dos valores nuevos con .push (prompt)
// Contar cantidad de ventas mayores que 10.000
function calcularVentas() {
    let ventas = [5000,8000,12000,3000,10000,9000,4000];
    let total = 0;
    let mayores = [];
    let contadorVentas = 0;
    let mayor = ventas[0];
    let eliminar = ventas.pop();
    let valor1 = parseInt(prompt("Ingrese primer valor: "));
    let valor2 = parseInt(prompt("Ingrese segundo valor: "));
    ventas.push(valor1, valor2);
    for(let i = 0; i < ventas.length; i++){
    total += ventas[i];
        if(ventas[i] > mayor){
            mayor = ventas[i];
            if (ventas[i] >= 10000) {
                mayores.push(ventas[i]);
                contadorVentas++;
            }
        }
    }
console.log("Total:", total);
console.log("Mayor:", mayor);
console.log("Promedio:", total/ventas.length);
    alert(`El total de ventas es: ${total} 
        \nEl mayor es: ${mayor} 
        \nEl promedio es: ${total / ventas.length}
        \nValores sobre $10.000: ${mayores.join(' / ')}
        \nConteo de mayores: ${contadorVentas} ventas
        \nValor eliminado: ${eliminar}`);
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
