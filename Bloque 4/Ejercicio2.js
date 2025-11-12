/*
7. Contar dígitos de varios números
Entrada:
numeros = [45, 678, 12345]
Proceso:
• Dividir cada número entre 10 y contar iteraciones.
Salida:
45 → 2 dígitos
678 → 3 dígitos
12345 → 5 dígitos
*/
function contarDigitos () {
    let numeros = [];
    let n = parseInt (prompt ("¿Cuántos números desea ingresar?"));

    for (let i = 0; i < n; i++) {
        numeros [i] = parseInt (prompt (`Ingrese número ${i+1}`));
        let contador= 0;
        
        if (numeros[i] === 0) {
            contador = 1;
        } else {
            while (numeros[i] > 0) {
                numeros[i] = Math.floor (numeros[i] / 10);
                contador++;
            }
    alert("Cantidad de dígitos: " + contador);
        }
    }
}
contarDigitos ();