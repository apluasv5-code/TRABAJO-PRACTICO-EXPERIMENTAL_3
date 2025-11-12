/*
10. Restas sucesivas en una lista
Entrada:
numeros = [15, 22, 30]
valor_resta = 4
Proceso:
• Restar repetidamente hasta que el resultado sea menor que el valor restado.
Salida:
15 → 3
22 → 2
30 → 2
*/
function restasSucesivas () {
    let numeros = [];
    let n = parseInt (prompt ("¿Cuántos números desea ingresar?"));
    
    for (let i = 0; i < n; i++) {
        numeros [i] = parseInt (prompt (`Ingrese número ${i+1}: `));
        let valor = parseInt (prompt ("Ingrese el valor a restar: "));
        while (numeros[i] - valor > 0) {
        numeros[i] -= valor;
    }
    alert (`Resultado final = ${numeros[i]}`);
    }
}
restasSucesivas ();