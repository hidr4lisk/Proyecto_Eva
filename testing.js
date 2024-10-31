// Definición de los enemigos
const Enemigos = {
    Goblin: { salud: 3, daño: 2, armadura: 1 },
    Espectro: { salud: 2, daño: 3, armadura: 1 },
    Orco: { salud: 4, daño: 3, armadura: 2 }
};

// Definición de las funciones para cada opción
function atacar() {
    console.log("Elige tu objetivo para atacar:");
    const enemigos = Object.keys(Enemigos); // Obtiene los nombres de los enemigos
    const eleccionEnemigo = menuDeSeleccion(...enemigos);
    console.log(`Has decidido atacar a ${enemigos[eleccionEnemigo]}`);
    // Aquí puedes agregar más lógica para realizar el ataque
}

function abrirInventario() {
    console.log("Abriendo el inventario.");
    // Lógica del inventario aquí
}

function entrarTienda() {
    console.log("Entrando a la tienda.");
    // Lógica de la tienda aquí
}

// Mapeo de las opciones a sus respectivas funciones
const opcionesFunciones = {
    0: atacar,
    1: abrirInventario,
    2: entrarTienda
};

// Función para mostrar el menú y ejecutar la opción seleccionada
function menuDeSeleccion(...opciones) {
    console.log("\n                          Opciones")
    console.log("------------------------------------")
    for (let i = 0; i < opciones.length; i++) {
        console.log(`Ingrese < ${i} > - para ${opciones[i]}`)
        console.log("------------------------------------")
    }
    let eleccion = validarIngreso(opciones);
    // Ejecuta la función correspondiente a la elección
    return eleccion; // Devuelve la elección para usarla en caso de ataque
}

// Función para validar la entrada del usuario
function validarIngreso(opciones) {
    while (true) {
        let eleccion = prompt("Ingrese su elección:");
        eleccion = parseInt(eleccion); // Convierte la entrada a un número entero

        // Verifica si es un número válido dentro del rango
        if (!isNaN(eleccion) && eleccion >= 0 && eleccion < opciones.length) {
            return eleccion; // Sale del bucle si es válido
        } else {
            console.log("Entrada inválida. Por favor, ingrese un número dentro del rango.");
        }
    }
}

// Menú principal
const opciones = ["ataque", "inventario", "tienda"];
const eleccion = menuDeSeleccion(...opciones);
opcionesFunciones[eleccion](); // Ejecuta la función correspondiente
