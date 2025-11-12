/*
2. Divisores de varios números
Entrada:
numeros = [6, 10, 15]
Proceso:
• Recorrer cada número y calcular sus divisores.
Salida:
6 → 1, 2, 3, 6
10 → 1, 2, 5, 10
15 → 1, 3, 5, 15
*/
function divisoresArreglo () {
    let numeros = [];
    let n = parseInt (prompt ("¿Cuántos valores deseas ingresar?"));
    
    for (let i = 0; i < n; i++) {
        numeros [i] = parseInt (prompt(`Ingrese número: ${i+1}`));
        let divisores = ""
        for (let j = 1; j <= numeros [i]; j++) {
            if (numeros[i] % j === 0) {
                divisores += j + " ";
            }
        }
    alert ("Divisores: " + divisores);
    }
}
divisoresArreglo ();