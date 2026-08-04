// Funciones
// 🎯 Objetivo
// Comprender el concepto de funciones en JavaScript, su sintaxis, cómo llamarlas, utilizar parámetros y aplicar return para obtener resultados en el código.

// ❓ ¿Qué son las funciones?
// Hasta ahora, tu código se ejecuta de arriba a abajo, siguiendo cada línea de forma secuencial. Pero, ¿qué pasaría si necesitas repetir un bloque de código varias veces sin escribirlo una y otra vez? Ahí es donde entran las funciones. Una función es un bloque de código reutilizable que solo se ejecuta cuando lo llamas.

// Ejemplo de una función simple:

// function saludar() {
//    console.log("¡Hola, bienvenido!");
// }
// 🔔 Llamando o invocando funciones
// Para ejecutar una función, debes invocarla escribiendo su nombre seguido de paréntesis:

// saludar();
// Salida esperada en la consola:

// ¡Hola, bienvenido!
// Puedes llamar a una función tantas veces como quieras, sin necesidad de repetir el código dentro de ella.

// saludar();
// saludar();
// saludar();
// Esto imprimirá el mensaje tres veces sin necesidad de escribir console.log repetidamente.

//  🎚️ Funciones con parámetros
// Las funciones se vuelven aún más útiles cuando les puedes pasar datos. Estos datos son llamados parámetros y permiten que la función sea más flexible.

// Ejemplo:

// function saludar(nombre) {
//    console.log("¡Hola, " + nombre + "!");
// }
// Ahora la función saludar espera recibir un nombre al ser llamada. Cuando la invocas, debes proporcionar un argumento.

// saludar("Luis");
// saludar("Ana");
// Salida esperada:

// ¡Hola, Luis!
// ¡Hola, Ana!
// Los parámetros permiten que una función trabaje con valores dinámicos en lugar de siempre ejecutar la misma instrucción.

// 🎯 Funciones con return
// Hasta ahora, nuestras funciones solo muestran información en la consola, pero no devuelven ningún resultado que podamos usar en otro momento. Con return, una función puede devolver un valor, lo que la hace aún más poderosa.

// Ejemplo de una función que devuelve el número mayor:

// function encontrarMaximo(a, b) {
//    if (a > b) {
//        return a;
//    } else {
//        return b;
//    }
// }
// Aquí, la función encontrarMaximo compara dos números y devuelve el mayor.

// let numero1 = 10;
// let numero2 = 7;
// let maximo = encontrarMaximo(numero1, numero2);
// console.log("El número mayor entre", numero1, "y", numero2, "es:", maximo);
// Salida esperada:

// El número mayor entre 10 y 7 es: 10
// Cuando una función usa return, puedes almacenar el valor devuelto en una variable y usarlo más adelante en el código.

// Las funciones en JavaScript permiten reutilizar código y hacerlo más organizado. Puedes definir funciones simples, funciones con parámetros para recibir valores y funciones que devuelven resultados con return.
