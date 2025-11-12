/*
9. Sumas sucesivas
Descripción:
Realizar sumas sucesivas de un número.
Proceso:
1. Repetir una suma tantas veces como indique el usuario.
2. Acumular el resultado.
Ejemplo:
Número = 3, Veces = 4
3 + 3 + 3 + 3 = 12
Salida:
Resultado = 12
*/
function sumaSucesivas () {
    let numero = parseFloat (prompt ("Ingrese un número: "));
    let n = parseInt (prompt ("¿Cuántas veces desea repetir la suma?"));
    let suma = 0;

    for (let i = 0; i < n; i++) {
        suma += numero;
    }
    alert (`Resultado = ${suma}`);
}
sumaSucesivas ();