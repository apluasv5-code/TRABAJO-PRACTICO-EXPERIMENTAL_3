/*
1. Serie de Fibonacci para varios términos
Entrada:
n_valores = [5, 8, 10]
Proceso:
• Para cada n, generar la serie.
• Usar un ciclo que sume los dos anteriores.
Salida:
Fibonacci(5): 0, 1, 1, 2, 3
Fibonacci(8): 0, 1, 1, 2, 3, 5, 8, 13
Fibonacci(10): 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
*/
function fibonacciArreglo () {
    let valores = [];
    let n = parseInt (prompt ("¿Cuántos valores dese ingresar?"));
    for (let i = 0; i < n; i++) {
        let num = parseInt (prompt (`Ingrese el número ${i+1}`));
        valores.push (num);
        let a = 0;
        let b = 1;
        let c = 0;
        let serie = "";
        
        for (let j = 0; j < valores[i]; j++) {
            serie += a + " ";
            c = a + b;
            a = b;
            b = c;
        }
        alert (`Fibonacci (${valores[i]}): ${serie}`);
    }
    
    
}
fibonacciArreglo ();