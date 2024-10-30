"""
Enemigos = {
    "Goblin": {"salud": 3, "daño": 2, "armadura": 1},
    "Espectro": {"salud": 2, "daño": 3, "armadura": 1},
    "Orco": {"salud": 4, "daño": 3, "armadura": 2},
}
Player = {
    "salud": 20,
    "daño": 2,
    "armadura": 0
}
Tienda = {
    "Pociones": {"salud": {"Pequeña Roja": (20, "salud"), "Mediana Roja": (30, "salud")}}
}

def secuencia_de_combate(jugador, enemigo_a, enemigo_b, enemigo_c):
def secuencia_de_seleccion_de_objetivo(*campo_de_batalla):
def secuencia_de_oleadas(oleada):
def secuencia_de_drops(asesinatos):
def secuencia_de_inventario(inventario):
def secuencia_de_asesinatos(enemigo_asesinado):
def secuencia_de_turno()
def secuencia_de_tienda(monedas)
"""

def menu_de_seleccion(*opciones):
    print("\n                          Opciones")
    print("------------------------------------")
    for i in range(len(opciones)):
        print(f"Ingrese < {i} > - para {opciones[i]}")
        print("------------------------------------")
    eleccion = input("Ingrese su elección: ")
    return eleccion

opciones = ["ataque","inventario","tienda"]
jorge = menu_de_seleccion(*opciones)



"""
campo_de_batalla = [] #acá van a ir siempre los personajes que esten en el campo de batalla
oleada = 0 #número de oleada
asesinatos = 0 #cantidad de enemigos asesinados
inventario = {} #acá para almacenar cositas
monedas = 0 #se consiguen de los drops
"""

