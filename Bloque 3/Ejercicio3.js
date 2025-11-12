/*
3. Suma de divisores de varios números
Entrada:
numeros = [6, 12, 28]
Proceso:
• Calcular los divisores y sumarlos para cada número.
Salida:
6 → 12
12 → 28
28 → 56
*/
function sumaDivisores () {
    let numeros = [];
    let n = parseInt (prompt ("¿Cuántos números desea ingresar?"));

    for (let i = 0; i < n; i++) {
        numeros [i] = parseInt (prompt (`Ingrese número ${i+1}`));
        let suma = 0;
        for (let j = 1; j <= numeros[i]; j++) {
            if (numeros[i] % j === 0) {
            suma += j;
            }
        }
        alert ("Suma de divisores: " + suma);
    }
}
sumaDivisores ();