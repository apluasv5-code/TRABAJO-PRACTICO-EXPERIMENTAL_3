/*
1. Serie de Fibonacci
Descripción:
Generar los primeros n términos de la serie de Fibonacci, donde cada término se obtiene
sumando los dos anteriores.
Proceso:
1. Comenzar con 0 y 1.
2. Cada nuevo valor se calcula: nuevo = anterior + actual.
3. Repetir hasta obtener n términos.
Ejemplo paso a paso:
0, 1 → 1
1, 1 → 2
1, 2 → 3
2, 3 → 5
3, 5 → 8
Entrada:
n = 8
Salida:
Serie: 0, 1, 1, 2, 3, 5, 8, 13
*/

function fibonacci () {
    let a = 0;
    let b = 1;
    let c = 0;
    let serie = "";
    let n = parseInt (prompt ("Ingrese cuantos terminos desea: "));
    for (let i = 0; i < n; i++) {
        serie += a + " ";
        c = a + b;
        a = b;
        b = c;
    }
    alert ("Serie: " + serie);

}
fibonacci ();