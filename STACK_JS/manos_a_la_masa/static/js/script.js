console.log("Prueba con JS...")


let hamburguesaEspecial = {
    pan: "Pan brioche",
    carne: "Pollo crujiente",
    queso: "Suizo",
    extras: [
        "Lechuga",
        "Pepinos",
        "Miel"
    ],
    mostrarIngredientes: function () {
        console.log("Pan:", this.pan);
        console.log("Carne:", this.carne);
        console.log("Queso:", this.queso);
        console.log(
            "Extras:",
            this.extras.join(", ")
        );
    }
};

// Acceder al pan
console.log(hamburguesaEspecial.pan)
hamburguesaEspecial.mostrarIngredientes();

// Objeto con método automovil
function metodoAutomovil() {
    let auto = {
        marca: "Toyota",
        modelo: "Corolla",
        año: 2023,
        encender: function () {
            alert(
                "Encendiendo",
                this.marca,
                this.modelo
            );
        }
    };
    auto.encender();
}


// Objeto con método casa 
function metodoCasa() {
    let casa = {
        direccion: "Av. Siempre Viva 742",
        habitaciones: 4,
        baños: 2,
        mostrarInformacion: function () {
            alert(`
            Dirección: ${this.direccion}
            Habitaciones: ${this.habitaciones}
            Baños: ${this.baños}`);
        }
    };
    casa.mostrarInformacion();
}

// function sandwichFactory(pan, proteina, queso, salsas) {
//     let sandwich = {};
//     sandwich.pan = pan;
//     sandwich.proteina = proteina;
//     sandwich.queso = queso;
//     sandwich.salsas = salsas;
//     return sandwich;
// }

// let s1 = sandwichFactory(
//     "trigo",
//     "pavo",
//     "provolone",
//     ["mostaza", "cebolla frita", "rúcula"],
// );
// let s2 = sandwichFactory(
//     "masa","pavo","cheddar","ketchup","mayonesa"
// );
// alert(s1)
// alert(`Ingredientes del segundo sandwich:
//     pan: ${s2.pan}
//     proteina: ${s2.proteina}
//     queso: ${s2.queso}
//     salsas: ${s2.salsas.join(' - ')}
// `);

// # 💻 Ejercicios

// ## Ejercicio 1

// Crea un objeto llamado **libro** con las siguientes propiedades.

// - título
// - autor
// - año
// - editorial
// - páginas

// Luego muestra todas sus propiedades utilizando `console.log()`.

// ---
function ejercicio1() {
    let libro = {
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        año: 1967,
        editorial: "Editorial sudamericana",
        páginas: "471 páginas",
        mostrarPropiedad: function () {
            alert(`
            Titulo: ${this.titulo}
            Autor: ${this.autor}
            Año: ${this.año}
            Editorial: ${this.editorial}
            Páginas: ${this.páginas}`);
        }
    };
    libro.mostrarPropiedad();
}

// ## Ejercicio 2

// Crea un objeto llamado **celular**.

// Debe contener:

// - marca
// - modelo
// - almacenamiento
// - color

// Posteriormente:

// - Cambia el color.
// - Agrega una propiedad llamada `precio`.
// - Elimina la propiedad `almacenamiento`.

// Finalmente muestra el objeto completo.

// ---

function ejercicio2() {
    let celular = {
        marca,
        modelo,
        almacenamiento,
        color,
        mostrarObjeto: function () {
            alert(`
            Marca:
            Modelo:
            ALmacenamiento:
            Color:`)
        }
    };
}

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


// ## Ejercicio 3

// Crea un objeto llamado **videojuego**.

// Debe contener:

// - nombre
// - género
// - plataforma

// Agrega un método llamado `mostrarInformacion()` que imprima todas sus propiedades utilizando `this`.


// ---

function ejercicio3() {

}

// # 🚀 Desafío 1 — Sistema de Estudiantes

// Crea un objeto llamado **estudiante** con:

// - nombre
// - edad
// - curso
// - promedio
// - asistencia

// Agrega un método llamado `mostrarResumen()` que muestre un resumen como el siguiente:

// ```text
// Nombre: Pedro

// Curso: 4° Medio

// Promedio: 6.2

// Asistencia: 95%
// ```

// Utiliza `this` para acceder a todas las propiedades.

// ---

function desafio1() {

}

// # 🚀 Desafío 2 — Catálogo de Productos

// Crea un objeto llamado **producto**.

// Debe contener:

// - nombre
// - precio
// - stock
// - categoría
// - descuento

// Agrega un método llamado `precioFinal()` que calcule el precio con descuento y muestre:

// ```text
// Producto: Notebook

// Precio original: $650000

// Descuento: 10%

// Precio final: $585000
// ```

// ---

function desafio2() {

}

// # 🚀 Desafío 3 — Personaje de Videojuego ⭐

// Diseña un objeto llamado **personaje**.

// Debe contener:

// - nombre
// - vida
// - ataque
// - defensa
// - nivel
// - inventario (arreglo)

// Además debe tener los siguientes métodos:

// - `mostrarEstado()`
// - `subirNivel()`
// - `recibirDaño(cantidad)`
// - `agregarObjeto(objeto)`

// El programa debe permitir realizar acciones como:

// ```javascript
// personaje.mostrarEstado();

// personaje.subirNivel();

// personaje.recibirDaño(25);

// personaje.agregarObjeto("Espada Legendaria");

// personaje.mostrarEstado();

function desafio3() {

}