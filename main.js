const Enemigos = {
    Goblin: { salud: 3, daño: 2, armadura: 1 },
    Espectro: { salud: 2, daño: 3, armadura: 1 },
    Orco: { salud: 4, daño: 3, armadura: 2 }
}

const Player = {
    salud: 20,
    daño: 2,
    armadura: 0
}

const Tienda = {
    Pociones: {
        salud: {
            "Pequeña Roja": { "multiplicador": 20, "atributo": "salud", "coste": 50 },
            "Mediana Roja": { "multiplicador": 30, "atributo": "salud", "coste": 100 },
            "Grande Roja": { "multiplicador": 50, "atributo": "salud", "coste": 150 },
        },
        daño: {
            "espada corta": { "multiplicador": 20, "atributo": "daño", "coste": 50 },
            "espada larga": { "multiplicador": 40, "atributo": "daño", "coste": 100 },
            "hacha goblin": { "multiplicador": 65, "atributo": "daño", "coste": 150 }
        },
        armadura: {
            "pechera de cuero": { "multiplicador": 3, "atributo": "armadura", "coste": 50 },
            "pechara de malla": { "multiplicador": 5, "atributo": "armadura", "coste": 100 },
            "pechera de hierro": { "multiplicador": 10, "atributo": "armadura", "coste": 200 }
        }
    }
}
const Inventario = {
    1: "vacio",
    2: "vacio",
    3: "vacio",
    4: "vacio"
}


let estancia = "" //en que menú nos encontramos
let estanciaAnterior = ""
let campoDeBatalla = [Player]

function atacar() {
    console.log("Elige tu objetivo para atacar:")
    const enemigos = Object.keys(Enemigos); // Obtiene los nombres de los enemigos
    const eleccionEnemigo = menuDeSeleccion(...enemigos)
    console.log(`Has decidido atacar a ${enemigos[eleccionEnemigo]}`)
    // Aquí puedes agregar más lógica para realizar el ataque
}

function salir() {
    const confirmacion = confirm("¿Estás seguro de que deseas salir del juego?")
    if (confirmacion) {
        window.close()
        console.log("Has salido del juego.") // Mensaje en la consola
    } else {
        console.log("Continuando en el juego.") // Mensaje si el usuario cancela
    }
}

function abrirInventario() {
    console.log("Abriendo el inventario.")
    // Lógica del inventario aquí
}

function entrarTienda() {
    console.log("Bienvenido a la tienda.")
    
    // Lógica de la tienda aquí
}

// Mapeo de las opciones a sus respectivas funciones
const opcionesFunciones = {
    menu_principal: {1: atacar,2: abrirInventario,3: entrarTienda,4: salir }
    menu_inventario: {inventario}
    }
// Función para mostrar el menú y ejecutar la opción seleccionada
function menuDeSeleccion(...opciones) {
    console.log(`\n                          ${opciones[0]}`)
    console.log("------------------------------------")
    for (let i = 1; i < opciones.length; i++) {
        console.log(`Ingrese < ${i} > - para ${opciones[i]}`)
        console.log("------------------------------------")
    }
    let eleccion = validarIngreso(opciones);
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
const opciones = ["opciones","ataque", "inventario", "tienda", "salir"]
const eleccion = menuDeSeleccion(...opciones);
opcionesFunciones[eleccion](); // Ejecuta la función correspondiente
