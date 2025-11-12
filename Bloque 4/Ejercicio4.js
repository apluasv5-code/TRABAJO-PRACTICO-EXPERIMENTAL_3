/*
9. Sumas sucesivas en una lista
Entrada:
numeros = [2, 3, 4]
veces = 4
Proceso:
• Repetir la suma de cada número veces veces.
Salida:
2 × 4 = 8
3 × 4 = 12
4 × 4 = 16
*/
function factorialArreglo () {
    let numeros = [];
    let n = parseInt (prompt ("¿Cuántos números desea ingresar?"));
    
    for (let i = 0; i < n; i++) {
        numeros [i] = parseInt (prompt (`Ingrese número ${i+1}`));
        let veces = parseInt (prompt ("¿Cuántas veces desea repetir la suma?"));
        let resultado = 0;
        for (let j = 0; j < veces ; j++) {
            resultado = numeros [i] * veces;
        }
        alert (`Resultado = ${resultado}`);

    }
}
factorialArreglo ();