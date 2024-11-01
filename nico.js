const PRODUCTOS = {
    manzanas: 10,
    leche: 2,
    pan: 1,
    huevos: 12,
    arroz: 5
}

const MENU = {
    1: 'Listar productos',
    2: 'Modificar cantidad de un producto',
    3: 'Eliminar productos',
    4: 'Ver producto',
    5: 'Agregar producto',
    6: 'Salir'
}

function verificarExistenciaDelProducto(producto, mostrarMsj = true) {
    if (producto === '') return false
    if (!PRODUCTOS[producto.toLowerCase()]) {
        if (mostrarMsj) console.log('No existe el producto')
        return false
    }
    return true
}

function mostrarMenu() {
    console.log('Menu:')
    Object.entries(MENU).forEach(([item, opcion]) => {
        console.log(`${item}: ${opcion}`)
    })
}

function pedirNumeroAcotado(mensaje, opcMin, opcMax) {
    let opcion = prompt(mensaje)
    while (!(opcion && !isNaN(opcion) && opcMin < parseInt(opcion) <= opcMax)) {
        console.log('Número inválido, vuelva a ingresar uno diferente')
        opcion = prompt(mensaje)
    }
    return parseInt(opcion)
}

function pedirInfoConConfirmacion(msj) {
    let validacion = false
    let respuesta = ''
    while (!validacion) {
        respuesta = prompt(msj)
        const aux = pedirNumeroAcotado(`Ingreso: ${respuesta}, ¿estás seguro?\n1 - Afirmativo.\n2 - Volver a ingresar.\n3 - Salir.\nOpción: `, 0, 3)
        if (aux === 1 || aux === 3) validacion = true
        if (aux === 3) respuesta = ''
    }
    return respuesta
}

function listarProductos() {
    console.log('Listado de productos')
    Object.entries(PRODUCTOS).forEach(([producto, cantidad]) => {
        console.log(`${producto[0].toUpperCase() + producto.slice(1)}: ${cantidad} unidad/es`)
    })
}

function verificarNegativo(nro) {
    return nro.startsWith('-') && !isNaN(nro.slice(1))
}

function pedirNro(msj, permitirNegativo = false) {
    let cantidad
    while (true) {
        cantidad = prompt(msj)
        if ((permitirNegativo && verificarNegativo(cantidad)) || !isNaN(cantidad)) break
        console.log('Número inválido, intente nuevamente')
    }
    return parseInt(cantidad)
}

function modificarInventario() {
    console.log('Modificación de inventario')
    const producto = pedirInfoConConfirmacion('Ingrese el nombre del producto: ')
    if (!verificarExistenciaDelProducto(producto)) return
    const cantidad = pedirNro('Ingrese la cantidad (número negativo restará): ', true)
    if (PRODUCTOS[producto] + cantidad < 0) {
        console.log('No hay suficiente stock')
    } else {
        PRODUCTOS[producto] += cantidad
        console.log(`El nuevo stock de ${producto[0].toUpperCase() + producto.slice(1)} es: ${PRODUCTOS[producto]}`)
    }
}

function eliminarProducto() {
    console.log('Eliminar producto')
    const producto = pedirInfoConConfirmacion('Ingrese el nombre del producto: ')
    if (!verificarExistenciaDelProducto(producto)) return
    console.log(`El producto ${producto} fue eliminado`)
    delete PRODUCTOS[producto]
}

function verProducto() {
    console.log('Ver inventario')
    const producto = prompt('Ingrese el nombre del producto: ')
    if (!verificarExistenciaDelProducto(producto)) return
    console.log(`La cantidad de ${producto[0].toUpperCase() + producto.slice(1)} es: ${PRODUCTOS[producto]}`)
}

function agregarProducto() {
    console.log('Agregar producto')
    const producto = pedirInfoConConfirmacion('Ingrese el nombre del producto: ')
    if (verificarExistenciaDelProducto(producto, false)) {
        console.log('Producto ya existente.')
        return
    }
    const cantidad = pedirNro('Ingrese la cantidad del producto: ')
    PRODUCTOS[producto.toLowerCase()] = cantidad
}

function main() {
    while (true) {
        mostrarMenu()
        const opcion = pedirNumeroAcotado('Elija una opción del Menu: ', 0, Object.keys(MENU).length)
        console.log('')
        if (opcion === 1) listarProductos()
        if (opcion === 2) modificarInventario()
        if (opcion === 3) eliminarProducto()
        if (opcion === 4) verProducto()
        if (opcion === 5) agregarProducto()
        if (opcion === 6) {
            console.log('Hasta pronto')
            break
        }
    }
}

main()
