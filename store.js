function openStore() {
    // Mostrar mejoras disponibles
}
function buyUpgrade(upgrade) {
    if (player.coins >= upgrade.cost) {
        player.coins -= upgrade.cost;
        player[upgrade.stat] += upgrade.amount; // Aumentar la estadística correspondiente
    }
}
