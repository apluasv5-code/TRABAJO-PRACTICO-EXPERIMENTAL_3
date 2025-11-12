/*
5. Verificar si un número es primo
Descripción:
Un número primo solo tiene dos divisores: 1 y él mismo.
Proceso:
1. Recorrer del 2 hasta n-1.
2. Si n % i == 0, no es primo.
Ejemplo:
n = 11
Divisores: 1 y 11 → primo
n = 12
Divisores: 1, 2, 3, 4, 6, 12 → no primo
Salida:
11 es un número primo.
*/
function numeroPrimo () {
    let n = parseInt (prompt ("Ingrese un número: "));
    let divisores = 0;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
           divisores ++;
        }
    }
    if (divisores === 0) {
        alert (`${n} es un número primo`);
    } else {
        alert (`${n} NO es un número primo`); 
    }
}
numeroPrimo ();