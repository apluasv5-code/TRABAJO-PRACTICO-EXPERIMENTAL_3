/*
4. Números perfectos en una lista
Entrada:
numeros = [6, 10, 28, 30]
Proceso:
• Comparar cada número con la suma de sus divisores.
Salida:
Números perfectos: 6, 28
*/
function numerosPerfectos () {
    let numeros = [];
    let n = parseInt (prompt ("¿Cuántos números desea ingresar?"));

    for (let i = 0; i < n; i++) {
        numeros [i] = parseInt (prompt (`Ingrese número ${i+1}`));
        let suma = 0;
        for (let j = 1; j < numeros[i]; j++) {
            if (numeros[i] % j === 0) {
                suma += j;
            }
        }
        if (numeros [i] === suma){
                alert (`${numeros[i]}, es un número perfecto`);
            } else {
                alert (`${numeros[i]}, NO es un número perfecto`);
            } 
        }
}
numerosPerfectos ();