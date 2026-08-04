console.log("Prueba con JS...")

// 🎯 Objetivo
// Aplicar la creación de objetos en JavaScript utilizando una función que genere nuevas instancias de un objeto basado en parámetros dados.
// ❓ ¿Por qué es importante?
// Los objetos en JavaScript te permiten organizar datos de manera estructurada y reutilizable.
//  Crear una función que devuelva un objeto es una práctica común en la programación, ya que facilita la generación de múltiples elementos con características similares.
// En este desafío, aplicarás estos conceptos creando una fábrica de pizzas,
//  lo que te ayudará a comprender cómo funcionan los objetos en la vida real y cómo puedes generar datos dinámicamente.

// 📋 Instrucciones 
// 👨‍🍳 Crea una función llamada pizzaOven que devuelva un objeto con las propiedades:

// corteza: tipo de corteza de la pizza.
// salsa: tipo de salsa utilizada.
// quesos: un arreglo con los tipos de queso que tiene la pizza.
// ingredientes: un arreglo con los ingredientes adicionales.


// 🍕 Usa la función para crear las siguientes pizzas:

// Una pizza “estilo Chicago” con corteza tradicional, salsa tradicional, mozzarella y los ingredientes pepperoni y salchicha.
// Una pizza “lanzada a mano” con salsa marinara, mozzarella y feta, y los ingredientes champiñones, aceitunas y cebollas.
// Crea dos pizzas más con tus ingredientes favoritos.
// 💻 Muestra en "html con alert" consola los objetos de cada pizza creada.

function mostrarPizza() {
function pizzaOven(corteza, salsa, queso, ingredientes) {
    let pizza = {};
    pizza.corteza = corteza;
    pizza.salsa = salsa;
    pizza.queso = queso;
    pizza.ingredientes = ingredientes;
    return pizza;
}
let f1 = pizzaOven(
    `tradicional`,
    `marina`,
    [`mozzarella`, `feta`],
    [`champiñones`, `aceitunas`, `cebollas`],
);

let g1 = pizzaOven(
    `Tradicional`,
    `Tradicional`,
    `Mozzarella`,
    [`Peperonni`,`Salchicha`],
);

let g2 = pizzaOven(
    `Napolitana`,
    `Marina`,
    `Cabra`,
    [`Hoja albahaca`, `Aceite de oliva`],
);

let g3 = pizzaOven(
    `Romana`,
    `Pesto de albahaca`,
    `Gauda`,
    [`Higos frescos`,`Jamon serrano`],
);

alert(`
    Ingredientes de la primera pizza:
    corteza: ${f1.corteza}
    salsa: ${f1.salsa}
    queso: ${f1.queso.join(' - ')}
    ingredientes: ${f1.ingredientes.join(' - ')}
`);

alert(`
    Ingredientes de la primera pizza:
    corteza: ${g1.corteza}
    salsa: ${g1.salsa}
    queso: ${g1.queso}
    ingredientes: ${g1.ingredientes.join(' - ')}
`);

alert(`
    Ingredientes de la primera pizza:
    corteza: ${g2.corteza}
    salsa: ${g2.salsa}
    queso: ${g2.queso}
    ingredientes: ${g2.ingredientes.join(' - ')}
`);

alert(`
    Ingredientes de la segunda pizza:
    corteza: ${g3.corteza}
    salsa: ${g3.salsa}
    queso: ${g3.queso}
    ingredientes: ${g3.ingredientes.join(' - ')}
`);    
}