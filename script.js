// script.js

// Ruta al archivo JSON
const container = document.getElementById('table-container');

const loadJSONData = async () => {
    try {
        // Cargar JSON usando fetch
        const response = await fetch('./Personajes/personajes.json');
        const personajes = await response.json();

        const calcularDanio = (idAtacante, idAtacado) => {
            const atacante = personajes.find(personaje => personaje.id === idAtacante);
            const atacado = personajes.find(personaje => personaje.id === idAtacado);

            if (!atacante || !atacado) {
                console.error('Atacante o atacado no encontrado');
                return;
            }

            // Determinar quién ataca primero según la velocidad
            const primero = atacante.speed >= atacado.speed ? atacante : atacado;
            const segundo = primero === atacante ? atacado : atacante;

            // Calcular daño del primer ataque
            segundo.health -= Math.max(0, primero.damage - segundo.armor);

            // Calcular contraataque si el segundo sigue vivo
            if (segundo.health > 0) {
                primero.health -= Math.max(0, segundo.damage - primero.armor);
            }

            console.log(`Salud final del atacante (${atacante.name}): ${atacante.health}`);
            console.log(`Salud final del atacado (${atacado.name}): ${atacado.health}`);
        };

        // Ejemplo de uso
        calcularDanio(0, 1); // Reemplaza 0 y 1 con los IDs reales de los personajes

    } catch (error) {
        console.error("Error al cargar el archivo JSON:", error);
    }
};

// Cargar los datos al iniciar
loadJSONData();
