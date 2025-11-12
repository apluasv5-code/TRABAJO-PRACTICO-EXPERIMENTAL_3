/*
10. Restas sucesivas
Descripción:
Restar un número de manera repetitiva hasta llegar a 0 o menor.
Proceso:
1. Restar el valor dado en cada ciclo.
2. Contar el número de restas necesarias.
Ejemplo:
Número = 15, Valor = 4
15 − 4 − 4 − 4 = 3
Salida:
Resultado final: 3
*/
function restasSucesivas () {
    let numero = parseInt (prompt ("Ingrese un número: "));
    let valor = parseInt (prompt ("Ingrese el valor a restar: "));

    while (numero-valor > 0) {
        numero -= valor;
    }
    alert (`Resultado final = ${numero}`);
}
restasSucesivas ();