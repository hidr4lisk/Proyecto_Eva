// Variables para la animación
const animationImages = [
    "images/image1.png", // Padre contando el cuento
    "images/image2.png", // Niña despidiéndose
    "images/image3.png", // Padre en primer plano
    "images/image4.png"  // Padre desenfundando la espada
];

let currentImageIndex = 0;
const animationDuration = 2000; // Duración de cada imagen en milisegundos

// Función para iniciar la animación
function startAnimation() {
    const animationElement = document.getElementById("animation");
    
    // Cambia la imagen en intervalos
    const animationInterval = setInterval(() => {
        animationElement.src = animationImages[currentImageIndex];
        currentImageIndex++;

        // Si llegamos al final de las imágenes
        if (currentImageIndex >= animationImages.length) {
            clearInterval(animationInterval);
            // Asegurarse de mostrar la última imagen antes de iniciar el juego
            animationElement.src = animationImages[animationImages.length - 1];
            // Aquí puedes llamar a la función para iniciar el juego
            setTimeout(startGame, 1000); // Espera un segundo para mostrar la última imagen
        }
    }, animationDuration);
}

// Función para iniciar el juego
function startGame() {
    // Aquí puedes ocultar la animación y mostrar el juego
    document.getElementById("game-container").style.display = "none"; // Oculta la animación
    // Aquí puedes añadir el código para iniciar el juego
    console.log("El juego ha comenzado!"); // Mensaje de prueba
}

// Iniciar la animación al cargar la página
window.onload = startAnimation;
