/*
3. Suma de los divisores de un número
Descripción:
Calcular la suma total de los divisores positivos de un número.
Proceso:
1. Encontrar los divisores (como en el ejercicio anterior).
2. Acumularlos en una variable suma.
Ejemplo:
Divisores de 12 = 1 + 2 + 3 + 4 + 6 + 12 = 28
Salida:
Suma de divisores: 28
*/
function sumaDivisores () {
    let n = parseInt (prompt ("Ingrese un número: "));
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            suma += i;
        }
    }
    alert ("Suma de divisores: " + suma);
}
sumaDivisores ();