/*6. Invertir los dígitos de un número
Descripción:
Mostrar el número al revés.
Proceso:
1. Tomar el último dígito con % 10.
2. Agregarlo al nuevo número multiplicando por 10 cada vez.
3. Dividir el número original entre 10 hasta llegar a 0.
Ejemplo:
n = 1234
Paso 1: tomar 4 → 4
Paso 2: tomar 3 → 43
Paso 3: tomar 2 → 432
Paso 4: tomar 1 → 4321
Salida:
Número invertido: 4321
*/
function invertirNumero () {
    let numero = parseInt (prompt ("Ingrese un número: "));
    let numeroInvertido = 0;

    while (numero > 0) {
        let digito = numero % 10;
        numeroInvertido = numeroInvertido * 10 + digito;
        numero = Math.floor(numero/10);
    }
    alert(`Número invertido: ${numeroInvertido}`);
    
}
invertirNumero ();