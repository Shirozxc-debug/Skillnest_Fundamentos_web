console.log("Prueba de conexión...");

// Ejemplo función simple (sin parámetros)
function saludar(/* parámetros */) {
    alert("¡Hola, bienvenido!");
}

// saludar(); // Ejecución de una función
function saludarParam(nombre) {
    alert("¡Hola, " + nombre + "!");
}


// FUnciones con parametros.
// El parametro recibe un valor para trabajar en la función.
//El paramtero recibe el tipo de dato al momento de tomar valor.

saludar("Matias");// Ejecucion de la funcion de parametros. ("Argumrnto")
// saludar("Ana");

// 🎯 Funciones con return
function encontrarMayor() {
function encontrarMaximo(a, b) {
    if (a > b) {
        return a;
        } else {
    return b;
    }
}
let numero1 = 10;
let numero2 = 7;
let maximo = encontrarMaximo(numero1, numero2);
// máximo guradara el valor de retorno!!
alert(`El número mayor entre ${numero1} y ${numero2} es: ${maximo}`);
}

// Tarea
/* Crear una funcion que reciba 3 parametros, a, b, y c.
Debe sumar a + b y el resultado por c.
DEvolver el valor final y mostrar con alert.
*/

    function operaciom(a,b,c) {
        return a + b - c
    }
    function mostrarResultado () {
    let num1 = parseInt(prompt("ingresar primer número"))
    let num2 = parseInt(prompt("ingresar segundo número"))
    let num3 = parseInt(prompt("ingresar tercer número"))
    let resultado = operaciom(num1,num2,num3);
    alert(`La operacion de ${num1} + ${num2} - ${num3} es igual a ${resultado}`);
    }

/* 
Crear una funcion que reciba un parametro y permita a traves de un bucle contar hasta este.
Ej. se recibe al numero 5 y se muestra: 1 - 2 - 3 - 4 - 5
*/

function contador() {
    let numero = parseInt(prompt(`Ingrese un valor:`))
    if (numero >= 100) {
        alert(`Ingrese un valor válido`)
    } else {
    let lista = contando(numero)
    function contando(a) {
        let listado = [] 
        for (i = 1; i <= a; i++) {
            listado.push(i)
        }
        return listado
        }
        alert(`${lista.join('-')}`)
    }        
}



















function encontrarMenor() {
function encontrarMaximo1(a, b) {
    if (b > a) {
        return a;
        } else {
    return b;
    }
}
let numero1 = 10;
let numero2 = 7;
let maximo = encontrarMaximo1(numero1, numero2);
// máximo guradara el valor de retorno!!
alert(`El número menor entre ${numero1} y ${numero2} es: ${maximo}`);
}

