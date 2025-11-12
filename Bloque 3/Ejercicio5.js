/* 
5. Números primos en una lista
Entrada:
numeros = [5, 6, 7, 8, 11]
Proceso:
• Verificar si cada número solo tiene dos divisores.
Salida:
Primos: 5, 7, 11
*/
function numerosPrimos () {
    let numeros = [];
    let n = parseInt (prompt ("¿Cuántos números desea ingresar?"));

    for (let i = 0; i < n; i++) {
        numeros [i] = parseInt (prompt (`Ingrese número ${i+1}`));
        let divisores= 0;
        for (let j = 2; j < numeros[i]; j++) {
            if (numeros[i] % j === 0) {
                divisores ++;
            }
        }
        if (divisores === 0) {
            alert (`${numeros[i]} es un número primo`);
        } else {
            alert (`${numeros[i]} NO es un número primo`); 
        }
    }
}
numerosPrimos ();
