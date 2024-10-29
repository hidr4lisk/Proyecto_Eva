function combat(player, enemy) {
    // Lógica de combate
    while (player.health > 0 && enemy.health > 0) {
        enemy.health -= player.damage - enemy.armor; // Ajustar el daño
        if (enemy.health <= 0) {
            // El enemigo fue derrotado
            return true; // victoria
        }
        player.health -= enemy.damage - player.armor; // Ajustar el daño
    }
    return false; // derrota
}
function spawnWave(waveNumber) {
    // Generar monstruos según la oleada
    // Al tercer número, generar un jefe
}
function giveReward(enemy) {
    const coins = Math.floor(Math.random() * 100); // Ejemplo de monedas aleatorias
    player.coins += coins;
}
