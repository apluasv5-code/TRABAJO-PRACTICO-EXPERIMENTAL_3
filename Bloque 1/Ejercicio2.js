/*
2. Divisores de un número
Descripción:
Mostrar todos los números que dividen exactamente al número ingresado.
Proceso:
1. Recorrer de 1 a n.
2. Si n % i == 0, i es divisor.
Ejemplo:
n = 12
Divisores: 1, 2, 3, 4, 6, 12
Salida:
Divisores: 1, 2, 3, 4, 6, 12
*/
function divisoresDeNumeros () {
    let n = parseInt (prompt ("Ingrese un número: "));
    let divisores = ""
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            divisores += i + " ";
        }
    }
    alert ("Divisores: " + divisores);
}
divisoresDeNumeros ();