/*
4. Verificar si un número es perfecto
Descripción:
Un número es perfecto si la suma de sus divisores (sin incluir él mismo) es igual al número.
Proceso:
1. Calcular los divisores hasta n - 1.
2. Sumar esos valores.
3. Comparar con n.
Ejemplo:
n = 6
Divisores (sin incluir 6): 1 + 2 + 3 = 6
→ 6 es un número perfecto.
Salida:
6 es un número perfecto.
*/
function perfecto () {
    let n = parseInt (prompt ("Ingrese un número: "));
    let suma = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            suma += i;
        }
    }
    if (n === suma){
            alert (`${n}, es un número perfecto`);
        } else {
            alert (`${n}, NO es un número perfecto`);
        } 
}
perfecto ();