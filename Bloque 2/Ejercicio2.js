/*
7. Contar dígitos de un número
Descripción:
Determinar cuántos dígitos tiene un número entero.
Proceso:
1. Mientras n > 0, dividir entre 10 y aumentar un contador.
Ejemplo:
n = 9876
Iteraciones: 9876 → 987 → 98 → 9 → 0
→ Cantidad de dígitos: 4
Salida:
Cantidad de dígitos: 4
*/
function contarDigitos () {
    let n = parseInt (prompt ("Ingrese un número: "));
    let contador = 0;

    if (n === 0) {
        contador = 1;
    } else {
        while (n > 0) {
        n = Math.floor (n / 10);
        contador++;
    }
    alert("Cantidad de dígitos: " + contador);
    }
}
contarDigitos ();