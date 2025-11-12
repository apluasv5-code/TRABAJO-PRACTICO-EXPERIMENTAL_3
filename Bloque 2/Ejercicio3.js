/*
8. Factorial de un número
Descripción:
Calcular el producto de todos los enteros desde 1 hasta n.
Proceso:
1. Iniciar fact = 1.
2. Multiplicar en cada paso fact = fact × i.
3. Repetir hasta i = n.
Ejemplo paso a paso:
5! = 5 × 4 × 3 × 2 × 1 = 120
Salida:
5! = 120
*/
function factorialNumero () {
    let n = parseInt (prompt ("Ingrese un número: "));
    let factorial = 1;

    for (let i = 1; i <= n; i++) {
        factorial =  factorial * i;
    }
    alert (` ${n}! = ${factorial}`);
}
factorialNumero ();