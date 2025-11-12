/*
8. Factorial de varios números
Entrada:
numeros = [3, 4, 5]
Proceso:
• Multiplicar valores consecutivos hasta n.
Ejemplo:
5! = 5 × 4 × 3 × 2 × 1 = 120
Salida:
3! = 6
4! = 24
5! = 120
*/
function factorialArreglo () {
    let numeros = [];
    let n = parseInt (prompt ("¿Cuántos números desea ingresar?"));

    for (let i = 0; i < n; i++) {
        numeros [i] = parseInt (prompt (`Ingrese número ${i+1}`));
        let factorial = 1
        for (let j = 1; j <= numeros[i]; j++) {
            factorial =  factorial * j;
        }
    alert (` ${numeros[i]}! = ${factorial}`);
    }
    
}
factorialArreglo ();